import localFont from 'next/font/local'
import "./globals.css";

const geistSans = localFont({
  src: [
    { path: '../../public/fonts/Geist-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Geist-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-geist-sans',
});

// const geistMono = localFont({
//   src: [
//     { path: '/fonts/GeistMono-Regular.woff2', weight: '400', style: 'normal' },
//     { path: '/fonts/GeistMono-Bold.woff2', weight: '700', style: 'normal' },
//   ],
//   variable: '--font-geist-mono',
// });

export const metadata = {
  title: "RCCG Soul Tree",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
