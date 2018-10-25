import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
import {Usuario} from '../classes/usuario';

@Injectable()
export class UserServiceService {
  private usuarioUrl = 'http://localhost:9006/usuario';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  create(customer: Usuario): Promise<Usuario> {
    return this.http
      .post("postusuario", JSON.stringify(customer), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Usuario)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // para manejar errores
    return Promise.reject(error.message || error);
  }
}
