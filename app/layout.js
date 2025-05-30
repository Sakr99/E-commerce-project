import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { CartContextProvider } from "./context/CartContext";
import { Roboto} from "next/font/google";
import {
  ClerkProvider
} from "@clerk/nextjs";
const inter = Roboto({ subsets: ["latin"] , weight: "400"  });
export const metadata = {
  title: "Body Store",
  description: `This e-commerce website is a fully responsive, user-friendly online store designed to provide customers with a seamless shopping experience. Built with modern web technologies such as React.js / Next.js, Tailwind CSS, and integrated with secure payment gateways, the platform offers a scalable solution for selling products online.

Key Features:
Product Catalog: Dynamic display of products with categories, filters, and search functionality to help users easily find items.

User Authentication: Secure sign-up, login, and profile management using JWT or OAuth.

Shopping Cart & Checkout: Intuitive cart management with real-time updates and a smooth checkout process supporting multiple payment methods.

Order Management: Users can view their order history, track shipments, and receive notifications.

Admin Dashboard: Allows store managers to add/edit products, manage inventory, process orders, and view sales analytics.

Mobile-First Design: Fully responsive UI optimized for desktops, tablets, and smartphones.

Performance & SEO: Fast loading times, optimized images, and SEO-friendly URLs to enhance discoverability.

Security: Implemented HTTPS, data validation, and secure storage of sensitive user information.

This build ensures a scalable and maintainable codebase with modular components, reusable styles, and a clear folder structure. The project is deployed on a reliable platform (like Vercel, Netlify, or AWS) to guarantee uptime and fast delivery.

`,
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <CartContextProvider>
            <Header />
            {children}
            <Footer />
          </CartContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
