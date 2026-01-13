import MenuItem from "./MenuItem.js";

const menuItems = [
     {
          name: "Chicken Adobo",
          description: "Classic Filipino braised chicken in soy sauce, vinegar, garlic, and bay leaves. Served with steamed rice.",
          price: "185",
          badge: "Bestseller",
          image: "/assets/images/chicken-adobo.jpg",
     },
     {
          name: "Sinigang na Baboy",
          description: "Hearty pork soup with tamarind broth, vegetables, and a tangy-savory flavor you'll love.",
          price: "220",
          image: "/assets/images/sinigang.jpg",
     },
     {
          name: "Lechon Kawali",
          description: "Crispy deep-fried pork belly with a satisfying crunch. Served with liver sauce.",
          price: "245",
          badge: "Chef's Pick",
          image: "/assets/images/lechon-kawali.jpg",
     },
     {
          name: "Kare-Kare",
          description: "Rich oxtail stew in peanut sauce with bok choy, eggplant, and string beans. Includes bagoong.",
          price: "295",
          image: "/assets/images/kare-kare.jpg",
     },
     {
          name: "Pancit Canton",
          description: "Stir-fried egg noodles with vegetables, chicken, and shrimp in savory sauce.",
          price: "165",
          image: "/assets/images/pancit-canton.jpg",
     },
     {
          name: "Halo-Halo",
          description: "Iconic Filipino shaved ice dessert with sweet beans, jellies, leche flan, and ube ice cream.",
          price: "95",
          badge: "Must Try",
          image: "/assets/images/halo-halo.jpg",
     },
];

const Menu = (props, { getState, setState, juris }) => {
     juris.registerComponent("MenuItem", MenuItem);

     return {
          section: {
               id: "menu",
               className: "menu ",
               children: () => [
                    {
                         div: {
                              className: "menu-card ",
                              children: () => [
                                   // Header
                                   {
                                        div: {
                                             className: "menu-header",
                                             children: () => [
                                                  {
                                                       p: {
                                                            className: "badge",
                                                            text: "Our Specialties",
                                                       },
                                                  },
                                                  {
                                                       h2: {
                                                            className: "menu-title text-4xl md:text-5xl font-display font-bold text-foreground mb-4",
                                                            text: "Taste of Home",
                                                       },
                                                  },
                                                  {
                                                       p: {
                                                            className: "menu-subtitle",
                                                            text: "Every dish is prepared fresh with authentic recipes from our Lola's kitchen",
                                                       },
                                                  },
                                             ],
                                        },
                                   },

                                   // Menu items grid
                                   {
                                        div: {
                                             className: "menu-grid",
                                             children: () =>
                                                  menuItems.map((item, index) => ({
                                                       div: {
                                                            key: item.name,
                                                            className: "menu-item",
                                                            children: () => [
                                                                 {
                                                                      MenuItem: { item },
                                                                 },
                                                            ],
                                                       },
                                                  })),
                                        },
                                   },

                                   // menu note
                                   {
                                        div: {
                                             className: "price-notice",
                                             children: () => [
                                                  {
                                                       p: {
                                                            className: "price-notice-text",
                                                            text: "* Prices are subject to change. For complete menu, message us on Facebook.",
                                                       },
                                                  },
                                             ],
                                        },
                                   },
                              ],
                         },
                    },
               ],
          },
     };
};

export default Menu;
