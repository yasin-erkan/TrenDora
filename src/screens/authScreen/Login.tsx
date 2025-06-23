import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import colors from '../../theme/colors';
import { loginSchema } from '../../utils/validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { loginUser } from '../../store/actions/authActions';
import { useNavigation } from '@react-navigation/native';
import { SIGNUP, TABBAR } from '../../utils/routes';
import { Lock, Sms } from 'iconsax-react-native';

const Login: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation();
  const { isLogin, pending, error } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    console.log('Login state changed:', { isLogin, pending });
    if (!pending && isLogin) {
      console.log('Navigating to TABBAR');
      navigation.reset({
        index: 0,
        routes: [{ name: TABBAR as never }],
      });
    }
  }, [isLogin, pending, navigation]);

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaViewStyle}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Sign in to continue shopping</Text>
        </View>

        {/* Form */}
        <Formik
          initialValues={{
            email: 'john@mail.com',
            password: 'changeme',
          }}
          validationSchema={loginSchema}
          onSubmit={values => dispatch(loginUser(values))}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Input
                  error={errors.email}
                  label="Email Address"
                  onChangeText={handleChange('email')}
                  onBlur={() => handleBlur('email')}
                  value={values.email}
                  placeholder="Enter your email"
                  leftIcon={<Sms size={20} color={colors.DARK_GRAY} />}
                />

                <Input
                  label="Password"
                  error={errors.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => handleBlur('password')}
                  value={values.password}
                  placeholder="Enter your password"
                  secureTextEntry
                  leftIcon={<Lock size={20} color={colors.DARK_GRAY} />}
                />
              </View>

              {error && (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              )}

              <Button
                title={pending ? 'Signing In...' : 'Sign In'}
                onPress={() => handleSubmit()}
                disabled={pending}
              />

              {/* Footer */}
              <View style={styles.footer}>
                <Text style={styles.footerText}>
                  Don't have an account?{' '}
                  <Text
                    style={styles.footerLink}
                    onPress={() => navigation.navigate(SIGNUP as never)}
                  >
                    Create Account
                  </Text>
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: colors.WHITE,
  },

  tagline: {
    fontSize: 16,
    color: colors.DARK_GRAY,
    fontWeight: '500',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.BLACK,
    marginBottom: 8,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: colors.BLACK,
    fontWeight: '500',
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 24,
  },
  errorContainer: {
    backgroundColor: '#FEF2F2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: colors.ERROR,
  },
  errorText: {
    color: colors.ERROR,
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: colors.BLACK,
    textAlign: 'center',
  },
  footerLink: {
    color: colors.PRIMARY,
    fontWeight: '700',
  },
});
