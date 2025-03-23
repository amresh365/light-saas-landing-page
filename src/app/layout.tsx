import Head from "next/head";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        className={clsx(
          dmSans.className,
          "antialiased bg-[#EAEEFE] w-[27.8rem] md:w-full"
        )}
      >
        {children}
      </body>
    </html>
  );
}
