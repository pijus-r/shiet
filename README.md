# Shiet

Have you dreamt of opening StackOverflow seconds after receiving an error?
Well, now you certainly can!

## Installation

```
npm install shiet --save
```

## Usage

```javascript
import shiet from 'shiet';

try {
  ...
} catch (e) {
  shiet(e.message);
}

```

## Contributions

**_shiet_** is an open-sourced package. Contributions of any shape
are welcome and appreciated.

## License

ISC © [Pijus Rancevas](https://github.com/pijus-r)
