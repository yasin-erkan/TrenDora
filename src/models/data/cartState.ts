import { Product } from './productsState';

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  pending: boolean;
}

export type { CartState };
