import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import FooterWrapper from "@/components/layout/FooterWrapper";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swl-lawfirm.com.sa"),
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  title: {
    default: "شركة سمو الحكمة للمحاماة والاستشارات القانونية",
    template: "%s | سمو الحكمة",
  },
  description:
    "شركة سمو الحكمة للمحاماة والاستشارات القانونية - رؤية قانونية أعمق. نقدم خدمات قانونية متكاملة للأفراد والشركات في المملكة العربية السعودية.",
  keywords: ["محاماة", "استشارات قانونية", "سمو الحكمة", "محامي جدة", "محامي المدينة المنورة", "خدمات قانونية"],
  authors: [{ name: "سمو الحكمة للمحاماة" }],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.swl-lawfirm.com.sa",
    siteName: "سمو الحكمة للمحاماة",
    title: "شركة سمو الحكمة للمحاماة والاستشارات القانونية",
    description: "رؤية قانونية أعمق - خدمات قانونية متكاملة في المملكة العربية السعودية",
  },
  twitter: {
    card: "summary_large_image",
    site: "@swl_ksa",
    creator: "@swl_ksa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`${cairo.className} antialiased`}>
        <NavbarWrapper />
        <main>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
