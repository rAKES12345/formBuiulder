"use client"
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/stateManagement/appStore'; // Adjust the path according to your file structure
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
