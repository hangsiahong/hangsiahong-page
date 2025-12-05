import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hang Siahong - Portfolio',
  description: 'Full-stack developer specializing in web technologies. Explore my projects and contributions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
