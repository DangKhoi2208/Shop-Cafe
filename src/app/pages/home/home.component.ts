import { Component } from '@angular/core';
import {NavbarComponent} from "../../component/navbar/navbar.component";
import {SharedModule} from "../../shared/shared.module";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
