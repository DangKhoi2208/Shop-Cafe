import { Component } from '@angular/core';

import {AuthService} from "../../service/auth.service";

import {Router} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService:AuthService, private router: Router) {
  }

  signInWithGoogle(){
    this.authService.SignIn()
    console.log(this.authService)
    if(this.authService.userWithGoogle){
      this.router.navigate(['/home']).then()

    }
  }

}
