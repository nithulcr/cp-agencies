import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollWrapper from "./SmoothScrollWrapper";

export const metadata: Metadata = {
  title: 'Ray Montazim | Stable Real Estate Investment in Saudi Arabia',
  description: 'Invest in income-generating real estate with Ray Montazim. Earn 10%–15% annual returns, distributed quarterly, with clear legal protection.',
  keywords: 'Ray Montazim, Saudi real estate investment, quarterly returns, stable income, passive income Saudi Arabia, low risk investments',
  icons: {
    icon: '/favicon.png',       // path to your favicon file
    shortcut: '/favicon.png',   // for older browsers
    apple: '/favicon.png', // optional Apple touch icon
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased">
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      </body>
    </html>
  );
}
