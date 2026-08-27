import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { constructMetadata, generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";
import "./globals.css";

import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = constructMetadata({
  title: 'Corponizers | Enterprise Recruitment & Executive Search Partner',
  description: 'Corponizers is an India-headquartered enterprise recruitment firm specializing in executive search, contract staffing, technology hiring, and RPO.',
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
        />
        {children}
      </body>
    </html>
  );
}
