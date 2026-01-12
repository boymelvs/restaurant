import All from "./src/All.js";
// import RouteManager from "./src/headless/RouteManager.js";
// import APIManager from "./src/headless/APIManager.js";

const jurisInstance = new Juris({
     logLevel: "warn",
     renderMode: "fine-grained",
     features: {
          headless: HeadlessManager,
     },

     headlessComponents: {
          // RouteManager: { fn: RouteManager, options: { autoInit: true } },
          // APIManager: { fn: APIManager, options: { autoInit: true } },
     },

     components: { All },

     layout: [{ All: {} }], //layout

     states: {},
});

jurisInstance.render("#app");
