import {Routes} from "@angular/router";
import {LoginComponent} from "./login.component";

export const LOGIN_ROUTE: Routes = [
  {
    path:'home', loadChildren: () => import('../home/home.routes').then((mod) => mod.HOME_ROUTE)},
  {
  path:'',
    redirectTo:'login',
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent
  }
]
