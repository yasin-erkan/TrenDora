# 🛍️ TrenDora - E-Commerce Mobile App

![TrenDora Logo](https://github.com/yasin-erkan/TrenDora/blob/main/Trendora.png)

A modern, feature-rich e-commerce mobile application built with React Native, Redux Toolkit, and TypeScript. TrenDora provides a complete shopping experience with user authentication, product browsing, cart management, and beautiful UI/UX design.

## ✨ Features

### 🔐 Authentication System

- **User Registration** - Complete signup flow with form validation
- **User Login** - Secure authentication with JWT tokens
- **Auto-login** - Persistent login sessions with AsyncStorage
- **Profile Management** - User profile with avatar, statistics, and settings

### 🛒 Shopping Experience

- **Product Catalog** - Browse products with detailed information
- **Category Filtering** - Filter products by categories with visual indicators
- **Advanced Search** - Real-time search with category filters and results counter
- **Shopping Cart** - Add/remove items, quantity management, and total calculation
- **Favorites** - Save favorite products for later
- **Best Sellers** - Discover trending and popular products

### 📱 User Interface

- **Modern Design** - Beautiful, intuitive interface with professional styling
- **Responsive Layout** - Optimized for both iOS and Android devices
- **Tab Navigation** - Easy navigation between Home, Search, Cart, Favorites, and Profile
- **Loading States** - Smooth loading indicators and error handling
- **Empty States** - Helpful messages when no data is available

### 🎯 Additional Features

- **Form Validation** - Comprehensive validation using Formik and Yup
- **Error Handling** - Proper error messages and user feedback
- **Type Safety** - Full TypeScript implementation
- **State Management** - Centralized state with Redux Toolkit

## 🚀 Tech Stack

### Frontend

- **Framework:** React Native 0.80.0
- **Language:** TypeScript 5.0.4
- **UI Library:** React Native with custom styling
- **Icons:** Iconsax React Native 0.0.8
- **Gradients:** React Native Linear Gradient 2.8.3
- **Animations:** React Native Reanimated 3.18.0

### State Management

- **Redux Toolkit** 2.8.2 - Modern Redux with simplified API
- **React Redux** 9.2.0 - React bindings for Redux
- **AsyncStorage** 2.2.0 - Persistent storage for user data

### Navigation & Forms

- **React Navigation** 7.x - Native stack and tab navigation
- **Formik** 2.4.6 - Form handling and validation
- **Yup** 1.6.1 - Schema validation for forms

### HTTP & API

- **Axios** 1.10.0 - HTTP client for API requests
- **Platzi Fake Store API** - Backend API for products and authentication

### Development Tools

- **ESLint** - Code linting with React Native config
- **Prettier** 2.8.8 - Code formatting
- **Jest** 29.6.3 - Testing framework
- **TypeScript** - Static type checking

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── screens/            # Screen components
│   ├── authScreen/     # Login screen
│   ├── signupScreen/   # Registration screen
│   ├── home/          # Home screen with products
│   ├── search/        # Search and filter screen
│   ├── cart/          # Shopping cart screen
│   ├── favourite/     # Favorites screen
│   ├── profile/       # User profile screen
│   ├── products/      # Product detail screens
│   └── categories/    # Category screens
├── store/             # Redux store configuration
│   ├── slices/        # Redux slices
│   │   ├── authSlice.ts
│   │   ├── signupSlice.ts
│   │   ├── productsSlice.ts
│   │   ├── cartSlice.ts
│   │   ├── favoriteSlice.ts
│   │   └── categoriesSlice.ts
│   └── actions/       # Async thunk actions
├── models/            # TypeScript interfaces and types
├── navigation/        # Navigation configuration
├── utils/            # Utility functions
├── styles/           # Global styles and themes
├── assets/           # Images, fonts, and other assets
└── service/          # API service layer
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js >= 18
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yasin-erkan/TrenDora.git
   cd TrenDora
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **iOS Setup (macOS only)**

   ```bash
   cd ios && pod install && cd ..
   ```

4. **Run the application**

   For Android:

   ```bash
   npm run android
   ```

   For iOS:

   ```bash
   npm run ios
   ```

5. **Start Metro bundler**
   ```bash
   npm start
   ```

## 📱 API Integration

TrenDora integrates with the Platzi Fake Store API for:

- User authentication and registration
- Product catalog and categories
- User profile management

**API Base URL:** `https://api.escuelajs.co/api/v1/`

## 🎯 Current Status

### ✅ Completed Features

- ✅ Complete authentication system (login/signup/logout)
- ✅ User profile with statistics and settings
- ✅ Product catalog with category filtering
- ✅ Advanced search functionality
- ✅ Shopping cart with full CRUD operations
- ✅ Favorites management
- ✅ Tab navigation with proper routing
- ✅ Form validation and error handling
- ✅ Responsive UI with modern design
- ✅ Redux state management
- ✅ TypeScript implementation
- ✅ AsyncStorage for data persistence

### 🔄 Coming Soon

- 🔄 Order management and history
- 🔄 Payment integration
- 🔄 Push notifications
- 🔄 Offline support
- 🔄 Product reviews and ratings
- 🔄 Wishlist sharing
- 🔄 Address management
- 🔄 Dark mode support

## 🧪 Testing

Run tests with:

```bash
npm test
```

## 📝 Code Quality

This project maintains high code quality with:

- **ESLint** for code linting
- **Prettier** for consistent formatting
- **TypeScript** for type safety
- **Modular architecture** for maintainability

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [React Native](https://reactnative.dev/) community
- [Redux Toolkit](https://redux-toolkit.js.org/) team
- [React Navigation](https://reactnavigation.org/) contributors
- [Platzi Fake Store API](https://fakeapi.platzi.com/) for backend services
- [Iconsax](https://iconsax.io/) for beautiful icons

---

⭐ **Star this repository if you find it helpful!**

## 🔗 Links

- **GitHub Repository:** [https://github.com/yasin-erkan/TrenDora](https://github.com/yasin-erkan/TrenDora)
- **API Documentation:** [Platzi Fake Store API](https://fakeapi.platzi.com/)
