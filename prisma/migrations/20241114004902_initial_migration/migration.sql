/*
  Warnings:

  - You are about to drop the column `siret` on the `user` table. All the data in the column will be lost.
  - Added the required column `tva` to the `LigneFacture` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `facture` DROP FOREIGN KEY `Facture_userId_fkey`;

-- AlterTable
ALTER TABLE `lignefacture` ADD COLUMN `tva` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `siret`;

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

-- AddForeignKey
ALTER TABLE `Facture` ADD CONSTRAINT `Facture_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `MicroEntreprise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
