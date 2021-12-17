import React from "react";
import Footer from "./Footer";
import Navbar from "./Navigation";
import BackGroundCover from "./backGroundCover";
import AboutMe from "./AboutMe";
import BlogSection from "./BlogSection";
import CarouselSection from "./CarouselSection";

function App() {
  return (
    <div>
      <Navbar transparent={true} />
      <main>
        <div className="relative flex content-center items-center justify-center min-h-screen" id="home">
          <BackGroundCover />
        </div>
        <AboutMe />
        <BlogSection />
        <CarouselSection/>
        <Footer />
      </main>
    </div>
  );
}

export default App;
