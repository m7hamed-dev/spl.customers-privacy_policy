import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { APP_NAME } from '@/lib/content';
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const display = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Privacy Policy — ' + APP_NAME,
  description: 'Privacy Policy for ' + APP_NAME + '.',
  robots: { index: true, follow: true },
  icons: { icon: '/logo.png' },
};

// Set the theme class before paint to avoid a flash.
const prePaint =
  "try { if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList.add('dark'); } } catch (e) {}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={['scroll-smooth', sans.variable, display.variable].join(' ')} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prePaint }} />
      </head>
      <body className="bg-white text-ink antialiased dark:bg-slate-950 dark:text-slate-100 selection:bg-primary/20">
        {children}
      </body>
    </html>
  );
}
