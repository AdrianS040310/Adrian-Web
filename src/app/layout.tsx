import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adrians.dev"),
  title: {
    default: "Adrian Santos | Desarrollador de Software",
    template: "%s | Adrian Santos",
  },
  description:
    "Portafolio profesional de Adrian Santos, desarrollador de software con formación en Ingeniería en Desarrollo y Gestión de Software. Especializado en desarrollo web moderno, automatización e integración de APIs.",
  keywords: [
    "Adrian Santos",
    "Desarrollador de Software",
    "Desarrollador Web",
    "Ingeniería de Software",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "APIs REST",
    "Automatización",
    "Portafolio Web",
  ],
  authors: [{ name: "José Adrián Santos Sánchez" }],
  creator: "José Adrián Santos Sánchez",
  publisher: "Adrian Santos",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Adrian Santos | Desarrollador de Software",
    description:
      "Portafolio profesional de Adrian Santos, desarrollador de software enfocado en desarrollo web, automatización e integración de APIs.",
    url: "https://adrians.dev",
    siteName: "Portafolio Web Adrian Santos",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/Logo AdrianDev - Fondo Oscuro.webp",
        width: 1200,
        height: 630,
        alt: "Portafolio de Adrian Santos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Santos | Desarrollador de Software",
    description:
      "Portafolio profesional de Adrian Santos, desarrollador de software con formación en ingeniería.",
    images: ["/images/Logo AdrianDev - Fondo Oscuro.webp"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
