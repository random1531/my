const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.create = async (req, res) => {
    const { intitule, nombre, montantUnit, montantTotal, factureId } = req.body;
    try {
        const ligneFacture = await prisma.ligneFacture.create({
            data: {
                intitule,
                nombre,
                montantUnit,
                montantTotal,
                facture: { connect: { id: factureId } },
            },
        });
        res.status(201).send(ligneFacture);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports.read = async (req, res) => {
    try {
        const lignesFacture = await prisma.ligneFacture.findMany({
            include: {
                facture: true,
            },
        });
        res.status(200).send(lignesFacture);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports.update = async (req, res) => {
    const { id } = req.params;
    const { intitule, nombre, montantUnit, montantTotal, factureId } = req.body;
    try {
        const ligneFacture = await prisma.ligneFacture.update({
            where: { id: parseInt(id) },
            data: {
                intitule,
                nombre,
                montantUnit,
                montantTotal,
                facture: { connect: { id: factureId } },
            },
        });
        res.status(200).send(ligneFacture);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const ligneFacture = await prisma.ligneFacture.delete({
            where: { id: parseInt(id) },
        });
        res.status(200).send(ligneFacture);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};