import { Router } from "express";
import loginRouter from "./router_login.js";
import pageError from "../middleware/errorHandler.js";
import Notfound from "../middleware/notFound.js";
import { routerEmailSMS } from "./router_email_sms.js";
const router = Router();
router.use("/auth",loginRouter);
router.use("/send",routerEmailSMS);
router.use(pageError);
router.use(Notfound);

export default router;