import { Injectable } from '@angular/core';
import {CafeModel} from "../Model/cafe.model";
import {collection, doc, Firestore, onSnapshot, setDoc, updateDoc} from "@angular/fire/firestore";
import {DocumentData} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(private firestore:Firestore) {
    onSnapshot(collection(this.firestore, 'cafe'), (collection) => {
      this.cafe = [];
      collection.forEach((doc) => {
        this.cafe.push(doc.data() as any);
      });
    });
  }

  async add(product:CafeModel) {
    try {
      const docRef = await setDoc(doc(this.firestore, 'cafe', product.id),product);
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async update(item: DocumentData) {
    await updateDoc(doc(this.firestore, 'cafe' , item['id']), item);
  }




 cafe:CafeModel[]=[
  ]
  getProduct(){
    return this.cafe
  }
  getItemById(id: number | string) {
    if (typeof id === 'string') {
      id = parseInt(id);
    }

    const product = this.cafe.find((product) => product.id === id);
    return product || {};
  }
}

