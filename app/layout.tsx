import type { Metadata } from 'next';
import { Recursive, Karla } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const recursive = Recursive({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-recursive',
});

const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
});

export const metadata: Metadata = {
  title: 'Hangsia Hong - Portfolio',
  description: 'Full-stack developer specializing in web technologies. Explore my projects and contributions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${recursive.variable} ${karla.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
