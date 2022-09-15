import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import appRoute from "./routes/appRoute";

const PORT = process.env.PORT || 5000;

app.use("/", appRoute);

app.listen(PORT, () => console.log(`⚡Server is running on http://localhost:${PORT}/`));
