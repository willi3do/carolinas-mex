import { Link } from "react-router-dom";
import HeroSlides from "../components/HeroSlides.jsx";

export default function Home() {
  const favoritesSection = [
    { id: 1, name: "Birria Egg Rolls", image: "/Images/birriaEggRolls1.png" },
    { id: 2, name: "Ceviche", image: "/Images/ceviche.png" },
    { id: 3, name: "key Lime Pie", image: "/Images/keyLimePie.png" },
    {
      id: 4,
      name: "Quesa Birria Tacos",
      image: "/Images/quesaBirriaTacos.png",
    },
    { id: 5, name: "Cremita De Coco", image: "/Images/cremitaDeCoco.png" },
    { id: 6, name: "Carne Asada Plate", image: "/Images/asadaPlate1.png" },
  ];
  return (
    <div className=" flex flex-col min-h-full min-w-full justify-center items-center overflow-x-hidden bg-amber-600">
      <HeroSlides />
      {/* <section
        id="heroSection"
        style={{
          backgroundImage: `url(/Images/birria-eggrolls.jpeg)`,
        }}
        className="bg-cover bg-center bg-no-repeat min-h-[50vh] relative p-1"
      >
        <div className="absolute inset-0 bg-black/50" />

        <div
          id="heroContainer"
          className="relative flex flex-col h-full justify-center items-center text-center gap-5 pt-25"
        >
          <div id="hero-eyebrow" className=" text-6xl text-center text-white">
            Made daily with amor
          </div>

          <p className="text-3xl text-white text-center ">
            Experience the flavors of traditional Mexican cooking with fresh
            ingredients and authentic recipes. We are a seed oil free kitchen.
          </p>
          <Link to="/menu">
            <button className="bg-green-500 hover:bg-stone-300 text-white font-bold py-4 px-7 rounded m-5">
              Order now
            </button>
          </Link>
        </div>
      </section> */}

      <section id="favoritesSection" className="bg-amber-500 p-10">
        <h1 className="text-5xl text-center font-bold mb-10">
          Popular Menu Items
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
          {favoritesSection.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-1 ">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-50 border-6 object-cover rounded-lg hover:scale-110 "
              />
              <p className="text-2xl font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="aboutRestaurant">
        From our familia to yours. My family immigrated from Michoacán, Mexico,
        and no matter how much or how little we had, there was always a
        homecooked meal made with love. Carolina’s was born from that same
        spirit — authentic, from-scratch cooking passed down from the women who
        raised me. Every dish is made with the freshest ingredients, the highest
        quality meats, and zero seed oils. Siempre hecho con amor. 🤍
      </section>

      <section id="reviewsAndTestimonials">
        {/* Reviews and testimonials content would go here */}
      </section>

      <section id="locationAndHours"></section>

      <section id="footer"></section>
    </div>
  );
}
