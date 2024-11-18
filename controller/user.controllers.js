const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) return res.status(400).send("Cet email existe déjà");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) return res.status(400).send("Email ou mot de passe incorrect");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).send("Email ou mot de passe incorrect");

    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Connecté",
      token: token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        accountType: user.accountType,
        name: user.name,
        prenom: user.prenom,
        adresse: user.adresse,
        ville: user.ville,
        pays: user.pays,
        countmonth: user.countmonth,
        microentrepriseId: user.microentrepriseId,
      },
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const {
    username,
    email,
    password,
    accountType,
    name,
    prenom,
    siret,
    adresse,
    ville,
    pays,
  } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (!user) return res.status(400).send("Utilisateur non trouvé");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        username,
        email,
        password: hashedPassword,
        accountType,
        name,
        prenom,
        siret,
        adresse,
        ville,
        pays,
      },
    });
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
