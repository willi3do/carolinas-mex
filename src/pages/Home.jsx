// import birria from "../public/Images/birriaEggRolls.jpg";
// import hero from "/images/hero.jpg";

export default function Home() {
  return (
    <div className=" flex min-h-full min-w-full justify-center overflow-x-hidden  bg-gray-500 mt-5">
      <div className="container border-orange-800 w-full">
        <section id="hero" className="text-center mb-4 bg-stone-400">
          <div id="hero-left"></div>
        </section>

        <section
          id="heroSection"
          style={{ backgroundImage: `url(/Images/birria-eggrolls.jpeg)` }}
          className="bg-cover bg-center bg-no-repeat min-h-screen relative p-10 "
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div id="heroContainer" className="bg-black">
            <div id="hero-eyebrow" className="text-lg text-center text-white">
              {" "}
              Made daily with amor
            </div>

            <p className=" text-sm text-white">
              Experience the flavors of traditional Mexican cooking with fresh
              ingredients and authentic recipes. We are seed oil free kitchen.
            </p>
          </div>

          <div className=" rounded-lg shadow-md p-6 mx-2 h-[50%] flex justify-center items-center"></div>
        </section>
      </div>
    </div>
  );
}
