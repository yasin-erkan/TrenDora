import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import colors from '../../theme/colors';
import { signupSchema } from '../../utils/validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { signupUser } from '../../store/actions/signUpActions';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../utils/routes';
import { Lock, Sms, User } from 'iconsax-react-native';

const SignUp: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation();
  const { isLoading, isError, errorMessage } = useSelector(
    (state: RootState) => state.signup,
  );

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaViewStyle}>
      <View style={styles.container}>
        {/* Logo  */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/trendora.png')}
              style={styles.logo}
            />
          </View>
          <Text style={styles.appName}>Welcome to TrenDora</Text>
        </View>

        {/* Form */}
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={signupSchema}
          onSubmit={values => dispatch(signupUser(values))}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Input
                  label="Full Name"
                  error={errors.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => handleBlur('name')}
                  value={values.name}
                  placeholder="Enter your full name"
                  leftIcon={<User size={20} color={colors.DARK_GRAY} />}
                  autoCapitalize="words"
                />

                <Input
                  label="Email Address"
                  error={errors.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => handleBlur('email')}
                  value={values.email}
                  placeholder="Enter your email"
                  leftIcon={<Sms size={20} color={colors.DARK_GRAY} />}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />

                <Input
                  label="Password"
                  error={errors.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => handleBlur('password')}
                  value={values.password}
                  placeholder="Create a password"
                  secureTextEntry
                  leftIcon={<Lock size={20} color={colors.DARK_GRAY} />}
                  autoCapitalize="none"
                />

                <Input
                  label="Confirm Password"
                  error={errors.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  placeholder="Confirm your password"
                  secureTextEntry
                  leftIcon={<Lock size={20} color={colors.DARK_GRAY} />}
                  autoCapitalize="none"
                />
              </View>

              {isError && (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{errorMessage}</Text>
                </View>
              )}

              <Button
                title={isLoading ? 'Creating Account...' : 'Create Account'}
                onPress={() => handleSubmit()}
                disabled={isLoading}
              />

              {/* Footer */}
              <View style={styles.footer}>
                <Text style={styles.footerText}>
                  Already have an account?{' '}
                  <Text
                    style={styles.footerLink}
                    onPress={() => navigation.navigate(LOGIN as never)}
                  >
                    Sign In
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

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: colors.GRAY,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  logoContainer: {
    backgroundColor: colors.GRAY,
    padding: 10,
    borderRadius: 60,
    marginBottom: 16,
    shadowColor: colors.INFO,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 70,
    elevation: 10,
  },
  appName: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.BLACK,
    letterSpacing: -1,
    marginBottom: 30,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  tagline: {
    fontSize: 20,
    color: colors.DARK_GRAY,
    fontWeight: '500',
  },

  subtitle: {
    fontSize: 16,
    color: colors.DARK_GRAY,
    textAlign: 'center',
    fontWeight: '500',
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    gap: 12,
    marginBottom: 24,
  },
  footer: {
    marginTop: 25,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: colors.DARK_GRAY,
    textAlign: 'center',
  },
  footerLink: {
    color: colors.PRIMARY,
    fontWeight: '600',
  },
  errorContainer: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: colors.ERROR,
    borderRadius: 5,
  },
  errorText: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});
