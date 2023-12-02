import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import "./loadEnvironment.js";
import router from "./routes/routes.js";
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors({
    origin: ['*'],
    methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-type', 'Authorization', 'Origin', 'Access-Control-Allow-Origin', 'Accept', 'Options', 'X-Requested-With']
}));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req) => {
    console.log({ req, headers: req.headers, creds: req.credentials });
});
app.options('*', cors());
app.use('/api', router);
// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
//# sourceMappingURL=index.js.map