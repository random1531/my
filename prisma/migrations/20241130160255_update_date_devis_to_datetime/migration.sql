/*
  Warnings:

  - You are about to alter the column `dateDevis` on the `Facture` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `dateEcheance` on the `Facture` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `Facture` MODIFY `dateDevis` DATETIME(3) NOT NULL,
    MODIFY `dateEcheance` DATETIME(3) NOT NULL;
