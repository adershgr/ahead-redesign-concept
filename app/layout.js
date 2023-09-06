import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '../components/Header';
 
const poppins = Poppins({subsets: ['latin'], weight : '400'});

export const metadata = {
  title: 'Ahead redesign',
  description: 'A nextjs redesign concept og ahead app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />
        {children}
        </body>
    </html>
  );
}
