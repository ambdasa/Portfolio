'use client';

import React from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import '../styles/globals.css';
import ThemeScript from '../components/ThemeScript';
import Head from 'next/head';

function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider attribute="class">
        <ThemeScript />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp; 