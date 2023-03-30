import * as dotenv from "dotenv";
dotenv.config();

import * as cors from "cors";
import * as express from "express";
import * as tracer from "tracer";

import * as Sentry from "@sentry/node";

import config from "./config/Config";
import * as DB from "./helpers/DbHelper";
import router from "./routers/index";

Sentry.init({
  dsn: config.SENTRY_DSN,
  environment: config.NODE_ENV,
  tracesSampleRate: 1.0,
});

const logger = tracer.colorConsole();

export const app = express();

app.set("port", config.PORT || 8080);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req: any, res, buf) {
      if (req.originalUrl.startsWith("/v1/payment/webhook")) {
        req.rawBody = buf.toString();
      }
    },
  })
);

app.get("/", (req, res) => {
  Sentry.captureMessage(" Root APi called MongoDB.");
  res.send("Crr Web App Backend Running ...");
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

app.use((req, res, next) => {
  res.status(404).end();
});

DB.connect()
  .then((result) => {
    Sentry.captureMessage(" Initializing MongoDB.");
    app.listen(app.get("port"), () => {
      logger.info(`CRR Web App backend listening on port ${app.get("port")}.`);
    });
  })
  .catch((err) => {
    Sentry.captureMessage("error in db Connection---> " + err.message);
    console.log("error in db Connection---> ", err.message);
  });

export default app;
