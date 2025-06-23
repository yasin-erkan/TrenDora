import { Product } from './productsState';

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
  products: Product[];
}

interface CategoriesState {
  categories: Category[];
  pending: boolean;
  selectedCategory: string;
}

export type { CategoriesState, Category };
