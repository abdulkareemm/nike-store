import React from "react";
import { FlexContent, Footer, Hero, NavBar, Sales, Stories } from "./components";
import { heroapi, popularsales,toprateslaes,highlight,sneaker,story,footerAPI } from "./data/data";

const App = () => {
  return (
    <>
    <NavBar />
      <main className="flex flex-col gap-16 relative">
        <Hero {...heroapi} />
        <Sales {...popularsales} isExists />
        <FlexContent {...highlight} isExists />
        <Sales {...toprateslaes} />
        <FlexContent {...sneaker} />
        <Stories {...story} />
      </main>
      <Footer {...footerAPI}/>
    </>
  );
};

export default App;
