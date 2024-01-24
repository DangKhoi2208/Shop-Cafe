import { Routes } from '@angular/router';
import {CafeComponent} from "./component/cafe/cafe.component";
import {DetailCafeComponent} from "./component/detail-cafe/detail-cafe.component";
import {CartCafeComponent} from "./component/cart-cafe/cart-cafe.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path:'cafe',
    component:CafeComponent,
  },

  {
    path:'cafe/:id',
    component:DetailCafeComponent,
  },

  {
    path:'cart',
    component:CartCafeComponent,
  },

  {
    path:'dashboard',
    component:DashboardComponent,
  },

];
