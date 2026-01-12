const Map = (props, context) => {
     return {
          section: {
               id: "location",
               className: "location",
               children: [
                    {
                         div: {
                              className: "location-container",
                              children: [
                                   // Header
                                   {
                                        div: {
                                             className: "location-header",
                                             children: [
                                                  {
                                                       span: {
                                                            className: "badge location-badge",
                                                            children: [
                                                                 {
                                                                      i: { className: "fas fa-map-marker-alt" },
                                                                 },
                                                                 " Location",
                                                            ],
                                                       },
                                                  },
                                                  { h2: { className: "location-title", text: "Find Us Here" } },
                                                  {
                                                       p: {
                                                            className: "location-subtitle",
                                                            text: "Visit us at our cozy location in the heart of Manila",
                                                       },
                                                  },
                                             ],
                                        },
                                   },

                                   // Map + Info Card
                                   {
                                        div: {
                                             className: "map-card",
                                             children: [
                                                  // Google Maps Embed
                                                  {
                                                       div: {
                                                            className: "google-maps",
                                                            children: [
                                                                 {
                                                                      iframe: {
                                                                           title: "Lola's Kitchen Location",
                                                                           src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154448.981!2d120.9342!3d14.5995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1736543210000",
                                                                           className: "maps",
                                                                           allowFullscreen: true,
                                                                           loading: "lazy",
                                                                           referrerPolicy: "no-referrer-when-downgrade",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  // Address Info
                                                  {
                                                       div: {
                                                            className: "address",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "address-card",
                                                                           children: [
                                                                                {
                                                                                     div: {
                                                                                          className: "address-pin",
                                                                                          children: [{ i: { className: "fas fa-map-marker-alt" } }],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     div: {
                                                                                          className: "address-info",
                                                                                          children: [
                                                                                               {
                                                                                                    h3: {
                                                                                                         className: "address-title",
                                                                                                         text: "Lola's Kitchen",
                                                                                                    },
                                                                                               },
                                                                                               {
                                                                                                    p: {
                                                                                                         className: "address-text",
                                                                                                         children: [
                                                                                                              { p: { text: "123 Mabini Street, Ermita" } },
                                                                                                              { p: { text: "Manila, Metro Manila 1000" } },
                                                                                                              { p: { text: "Philippines" } },
                                                                                                         ],
                                                                                                    },
                                                                                               },
                                                                                               {
                                                                                                    p: {
                                                                                                         className: "office-hour",
                                                                                                         text: "Open Daily: 10:00 AM - 9:00 PM",
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
                                   },
                              ],
                         },
                    },
               ],
          },
     };
};

export default Map;
