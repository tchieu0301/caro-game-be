import { Request, Response } from "express";
import AuthService from "../services/auth.services";

class AuthController {
  static async register(
    req: Request<{}, {}, { username: string; password: string }>,
    res: Response | any
  ) {
    try {
      const { username, password } = req.body;
      const user = await AuthService.register(username, password);
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(500).json({ message: "Registration failed", error: error.toString() });
    }
  }
}

export default AuthController;
