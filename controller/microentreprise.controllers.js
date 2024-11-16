const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Créer une nouvelle microentreprise
module.exports.register = async (req, res) => {
    const { siret, nom, adresse, ville, pays, codePostal, userIds } = req.body;
    try {
        const microEntreprise = await prisma.microEntreprise.create({
            data: {
                siret,
                nom,
                adresse,
                ville,
                pays,
                codePostal,
                users: {
                    connect: userIds.map(id => ({ id })),
                },
            },
            include: {
                users: true,
            },
        });
        res.status(201).send(microEntreprise);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Lire toutes les microentreprises
module.exports.getAll = async (req, res) => {
    try {
        const microEntreprises = await prisma.microEntreprise.findMany({
            include: {
                users: true,
                factures: true,
            },
        });
        res.status(200).send(microEntreprises);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Lire une microentreprise par ID
module.exports.getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const microEntreprise = await prisma.microEntreprise.findUnique({
            where: { id },
            include: {
                users: true,
                factures: true,
            },
        });
        if (microEntreprise) {
            res.status(200).send(microEntreprise);
        } else {
            res.status(404).send({ error: 'MicroEntreprise non trouvée' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Mettre à jour une microentreprise
module.exports.update = async (req, res) => {
    const { id } = req.params;
    const { siret, nom, adresse, ville, pays, codePostal, userIds } = req.body;
    try {
        const microEntreprise = await prisma.microEntreprise.update({
            where: { id },
            data: {
                siret,
                nom,
                adresse,
                ville,
                pays,
                codePostal,
                users: {
                    set: userIds.map(id => ({ id })),
                },
            },
            include: {
                users: true,
            },
        });
        res.status(200).send(microEntreprise);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Supprimer une microentreprise
module.exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const microEntreprise = await prisma.microEntreprise.delete({
            where: { id },
            include: {
                users: true,
            },
        });
        res.status(200).send(microEntreprise);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};