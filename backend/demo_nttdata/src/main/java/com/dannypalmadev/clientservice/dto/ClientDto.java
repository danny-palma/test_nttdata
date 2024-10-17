/**
 * -------------------------------------------------------------------
 *?Archivo: ClientDto.java
 *?Autor: Daniel Alejandro Palma Garcia
 *?Correo: dannypalmadev@gmail.com
 *?Fecha: Octubre 2024
 *?Empresa: NTT Data
 *
 *?Descripción:
 * Este archivo define el Data Transfer Object (DTO) para el cliente.
 * El DTO se utiliza para transferir datos de manera eficiente entre
 * las diferentes capas de la aplicación, encapsulando los atributos
 * básicos del cliente, tales como el primer nombre, apellido y ciudad
 * de residencia.
 * 
 * El uso de un DTO evita exponer directamente el modelo Client y
 * permite adaptar la estructura de los datos según las necesidades
 * del sistema.
 * -------------------------------------------------------------------
 */

package com.dannypalmadev.clientservice.dto;

import lombok.Data;

@Data
public class ClientDto {
  private String firstName;
  private String lastName;
  private String cityOfResidence;
  private String phone;
  private String address;
}