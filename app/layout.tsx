import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lea Studio — Online 1-to-1 Pilates Coaching",
  description:
    "Personal online Pilates coaching with Léa. Weekly 1-to-1 sessions tailored to your body, your pace, your goals.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicon_io/apple-touch-icon.png" },
    other: [
      { rel: "icon", url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-sage min-h-screen flex flex-col text-charcoal">{children}</body>
    </html>
  );
}
