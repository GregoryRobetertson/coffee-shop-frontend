
import { CartProvider } from "./components/ShoppingCart";
import "./globals.css";



export const metadata = {
  title: "Coffee Shop",
  description: "We sell coffe products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>  
      <body>{children}</body>
 </CartProvider>  
      
    </html>
  );
}
