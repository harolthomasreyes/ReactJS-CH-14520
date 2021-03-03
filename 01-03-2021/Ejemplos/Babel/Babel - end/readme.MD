1. npm init
2. npm i @babel/core @babel/cli -D <!-- solo desarrollo -->
3. sustituir en package.json por
<!--
"scripts": {
    "build": "babel index.js -o index-compiled.js"
  },
 -->
4. npm run build
5. comparar el index.js con index-compiled.js
6. npm i @babel/preset-env -D <!-- solo desarrollo -->
7. crear archivo babel.config.json
8. agregar a babel.config.json
<!--
{
    "presets":["@babel/env"]
}
-->
9. sustituimos nuestro index.js de html y colocamos el index-compiled.js
