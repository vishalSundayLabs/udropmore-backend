import * as dotenv from "dotenv";
dotenv.config();

import * as cors from "cors";
import * as express from "express";
import * as tracer from "tracer";
import config from "./config/Config";
import * as DB from "./helpers/DbHelper";
import router from "./routers/index";
const bodyParser = require("body-parser");

const logger = tracer.colorConsole();

export const app = express();

app.set("port", config.PORT || 8080);

app.use(cors());

app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// app.use(express.json({}));

// app.use(express.json({limit: '13000mb'}));
// app.use(express.urlencoded({limit: '13000mb'}));

app.use(bodyParser.json({ limit: '12000mb',type:'application/json'}));

app.use(bodyParser.urlencoded({ limit: '12000mb', extended: true, parameterLimit: 50000,type:'application/x-www-form-urlencoded' }));

app.get("/", (req, res) => {
  res.send("Web App Backend Running ...");
});

if (config.NODE_ENV === "development") {

  app.use(express.text());

  app.use((req, res, next) => {

    logger.trace(`${req.method} ${req.url}`);

    if (

      (/json/i.test(req.headers["content-type"]) &&
        Object.keys(req.body).length > 0) ||
      req.body.length > 0

    ) {
      logger.debug(req.body);
    }

    next();

  });

}

app.use(router);

DB.connect()
  .then((result) => {
    app.listen(app.get("port"), () => {
      logger.info(` Web App backend listening on port ${app.get("port")}.`);
    });
  })
  .catch((err) => {
    console.log("error in db Connection---> ", err.message);
  });

export default app;
