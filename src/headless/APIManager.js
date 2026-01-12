const APIManager = (props, { getState, setState }) => {
     let timeOut;
     const username = "boymelvs";
     const password = "17Portfolio17$$";
     const token = btoa(`${username}:${password}`);

     return {
          api: {
               formContactSubmit: (message) => formContactSubmit(message),
               secret: () => secret(),
               validate: () => validate(),
               chatBox: (message) => chatBox(message),
          },
     };

     async function formContactSubmit(message) {
          message.source = "melvin-portfolio";

          try {
               const res = await fetch("https://n8n.mnfm.cloud/webhook/melvin-portfolio", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                         Authorization: `Basic ${token}`,
                    },
                    body: JSON.stringify(message),
               });

               if (!res.ok) {
                    console.log("test", res);
                    throw new Error(`HTTP error! Status: ${res.status}`);
               }

               const data = await res.json();

               if (data.success) {
                    reset();
                    setTimeout(() => {
                         setState("messageSent", false);
                    }, 3000);
               }
          } catch (error) {
               console.error(error);
               setState("spinner", false);
               setState("messageError", "Server is Busy! Try again later");
          }
     }

     function secret() {
          return { username, password };
     }

     function validate() {
          const errors = {};
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          const name = getState("name", "");
          const email = getState("email", "");
          const goal = getState("goal", "");
          const message = getState("message", "");

          if (timeOut) {
               clearTimeout(timeOut);
          }

          timeOut = setTimeout(() => {
               if (!name) errors.name = "❌ Full Name is required!";
               setState("errors.name", errors.name);

               if (!pattern.test(email)) errors.email = "❌Valid email is required!";
               setState("errors.email", errors.email);

               if (!goal) errors.goal = "❌ Subject is required!";
               setState("errors.goal", errors.goal);

               if (!message) errors.message = "❌ Message is required!";
               setState("errors.message", errors.message);
          }, 500);

          return Object.keys(errors).length === 0;
     }

     function reset() {
          setState("name", "");
          setState("email", "");
          setState("goal", "");
          setState("message", "");
          setState("messageSent", true);
          setState("spinner", false);
     }

     function generateId() {
          return `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
     }

     async function chatBox(message) {
          message.source = "melvin-portfolio";
          console.log(message);

          try {
               const res = await fetch("https://mnfm.cloud/webhook-test/demo-chatbot", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                         Authorization: `Basic ${token}`,
                    },
                    body: JSON.stringify(message),
               });

               if (!res.ok) {
                    console.log("test", res);
                    throw new Error(`HTTP error! Status: ${res.status}`);
               }

               const data = await res.json();

               if (data.success) {
                    console.log(data);

                    setState("botReply", "");
               }
          } catch (error) {
               console.error(error);
               setState("messageError", "Server is Busy! Try again later");
          }
     }
};

export default APIManager;
