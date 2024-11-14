const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Créer une nouvelle ligne de facture
module.exports.create = async (req, res) => {
    const { intitule, nombre, montantUnit, montantTotal, tva, factureId } = req.body;
    try {
        const ligneFacture = await prisma.ligneFacture.create({
            data: {
                intitule,
                nombre,
                montantUnit,
                montantTotal,
                tva,
                facture: { connect: { id: factureId } },
            },
        });
        res.status(201).send(ligneFacture);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Lire toutes les lignes de facture
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

// Lire une ligne de facture par ID
module.exports.readById = async (req, res) => {
    const { id } = req.params;
    try {
        const ligneFacture = await prisma.ligneFacture.findUnique({
            where: { id },
            include: {
                facture: true,
            },
        });
        if (ligneFacture) {
            res.status(200).send(ligneFacture);
        } else {
            res.status(404).send({ error: 'Ligne de facture non trouvée' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Mettre à jour une ligne de facture
module.exports.update = async (req, res) => {
    const { id } = req.params;
    const { intitule, nombre, montantUnit, montantTotal, tva, factureId } = req.body;
    try {
        const ligneFacture = await prisma.ligneFacture.update({
            where: { id },
            data: {
                intitule,
                nombre,
                montantUnit,
                montantTotal,
                tva,
                facture: { connect: { id: factureId } },
            },
        });
        res.status(200).send(ligneFacture);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Supprimer une ligne de facture
module.exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const ligneFacture = await prisma.ligneFacture.delete({
            where: { id },
        });
        res.status(200).send(ligneFacture);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};