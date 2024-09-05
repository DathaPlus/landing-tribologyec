import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Ubuntu, Antonio, Montserrat, Poppins } from 'next/font/google';
import '../../node_modules/@dathaplus/storybook/dist/themes.css';
import '../../node_modules/@dathaplus/storybook/dist/style.css';
import '../../node_modules/swiper/swiper-bundle.css';
import '../sass/styles.scss';
import Script from "next/script";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-ubuntu',
});

const antonio = Antonio({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-antonio',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Tribologyec',
  description: 'Tribologyec',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${antonio.variable} ${ubuntu.variable} ${poppins.variable}`}
      // @ts-ignore
      theme="tribologyec"
    >
      <body>{children}</body>
      <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/47264134.js"
          strategy="beforeInteractive"
      />
    </html>
  );
}
