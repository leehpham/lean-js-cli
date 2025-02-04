import arg from "arg";

const createMain = (argParser) => () => {
  const args = argParser({
    "--start": Boolean,
    "--build": Boolean,
  });
  console.log(args);
};

export const main = createMain(arg);
