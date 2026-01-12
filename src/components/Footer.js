// Footer.js - JurisJS Footer Component

const Footer = (props, { getState }) => {
     return {
          footer: {
               className: "footer",
               children: () => [
                    {
                         div: {
                              className: "footer-container",
                              children: () => [
                                   {
                                        div: {
                                             className: "footer-content",
                                             children: () => [
                                                  // Brand / Logo
                                                  {
                                                       div: {
                                                            className: "footer-logo-container",
                                                            children: () => [
                                                                 {
                                                                      span: {
                                                                           className: "footer-logo",
                                                                           text: "🍲",
                                                                      },
                                                                 },
                                                                 {
                                                                      span: {
                                                                           className: "footer-title",
                                                                           text: "Lola's Kitchen",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  // Copyright
                                                  {
                                                       p: {
                                                            className: "copyright",
                                                            text: `© ${new Date().getFullYear()} Lola's Kitchen`,
                                                       },
                                                  },

                                                  // Navigation links
                                                  {
                                                       div: {
                                                            className: "footer-nav",
                                                            children: () => [
                                                                 {
                                                                      a: {
                                                                           href: "#menu",
                                                                           className: "hover:text-background transition-colors",
                                                                           text: "Menu",
                                                                      },
                                                                 },
                                                                 {
                                                                      a: {
                                                                           href: "#location",
                                                                           className: "hover:text-background transition-colors",
                                                                           text: "Location",
                                                                      },
                                                                 },
                                                                 {
                                                                      a: {
                                                                           href: "#contact",
                                                                           className: "hover:text-background transition-colors",
                                                                           text: "Contact",
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
                    },
               ],
          },
     };
};

export default Footer;
