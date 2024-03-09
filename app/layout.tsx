import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TangTutors",
  description:
    "This is a high school tutoring website for those who are in need of help in QCE and the QCAA curriculum. Here at Tang Tutors, we are committed to helping and educating every student with personalised tutoring sessions. A personal high school tutoring website based in Australia",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      url: "/logo2.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Tang Tutors" />
        <meta property="og:description" content="/logo.png" />
        <meta property="og:image" content="URL_TO_YOUR_THUMBNAIL_IMAGE" />
        <meta property="og:url" content="www.tangtutors.com" />
      </Head>
      <body className={inter.className}>
        <NavigationBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
