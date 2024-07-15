import React from "react";

import Header from "@/components/commons/Header";
import Footer from "@/components/commons/Footer";

function Layout({children}) {
  return (
    <div className="w-full h-full min-h-screen relative">
      <Header />
      <main className="w-full pt-12">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
