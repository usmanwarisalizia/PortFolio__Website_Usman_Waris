// app/layout.js
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Ovo } from 'next/font/google';

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ovo',
});

export const metadata = {
  title: "Portfolio - Usman Waris",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${ovo.variable} scroll-smooth dark  ` }>
      <body className="font-ovo antialiased leading-7 overflow-x-hidden  bg-white text-black dark:bg-darkTheme dark:text-white transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
