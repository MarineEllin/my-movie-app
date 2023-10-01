-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MovieLike" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "movieId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "MovieLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MovieLike" ("id", "movieId", "userId") SELECT "id", "movieId", "userId" FROM "MovieLike";
DROP TABLE "MovieLike";
ALTER TABLE "new_MovieLike" RENAME TO "MovieLike";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
