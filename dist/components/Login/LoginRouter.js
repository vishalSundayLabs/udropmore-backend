"use strict";
/**
 * LoginRouter.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController = require("./LoginController");
const router = (0, express_1.Router)();
router.get("/", loginController.login);
exports.default = router;
