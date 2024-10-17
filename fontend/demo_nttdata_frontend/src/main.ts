/**
 * -------------------------------------------------------------------
 *?Archivo: main.ts
 *?Autor: Daniel Alejandro Palma Garcia
 *?Correo: danielpalma2003@hotmail.com
 *?Fecha: Octubre 2024
 *?Empresa: NTT Data
 *
 *?Descripción:
 * Este archivo es el punto de entrada principal para la aplicación Angular.
 * Se encarga de inicializar la aplicación Angular usando el módulo
 * principal `AppModule`.
 *
 * - `platformBrowserDynamic()`: Plataforma Angular para aplicaciones web.
 * - `bootstrapModule(AppModule)`: Inicializa la aplicación con el módulo principal.
 * - Manejo de errores: Si ocurre algún error durante la inicialización, se captura
 *   y se registra en la consola.
 * -------------------------------------------------------------------
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '@/app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
