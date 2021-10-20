import React from "react";
import Footer from "./Footer";
import Header from "./Header2";

export default function Layout(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <Header /> */}
      <Header />

      <main className="relative flex-1 lg:container px-4 py-3 mx-auto md:px-6 md:py-12 overflow-x-auto overflow-auto">
        {props.children}
      </main>

      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
