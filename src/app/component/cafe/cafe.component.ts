import {Component, OnInit} from '@angular/core';
import {CafeService} from "../../service/cafe.service";
import {AddCartService} from "../../service/add-cart.service";
import {SharedModule} from "../../shared/shared.module";
import {DocumentData} from "@angular/fire/compat/firestore";
import {Store} from "@ngrx/store";
import {CafeModel} from "../../Model/cafe.model";
import * as CartActions from '../../ngrx/cart/cart.action';
@Component({
  selector: 'app-cafe',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.scss'
})
export class CafeComponent implements OnInit{

  constructor(public cafeService:CafeService,private addCartService: AddCartService,private store:Store) {
  }
  cafe:any=[]
  productDetail:any;
  ngOnInit(){
    this.cafe=this.cafeService.getProduct();
  }

  getCafebyId(id:string){this.cafeService.getItemById(id)}

  addToCart(cafe: any){
    this.addCartService.addCart.push(cafe)
    console.log(this.addCartService.addCart)
  }

  buy(product: DocumentData) {
    this.store.dispatch(
      CartActions.addProduct({ product: product as CafeModel })
    );
  }

}

