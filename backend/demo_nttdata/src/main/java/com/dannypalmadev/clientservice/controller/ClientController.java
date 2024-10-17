/**
 * -------------------------------------------------------------------
 *?Archivo: ClientController.java
 *?Autor: Daniel Alejandro Palma Garcia
 *?Correo: dannypalmadev@gmail.com
 *?Fecha: Octubre 2024
 *?Empresa: NTT Data
 *
 *?Descripción:
 * Este archivo define el controlador REST de clientes. Proporciona
 * un endpoint que permite a los usuarios consultar información básica
 * de un cliente utilizando el tipo de identificación y número de 
 * documento como parámetros.
 * 
 * La clase ClientController maneja las solicitudes HTTP GET en la ruta
 * "/api/clients/query", delegando la lógica de negocio al servicio de
 * clientes (ClientService).
 * 
 * Si se encuentra un cliente, retorna un DTO con la información
 * relevante, en caso contrario retorna un error 404, 400 o 500 en caso
 * de que ocurra un error inesperado.
 * -------------------------------------------------------------------
 */

package com.dannypalmadev.clientservice.controller;

import com.dannypalmadev.clientservice.dto.ClientDto;
import com.dannypalmadev.clientservice.service.ClientService;

import jakarta.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class ClientController {

  private final ClientService clientService;
  private static final Logger logger = LoggerFactory.getLogger(ClientController.class);

  public ClientController(ClientService clientService) {
    this.clientService = clientService;
  }

  @GetMapping("/api/clients/query")
  public ResponseEntity<Object> getClient(
      @RequestParam String documentType,
      @RequestParam String documentNumber,
      HttpServletRequest request) {

    // Sanitizacion de los inputs
    documentType = documentType.trim().toLowerCase();
    documentNumber = documentNumber.trim().toLowerCase();

    // valida los inputs sanitizados
    if (documentType.length() != 1 ||
        !Character.isLetter(documentType.charAt(0)) ||
        documentNumber.isEmpty() ||
        documentNumber.length() > 11 ||
        documentNumber.length() < 8 ||
        !documentNumber.matches("\\d+")) {

      String clientIp = request.getRemoteAddr(); // Obtiene la IP del cliente
      logger.warn("Malformed request from IP: {} - Document type: {}, Document number: {}",
          clientIp, documentType, documentNumber); // Registra la advertencia
      // Respuesta si la peticion esta malformada
      return ResponseEntity.badRequest()
          .body("Document type must be a single letter, and document number must be a numeric value of up to 11 digits and greater than 8 characters.");
    }

    try {
      Optional<ClientDto> clientOpt = clientService.getClientByDocument(documentType, documentNumber);

      // Responde con 200 si la peticion esta ok, en caso contrario responde con 404
      // si no se encuentra
      // message
      return clientOpt
          .<ResponseEntity<Object>>map(ResponseEntity::ok)
          .orElseGet(() -> ResponseEntity.status(404).body("Client not found."));

    } catch (Exception e) {
      // Captura las exepciones y responde con un estatus 500
      return ResponseEntity.status(500).body("An internal error occurred: " + e.getMessage());
    }
  }
}
