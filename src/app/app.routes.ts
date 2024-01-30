import { Routes } from '@angular/router';
import {CafeComponent} from "./component/cafe/cafe.component";
import {DetailCafeComponent} from "./component/detail-cafe/detail-cafe.component";
import {CartCafeComponent} from "./component/cart-cafe/cart-cafe.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {LOGIN_ROUTE} from "./pages/login/login.routes";

export const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/login/login.routes').then((mod) => mod.LOGIN_ROUTE)
  },

  {
    path:'home',
    loadChildren: () => import('./pages/home/home.routes').then((mod) => mod.HOME_ROUTE)
  }


];
