import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
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
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-sage min-h-screen flex flex-col text-charcoal">
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
