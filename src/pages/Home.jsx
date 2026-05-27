import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" flex min-h-full min-w-full justify-center overflow-x-hidden ">
      <section
        id="heroSection"
        style={{
          backgroundImage: `url(/Images/birria-eggrolls.jpeg)`,
        }}
        className="bg-cover bg-center bg-no-repeat min-h-[50vh] relative p-1"
      >
        {/* Overlay — sibling to content, not a wrapper */}
        <div className="absolute inset-0 bg-black/50" />

        <div
          id="heroContainer"
          className="relative flex flex-col h-full justify-center items-center text-center gap-5"
        >
          <div id="hero-eyebrow" className="text-6xl text-center text-white">
            Made daily with amor
          </div>

          <p className="text-3xl text-white text-center">
            Experience the flavors of traditional Mexican cooking with fresh
            ingredients and authentic recipes. We are a seed oil free kitchen.
          </p>
          <Link to="/menu">
            <button className="bg-green-500 hover:bg-stone-300 text-white font-bold py-4 px-7 rounded m-5">
              Order now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
