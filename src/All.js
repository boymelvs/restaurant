import Hero from "./components/Hero.js";
import Menu from "./components/Menu.js";
import Map from "./components/Map.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

const All = (props, { getState, setState, juris }) => {
     juris.registerComponent("Hero", Hero);
     juris.registerComponent("Menu", Menu);
     juris.registerComponent("Map", Map);
     juris.registerComponent("Contact", Contact);
     juris.registerComponent("Footer", Footer);

     return [
          () => {
               return [{ Hero: {} }, { Menu: {} }, { Map: {} }, { Contact: {} }, { Footer: {} }];
          },
     ];
};

export default All;
