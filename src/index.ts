import express from "express";
import compression from "compression"
import cookieParser from "cookie-parser"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors";

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