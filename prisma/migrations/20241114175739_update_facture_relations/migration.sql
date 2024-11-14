/*
  Warnings:

  - You are about to drop the column `userId` on the `facture` table. All the data in the column will be lost.
  - Added the required column `microEntrepriseId` to the `Facture` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `facture` DROP FOREIGN KEY `Facture_userId_fkey`;

-- AlterTable
ALTER TABLE `facture` DROP COLUMN `userId`,
    ADD COLUMN `microEntrepriseId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `microentrepriseId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_microentrepriseId_fkey` FOREIGN KEY (`microentrepriseId`) REFERENCES `MicroEntreprise`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Facture` ADD CONSTRAINT `Facture_microEntrepriseId_fkey` FOREIGN KEY (`microEntrepriseId`) REFERENCES `MicroEntreprise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
