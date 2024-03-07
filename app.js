const express = require("express");
const timeout = require("express-timeout-handler");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.use("/api", apiRoutes);

app.use(
  timeout.handler({
    timeout: 30000,
    onTimeout: (req, res) => {
      console.log("TEST");
      res.status(503).send("Service unavailable. please retry");
    },
    disable: ["write", "setHeaders", "send", "json", "end"],
  })
);

app.listen(PORT, () => {
  console.log(`Server is running with port ${PORT}`);
});
