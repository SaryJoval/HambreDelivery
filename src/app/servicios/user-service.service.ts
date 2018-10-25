import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Usuario} from '../classes/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserServiceService {
  private usuarioUrl = 'http://localhost:9006/usuario';  // URL to web API
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  create(customer: Usuario): Promise<Usuario> {
    customer.tusUsuId = 1;
    customer.usuId = 3;
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
