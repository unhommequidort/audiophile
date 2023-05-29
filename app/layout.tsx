import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: 'Audiophile',
  description: 'Website for Audiophile sound products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
