## Demo

```bash
npm run demo
```

From `src/demo.ts`:

```TypeScript
import promptSync from "prompt-sync";
import { DreamilyAPI } from "dreamily-api";


const api = new DreamilyAPI(
  process.env.DREAMILY_TOKEN || "",
  "China"
);
const prompt = promptSync({ sigint: true });
const universeId = "63c26c1afdffebcc7b80b5ff"; // go to https://if.caiyunai.com/dashboard/worlds and copy the world ID

while (true) {
  const input = prompt(">");
  if (!input) {
    continue;
  }

  const ret = await api.continue(
    input,
    universeId,
    200,
  );
  console.log(ret);
}
```


## References

- [Dreamily API Wiki](https://open.caiyunapp.com/Dreamily_API)
