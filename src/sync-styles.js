const { readFile, writeFile, stat, mkdir } = require("fs/promises");
const { resolve, normalize } = require("path");
const { exit } = require("process");
const fetch = require("node-fetch");
const chalk = require("chalk");
const Listr = require("listr");
const input = require("listr-input");
const execa = require("execa");
const SDK = require("@zesty-io/sdk");

module.exports = syncStyles = async () => {
  let zestyConfig = await readZestyConfig();

  if (!zestyConfig) {
    console.log(`${chalk.red("Error:")} missing .zesty/config.json `);
    console.log(
      `Run the command: ${chalk.bold(
        "zesty init"
      )}, if zesty is not found run ${chalk.bold(
        "npm i -g @zesty-io/cli"
      )} and try again.`
    );
    exit();
  }

  try {
    let styleVariableURL = `${zestyConfig.stage}/-/headless/style-variables.json?zpw=${zestyConfig.stage_password}`;
    const styles = fetch(styleVariableURL);

    styles
      .then((res) => res.json())
      .then((styleVariables) => {
        writeStyles(styleVariables);
        console.log("Styles are synced successfully");
      });
  } catch (error) {
    throw chalk.red(error);
  }
};

async function readZestyConfig() {
  try {
    const file = resolve(process.cwd(), "zesty.config.json");
    const str = await readFile(file, {
      encoding: "utf-8",
    });

    return JSON.parse(str);
  } catch (error) {
    return null;
  }
}

async function writeStyles(stylesData) {
  let styles = {};

  try {
    const file = resolve(process.cwd(), ".zesty/styleVariables.json");

    //filtering reference name and value from the fetched style variables
    for (const { name: rn, value: val } of stylesData) {
      styles[rn] = val;
    }

    //creates styleVariables.json file to .zesty folder and contains with the styles  referenceName and values.
    writeFile(file, JSON.stringify(styles));
  } catch (error) {
    throw error;
  }
}
