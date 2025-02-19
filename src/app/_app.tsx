'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import ThemeScript from '../components/ThemeScript';

function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  return (
    <ThemeProvider attribute="class">
      <ThemeScript />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp; 