import type { Metadata } from "next";
import "../globals.css";
import SmoothScrollWrapper from "../SmoothScrollWrapper";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }, { lang: "ar" }];
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body className="antialiased">
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      </body>
    </html>
  );
}
