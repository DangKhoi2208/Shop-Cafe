import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {LoginComponent} from "./pages/login/login.component";
import {Auth, onAuthStateChanged} from "@angular/fire/auth";
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TuiRootModule, TuiDialogModule, TuiAlertModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  constructor(private auth: Auth, private router: Router, private authService: AuthService) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authService.userWithGoogle = user
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        this.router.navigate(['/home']).then()
        // ...
      } else {
        // User is signed out
        // ...
        this.router.navigate(['/login']).then()
      }
    });
  }
}
