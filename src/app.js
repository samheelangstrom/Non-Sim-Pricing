const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

const app = express(); // ✅ This line was missing
const PORT = process.env.PORT || 10000; // ✅ This line was also missing

app.use(express.json());
app.use(morgan("dev"));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
