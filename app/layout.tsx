import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lea Studio — Online 1-to-1 Pilates Coaching",
  description:
    "Personal online Pilates coaching with Léa. Weekly 1-to-1 sessions tailored to your body, your pace, your goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-sage min-h-screen text-charcoal">{children}</body>
    </html>
  );
}
