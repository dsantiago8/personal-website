import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Diego Santiago — Developer Portfolio",
  description: "Personal website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar */}
        <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-semibold text-slate-800">Diego Santiago</div>
            <ul className="hidden md:flex space-x-6 text-slate-600 font-medium">
              <li>
                <a href="#about" className="hover:text-black transition">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-black transition">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
