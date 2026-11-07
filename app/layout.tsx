import type { Metadata } from "next";
import Script from "next/script";
import { GOOGLE_ANALYTICS_KEY } from "../lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Decentralization Institute",
    template: "%s | Decentralization Institute",
  },
  description:
    "The Decentralization Institute is a non-profit research and educational organization pushing the frontier of decentralization technologies.",
};

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@400;500;600;700&family=PT+Serif:wght@400;700&display=swap";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
      </head>
      <body>
        {children}
        {GOOGLE_ANALYTICS_KEY && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_KEY}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ANALYTICS_KEY}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
