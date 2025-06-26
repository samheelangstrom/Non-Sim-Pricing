const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const { port } = require("./config");

const app = express();

const app = express(); // ✅ This line was missing
const PORT = process.env.PORT || 10000; // ✅ This line was also missing

app.use(express.json());
app.use(morgan("dev"));
app.use("/", routes);

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
