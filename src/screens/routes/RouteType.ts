import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import widgets from '../../widgets/widgets.json';

export type RootStackParamList = {
  Home: undefined;
  Categories: { widget: (typeof widgets)[0] } | undefined;
  Search: { widget: (typeof widgets)[0] } | undefined;
  Introduction: { widget: (typeof widgets)[0] } | undefined;
  BestSeller: { widget: (typeof widgets)[0] } | undefined;
  'Products List': { categorySlug: string } | undefined;
  'Product Detail': { productId: number };

  
  // Add other routes as needed
};

export type RouteType<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
