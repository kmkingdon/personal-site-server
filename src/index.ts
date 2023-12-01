import express, {NextFunction, type Request, type Response} from "express";
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
  origin:'*',
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-type','Authorization','Origin','Access-Control-Allow-Origin','Accept','Options','X-Requested-With']
}));
app.use(compression())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(helmet())
app.use(cookieParser())
app.use(morgan("dev"))

let requestCntr = 0;
app.use((req, res, next) => {
    let thisRequest = requestCntr++;
    console.log(`${thisRequest}: ${req.method}, ${req.originalUrl}, `, req.headers);
    // watch for end of theresponse
    res.on('close', () => {
        console.log(`${thisRequest}: close response, res.statusCode = ${res.statusCode}, outbound headers: `, res.getHeaders());
    });
    next();
});

const allowCrossDomain = function(req:Request, res:Response, next:NextFunction) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');

  console.log('intercepting options')
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
      res.send(200);
  } else {
      next();
  }
};
app.use(allowCrossDomain);
app.options('*', cors()); 

app.use('/api', router);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});