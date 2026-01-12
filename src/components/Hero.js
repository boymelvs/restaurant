const Hero = (props, { RouteManager }) => {
     return {
          section: {
               className: "hero-section",
               children: [
                    // Background
                    {
                         div: {
                              className: "hero-img-background",
                         },
                    },

                    // Overlay
                    {
                         div: {
                              className: "hero-overlay absolute inset-0 bg-black/40", // warm-overlay replacement
                         },
                    },

                    // Main content
                    {
                         div: {
                              className: "hero-content",
                              children: [
                                   {
                                        div: {
                                             children: [
                                                  {
                                                       span: {
                                                            className: "badge-established",
                                                            text: "🍲 Est. 2020",
                                                       },
                                                  },
                                             ],
                                        },
                                   },
                                   {
                                        h1: {
                                             className: "hero-title",
                                             text: "Lola's Kitchen",
                                        },
                                   },
                                   {
                                        p: {
                                             className: "hero-subtitle",
                                             text: "Authentic Filipino Cuisine in Manila",
                                        },
                                   },
                                   {
                                        p: {
                                             className: "hero-text",
                                             text: "Experience the warmth of home-cooked Filipino dishes, made with love using traditional family recipes passed down through generations.",
                                        },
                                   },
                                   {
                                        div: {
                                             className: "hero-ctas",
                                             children: [
                                                  {
                                                       a: {
                                                            href: "#menu",
                                                            className: "btn view-menu-btn",
                                                            text: "View Menu",
                                                            onClick: () => RouteManager.navigate("#menu"),
                                                       },
                                                  },
                                                  {
                                                       a: {
                                                            href: "#contact",
                                                            className: "btn contact-btn",
                                                            text: "Contact Us",
                                                            onClick: () => RouteManager.navigate("#contact"),
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

export default Hero;
