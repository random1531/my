const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const microEntrepriseRoutes = require("./routes/microentreprise.routes");
const lignefactureRoutes = require("./routes/lignefacture.routes");
const factureRoutes = require("./routes/facture.routes");

require("dotenv").config();


const app = express(); 

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes); 
app.use('/api/microentreprise', microEntrepriseRoutes);
app.use('/api/lignefacture', lignefactureRoutes);
app.use('/api/facture', factureRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Serveur démarré sur le port ${process.env.PORT}`);
});

