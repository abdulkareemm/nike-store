import React from "react";

const Footer = ({ titles, links }) => {
  return (
    <>
      <footer className="bg-theme pt-7 bp-5 ">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((val, id) => {
              const { title } = val;
              return (
                <div className="grid items-center" key={id}>
                  <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                    {title}
                  </h1>
                </div>
              );
            })}
            {links.map((navlinks, id) => {
              return (
                <ul className="grid items-center gap-1" key={id}>
                  {navlinks.map((link, id) => {
                    return (
                      <li key={id} className="text-sm sm:text-xs">
                        {link.link}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup>All
              Reserved Rights 2022{" "}
              <span className="font-semibold">AKM DEVELOPERS</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
