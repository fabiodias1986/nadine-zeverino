'use client';

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();


  const isSalesPage = pathname.includes('/legal-point') || pathname.includes('/bio');

  return (
    <>
      {!isSalesPage && <Navbar />}
      <main>{children}</main>
      {!isSalesPage && <Footer />}
    </>
  );
}