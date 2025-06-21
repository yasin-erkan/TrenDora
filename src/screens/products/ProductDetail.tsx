import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getSingleProduct } from '../../store/actions/productsActions';
import { height, width } from '../../utils/constants';
import { ArrowLeft2, Heart, Like1, Logout, Star1 } from 'iconsax-react-native';
import colors from '../../theme/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Button from '../../components/ui/Button';
import { PRODUCTDETAIL } from '../../utils/routes';
import { addToCart } from '../../store/slices/cartSlice';
import { Product } from '../../models/data/productsState';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, typeof PRODUCTDETAIL>;

const ProductDetail = ({ navigation, route }: Props) => {
  const { productId } = route.params;
  const { productDetailData, pendingDetail } = useSelector(
    (state: RootState) => state.products,
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  return (
    <View style={styles.container}>
      {pendingDetail ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.DARK_GRAY} />
        </View>
      ) : (
        <>
          <ScrollView style={styles.scrollView}>
            <ImageBackground
              source={{ uri: productDetailData?.images[0] }}
              style={styles.image}
            >
              <View>
                <View style={styles.header}>
                  <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.backContainer}
                  >
                    <ArrowLeft2 size={24} color={colors.BLACK} />
                  </Pressable>

                  <View style={styles.headerRight}>
                    <Pressable style={styles.backContainer}>
                      <Heart size={24} color={colors.RED} variant="Bold" />
                    </Pressable>
                    <Pressable style={styles.backContainer}>
                      <Logout size={24} color={colors.BLACK} />
                    </Pressable>
                  </View>
                </View>
              </View>
            </ImageBackground>

            <View style={styles.detailsContainer}>
              <View style={styles.titleSaleContainer}>
                <Text style={styles.titleText} numberOfLines={2}>
                  {productDetailData?.title}
                </Text>
                <View style={styles.onSaleButton}>
                  <Text style={styles.onSaleText}>On sale</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <View style={styles.starContainer}>
                  <Star1 size={20} color={colors.ORANGE} variant="Bold" />
                  <Text style={styles.rating}>4.8</Text>
                </View>

                <View style={styles.likeContainer}>
                  <Like1 size={20} color={colors.PRIMARY} variant="Bold" />
                  <Text style={styles.likeText}>90%</Text>
                </View>

                <View style={styles.reviewContainer}>
                  <Text style={styles.reviewText}>118 reviews</Text>
                </View>
              </View>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  {productDetailData?.description}
                </Text>
              </View>
            </View>
          </ScrollView>

          <SafeAreaView style={{ backgroundColor: colors.WHITE }}>
            <View style={styles.bottomSheet}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceDiscount}>
                  ${productDetailData?.priceDiscount?.toFixed(2)}
                </Text>
                <Text style={styles.priceText}>
                  ${productDetailData?.price}
                </Text>
              </View>

              <View style={styles.addToCartContainer}>
                <Button
                  onPress={() => {
                    if (productDetailData) {
                      dispatch(
                        addToCart({
                          ...productDetailData,
                          id: Number(productDetailData.id),
                        }),
                      );
                    }
                  }}
                  title="Add to Cart"
                />
              </View>
            </View>
          </SafeAreaView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height * 0.45,
    resizeMode: 'cover',
  },
  backContainer: {
    backgroundColor: colors.WHITE,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    padding: 20,
  },
  titleSaleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.BLACK,
    flex: 1,
    marginRight: 15,
  },
  onSaleButton: {
    backgroundColor: colors.RED,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  onSaleText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.WHITE,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.GRAY,
    marginRight: 10,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.BLACK,
    marginLeft: 5,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.GRAY,
    marginRight: 10,
  },
  likeText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.BLACK,
    marginLeft: 5,
  },
  reviewContainer: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.GRAY,
  },
  reviewText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.BLACK,
  },
  descriptionContainer: {
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.DARK_GRAY,
  },
  scrollView: {
    flex: 1,
    marginBottom: 65,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: colors.GRAY,
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  priceContainer: {
    flex: 1,
    paddingLeft: 5,
  },
  priceDiscount: {
    fontSize: 16,
    color: colors.DARK_GRAY,
    textDecorationLine: 'line-through',
    marginBottom: 5,
  },
  priceText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.BLACK,
  },
  addToCartContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default ProductDetail;
