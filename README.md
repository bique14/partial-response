# Middleware: Partial Response Filter

The `partialResponse` middleware is designed to filter the fields of JSON responses based on the `fields` query parameter. It allows clients to request specific fields from the response, reducing unnecessary data transfer and improving efficiency.

## Installation

...

## Usage

```js
const express = require("express");
const partialResponseMiddleware = require("xxx");

const app = express();
const port = 100;

app.use(partialResponseMiddleware());

app.get("/users", (req, res) => {
  const data = {
    name: "winter",
    age: 22,
    dob: "01/01/2001",
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

If the fields parameter is not provided or is a star, the full object is returned.

```
$ curl http://localhost:100/?fields=name
{ name: "winter" };

$ curl http://localhost:100/?fields=
{ name: "winter", age: 22, dob: "01/01/2001" };

$ curl http://localhost:100/?fields=*
{ name: "winter", age: 22, dob: "01/01/2001" };
```

### You can utilize the parameter to specify new keys for filtering partial responses.

```js
...

app.use(partialResponseMiddleware({ query: "keys" }));

...
```

```
$ curl http://localhost:100/?keys=name
{ name: "winter" };

$ curl http://localhost:100/?keys=
{ name: "winter", age: 22, dob: "01/01/2001" };

$ curl http://localhost:100/?keys=*
{ name: "winter", age: 22, dob: "01/01/2001" };
```
