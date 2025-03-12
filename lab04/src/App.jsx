import React from "react";
import Header from "./components/Header";
import AnnouncementBar from "./components/AnnoucementBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="mid-layout">
          <div className="main-content">
            {/* <AnnouncementBar /> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
