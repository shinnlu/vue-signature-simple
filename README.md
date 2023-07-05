# vue-signboard

> A electronic signature component by Vue.js

## Usage
install
```
npm install vue-signboard
```

main.js
```
import VueSignature from 'vue-signboard';
Vue.use(VueSignature);
```

.vue template
```
<vue-signature ref='s1' />
<vue-signature ref='s2' />
```

## API

Props

|  name   | description  | default |
|  ----  | ----  | ---- |
| width  | signature width | 300 |
| height  | signature height | 100 |
| strokeColor  | pen color | black |
| strokeSize  | pen size | 2 |

Methods

|  name   | description  | params |
|  ----  | ----  | ---- |
| clear  | clear canvas |  |
| getSignature  | get signature base64 data | format: (image/png)(image/jpeg)(image/svg+xml) |
| isEmpty  | return canvas is empty? |  |
| getID  | get canvas element id| |
| loadFromPicture | load from upload picture| file |
| lockPad | disable input of signature pad | boolean |

## License

MIT