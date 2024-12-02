-- AlterTable
ALTER TABLE `MicroEntreprise` MODIFY `type` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `adresse` VARCHAR(191) NULL,
    MODIFY `codePostal` VARCHAR(191) NULL,
    MODIFY `country` VARCHAR(191) NULL,
    MODIFY `nom` VARCHAR(191) NULL,
    MODIFY `prenom` VARCHAR(191) NULL,
    MODIFY `ville` VARCHAR(191) NULL;
