export interface CafeModel {
  picture:string,
  id:string,
  name:string
  price:number,
  des:string,
  instock:number,
  quantity: number;
}
export interface cartModel{
  id: string;
  userId: string;
  total: number;
  createdAt: string;
  productList: CafeModel[];
}
