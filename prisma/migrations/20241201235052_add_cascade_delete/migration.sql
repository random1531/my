/*
  Warnings:

  - You are about to drop the column `accountType` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `adresse` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `countmonth` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pays` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `prenom` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `ville` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Facture` DROP FOREIGN KEY `Facture_microEntrepriseId_fkey`;

-- DropForeignKey
ALTER TABLE `LigneFacture` DROP FOREIGN KEY `LigneFacture_factureId_fkey`;

-- DropIndex
DROP INDEX `User_username_key` ON `User`;

-- AlterTable
ALTER TABLE `Facture` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `User` DROP COLUMN `accountType`,
    DROP COLUMN `adresse`,
    DROP COLUMN `countmonth`,
    DROP COLUMN `name`,
    DROP COLUMN `pays`,
    DROP COLUMN `prenom`,
    DROP COLUMN `username`,
    DROP COLUMN `ville`;

-- AddForeignKey
ALTER TABLE `Facture` ADD CONSTRAINT `Facture_microEntrepriseId_fkey` FOREIGN KEY (`microEntrepriseId`) REFERENCES `MicroEntreprise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LigneFacture` ADD CONSTRAINT `LigneFacture_factureId_fkey` FOREIGN KEY (`factureId`) REFERENCES `Facture`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
