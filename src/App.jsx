import React from "react";

import {
  Cart,
  FlexContaint,
  Footer,
  Hero,
  Navbar,
  Sales,
  Stories,
} from "./components";
import {
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />

      <main className="flex flex-col gap-16 relative">
        <Hero />
        <Sales endpoint={popularsales} ifExists />
        <FlexContaint endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContaint endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
