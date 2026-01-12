const RouteManager = (props, context) => {
     const { getState, setState } = context;

     return {
          hooks: {
               onRegister: () => {
                    window.addEventListener("scroll", handleScroll, { capture: true });
               },

               onUnregister: () => {
                    window.removeEventListener("scroll", handleScroll, { capture: true });
               },
          },

          api: {
               navigate: (href) => navigate(href),
               scrollUp: () => scrollUp(),
          },
     };

     function navigate(href) {
          window.history.pushState({}, "", href); // change url manually
          window.dispatchEvent(new PopStateEvent("popstate"));
          setState("link", href);
     }

     function scrollUp() {
          window.scrollTo(0, 0);
     }

     function handleScroll() {
          const home = document.getElementById("home") || "";
          const projects = document.getElementById("projects") || "";
          const contact = document.getElementById("contact") || "";

          if (window.scrollY >= home.offsetTop - home.clientHeight / 4) {
               setState("activeNavLink", "home");
          }

          if (window.scrollY >= projects.offsetTop - projects.clientHeight / 4) {
               setState("activeNavLink", "projects");
          }

          if (window.scrollY >= contact.offsetTop - contact.clientHeight / 4) {
               setState("activeNavLink", "contact");
          }
     }
};

export default RouteManager;
