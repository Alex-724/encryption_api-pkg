
## Installation
```txt
npm i encryption_api-pkg
```

## Delcaration
```js
const encryption_api_pkg = require('encryption_api-pkg');
```

## Get Api
```js
const encryption_api_pkg = require("encryption_api-pkg");
const api = new encryption_api_pkg();
```

## Functions
```js
encrypt() // To encrypt string text
decrypt(); // To decrypt string text
```

## Demo
```js
const encryption_api_pkg = require("encryption_api-pkg");
const api = new encryption_api_pkg();
let Text = "Hello World";
let Key = "ImAlex";

let encrypt_text = api.encrypt(Text, Key);
console.log(encrypt_text);

let decrypt_text = api.decrypt(encrypt_text,key);
console.log(encrypt_text);
```