/**
 * LoginRouter.ts
 */

import { Router } from "express";
import * as path from "path";
import * as loginController from "./LoginController";

const router = Router();

router.get("/", loginController.login);

export default router;
