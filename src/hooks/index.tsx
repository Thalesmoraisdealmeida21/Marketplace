import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { CartProvider } from './cart';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

const AppProvider: React.FC = ({ children }) => {
  return (
    <CartProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </CartProvider>
  );
};

export default AppProvider;
