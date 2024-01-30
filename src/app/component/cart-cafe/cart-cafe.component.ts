import {Component, OnInit} from '@angular/core';
import {AddCartService} from "../../service/add-cart.service";
import {ActivatedRoute} from "@angular/router";
import {CafeService} from "../../service/cafe.service";
import {SharedModule} from "../../shared/shared.module";
import {cartModel} from "../../Model/cafe.model";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Store} from "@ngrx/store";
import {CartState} from "../../ngrx/cart/cart.state";
import * as CartActions from '../../ngrx/cart/cart.action';
@Component({
  selector: 'app-cart-cafe',
  standalone: true,
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  templateUrl: './cart-cafe.component.html',
  styleUrl: './cart-cafe.component.scss'
})
export class CartCafeComponent implements OnInit{
//   constructor(private addCartService :AddCartService,private activatedRoutes: ActivatedRoute,private cafeService:CafeService) {
//
//   }
//   cartCafe: any[] = []
//
//   ngOnInit(){
//     this.cartCafe = this.addCartService.addCart
//
//   }
//
//
//
//   totalMoney(){
//
//   }
//
// }


  cart: cartModel = {
    createdAt: new Date().toString(),
    id: '1',
    productList: [],
    total: 0,
    userId: '1',
  };

  cart$ = this.store.select('cart', 'cart');

  quantityFormList: FormControl[] = [];

  constructor(private store: Store<{ cart: CartState }>) {}

  ngOnInit(): void {
    this.cart$.subscribe((cart) => {
      if (cart) {
        this.cart = {
          ...this.cart,
          productList: cart.productList,
          total: cart.total,
        };
        cart.productList.forEach((product) => {
          this.quantityFormList.push(new FormControl(product.quantity));
        });
      }
    });
    this.quantityFormList.forEach((form, index) => {
      form.valueChanges.subscribe((value) => {
        this.updateQuantity(index, value);
      });
    });
  }

  count(quantity: number, price: number) {
    return Math.ceil(quantity * price);
  }

  countTotal() {
    let total = 0;
    this.cart.productList.forEach((product, index) => {
      total += this.count(product.quantity, product.price);
    });
    return total;
  }

  updateQuantity(index: number, quantity: number) {
    this.store.dispatch(
      CartActions.updateProduct({
        product: {
          ...this.cart.productList[index],
          quantity: quantity,
        },
      })
    );
  }

  removeProduct(index: number) {
    this.store.dispatch(
      CartActions.removeProduct({ id: this.cart.productList[index].id })
    );
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }
}
