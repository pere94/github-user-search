// pages/_document.js
import React from 'react';
import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  return (
    <Html>
      <Head>
        <Script 
            src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js" 
            strategy="afterInteractive" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
