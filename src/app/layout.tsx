import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Providers } from "./components/Providers";
import { Navbar } from "./components/Navbar";

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
        className={`${GeistSans.className} h-screen overflow-auto pt-8 mx-auto max-w-[640px] bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark transition-colors duration-200`}
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
