import { Injectable } from '@angular/core';
import {CafeModel} from "../Model/cafe.model";

@Injectable({
  providedIn: 'root'
})
export class AddCartService {

  constructor() { }
  addCart : CafeModel[] = []
}
