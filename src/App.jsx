import React from "react";
import { FlexContent, Hero, Sales } from "./components";
import { heroapi, popularsales,toprateslaes,highlight,sneaker } from "./data/data";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero {...heroapi} />
        <Sales {...popularsales} isExists />
        <FlexContent {...highlight} isExists />
        <Sales {...toprateslaes} />
        <FlexContent {...sneaker} />
      </main>
    </>
  );
};

export default App;
