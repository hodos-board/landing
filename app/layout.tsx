// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css"; // Assicurati che il percorso sia corretto

// Configura il font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins", // Definisce la variabile CSS
});

// Configura il font Lora
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora", // Definisce la variabile CSS
});

export const metadata: Metadata = {
  title: "Hodos - Trasforma i feedback in decisioni",
  description: "Feedback per builder indipendenti",
  icons: "/landing/hodos_logo_light.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${poppins.variable} ${lora.variable}`}>
      <body className="antialiased scroll-smooth">{children}</body>
    </html>
  );
}
