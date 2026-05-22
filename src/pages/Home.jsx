// import birria from "/birriaEggRolls.jpg";
// import hero from "/images/hero.jpg";

export default function Home() {
  return (
    <div className=" flex min-h-full min-w-full justify-center overflow-x-hidden  bg-gray-500 mt-5">
      <div className="container border-orange-800 w-full">
        <section id="hero" className="text-center mb-4 bg-stone-400">
          <div id="hero-left">
            <div id="hero-eyebrow" className="text-md">
              {" "}
              Made daily with amor
            </div>
          </div>

          <p className=" text-sm text-gray-800">
            Experience the flavors of traditional Mexican cooking with fresh
            ingredients and authentic recipes. We are seed oil free kitchen.
          </p>
        </section>

        <div className="bg-white rounded-lg shadow-md p-6 mx-2 h-[50%] flex justify-center items-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-20 "></h2>
          <p className="text-3xl text-gray-600">
            Authentic Mexican cuisine made with love
          </p>
          {/* <img
              className="bg-red w-2xl object-cover-full"
              src={birria}
              alt="Birria egg rolls"
            /> */}
        </div>
      </div>
    </div>
  );
}
