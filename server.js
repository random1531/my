const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./middleware/passportConfig'); // Importe la configuration de passport

const app = express();

// Configurer les sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Initialiser passport et la session
app.use(passport.initialize());
app.use(passport.session());

app.listen(process.env.PORT, () => {
    console.log(`Serveur démarré sur le port ${process.env.PORT}`);
});


