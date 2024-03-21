// const express = require("express");
// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);

// //Se especifica la ruta con la cual se va a cinectar con MongoDB
// const MONGO_URL = "mongodb://mongo:27017/inte";

// const app = express();

// // Configuración del middleware de sesión
// //Middle ware, es decir una funcion que tiene acceso tanto al req como al res
// app.use(
//   session({
//     secret: "bravitos123",
//     resave: true,
//     saveUninitialized: true,
//     store: new MongoDBStore({
//       uri: MONGO_URL,
//       collection: "sessions",
//     }),
//   })
// );

// app.get("/", (req, res) => {
//   req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
//   res.send(`hello world 5a: ${req.session.cuenta}`);
// });

// // Función anónima para indicar al servidor el puerto que va a estar escuchando
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const MONGO_URL = "mongodb+srv://hectorjosediazsandate:hector0303@cluster0.e2xbkxs.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(
  session({
    secret: "bravitos123",
    resave: true,
    saveUninitialized: true,
    store: new MongoDBStore({
      uri: MONGO_URL,
      collection: "sessions",
    }),
  })
);

app.get("/", (req, res) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
  res.send(`hello world 5a: ${req.session.cuenta}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
