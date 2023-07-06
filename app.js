const express = require("express");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running with port ${PORT}`);
});
