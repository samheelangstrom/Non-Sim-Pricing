const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

app.use(express.json());
app.use(morgan("dev"));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

