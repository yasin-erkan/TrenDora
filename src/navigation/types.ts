import {
  CART,
  CATEGORIES,
  PRODUCTDETAIL,
  PRODUCTSLISTSCREEN,
  TABBAR,
} from '../utils/routes';

export type RootStackParamList = {
  [TABBAR]: undefined;
  [CATEGORIES]: undefined;
  [PRODUCTSLISTSCREEN]: { categorySlug: string };
  [CART]: undefined;
  [PRODUCTDETAIL]: {
    productId: number;
  };
};
