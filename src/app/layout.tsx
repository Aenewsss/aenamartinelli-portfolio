import type { Metadata } from "next";
import { Share_Tech } from "next/font/google";
import "./globals.css";

const inter = Share_Tech({ subsets: ["latin"],weight: '400' });

export const metadata: Metadata = {
  title: "Aenã Martinelli | Portfolio",
  description: "Programador Full Stack. Entre em contato para tornar sua ideia em uma realidade digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/icons/my-logo.webp" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
