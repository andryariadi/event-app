"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// ..
AOS.init();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Pastikan bahwa AOS.init() dijalankan di sisi klien
    import("aos").then((aos) => {
      aos.init();
    });
  }, []);

  return (
    <div className="flex flex-col h-screen bg-transparent">
      <Header />
      <main className="flex-1 mt-[86px]">{children}</main>
      <Footer />
    </div>
  );
}
