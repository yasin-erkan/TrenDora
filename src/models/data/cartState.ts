import { Product } from './productsState';

interface CartState {
  cart: Product[];
  pending: boolean;
}

export type { CartState };
