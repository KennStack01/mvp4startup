import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />

      <main className="flex-1 lg:container px-4 py-3 md:px-6 md:py-8 overflow-auto mx-auto">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
