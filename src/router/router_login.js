import { Router } from "express";
import { LoginController } from "../controller/login_controller.js";
const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Here you would normally validate the username and password
  if (username === "admin" && password === "password") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});
loginRouter.get("/login",loginController.login);

export default loginRouter;