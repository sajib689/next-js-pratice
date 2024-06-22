import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import AuthProvider from "./AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({weight: ['400', '500', '700', '900'], subsets: ["roboto"] });

export const metadata = {
  title: {
     default: "Next JS",
     template: "%s |Next JS"
  },
  description: 'Super powerful next JS'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Navbar/>
        {children}
        </AuthProvider>
        </body>
    </html>
  );
}
