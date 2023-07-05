"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const tracer = require("tracer");
const Config_1 = require("./config/Config");
const DB = require("./helpers/DbHelper");
const index_1 = require("./routers/index");
const fileUpload = require('express-fileupload');
const cronjob_1 = require("./utils/cronjob");
const bodyParser = require("body-parser");
const logger = tracer.colorConsole();
exports.app = express();
exports.app.set("port", Config_1.default.PORT || 8080);
exports.app.use(cors());
exports.app.use(express.json());
exports.app.use(bodyParser.urlencoded({ extended: true }));
exports.app.get("/", (req, res) => {
    res.send("Web App Backend Running ...");
});
exports.app.use(fileUpload({
    useTempFiles: true
}));
if (Config_1.default.NODE_ENV === "development") {
    exports.app.use(express.text());
    exports.app.use((req, res, next) => {
        logger.trace(`${req.method} ${req.url}`);
        if ((/json/i.test(req.headers["content-type"]) &&
            Object.keys(req.body).length > 0) ||
            req.body.length > 0) {
            logger.debug(req.body);
        }
        next();
    });
}
exports.app.use(index_1.default);
DB.connect()
    .then((result) => {
    exports.app.listen(exports.app.get("port"), () => {
        logger.info(` Web App backend listening on port ${exports.app.get("port")}.`);
    });
    (0, cronjob_1.cronJobForChangesStatus)();
})
    .catch((err) => {
    console.log("error in db Connection---> ", err.message);
});
exports.default = exports.app;
