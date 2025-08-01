import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BootsDev-X  | FullStack Developer",
  description:
    "Portfolio profesional de Johanny A. Rodriguez, desarrollador Full Stack especializado en React, Next.js, Node.js y tecnologías modernas.",
  keywords:
    "desarrollador, full stack, React, Next.js, TypeScript, Node.js, portfolio",
  authors: [{ name: "Johanny A. Rodriguez" }],
  openGraph: {
    title: "Johanny A. Rodriguez - Desarrollador Full Stack",
    description: "Portfolio profesional de desarrollador Full Stack",
    type: "website",
  },
  icons: "./icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className={`${lora.className}  antialiased`}>
        <NextIntlClientProvider>
          {children}
          <ScrollToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
