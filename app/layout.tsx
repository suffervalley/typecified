import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://typecified.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Typecified — Build freely. Design beautifully.",
    template: "%s | Typecified",
  },
  description:
    "100% free, open-source UI library built with shadcn/ui + Tailwind",
  keywords: [
    "UI components",
    "shadcn/ui",
    "Tailwind CSS",
    "React components",
    "open-source UI library",
    "design system",
    "component library",
    "Next.js components",
    "free UI components",
    "TypeScript components",
  ],
  authors: [{ name: "Typecified" }],
  creator: "Typecified",
  publisher: "Typecified",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Typecified",
    title: "Typecified — Build freely. Design beautifully.",
    description:
      "100% free, open-source UI library built with shadcn/ui + Tailwind",
  },
  twitter: {
    card: "summary_large_image",
    title: "Typecified — Build freely. Design beautifully.",
    description:
      "100% free, open-source UI library built with shadcn/ui + Tailwind",
    creator: "@typecified", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "vX7IY3mexsFt8vREqpay-qKJ8nOPbSG4CO-HrR_lygc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
