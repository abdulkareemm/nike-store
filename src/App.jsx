import React from "react";
import { FlexContent, Hero, Sales, Stories } from "./components";
import { heroapi, popularsales,toprateslaes,highlight,sneaker,story } from "./data/data";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero {...heroapi} />
        <Sales {...popularsales} isExists />
        <FlexContent {...highlight} isExists />
        <Sales {...toprateslaes} />
        <FlexContent {...sneaker} />
        <Stories {...story}/>
      </main>
    </>
  );
};

export default App;
