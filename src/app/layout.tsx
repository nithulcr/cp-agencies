import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollWrapper from "./SmoothScrollWrapper";

export const metadata: Metadata = {
  title: 'CP Agencies',
  description: '',
  keywords: '',
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
