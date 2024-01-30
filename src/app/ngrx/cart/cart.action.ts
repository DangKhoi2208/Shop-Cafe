import { createAction, props } from '@ngrx/store';
import {CafeModel} from "../../Model/cafe.model";

export const addProduct = createAction(
  '[Cart Component] Add Product',
  props<{ product: CafeModel }>()
);
export const removeProduct = createAction(
  '[Cart Component] Remove Product',
  props<{ id: string }>()
);
export const updateProduct = createAction(
  '[Cart Component] Update Product',
  props<{ product: CafeModel }>()
);
export const clearCart = createAction('[Cart Component] Clear Cart');
