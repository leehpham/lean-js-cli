#!/usr/bin/env node

// We place a shebang directive at the top stating which
// interpreter will be used to execute our script.

// We use the `env` command instead of a direct path to the
// node executable since we might have multiple node versions installed.

import { main } from "../src/main.js";

main();
