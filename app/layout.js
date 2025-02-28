import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Colophon from "./components/layout/Colophon";
import HeroUiProvider from "./providers/HeroUiProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Limostal",
  description: "Producent Garaży Blaszanych",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth", width: "100vw", overflowX: "hidden" }}
    >
      <body className={inter.className + " relative"}>
        
          <Header />
          <HeroUiProvider >
            {children}
          </HeroUiProvider>
          <Footer />
          <Colophon />
   
 
      </body>
    </html>
  );
}
