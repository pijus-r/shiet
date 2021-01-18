# SHIET
###### Summon Highly Intelligent Error Telepathy

##Huh?
Have you dreamt of opening StackOverflow seconds after receiving an error?
Well, now you certainly can!

## Installation

```
npm install shiet --save
```

## Usage
Funtion takes two parameters:

```javascript
shiet(error: string, tags: Array<string>)
```

Tags parameter is ****optional****.

```javascript
import shiet from 'shiet';

try {
  ...
} catch (e) {
  shiet(e.message, ['angular', 'angular material']);
}

```

## Contributions

****SHIET**** is an open-sourced package. Contributions of any shape
are welcome and appreciated.

## License

ISC © [Pijus Rancevas](https://github.com/pijus-r)
