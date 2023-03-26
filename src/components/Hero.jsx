import React from "react";
import { Clip, SocailLink } from "./utils";

const Hero = ({ title, subtitle, img, btntext, videos, sociallinks }) => {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        {/* blue section background  */}
        <div className="bg-theme clip-path h-[85vh] lg:h-[75] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
        {/* text image videos and links  */}
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          {/* tex videos and links  */}
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            {/* titles  */}

            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {subtitle}
            </h1>
            <button
              type="button"
              className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5"
            >
              {btntext}
            </button>
            {/* videos  */}
            <div className="absolute grid items-center gap-5 md:gap-3 top-[46vh] lg:top-[27vh] left-[7%] xl:left-0 w-auto h-auto">
              {videos.map((val, i) => {
                return <Clip key={i} {...val} />;
              })}
            </div>
            {/* links  */}
            <div className="absolute grid items-center gap-3 top-[56vh] lg:top-[27vh] right-0 w-auto h-auto">
              {sociallinks.map((link, id) => {
                return <SocailLink {...link} key={id} />;
              })}
            </div>
          </div>
          {/* image */}
          <div className="mt-9">
            <img
              src={img}
              alt="hero image"
              className="w-auto h-[42vh] lg:h-[32vh] md:h-[28vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
