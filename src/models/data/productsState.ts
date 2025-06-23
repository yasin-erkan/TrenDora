export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  priceDiscount: number;
  images: string[];
  category: string;
  slug: string;
  quantity: number;
  isFavorite: boolean;
}

interface ProductsState {
  products: Product[];
  productsFilterCategory: Product[];
  productDetailData: Product | null;
  pending: boolean;
  pendingDetail: boolean;
  error: string | null;
}

export type { ProductsState };
