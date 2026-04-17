const fs   = require("fs");
const path = require("path");
const { app } = require("electron");

async function setupDatabase(prisma) {
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "_migrations" (
      "name" TEXT NOT NULL PRIMARY KEY,
      "appliedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const migrationsDir = app.isPackaged
    ? path.join(process.resourcesPath, "prisma", "migrations")
    : path.join(__dirname, "..", "prisma", "migrations");

  if (!fs.existsSync(migrationsDir)) {
    console.error("[setup-db] No se encontró la carpeta de migraciones:", migrationsDir);
    return;
  }

  const folders = fs.readdirSync(migrationsDir)
    .filter((f) => fs.statSync(path.join(migrationsDir, f)).isDirectory())
    .sort();

  for (const folder of folders) {
    const sqlPath = path.join(migrationsDir, folder, "migration.sql");
    if (!fs.existsSync(sqlPath)) continue;

    const rows = await prisma.$queryRawUnsafe(
      `SELECT name FROM "_migrations" WHERE name = ?`, folder
    );
    if (rows.length > 0) continue;

    console.log("[setup-db] Aplicando migración:", folder);
    const sql = fs.readFileSync(sqlPath, "utf-8");

    const statements = sql
      .split("\n")
      .filter((line) => !line.trimStart().startsWith("--"))
      .join("\n")
      .split(";")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    for (const stmt of statements) {
      try {
        await prisma.$executeRawUnsafe(stmt + ";");
      } catch (e) {
        const msg = e.message.toLowerCase();
        if (!msg.includes("already exists") && !msg.includes("duplicate column")) {
          console.error("[setup-db] Error:", e.message, "\nSQL:", stmt);
        }
      }
    }

    await prisma.$executeRawUnsafe(
      `INSERT INTO "_migrations" (name) VALUES (?)`, folder
    );
    console.log("[setup-db] Migración aplicada:", folder);
  }

  console.log("[setup-db] Base de datos lista.");
}

module.exports = { setupDatabase };
