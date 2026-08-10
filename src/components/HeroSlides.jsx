import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 0,
    title: "Main Hero",
    bg: "/Images/quesaBirria.png",
    CTA: "Experience the flavors of traditional Mexican cooking with fresh ingredients and authentic recipes. We are a seed oil free kitchen.",
    button: "Order now",
  },
  {
    id: 1,
    title: "Desert Hero",
    bg: "/Images/desertHero.svg",
    CTA: "A Sweet Ending Starts Here",
    description:
      "Homemade flan and key lime pie that hit the sweet spot every time.",
    button: "Order now",
  },
  {
    id: 2,
    title: "Papa's Coffecitos",
    popsLogo: "/Images/papa'sLogo.png",
    bg: "/Images/horchataLatte.png",
    CTA: "A Classic Flavor With A Coffee Twist",
    description: "Homemade paired with bold espresso in every cup.",
    button: "Cafecito Menu",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animate, setAnimate] = useState(false);
  const timeoutRef = useRef(null);

  const goTo = (index, dir) => {
    if (animate) return;
    setDirection(dir);
    setAnimate(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent(index);
      setAnimate(false);
      setDirection(null);
    });
  };

  const prev = () => {
    const index = (current - 1 + slides.length) % slides.length;
    goTo(index, "left");
  };

  const next = () => {
    const index = (current + 1) % slides.length;
    goTo(index, "right");
  };

  useEffect(() => clearTimeout(timeoutRef.current), []);

  return (
    <>
      <section
        id="heroSlideContainer"
        className=" w-screen  h-200 overflow-hidden flex flex-col items-center justify-center bg-accent-red relative border box-content "
      >
        {/* Slide content */}
        <divs
          key={current}
          className={`slide-track w-full h-full ${
            animate
              ? direction === "right"
                ? "exiting-to-left"
                : "exiting-to-right"
              : direction === "right"
                ? "entering-from-right"
                : direction === "left"
                  ? "entering-from-left"
                  : ""
          }`}
        >
          <div
            id="slideContent"
            style={{
              backgroundImage: `
              url(${slides[current].bg})`,
            }}
            className="w-full h-full bg-no-repeat flex flex-col gap-20 justify-center items-center text-1xl bg-cover bg-center relative"
          >
            <h1
              id="heroTitle"
              className="w-full h-50 text-center font-agbalumo text-9xl text-white [-webkit-text-stroke:2px_black] bg-accent-red "
            >
              {slides[current].title}
            </h1>
            {slides[current].popsLogo && (
              <img
                src={slides[current].popsLogo}
                alt="Papa's Coffecitos Logo"
                className="w-100 h-100 object-cover bg-emerald-800"
              />
            )}
            <div id="textContent" className=" w-auto h-auto flex-row ">
              <p className="text-black text-5xl font-bold font-agbalumo text-center bg-amber-300/80 ">
                {slides[current].CTA}
              </p>
              <p className="text-black text-4xl font-bold font-agbalumo text-center bg-amber-300/80 ">
                {slides[current].description}
              </p>
              {/* Nav arrows */}
            </div>

            {/* Slide counter */}
            {/* <div className="slide-counter ">
              <span className="active-num">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span>/ {String(slides.length).padStart(2, "0")}</span>
            </div> */}
          </div>
        </divs>
        <div className="nav-arrows w-full h-full flex items-center justify-between  z-40 p-5 bottom-1 absolute">
          <button
            className="nav-btn "
            onClick={prev}
            aria-label="Previous slide"
          >
            <img
              className="w-15 h-15 "
              src="/Images/leftArrow.svg"
              alt="Left Arrow"
            />
            {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M11 4L6 9l5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              /> */}
          </button>
          <button className="nav-btn" onClick={next} aria-label="Next slide">
            <img
              className="w-15 h-15 "
              src="/Images/rightArrow.svg"
              alt="Right Arrow"
            />
            {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M7 4l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
          </button>
        </div>
      </section>
    </>
  );
}
