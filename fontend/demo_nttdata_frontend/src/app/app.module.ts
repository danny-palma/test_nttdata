/**
 * -------------------------------------------------------------------
 *?Archivo: app.module.ts
 *?Autor: Daniel Alejandro Palma Garcia
 *?Correo: danielpalma2003@hotmail.com
 *?Fecha: Octubre 2024
 *?Empresa: NTT Data
 *
 *?Descripción:
 * Este archivo define el módulo principal de la aplicación Angular.
 * El `AppModule` es el módulo raíz que contiene las configuraciones
 * esenciales de la aplicación, incluyendo la declaración de componentes,
 * módulos importados y el componente que se inicializa.
 *
 * - `declarations`: Lista de componentes que pertenecen a este módulo.
 * - `imports`: Módulos externos que se utilizan en la aplicación,
 *   incluyendo `BrowserModule`, `AppRoutingModule` y `ClientModule`.
 * - `providers`: Servicios que estarán disponibles para la inyección
 *   de dependencias en toda la aplicación (vacío en este caso).
 * - `bootstrap`: Indica el componente raíz que se inicializará al
 *   arrancar la aplicación (en este caso, `AppComponent`).
 * -------------------------------------------------------------------
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@/app/app-routing.module';
import { AppComponent } from '@/app/app.component';
import { HttpClientModule } from "@angular/common/http";
import { ClientModule } from '@/app/features/client/client.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientModule, // Importamos el módulo del cliente
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
