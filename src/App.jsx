import React from "react";
import { Hero, Sales } from "./components";
import { heroapi, popularsales,toprateslaes } from "./data/data";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero {...heroapi} />
        <Sales {...popularsales} isExists/>
        <Sales {...toprateslaes} />
      </main>
    </>
  );
};

export default App;
