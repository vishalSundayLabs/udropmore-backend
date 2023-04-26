import * as mongoose from "mongoose";
import config from "../config/Config";
import * as tracer from "tracer";

const logger = tracer.colorConsole();
const DB_URI: string = config.DBURI;

export async function connect() {

  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URI, {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => {
        logger.info(`Database Connected`);
        resolve(true);
      })
      .catch((err: any) => {
        logger.info(
          "MongoDB connection error. Please make sure MongoDB is running. " +
          err
        );
        reject(err);
      });
  });

}

function close() {
  return mongoose.disconnect();
}
