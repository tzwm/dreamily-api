An unofficial node.js client for the [Dreamily](https://if.caiyunai.com/) API.

> NOTE: The functions of this API is subset of the Dreamily website. And this API maybe is not production ready.


## Demo

A basic [demo](https://github.com/tzwm/dreamily-api/blob/main/src/demo.ts) is included for testing purposes.

First, copy the `.env.example` file to `.env` and edit it.

```bash
source .env && npm run demo
```

## API Documents

Base API URI is `http://if.caiyunai.com/v2/api/bot_ai`.

`POST` `/` `(Continue writing the story)`

##### Parameters

> | name      |  type     | description                                                           |
> |-----------|-----------|-----------------------------------------------------------------------|
> | value |  required | Story content. You need to add previous content before your continuing story by yourself.   |
> | universe_id |  required |  The world ID of the story. You can find this ID on the dreamily website.   |
> | length |  required |  The length of response.   |
> | is_complete |  optional | Whether to return complete sentences.    |
> | user_id |  required |  Your token. |
> | mid |  required |  Story style. You can find this one on the dreamily website. |
> | region |  ? | ... |
> | platform |  ? | I don"t know what this parameter means |

##### Responses

```JavaScript
{
  status: 0,
  msg: 'success',
  data: {
    row: '\n' +
      'hello here\n' +
      'hello i have a question \n' +
      'hello\n' +
      "so what's the name of the movie you're watching\n" +
      'how are you doing\n' +
      "what's your favorite part about this movie\n" +
      'i',
    rows: [
      '\n' +
        'hello here\n' +
        'hello i have a question \n' +
        'hello\n' +
        "so what's the name of the movie you're watching\n" +
        'how are you doing\n' +
        "what's your favorite part about this movie\n" +
        'i'
    ]
  }
}
```

## References

- [Dreamily API Wiki](https://open.caiyunapp.com/Dreamily_API)
