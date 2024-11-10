/*
  Warnings:

  - Added the required column `statut` to the `Facture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `facture` ADD COLUMN `statut` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `accountType` VARCHAR(191) NOT NULL DEFAULT 'user',
    ADD COLUMN `adresse` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NULL,
    ADD COLUMN `pays` VARCHAR(191) NULL,
    ADD COLUMN `prenom` VARCHAR(191) NULL,
    ADD COLUMN `siret` VARCHAR(191) NULL,
    ADD COLUMN `ville` VARCHAR(191) NULL;
