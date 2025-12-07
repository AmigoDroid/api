import { Router } from "express";
import { LoginController } from "../controller/login_controller.js";
const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post("/login",loginController.login);

export default loginRouter;