const express = require("express");
const compression = require("compression");
const cookieParser = require("cookieParser");
const morgan = require("morgan");
const cors = require("cors");
import helmet from "helmet";

import "./loadEnvironment.js";
import router from "./routes/routes.js";


const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors({
  origin: ['http://localhost:3000/', 'http://localhost:3001/', 'https://kmkingdon.info/']
}));
app.use(compression())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(helmet())
app.use(cookieParser())
app.use(morgan("dev"))

app.use('/api', router);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});