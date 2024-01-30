import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {update} from "@angular/fire/database";
import {CafeService} from "../../service/cafe.service";
import {CafeModel} from "../../Model/cafe.model";
import {DocumentData} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  testValue = new FormControl(true);
  addForm = new FormGroup({
    picture:new FormControl(''),
    id:new FormControl(''),
    name:new FormControl(''),
    price:new FormControl(),
    des:new FormControl(''),
    instock:new FormControl(),
    quantity:new FormControl(),
  });

  editForm = new FormGroup({
    picture:new FormControl(''),
    id:new FormControl(''),
    name:new FormControl(''),
    price:new FormControl(0),
    des:new FormControl(''),
    instock:new FormControl(0) ,
    quantity:new FormControl(),
  });

  open = false;

  showDialog(): void {
    this.open = true;
  }

  openEdit = false;


  showEditDialog(item: CafeModel) {
    this.openEdit = true;
    this.editForm.setValue(item);
  }

  update() {
    let item: CafeModel = {
      id: this.editForm.value.id ||'',
      name:this.editForm.value.name ||'',
      des:this.editForm.value.des ||'',
      instock:this.editForm.value.instock || 0,
      price:this.editForm.value.price || 0,
      picture:this.editForm.value.picture ||'',
      quantity:this.editForm.value.quantity||'',
    };
    console.log(item);
    this.cafeService.update(item);
    this.openEdit = false;
  }


  create() {
    let newProd:CafeModel = {
      id:Date.now().toString(),
      name:this.addForm.value.name ||'',
      des:this.addForm.value.des ||'',
      instock:this.addForm.value.instock || 0,
      price:this.addForm.value.price || 0,
      picture:this.addForm.value.picture ||'',
      quantity:this.editForm.value.quantity||'',
    };
    this.cafeService.add(newProd);
    this.open = false;
  }


   constructor(public cafeService:CafeService) {
   }
}




