const {
  addition,
  subtraction,
  multiplication,
  division,
} = require('./calculator');

const operations = {
  add: addition,
  sub: subtraction,
  mul: multiplication,
  div: division,
};

function printUsage() {
  console.log('Usage: node src/cli.js <add|sub|mul|div> <a> <b>');
}

function parseNumber(value) {
  const parsed = Number(value);

  if (Number.isNaN(parsed)) {
    throw new Error(`Invalid number: ${value}`);
  }

  return parsed;
}

function run(args = process.argv.slice(2)) {
  const [operation, first, second] = args;

  if (!operation || first === undefined || second === undefined) {
    printUsage();
    return 1;
  }

  const fn = operations[operation];
  if (!fn) {
    console.error(`Unknown operation: ${operation}`);
    printUsage();
    return 1;
  }

  try {
    const result = fn(parseNumber(first), parseNumber(second));
    console.log(result);
    return 0;
  } catch (error) {
    console.error(error.message);
    return 1;
  }
}

if (require.main === module) {
  process.exitCode = run();
}

module.exports = {
  run,
};
