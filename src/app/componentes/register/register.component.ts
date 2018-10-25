import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../classes/usuario';
import {UserServiceService} from '../../servicios/user-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario = new Usuario;
  submitted = false;

  constructor(private userServiceService: UserServiceService, private location: Location) {}

  ngOnInit() {
  }

  newUsuario(): void{
    this.submitted = false;
    this.usuario = new Usuario();
  }

  private save():void{
    this.userServiceService.create(this.usuario);
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  goBack():void {
    this.location.back();
  }
}
