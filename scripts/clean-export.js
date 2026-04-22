const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");

if (!fs.existsSync(outDir)) {
  process.exit(0);
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile()) {
      if (path.extname(entry.name).toLowerCase() !== ".txt") continue;
      if (entry.name.toLowerCase() === "robots.txt") continue;
      fs.unlinkSync(fullPath);
    }
  }
}

walk(outDir);
