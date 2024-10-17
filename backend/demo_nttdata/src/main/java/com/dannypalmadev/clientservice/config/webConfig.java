/**
 * -------------------------------------------------------------------
 *?Archivo: webConfig.java
 *?Autor: Daniel Alejandro Palma Garcia
 *?Correo: dannypalmadev@gmail.com
 *?Fecha: Octubre 2024
 *?Empresa: NTT Data
 *
 *?Descripción:
 * Esta clase configura la aplicación web para el manejo de interceptores.
 * En particular, registra el interceptor de logging (LoggingInterceptor) 
 * que se encarga de registrar las solicitudes y respuestas HTTP.
 * 
 * La clase utiliza la interfaz WebMvcConfigurer para agregar 
 * configuraciones personalizadas a la aplicación web.
 * -------------------------------------------------------------------
 */

package com.dannypalmadev.clientservice.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class webConfig implements WebMvcConfigurer {

  @Autowired
  private LoggingInterceptor loggingInterceptor;

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(loggingInterceptor);
  }
}
