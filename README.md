# 📡  SHIET

****S****ummon
****H****ighly
****I****ntelligent
****E****rror
****T****ransmission

![npm](https://aleen42.github.io/badges/src/npm.svg) ![](https://img.shields.io/npm/dt/shiet) ![](https://img.shields.io/npm/v/shiet) ![javascript](https://aleen42.github.io/badges/src/javascript.svg)


## Huh?
Have you ever dreamt of opening StackOverflow seconds after receiving an error?
Well, now you certainly can!

## Installation

```
npm install shiet --save
```

## Usage
Function takes two parameters:

```javascript
shiet(query: string | number, tags: Array<string>)
```

Tags parameter is ****optional****.

```javascript
import shiet from 'shiet';

try {
  ...
} catch (e) {
  shiet(e.message, ['angular material']);
}

```

## Contributions

****SHIET**** is an open-sourced package. Contributions of any shape
are welcome and appreciated.

## License

ISC © [Pijus Rancevas](https://github.com/pijus-r)
