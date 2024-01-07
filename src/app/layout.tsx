import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Suspense } from 'react';

export const metadata = {
  title: 'Mindforge',
  description:
    'Teste técnico de Frontend para o Mindforge',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-tremor-background-muted">
      <body className="flex flex-col">
        <Suspense>
          <Navbar />
        </Suspense>
        <div className="flex-grow flex">
          <Suspense>
            <Sidebar />
          </Suspense>
          <div className="flex-grow">
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}