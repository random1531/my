-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `accountType` VARCHAR(191) NOT NULL DEFAULT 'user',
    `name` VARCHAR(191) NULL,
    `prenom` VARCHAR(191) NULL,
    `adresse` VARCHAR(191) NULL,
    `ville` VARCHAR(191) NULL,
    `pays` VARCHAR(191) NULL,
    `countmonth` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `microentrepriseId` VARCHAR(191) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MicroEntreprise` (
    `id` VARCHAR(191) NOT NULL,
    `siret` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `pays` VARCHAR(191) NOT NULL,
    `codePostal` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `MicroEntreprise_siret_key`(`siret`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Facture` (
    `id` VARCHAR(191) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,
    `devisNumero` VARCHAR(191) NOT NULL,
    `nomClient` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `rue` VARCHAR(191) NOT NULL,
    `pays` VARCHAR(191) NOT NULL,
    `numeroRue` VARCHAR(191) NOT NULL,
    `sireClientPro` VARCHAR(191) NULL,
    `dateDevis` VARCHAR(191) NOT NULL,
    `dateEcheance` VARCHAR(191) NOT NULL,
    `montantHT` DOUBLE NOT NULL,
    `montantTTC` DOUBLE NOT NULL,
    `montantTVA` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `microEntrepriseId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LigneFacture` (
    `id` VARCHAR(191) NOT NULL,
    `intitule` VARCHAR(191) NOT NULL,
    `nombre` INTEGER NOT NULL,
    `montantUnit` DOUBLE NOT NULL,
    `montantTotal` DOUBLE NOT NULL,
    `tva` DOUBLE NOT NULL,
    `factureId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_microentrepriseId_fkey` FOREIGN KEY (`microentrepriseId`) REFERENCES `MicroEntreprise`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Facture` ADD CONSTRAINT `Facture_microEntrepriseId_fkey` FOREIGN KEY (`microEntrepriseId`) REFERENCES `MicroEntreprise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LigneFacture` ADD CONSTRAINT `LigneFacture_factureId_fkey` FOREIGN KEY (`factureId`) REFERENCES `Facture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
