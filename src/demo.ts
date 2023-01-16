import promptSync from "prompt-sync";
import { DreamilyAPI } from "./index.js";

const api = new DreamilyAPI(
  process.env.DREAMILY_TOKEN || "",
  "China"
);
const prompt = promptSync({ sigint: true });
const universeId = "63c26c1afdffebcc7b80b5ff"; // go to https://if.caiyunai.com/dashboard/worlds and copy the world ID

(async () => {
  let story = "";

  while (true) {
    const input = prompt(">");
    if (!input) {
      continue;
    }

    story += input;
    const ret = await api.continue(
      story,
      universeId,
      200,
    );
    story += ret;
    console.log(ret);
  }
})();
