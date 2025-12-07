import { Router } from "express";
import loginRouter from "./router_login.js";
import pageError from "../middleware/errorHandler.js";
import Notfound from "../middleware/notFound.js";
const router = Router();
router.use("/auth",loginRouter);
router.use(pageError);
router.use(Notfound);

export default router;