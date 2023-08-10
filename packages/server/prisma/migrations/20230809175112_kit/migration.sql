/*
  Warnings:

  - Added the required column `image_link` to the `Kit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Kit" ADD COLUMN     "image_link" TEXT NOT NULL;
