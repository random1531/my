-- CreateTable
CREATE TABLE `Facture` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `devisNumero` VARCHAR(191) NOT NULL,
    `nomClient` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `rue` VARCHAR(191) NOT NULL,
    `pays` VARCHAR(191) NOT NULL,
    `numeroRue` INTEGER NOT NULL,
    `sireClientPro` VARCHAR(191) NULL,
    `intitule` VARCHAR(191) NOT NULL,
    `nombre` INTEGER NOT NULL,
    `montantUnit` DOUBLE NOT NULL,
    `montantTotal` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
