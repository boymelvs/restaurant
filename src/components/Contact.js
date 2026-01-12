// Contact.js

const contactInfo = [
     {
          label: "Phone",
          value: "+63 912 345 6789",
          href: "#",
          icon: "fas fa-phone", // we'll map string to actual icon rendering
     },
     {
          label: "Email",
          value: "hello@lolaskitchen.ph",
          href: "#",
          icon: "fas fa-envelope",
     },
     {
          label: "WhatsApp",
          value: "+63 912 345 6789",
          href: "#",
          icon: "fab fa-whatsapp",
     },
];

const socialLinks = [
     {
          name: "Facebook",
          href: "https://facebook.com/lolaskitchenph",
          icon: "fab fa-facebook-f",
     },
     {
          name: "Instagram",
          href: "https://instagram.com/lolaskitchenph",
          icon: "fab fa-instagram",
     },
];

const Contact = (props, { getState }) => {
     return {
          section: {
               id: "contact",
               className: "contact",
               children: () => [
                    {
                         div: {
                              className: "contact-container",
                              children: () => [
                                   // Header
                                   {
                                        div: {
                                             className: "contact-header",
                                             children: () => [
                                                  {
                                                       span: {
                                                            className: "badge",
                                                            text: "Get in Touch",
                                                       },
                                                  },
                                                  {
                                                       h2: {
                                                            className: "contact-title",
                                                            text: "Contact & Social",
                                                       },
                                                  },
                                                  {
                                                       p: {
                                                            className: "contact-subtitle",
                                                            text: "Reach out for orders, reservations, or just to say kamusta!",
                                                       },
                                                  },
                                             ],
                                        },
                                   },

                                   // Main grid
                                   {
                                        div: {
                                             className: "contact-info",
                                             children: () => [
                                                  // Left column - Contact info + Social
                                                  {
                                                       div: {
                                                            className: "info",
                                                            children: () => [
                                                                 // Contact cards
                                                                 ...contactInfo.map((item) => ({
                                                                      a: {
                                                                           href: item.href,
                                                                           className: "info-card",
                                                                           children: () => [
                                                                                {
                                                                                     div: {
                                                                                          className: "icon-container",
                                                                                          children: () => [
                                                                                               {
                                                                                                    p: {
                                                                                                         className: "icon",
                                                                                                         children: [
                                                                                                              {
                                                                                                                   i: {
                                                                                                                        className: item.icon,
                                                                                                                   },
                                                                                                              },
                                                                                                         ],
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: {
                                                                                          className: "label-value",
                                                                                          children: () => [
                                                                                               {
                                                                                                    p: {
                                                                                                         className: "label",
                                                                                                         text: item.label,
                                                                                                    },
                                                                                               },
                                                                                               {
                                                                                                    p: {
                                                                                                         className: "value",
                                                                                                         text: item.value,
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 })),

                                                                 // Social icons row
                                                                 {
                                                                      div: {
                                                                           className: "social-icon",
                                                                           children: () =>
                                                                                socialLinks.map((social) => ({
                                                                                     a: {
                                                                                          href: social.href,
                                                                                          target: "_blank",
                                                                                          rel: "noopener noreferrer",
                                                                                          className: "social-media-icon",
                                                                                          "aria-label": social.name,
                                                                                          children: () => [
                                                                                               {
                                                                                                    i: {
                                                                                                         className: social.icon,
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                     },
                                                                                })),
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  // Right column - CTA Card
                                                  {
                                                       div: {
                                                            className: "contact-cta-card",
                                                            children: () => [
                                                                 {
                                                                      h3: {
                                                                           className: "contact-cta-title",
                                                                           text: "Ready to Order?",
                                                                      },
                                                                 },
                                                                 {
                                                                      p: {
                                                                           className: "contact-cta-subtitle",
                                                                           text: "Message us on Facebook for orders, bulk meals, and catering services. We'd love to serve you!",
                                                                      },
                                                                 },
                                                                 {
                                                                      // Button simulation – JurisJS often uses <a> or custom button component
                                                                      a: {
                                                                           href: "https://m.me/lolaskitchenph",
                                                                           target: "_blank",
                                                                           rel: "noopener noreferrer",
                                                                           className: "btn fb-btn",
                                                                           text: "💬 Message Us on Facebook",
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

export default Contact;
