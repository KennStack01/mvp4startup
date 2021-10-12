import React from "react";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <Header /> */}

      <main className="flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
        {props.children}
      </main>

      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
