## Usage

```TypeScript
import promptSync from "prompt-sync";
import DreamilyAPI from "DreamilyAPI";

const api = new DreamilyAPI(
  process.env.DREAMILY_TOKEN || "",
  "Chian"
);
const prompt = promptSync({ sigint: true });
const universeId = "63c26c1afdffebcc7b80b5ff"; // go to the https://if.caiyunai.com/dashboard/worlds and copy the world ID

while (true) {
  const input = prompt(">");
  if (!input) {
    continue;
  }

  const ret = await api.continue(input, universeId);
  console.log(ret);
}
```
