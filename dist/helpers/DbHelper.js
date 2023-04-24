"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose = require("mongoose");
const Config_1 = require("../config/Config");
const tracer = require("tracer");
const logger = tracer.colorConsole();
const DB_URI = Config_1.default.DBURI;
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
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
                .catch((err) => {
                logger.info("MongoDB connection error. Please make sure MongoDB is running. " +
                    err);
                reject(err);
            });
        });
    });
}
exports.connect = connect;
function close() {
    return mongoose.disconnect();
}
