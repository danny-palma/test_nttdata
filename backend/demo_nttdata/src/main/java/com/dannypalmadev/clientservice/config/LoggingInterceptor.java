/**
 * -------------------------------------------------------------------
 *?Archivo: LoggingInterceptor.java
 *?Autor: Daniel Alejandro Palma Garcia
 *?Correo: dannypalmadev@gmail.com
 *?Fecha: Octubre 2024
 *?Empresa: NTT Data
 *
 *?Descripción:
 * Esta clase define un interceptor para el manejo de las solicitudes 
 * y respuestas HTTP en la aplicación. Implementa la interfaz 
 * HandlerInterceptor para interceptar las peticiones entrantes y 
 * salientes.
 * 
 * En el método preHandle, se registran los detalles de la solicitud 
 * entrante, como el método HTTP, la URI solicitada y la dirección 
 * IP del cliente. También se guarda el tiempo de inicio para medir 
 * la duración de la respuesta.
 * 
 * En el método afterCompletion, se registran los detalles de la 
 * respuesta saliente y se calcula el tiempo que tomó procesar 
 * la solicitud. Si ocurre alguna excepción durante el manejo 
 * de la solicitud, se registra el mensaje de error correspondiente.
 * -------------------------------------------------------------------
 */

package com.dannypalmadev.clientservice.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class LoggingInterceptor implements HandlerInterceptor {

  private static final Logger logger = LoggerFactory.getLogger(LoggingInterceptor.class);

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    // Log para las peticiones entrantes
    logger.info("Incoming Request: {} {} | Remote Address: {}", request.getMethod(), request.getRequestURI(),
        request.getRemoteAddr());
    // Guarda cuando se inicia la peticion
    request.setAttribute("startTime", System.currentTimeMillis());
    return true;
  }

  @Override
  public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
      @Nullable Exception ex) throws Exception {
    // Log para las peticiones salientes
    logger.info("Outgoing Response: {} | Status: {}", request.getRequestURI(), response.getStatus());

    // Calcula y hace log al tiempo requerido
    long startTime = (Long) request.getAttribute("startTime");
    long duration = System.currentTimeMillis() - startTime;
    logger.info("Response Time: {} ms", duration);

    // Log si alguna exepcion ocurrio
    if (ex != null) {
      logger.error("Exception: {}", ex.getMessage(), ex);
    }
  }
}
