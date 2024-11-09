/*
  Warnings:

  - You are about to drop the column `intitule` on the `facture` table. All the data in the column will be lost.
  - You are about to drop the column `montantTotal` on the `facture` table. All the data in the column will be lost.
  - You are about to drop the column `montantUnit` on the `facture` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `facture` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `facture` DROP COLUMN `intitule`,
    DROP COLUMN `montantTotal`,
    DROP COLUMN `montantUnit`,
    DROP COLUMN `nombre`;

-- CreateTable
CREATE TABLE `LigneFacture` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `intitule` VARCHAR(191) NOT NULL,
    `nombre` INTEGER NOT NULL,
    `montantUnit` DOUBLE NOT NULL,
    `montantTotal` DOUBLE NOT NULL,
    `factureId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LigneFacture` ADD CONSTRAINT `LigneFacture_factureId_fkey` FOREIGN KEY (`factureId`) REFERENCES `Facture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
