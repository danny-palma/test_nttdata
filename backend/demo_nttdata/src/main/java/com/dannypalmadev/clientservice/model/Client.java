/**
 * -------------------------------------------------------------------
 *?Archivo: Client.java
 *?Autor: Daniel Alejandro Palma Garcia
 *?Correo: dannypalmadev@gmail.com
 *?Fecha: Octubre 2024
 *?Empresa: NTT Data
 *
 *?Descripción:
 * Este archivo define el modelo de datos "Client", que representa la
 * información de un cliente dentro del sistema. Este modelo incluye
 * atributos como tipo de identificación, número de documento, nombre,
 * apellido, teléfono, dirección y ciudad de residencia.
 * 
 * Se utiliza para almacenar la información básica del cliente y es
 * utilizado por otras capas de la aplicación para manejar operaciones
 * relacionadas con los clientes.
 * -------------------------------------------------------------------
 */

package com.dannypalmadev.clientservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Client {
  private String documentType; // Tipo de documento (c, p)
  private String documentNumber; // Número de documento
  private String firstName;
  private String middleName;
  private String lastName;
  private String secondLastName;
  private String phone;
  private String address;
  private String cityOfResidence;
}
