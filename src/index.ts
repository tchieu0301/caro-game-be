import express from "express";
import connectDB from "./configs/dbConnection.config";
import cors from "cors"; // Import cors
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoute from "./routes/auth.routes";

dotenv.config();

const app = express();

connectDB();
app.use(cors({
  origin: 'http://localhost:1000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json()); 

app.use("/v1/api/", authRoute);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
