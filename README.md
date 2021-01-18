# Shiet

Have you dreamt of opening StackOverflow seconds after receiving an error?
Well, now you certainly can!


## Installation
```
npm install shiet --save
```

## Usuage
```javascript
import {shiet} from 'shiet';

try {
  ...
} catch (e) {
  shiet(e.message);
}

```
## License

ISC © [Pijus Rancevas](https://github.com/pijus-r)
