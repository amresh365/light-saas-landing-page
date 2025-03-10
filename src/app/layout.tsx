import Metadata from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
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
