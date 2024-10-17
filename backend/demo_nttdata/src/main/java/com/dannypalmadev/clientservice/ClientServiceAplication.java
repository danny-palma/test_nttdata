/**
 * -------------------------------------------------------------------
 *?Archivo: ClientServiceApplication.java
 *?Autor: Daniel Alejandro Palma Garcia
 *?Correo: dannypalmadev@gmail.com
 *?Fecha: Octubre 2024
 *?Empresa: NTT Data
 *
 *?Descripción:
 * Este archivo es el punto de entrada de la aplicación Spring Boot.
 * Inicia la aplicación y configura el entorno para que pueda manejar
 * solicitudes web.
 * 
 * Esta clase inicializa el contexto de la aplicación Spring Boot y 
 * pone en marcha el servidor embebido de Tomcat en el puerto configurado.
 * -------------------------------------------------------------------
 */

package com.dannypalmadev.clientservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ClientServiceAplication {
  public static void main(String[] args) {
    SpringApplication.run(ClientServiceAplication.class, args);
  }
}
