import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zort - AI-Powered Bet Tracking',
  description: 'Advanced AI-powered betting tracking and analysis application',
  keywords: ["Zort", "bet tracking", "ai powered bet tracking",],
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  );
}