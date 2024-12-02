const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Créer une nouvelle facture
module.exports.create = async (req, res) => {
    const { 
        statut, 
        devisNumero, 
        nomClient, 
        ville, 
        rue, 
        pays, 
        numeroRue, 
        sireClientPro, 
        dateDevis, 
        dateEcheance, 
        montantHT, 
        montantTTC, 
        montantTVA, 
        microEntrepriseId, 
        lignes 
    } = req.body;

    // S'assurer que les champs montants sont des nombres
    const montantHTNum = parseFloat(montantHT);
    const montantTTCNum = parseFloat(montantTTC);
    const montantTVANum = parseFloat(montantTVA);

    // Vérifier la validité des montants
    if (isNaN(montantHTNum) || isNaN(montantTTCNum) || isNaN(montantTVANum)) {
        return res.status(400).send({ error: "Les montants doivent être des nombres valides." });
    }

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
                dateDevis,
                dateEcheance,
                montantHT: montantHTNum,
                montantTTC: montantTTCNum,
                montantTVA: montantTVANum,
                microEntreprise: { connect: { id: microEntrepriseId } },
                lignes: {
                    create: lignes,
                },
            },
            include: {
                lignes: true,
                microEntreprise: true,
            },
        });
        res.status(201).send(facture);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Lire toutes les factures
module.exports.read = async (req, res) => {
    try {
        const factures = await prisma.facture.findMany({
            include: {
                lignes: true,
                microEntreprise: true,
            },
        });
        res.status(200).send(factures);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Lire une facture par ID
module.exports.readById = async (req, res) => {
    const { id } = req.params;
    try {
        const facture = await prisma.facture.findUnique({
            where: { id },
            include: {
                lignes: true,
                microEntreprise: true,
            },
        });
        if (facture) {
            res.status(200).send(facture);
        } else {
            res.status(404).send({ error: 'Facture non trouvée' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Mettre à jour une facture
module.exports.update = async (req, res) => {
    const { id } = req.params;
    const { statut, devisNumero, nomClient, ville, rue, pays, numeroRue, sireClientPro, dateDevis, dateEcheance, montantHT, montantTTC, montantTVA, lignes } = req.body;
    try {
        const facture = await prisma.facture.update({
            where: { id },
            data: {
                statut,
                devisNumero,
                nomClient,
                ville,
                rue,
                pays,
                numeroRue,
                sireClientPro,
                dateDevis,
                dateEcheance,
                montantHT,
                montantTTC,
                montantTVA,
                lignes: {
                    deleteMany: {}, // Supprimer les lignes existantes
                    create: lignes, // Créer de nouvelles lignes
                },
            },
            include: {
                lignes: true,
                microEntreprise: true,
            },
        });
        res.status(200).send(facture);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Supprimer une facture
module.exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const facture = await prisma.facture.delete({
            where: { id },
            include: {
                lignes: true,
                microEntreprise: true,
            },
        });
        res.status(200).send(facture);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};