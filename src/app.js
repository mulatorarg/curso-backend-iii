import express from "express";
import usersRoute from "./routers/users.router.js";
import mocksRoute from "./routers/mocks.router.js";
import viewsRoute from "./routers/views.router.js";
import { mongoConnection } from "./config/db.connection.js";
import config from "./config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRoute);
app.use("/api/mocks", mocksRoute);
app.use("/", viewsRoute);

const PORT = config.PORT;
const VERSION = config.VERSION;

mongoConnection();

const server = app.listen(PORT, () => {
  console.log(`✔ Servidor Listo. Escuchando en el puerto ${PORT}.`);
  console.log(`✔ Versión: ${VERSION}. Backend III - Comisión 69910. Campo Gabriel.`);
});
server.on("error", (err) => console.log(err));
