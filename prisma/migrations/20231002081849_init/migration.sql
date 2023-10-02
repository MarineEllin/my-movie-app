/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `MovieLike` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MovieLike_id_key" ON "MovieLike"("id");
