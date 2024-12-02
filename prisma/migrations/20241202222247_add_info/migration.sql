/*
  Warnings:

  - Added the required column `type` to the `MicroEntreprise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adresse` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codePostal` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nom` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prenom` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ville` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `MicroEntreprise` ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `Premium` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `adresse` VARCHAR(191) NOT NULL,
    ADD COLUMN `codePostal` VARCHAR(191) NOT NULL,
    ADD COLUMN `countDevis` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `nom` VARCHAR(191) NOT NULL,
    ADD COLUMN `prenom` VARCHAR(191) NOT NULL,
    ADD COLUMN `ville` VARCHAR(191) NOT NULL;
