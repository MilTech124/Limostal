import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Colophon from "./components/layout/Colophon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " relative"}  >
        <Header />
        {children}
        <Footer />
        <Colophon />
      </body>
    </html>
  );
}