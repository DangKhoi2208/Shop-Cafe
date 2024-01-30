import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CafeService} from "../../service/cafe.service";
import {AddCartService} from "../../service/add-cart.service";
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-detail-cafe',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './detail-cafe.component.html',
  styleUrl: './detail-cafe.component.scss'
})
export class DetailCafeComponent implements OnInit{
constructor(private activatedRoutes: ActivatedRoute,private cafeService:CafeService,private addCartService:AddCartService) {

}

  productDetail:any;
  ngOnInit(){
    let id = this.activatedRoutes.snapshot.params['id'];
    this.productDetail = this. cafeService.getItemById(id);
  }

  exampleCafes = this.cafeService.cafe

  addToCart(cafe: any){
    this.addCartService.addCart.push(cafe)
    console.log(this.addCartService.addCart)
  }
}
