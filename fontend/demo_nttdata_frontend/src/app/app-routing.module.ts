/**
 * -------------------------------------------------------------------
 *?Archivo: app-routing.module.ts
 *?Autor: Daniel Alejandro Palma Garcia
 *?Correo: danielpalma2003@hotmail.com
 *?Fecha: Octubre 2024
 *?Empresa: NTT Data
 *
 *?Descripción:
 * Este archivo define el módulo de enrutamiento para la aplicación Angular.
 * Se encarga de configurar las rutas y módulos que se cargarán de manera
 * perezosa (lazy loading).
 *
 * - `Routes`: Tipo que define un conjunto de rutas.
 * - La ruta principal ('') carga de manera perezosa el módulo `ClientModule`.
 * - Cualquier ruta desconocida ('**') redirige automáticamente a la ruta principal.
 *
 * Este módulo es esencial para la navegación entre diferentes secciones
 * de la aplicación, mejorando la organización y eficiencia.
 * -------------------------------------------------------------------
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/client/client.module').then((m) => m.ClientModule),
  },
  { path: '**', redirectTo: '' }, // Cualquier ruta desconocida redirige a la principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
