import React from "react";
import { Title } from "./utils";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { truncate } from "lodash";

const Stories = ({ title, news }) => {
    const slideOptions = {
      perPage: 4,
      perMove: 1,
      type: "loop",
      rewind: true,
      keyboard: "global",
      gap: "1rem",
      pagination: false,
      padding: "2rem",
      breakpoints: {
        1200: { perPage: 3 },
        991: { perPage: 2.3 },
        768: { perPage: 2 },
        500: { perPage: 1.3 },
        425: { perPage: 1 },
      },
    };
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div className="mt-7">
          <Splide options={slideOptions}>
            {news.map((val, id) => {
              const { title, text, btn, by, img, url, like, time } = val;
              return (
                <SplideSlide key={id} className="mb-0.5 hover:scale-90">
                  <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                    <div className="flex items-center justify-center">
                      <img
                        src={img}
                        alt={`img/story/${id}`}
                        className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                      />
                    </div>
                    <div className="flex items-center justify-between w-full px-4 ">
                      <div className="flex items-center gap-0.5">
                        <HeartIcon className="icon-style text-red-600 w-5 h-5 " />
                        <span className="text-xs font-bold">{like}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <ClockIcon className="icon-style text-black w-4 h-4" />
                        <span className="text-xs font-bold">{time}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <HashtagIcon className="icon-style text-blue-600 w-4 h-4" />
                        <span className="text-xs font-bold text-blue-600">
                          {by}
                        </span>
                      </div>
                    </div>
                    <div className="grid items-center justify-items-start px-4">
                      <h1 className="text-base font-semibold lg:text-sm">
                        {title}
                      </h1>
                      <p className="text-sm text-justify lg:text-xs">{truncate(text,{length:175})}</p>
                    </div>
                    <div className="flex items-center justify-center px-4 w-full">
                      <a
                        href={url}
                        className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
                        target="_blank"
                        role="button"
                      >
                        {btn}
                      </a>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
