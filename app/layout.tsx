// app/layout.tsx
import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'HARDSOFT SOLUCIONES',
  description: 'Software administrativo y contable líder en México',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[var(--bg-main)] text-[var(--text-primary)] flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}