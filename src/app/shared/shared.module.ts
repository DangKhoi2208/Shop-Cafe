import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {TuiInputModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";
import {TuiCheckboxModule} from "@taiga-ui/kit";
import {TuiDialogModule} from "@taiga-ui/core";
import {RouterLink} from "@angular/router";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterOutlet,
    TuiButtonModule,
    TuiInputModule,
    TuiCheckboxModule,
    TuiDialogModule,
    RouterLink
  ],
  exports:[
    RouterOutlet,
    TuiButtonModule,
    TuiInputModule,
    TuiCheckboxModule,
    TuiDialogModule,
    RouterLink
  ]
})
export class SharedModule { }
