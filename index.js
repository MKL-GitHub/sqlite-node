const express = require("express");
const sequelize = require("./sequelize");
const userRoutes = require("./routes/user.route");

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

sequelize.sync().then((res) => {
  console.log("Sequelize res", res);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
