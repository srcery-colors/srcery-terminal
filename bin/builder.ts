#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import pkg from "../package.json" with { type: "json" };
import { palette } from "../src/palette.ts";
import { type FormatName, formats, isFormatName } from "../src/formats/index.ts";

const root = path.resolve(import.meta.dirname, "..");

function main(): number {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      check: { type: "boolean" },
      help: { type: "boolean", short: "h" },
      list: { type: "boolean", short: "l" },
      version: { type: "boolean", short: "v" },
    },
  });

  if (values.help) {
    console.log(`Usage: builder.ts [format...]

Write the generated configuration files. When no format is given, every
format is generated.

Options:
  -l, --list      list available formats and their output paths
      --check     verify generated files are up to date without writing them
  -h, --help      show this help
  -v, --version   show the version`);
    return 0;
  }

  if (values.version) {
    console.log(pkg.version);
    return 0;
  }

  if (values.list) {
    for (const [name, format] of Object.entries(formats)) {
      console.log(`${name}: ${format.output}`);
    }
    return 0;
  }

  const selected: FormatName[] = [];
  for (const name of positionals) {
    if (!isFormatName(name)) {
      console.error(`Unknown format: ${name}`);
      console.error(`Available formats: ${Object.keys(formats).join(", ")}`);
      return 1;
    }
    selected.push(name);
  }

  const names =
    selected.length > 0 ? selected : (Object.keys(formats) as FormatName[]);

  if (values.check) {
    const stale: string[] = [];

    for (const name of names) {
      const format = formats[name];
      const file = path.resolve(root, format.output);
      const expected = format.render(palette);

      let actual: string;
      try {
        actual = fs.readFileSync(file, "utf8");
      } catch {
        stale.push(`${format.output} (missing)`);
        continue;
      }

      if (actual !== expected) {
        stale.push(format.output);
      }
    }

    if (stale.length > 0) {
      console.error("Generated files are out of date:");
      for (const file of stale) {
        console.error(`  ${file}`);
      }
      console.error("Run 'pnpm generate' and commit the changes.");
      return 1;
    }

    console.log("Generated files are up to date.");
    return 0;
  }

  for (const name of names) {
    const format = formats[name];
    const file = path.resolve(root, format.output);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, format.render(palette));
    console.log(`wrote ${format.output}`);
  }

  return 0;
}

process.exitCode = main();
