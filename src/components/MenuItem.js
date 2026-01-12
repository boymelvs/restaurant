const MenuItem = (props, context) => {
     const { name, description, price, badge, image } = props.item;

     return {
          div: {
               className: "card",
               children: () => [
                    // Image container
                    {
                         div: {
                              className: "card-img",
                              children: () => [
                                   {
                                        img: {
                                             src: image, // direct prop usage
                                             alt: name,
                                             className: "image-cover",
                                        },
                                   },
                              ],
                         },
                    },

                    // Content area
                    {
                         div: {
                              className: "menu-container",
                              children: () => [
                                   // Conditional badge
                                   ...(badge
                                        ? [
                                               {
                                                    span: {
                                                         className: "badge badge-secondary",
                                                         text: badge,
                                                    },
                                               },
                                          ]
                                        : []),

                                   // Name + price + description row
                                   {
                                        div: {
                                             className: "menu-content",
                                             children: () => [
                                                  {
                                                       div: {
                                                            className: "menu-item-container",
                                                            children: () => [
                                                                 {
                                                                      h3: {
                                                                           className: "menu-item-title",
                                                                           text: name,
                                                                      },
                                                                 },
                                                                 {
                                                                      p: {
                                                                           className: "menu-item-description",
                                                                           text: description,
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       span: {
                                                            className: "menu-item-price",
                                                            text: () => `₱${price}`,
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

export default MenuItem;
