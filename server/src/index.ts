import dotenv from "dotenv";
dotenv.config();

import express from "express";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", routes);

app.listen(PORT, () => {
  return console.log(`Express is listening at PORT:${PORT}`);
});
