import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Peninsula Park Elite | Premium Villa Plots in Devanahalli, North Bangalore",
  description:
    "Discover premium villa plots at Peninsula Park Elite in Devanahalli, North Bangalore. Located just 1 minute from STRR, offering world-class amenities. Starting from ₹72 Lacs onwards.",
  keywords:
    "Peninsula Park Elite, villa plots in Devanahalli, North Bangalore real estate, premium villa plots near STRR, buy plots in Bangalore, investment property Bangalore",
  metadataBase: new URL("https://www.peninsulaparkelite.com"),
  alternates: {
    canonical: "https://www.peninsulaparkelite.com",
  },
  openGraph: {
    title:
      "Peninsula Park Elite | Premium Villa Plots in Devanahalli, North Bangalore",
    description:
      "Invest in premium villa plots at Peninsula Park Elite, Devanahalli. Located 1 minute from STRR, offering world-class amenities. Prices start from ₹72 Lacs.",
    url: "https://www.peninsulaparkelite.com",
    siteName: "Peninsula Park Elite",
    images: [
      {
        url: "https://www.peninsulaparkelite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Peninsula Park Elite Villa Plots in Devanahalli",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Peninsula Park Elite | Premium Villa Plots in Devanahalli, North Bangalore",
    description:
      "Discover premium villa plots at Peninsula Park Elite, located just 1 minute from STRR with world-class amenities.",
    images: ["https://www.peninsulaparkelite.com/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Peninsula Park Elite" />
      </head>
      <body className={inter.className}>
        <ToastProvider>
          <div className="relative w-full">
            <Header />
            <main className="relative w-full">{children}</main>
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
