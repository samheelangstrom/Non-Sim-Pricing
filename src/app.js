const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const config = require("./config");

const app = express();
const PORT = config.port;

app.use(express.json());
app.use(morgan("dev"));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

module.exports = app;
