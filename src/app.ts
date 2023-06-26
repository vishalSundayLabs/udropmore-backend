import * as dotenv from "dotenv";
dotenv.config();

import * as cors from "cors";
import * as express from "express";
import * as tracer from "tracer";
import config from "./config/Config";
import * as DB from "./helpers/DbHelper";
import router from "./routers/index";
import { generateRandomProducts } from "./SeedData/product.seed";
import ProductModel from "./components/Product/ProductModel";
import { generateRandomUser } from "./SeedData/user.seed";
import UserModel from "./components/Users/UserModel";
import AuctionModel from "./components/Auction/AuctionModel";
import { generateRandomAuction } from "./SeedData/Auction.seed";
const bodyParser = require("body-parser");

const logger = tracer.colorConsole();

export const app = express();

app.set("port", config.PORT || 8080);

app.use(cors());

app.use(express.json());

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

// const products = generateRandomProducts(10);
// console.log(products);

// for (let i = 0; i < 9; i++) {
//     ProductModel.create(products[i])
//     console.log("line 37 ",i)
// }
//user create randomly
// const user = generateRandomUser()
// for (let i = 0; i < 10; i++) {
//   const user = generateRandomUser();
//   UserModel.create(user)
//   console.log("user created",user,i)
// }
//auction create randmoly

// for (let i = 0; i < 10; i++) {
//   const auctions = generateRandomAuction();
//   AuctionModel.create(auctions)
//   console.log("auction created",auctions,i)
// }



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
