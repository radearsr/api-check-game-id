const express = require("express");
const timeout = require("express-timeout-handler");
const apiRoutes = require("./routes/apiRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(
    "Request Time: ",
    `${new Date().toLocaleString()} ${new Date().getTime()}`
  );
  console.log(
    `${req.originalUrl} - ${req.method} - ${JSON.stringify(req.body)}`
  );
  next();
});

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
