import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Navbar />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}