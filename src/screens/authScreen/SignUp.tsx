import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../utils/routes';
import { ShoppingBag, Lock, Sms, User } from 'iconsax-react-native';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaViewStyle}>
      <View style={styles.container}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <ShoppingBag size={60} color={colors.PRIMARY} variant="Bold" />
          </View>
          <Text style={styles.appName}>TrenDora</Text>
          <Text style={styles.tagline}>Your Fashion Destination</Text>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join us and start shopping</Text>
        </View>

        {/* Form */}
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => {
            console.log('SignUp values:', values);
            // TODO: Implement signup logic
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Input
                  label="Full Name"
                  onChangeText={handleChange('name')}
                  onBlur={() => handleBlur('name')}
                  value={values.name}
                  placeholder="Enter your full name"
                  leftIcon={<User size={20} color={colors.DARK_GRAY} />}
                />

                <Input
                  label="Email Address"
                  onChangeText={handleChange('email')}
                  onBlur={() => handleBlur('email')}
                  value={values.email}
                  placeholder="Enter your email"
                  leftIcon={<Sms size={20} color={colors.DARK_GRAY} />}
                />

                <Input
                  label="Password"
                  onChangeText={handleChange('password')}
                  onBlur={() => handleBlur('password')}
                  value={values.password}
                  placeholder="Create a password"
                  secureTextEntry
                  leftIcon={<Lock size={20} color={colors.DARK_GRAY} />}
                />

                <Input
                  label="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  placeholder="Confirm your password"
                  secureTextEntry
                  leftIcon={<Lock size={20} color={colors.DARK_GRAY} />}
                />
              </View>

              <Button title="Create Account" onPress={() => handleSubmit()} />

              {/* Footer */}
              <Button
                title="Already have an account? Sign In"
                onPress={() => navigation.navigate(LOGIN as never)}
              />
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
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: colors.WHITE,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  logoContainer: {
    backgroundColor: colors.GRAY,
    padding: 20,
    borderRadius: 25,
    marginBottom: 16,
    shadowColor: colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  appName: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.BLACK,
    letterSpacing: -1,
    marginBottom: 4,
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
    fontSize: 16,
    color: colors.DARK_GRAY,
    textAlign: 'center',
    fontWeight: '500',
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 24,
  },
});
