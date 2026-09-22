import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AWS Student Community Day Mysuru 2026 | AWS Student Builder Group VVCE',
  description:
    'Join 500+ builders at AWS Student Community Day Mysuru 2026. A one-day, community-led event featuring expert talks, hands-on workshops, and networking.',
  icons: {
    icon: '/aws_user_group_mysuru_cropped.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#222b38',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-[#222b38] antialiased selection:bg-[#01c1ac]/30 selection:text-[#222b38]`}
      >
        {children}
      </body>
    </html>
  );
}
