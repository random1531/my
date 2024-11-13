const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
require("dotenv").config();


const app = express(); 

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes); 

app.listen(process.env.PORT, () => {
  console.log(`Serveur démarré sur le port ${process.env.PORT}`);
});
