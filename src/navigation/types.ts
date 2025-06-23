import {
  CART,
  CATEGORIES,
  LOGIN,
  PRODUCTDETAIL,
  PRODUCTSLISTSCREEN,
  TABBAR,
} from '../utils/routes';

export type RootStackParamList = {
  [TABBAR]: { screen?: string } | undefined;
  [CATEGORIES]: undefined;
  [PRODUCTSLISTSCREEN]: { categorySlug: string };
  [CART]: undefined;
  [PRODUCTDETAIL]: {
    productId: number;
  };
  [LOGIN]: undefined;
};
