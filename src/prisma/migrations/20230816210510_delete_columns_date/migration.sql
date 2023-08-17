/*
  Warnings:

  - You are about to drop the column `createdAt` on the `cardapio` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `cardapio` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cardapio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL
);
INSERT INTO "new_cardapio" ("codigo", "descricao", "id", "tipo", "valor") SELECT "codigo", "descricao", "id", "tipo", "valor" FROM "cardapio";
DROP TABLE "cardapio";
ALTER TABLE "new_cardapio" RENAME TO "cardapio";
CREATE UNIQUE INDEX "cardapio_codigo_key" ON "cardapio"("codigo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
