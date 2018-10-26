import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Usuario} from '../classes/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserServiceService {
  private usuarioUrl = 'http://localhost:9006/usuario/crear';  // URL to web API
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  create(customer: Usuario): Promise<Usuario> {
    customer.adminId = 1;
    customer.passwordAdmin = '1234';
    customer.tipoUser = 1;

    return this.http
      .post(this.usuarioUrl, JSON.stringify(customer), {headers : this.headers, observe: 'response'})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // para manejar errores
    return Promise.reject(error.message || error);
  }
}
