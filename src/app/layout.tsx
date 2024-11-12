import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WhatsAppButton from "@/components/buttons/button-whatsapp";

const fontLexend = localFont({
  src: "./fonts/Lexend/static/Lexend-Regular.ttf",
  variable: "--font-Lexend",
  weight: "300",
});

export const metadata: Metadata = {
  title: "PROELITE SEGUROS",
  description: " Nuestros expertos están comprometidos en entender tus necesidades y proporcionarte soluciones a la medida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontLexend.variable} antialiased`}>
        {children}
        {/* Div con el degradado al final */}
        <WhatsAppButton phoneNumber="0000000000" />
        <div className="gradient-bottom" />
      </body>
    </html>
  );
}
