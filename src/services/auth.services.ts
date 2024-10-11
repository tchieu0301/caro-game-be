import User from "../models/user.model";
import bcrypt from "bcrypt";

class AuthService {
  static async register(username: string, password: string) {
    try {
      if (!username || !password)
        throw new Error("Username or password is empty");
      const isExisted = await User.findOne({ username: username });
      if (isExisted) throw new Error("Username is existed");
      const hashedPassword = await bcrypt.hash(
        password,
        parseInt(process.env.SALT_ROUNDS as string)
      );
      const user = new User({ username: username, password: hashedPassword });
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  }
  async login(username: string, password: string) {
    return true;
  }
  async logout() {
    return true;
  }
  async refreshToken() {
    return true;
  }
  async forgotPassword(email: string) {
    return true;
  }
  async resetPassword(token: string, password: string) {
    return true;
  }
  async changePassword(oldPassword: string, newPassword: string) {
    return true;
  }
}

export default AuthService;
