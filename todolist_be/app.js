import express, { json } from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoute.js";
import userRoutes from "./routes/userRoute.js";
dotenv.config();
const app = express();

//midleware formato json
app.use(json());

//midleware para rutas
app.use("/task", taskRoutes);
app.use("/user", userRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
