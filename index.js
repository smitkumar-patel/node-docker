import "dotenv/config";
import { program } from "commander";
import { data } from "./mock-data/mock-data.js";

/** */
function getArguments() {
  program.option("-i, --ids <type>", "environment ids");

  program.parse();

  const options = program.opts();

  const ids = options.ids.split(",");

  for (let i = 0; i < ids.length; i = i + 2) {
    console.log("Lower: " + ids[i]);
    console.log("Higher: " + ids[i + 1]);
  }
}

(async () => {
  try {
    getArguments();

    console.log("Mock data: ");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
