/**
 * -------------------------------------------------------------------
 *?Archivo: client.service.ts
 *?Autor: Daniel Alejandro Palma Garcia
 *?Correo: danielpalma2003@hotmail.com
 *?Fecha: Octubre 2024
 *?Empresa: NTT Data
 *
 *?Descripción:
 * Este archivo define el servicio `ClientService`, el cual se encarga de
 * interactuar con la API del backend para obtener datos de clientes.
 * Utiliza HttpClient para realizar solicitudes HTTP y maneja errores
 * que puedan surgir durante la comunicación con la API.
 *
 *?Métodos:
 * - `getClientData(documentType: string, documentNumber: string)`:
 *   Realiza una solicitud GET a la API para obtener la información de un cliente
 *   basado en el tipo y número de documento. Retorna un Observable.
 *
 * - `handleError(error: HttpErrorResponse)`:
 *   Maneja los errores de las solicitudes HTTP, proporcionando mensajes
 *   específicos para errores 404 (No encontrado) y 500 (Error del servidor).
 * -------------------------------------------------------------------
 */


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'http://localhost:8090/api/clients/query';

  constructor(private http: HttpClient) {}

  getClientData(documentType: string, documentNumber: string): Observable<any> {
    return this.http
      .get(
        `${this.apiUrl}?documentType=${documentType}&documentNumber=${documentNumber}`
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.status === 404) {
      errorMessage = 'Client not found';
    } else if (error.status === 500) {
      errorMessage = 'Server error';
    }
    return throwError(errorMessage);
  }
}
