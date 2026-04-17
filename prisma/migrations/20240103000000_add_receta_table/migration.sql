-- CreateTable Receta (groups photos under one prescription)
CREATE TABLE IF NOT EXISTS "Receta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pacienteId" INTEGER NOT NULL,
    "fecha" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Receta_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Migrate existing FotoReceta rows: each becomes its own Receta (same id)
INSERT OR IGNORE INTO "Receta" ("id", "pacienteId", "fecha")
SELECT "id", "pacienteId", "fecha" FROM "FotoReceta";

-- Create new FotoReceta table with recetaId instead of pacienteId/fecha
CREATE TABLE IF NOT EXISTS "FotoReceta_new" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recetaId" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,
    "observaciones" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "FotoReceta_recetaId_fkey" FOREIGN KEY ("recetaId") REFERENCES "Receta" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Copy existing photos to new table (recetaId = id since we migrated 1:1)
INSERT OR IGNORE INTO "FotoReceta_new" ("id", "recetaId", "foto", "observaciones")
SELECT "id", "id", "foto", "observaciones" FROM "FotoReceta";

-- Swap tables
DROP TABLE IF EXISTS "FotoReceta";

ALTER TABLE "FotoReceta_new" RENAME TO "FotoReceta"
