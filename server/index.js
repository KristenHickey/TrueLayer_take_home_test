import "dotenv/config"
import express, { json } from "express";
import cors from "cors"
import router from "./router.js"

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(json());
app.use(router);

(function () {
  app.listen(PORT, () => {
    console.log('Server running on port', PORT)
  })
})()