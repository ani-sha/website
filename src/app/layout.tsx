import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anisha Mohanty",
  description: "Backend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} h-screen overflow-auto pt-8 mx-auto max-w-[640px] bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark transition-colors duration-200`}
      >
        <Providers>
          <div className="flex flex-col gap-y-8">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
