/*
  Warnings:

  - You are about to drop the column `staffId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `BlogPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Staff` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Testimony` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_staffId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_staffId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "staffId";

-- DropTable
DROP TABLE "BlogPost";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "Staff";

-- DropTable
DROP TABLE "Testimony";
