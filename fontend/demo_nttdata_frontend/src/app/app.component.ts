/**
 * -------------------------------------------------------------------
 *?Archivo: app.component.ts
 *?Autor: Daniel Alejandro Palma Garcia
 *?Correo: danielpalma2003@hotmail.com
 *?Fecha: Octubre 2024
 *?Empresa: NTT Data
 *
 *?Descripción:
 * Este archivo define el componente principal de la aplicación Angular,
 * que se utiliza como el punto de entrada de la interfaz de usuario.
 *
 * La clase `AppComponent` contiene una propiedad `title` que se puede utilizar
 * en la plantilla para mostrar el título de la aplicación.
 * -------------------------------------------------------------------
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Client Information App';
}
