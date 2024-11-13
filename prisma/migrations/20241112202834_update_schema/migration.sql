/*
  Warnings:

  - The primary key for the `facture` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `lignefacture` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `dateDevis` to the `Facture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateEcheance` to the `Facture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `montantHT` to the `Facture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `montantTTC` to the `Facture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `montantTVA` to the `Facture` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `facture` DROP FOREIGN KEY `Facture_userId_fkey`;

-- DropForeignKey
ALTER TABLE `lignefacture` DROP FOREIGN KEY `LigneFacture_factureId_fkey`;

-- AlterTable
ALTER TABLE `facture` DROP PRIMARY KEY,
    ADD COLUMN `dateDevis` DATETIME(3) NOT NULL,
    ADD COLUMN `dateEcheance` DATETIME(3) NOT NULL,
    ADD COLUMN `montantHT` DOUBLE NOT NULL,
    ADD COLUMN `montantTTC` DOUBLE NOT NULL,
    ADD COLUMN `montantTVA` DOUBLE NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `userId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `lignefacture` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `factureId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    ADD COLUMN `countmonth` INTEGER NOT NULL DEFAULT 0,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Facture` ADD CONSTRAINT `Facture_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LigneFacture` ADD CONSTRAINT `LigneFacture_factureId_fkey` FOREIGN KEY (`factureId`) REFERENCES `Facture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
