import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CoinContextProvider from "@/context/coinContext";
import { ThemeProvider } from "./providers/theme-providers";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import Footer from "@/components/ui/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cryptonite",
  description: "Made by Shruti Vishwakarma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CoinContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <DndProvider backend={HTML5Backend}> */}
              {children}
            {/* </DndProvider> */}
            <Footer  />
          </ThemeProvider>
        </body>
      </html>
    </CoinContextProvider>
  );
}