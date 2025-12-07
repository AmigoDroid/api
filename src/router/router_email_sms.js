import { Router } from "express";
import  EmailController  from "../controller/email_sms_controller.js";
const routerEmailSMS = Router();
const emailController = EmailController;

routerEmailSMS.post("/email", emailController.enviar);
routerEmailSMS.post("/sms", emailController.enviarSMS);

export { routerEmailSMS };