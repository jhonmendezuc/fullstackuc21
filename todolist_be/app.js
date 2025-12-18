import express, { json } from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoute.js";
import userRoutes from "./routes/userRoute.js";
import cors from "cors";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
//midleware formato json
app.use(json());

//midleware para rutas
app.use("/task", taskRoutes);
app.use("/user", userRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
