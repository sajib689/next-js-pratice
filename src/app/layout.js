import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  default: "Next JS",
  template: "%s | Next JS"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
