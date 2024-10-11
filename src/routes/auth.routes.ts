import { Router } from "express";
import AuthController from "../controllers/auth.controllers";

const authRoute = Router();

// Route for registration
authRoute.post("/register", AuthController.register);

export default authRoute;
