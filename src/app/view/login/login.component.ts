import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { LoginIn } from '../../models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  onLogin(){
    const { usuario, password } = this.loginForm.value;
    console.log('usuario',usuario);
    console.log('password',password);
   /* if (usuario && password) {
      const loginData: LoginIn = { usuario, password };
      this.api.loginByEmail(loginData).subscribe(data => {
        console.log(data);
      });
    } else {
      // Mostrar un mensaje de error si es necesario
      console.warn('Formulario incompleto');
    }*/
  }

}
