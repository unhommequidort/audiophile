import './globals.css';
import { Manrope } from 'next/font/google';
import Navbar from '@/components/Header/Navbar';
import Nav from '@/components/Header/Nav/Nav';

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
      <body>
        <header className="bg-chinese-black px-6 xl:rounded-t-lg">
          <Navbar>
            {/* @ts-expect-error Server Component */}
            <Nav />
          </Navbar>
        </header>
        {children}
      </body>
    </html>
  );
}
