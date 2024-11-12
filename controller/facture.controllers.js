const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.create = async (req, res) => {
    const { statut, devisNumero, nomClient, ville, rue, pays, numeroRue, sireClientPro, userId, lignes } = req.body;
    try {
        const facture = await prisma.facture.create({
            data: {
                statut,
                devisNumero,
                nomClient,
                ville,
                rue,
                pays,
                numeroRue,
                sireClientPro,
                user: { connect: { id: userId } },
                lignes: {
                    create: lignes,
                },
            },
            include: {
                lignes: true,
                user: true,
            },
        });
        res.status(201).send(facture);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports.read = async (req, res) => {
    try {
        const factures = await prisma.facture.findMany({
            include: {
                lignes: true,
                user: true,
            },
        });
        res.status(200).send(factures);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports.update = async (req, res) => {
    const { id } = req.params;
    const { statut, devisNumero, nomClient, ville, rue, pays, numeroRue, sireClientPro, lignes } = req.body;
    try {
        const facture = await prisma.facture.update({
            where: { id: parseInt(id) },
            data: {
                statut,
                devisNumero,
                nomClient,
                ville,
                rue,
                pays,
                numeroRue,
                sireClientPro,
                lignes: {
                    deleteMany: {}, // Delete existing lines
                    create: lignes, // Create new lines
                },
            },
            include: {
                lignes: true,
                user: true,
            },
        });
        res.status(200).send(facture);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const facture = await prisma.facture.delete({
            where: { id: parseInt(id) },
            include: {
                lignes: true,
                user: true,
            },
        });
        res.status(200).send(facture);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};