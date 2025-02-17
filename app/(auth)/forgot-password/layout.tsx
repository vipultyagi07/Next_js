import type { Metadata } from 'next';
import '@/app/globals.css';
import AuthHeader from '@/app/component/AuthHeader';
import AuthFooter from '@/app/component/AuthFooter';

export const metadata: Metadata = {
  title: 'Auth Page',
  description: 'Login and authentication portal',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <AuthHeader />
        <main className="flex-grow flex items-center justify-center">{children}</main>
        <AuthFooter />
      </body>
    </html>
  );
}
