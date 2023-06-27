import { config } from "dotenv";
config();
import app from "./app.js";

const { PORT } = process.env;

app.listen(PORT || 3000, () => {
  console.log(`Server running. Use our API on port: ${PORT || 3000}`);
});
