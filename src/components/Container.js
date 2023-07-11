import React, { useState } from "react";
import Header from "./Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./Footer";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("About");
  /*Component that handles page switches*/
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;

      case "Contact":
        return <Contact />;

      case "Portfolio":
        return <Portfolio />;

      default:
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
