// src/data/menuData.js

const menuData = {
  storeName: "Carolina's Mexican Kitchen",

  note: "All plates come with a side of rice & beans",
  sections: [
    {
      category: "Botanas / Appetizers",
      items: [
        {
          name: "Shrimp Ceviche",
          description:
            "Half a pound of lime marinated shrimp with cucumber, tomato, onion, cilantro & jalapeños",
          price: 11.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Birria Eggrolls",
          description:
            "3 Eggrolls stuffed with Birria & mozzarella cheese. Topped with crema, green salsa, cilantro, onion & cotija cheese. Served with consome",
          price: 16.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Queso Fundido",
          description:
            "A mix of Oaxaca & mozzarella cheese melted in a cast iron skillet. Topped with onion, jalapenos & chorizo. Served with totopos or tortillas",
          price: 14.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Chips & Guacamole",
          description:
            "Avocado prepared with tomato, onion, jalapeño, cilantro & lime. Served with totopos",
          price: 7.95,
          vegetarian: true,
          vegan: true,
        },
        {
          name: "Endless Chips & Salsa",
          description:
            "Totopos with a mild salsa. Spicy red salsa available per request. Spicy salsa is not vegan or vegetarian",
          price: 5.95,
          vegetarian: true,
          vegan: true,
        },
        {
          name: "Chips, Salsa & Guac",
          description:
            "Totopos with a mild salsa and guacamole. Spicy red salsa available per request",
          price: 12.95,
          vegetarian: true,
          vegan: true,
        },
        {
          name: "3 Cochinitos / 3 Little Pigs",
          description:
            "3 Chorizo & potato taquitos topped with crema, cabbage, tomato salsa, mild green salsa & cotija cheese",
          price: 12.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Tinga Tostada",
          description:
            "Chicken tinga topped with beans, crema, cabbage, tomato salsa, mild green salsa & cotija cheese",
          price: 8.95,
          vegetarian: false,
          vegan: false,
        },
      ],
    },
    {
      category: "Y Mas!",
      items: [
        {
          name: "Birria Nachos",
          description:
            "Homemade tortilla chips loaded with Birria. Topped with mozzarella cheese, crema, green mild salsa, cotija cheese, onion, cilantro & lime",
          price: 20.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Carolina's Famous Camarones A La Diabla",
          description:
            "Shrimp with a spicy chipotle butter based sauce. Served with rice, salad & corn tortillas",
          price: 24.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Camarones Al Mojo De Ajo",
          description:
            "Shrimp with a garlic butter sauce. Served with rice, salad & corn tortillas",
          price: 24.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Carne En Su Jugo",
          description:
            "Bowl of beef stew topped with beans, bacon & onion. Served with corn or flour tortillas. (Upon Availability Thursday-Saturday)",
          price: { cup: 10.95, bowl: 18.95 },
          vegetarian: false,
          vegan: false,
        },
      ],
    },
    {
      category: "Platos",
      items: [
        {
          name: "My Mom's Tacos",
          description:
            "3 Hard shell tacos filled with seasoned ground beef. Topped with crema, cabbage, tomato salsa, mild green salsa & cotija cheese. Add an extra Taco +$4.50",
          price: 17.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Tinga Tacos",
          description:
            "3 Hard shell tacos filled with Chicken Tinga & beans. Topped with crema, cabbage, tomato salsa, mild green salsa & cotija cheese. Add an extra Taco +$4.50",
          price: 17.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Chilaquiles Rojos o Verdes",
          description:
            "Choice of Red or Green chilaquiles topped with crema, cilantro, onion and cotija cheese. Add 2 eggs +$3.50. Load it with Birria, Tinga or Mom's meat +$4.00",
          price: 14.95,
          vegetarian: true,
          vegan: false,
        },
        {
          name: "Taquitos Dorados",
          description:
            "3 Chorizo & potato taquitos topped with crema, cabbage, tomato salsa, mild green salsa & cotija cheese. Load it with Birria, Tinga or Mom's meat",
          price: 16.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Enfrijoladas",
          description:
            "3 Tortillas smothered in beans and topped with crema, salsa, onion, cilantro, cotija cheese & avocado",
          price: { cheese: 16.95, chicken: 18.95 },
          vegetarian: true,
          vegan: false,
        },
        {
          name: "Enchiladas Estilo Michoacan",
          description:
            "3 Red cheese enchiladas topped with crema, cabbage, tomato salsa, mild green salsa & cotija cheese. Load it with Birria, Tinga or Mom's meat +$4.00",
          price: 19.95,
          vegetarian: true,
          vegan: false,
        },
        {
          name: "Birria Plate",
          description:
            "Half a pound of Birria topped with onion, cilantro, mild green salsa & lime. Comes with a bolillo or tortillas",
          price: 21.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Queso Birria Tacos",
          description:
            "3 tacos filled with Birria, mozzarella cheese, onion, cilantro, mild green salsa & lime. Add an extra Taco +$4.00",
          price: 20.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Papa's Birria Tacos",
          description:
            "3 Hard shell tacos filled with Birria. Topped with crema, cabbage, cotija cheese, onion & cilantro. Add an extra Taco +$4.00",
          price: 19.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Taco Trio",
          description:
            "3 Hard shell tacos. Includes one Moms Taco, one Tinga Taco & one Papa's taco",
          price: 19.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Papa's Baja Shrimp Tacos",
          description:
            "3 Tacos filled with our camarones a la diabla. Topped with crema, cabbage, mild green salsa & lime",
          price: 24.95,
          vegetarian: false,
          vegan: false,
        },
        {
          name: "Papa's Carne Asada Plate",
          description:
            "Half a pound of carne asada. Served with grilled nopal, onion, slice of panela cheese, a jalapeño toreado & choice of corn tortillas or flour",
          price: 24.95,
          vegetarian: false,
          vegan: false,
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        { name: "Cremita de Coco", price: 6.95 },
        { name: "Agua Fresca", price: 5.0 },
        { name: "Mexican Soda", price: 5.0 },
        { name: "Coconut Water", price: 5.0 },
        { name: "Jarritos", price: 4.0 },
        { name: "Canned Soda", price: 3.0 },
      ],
    },
  ],
};
export default menuData;
