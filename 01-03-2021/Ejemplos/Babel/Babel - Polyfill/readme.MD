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

<!--/*****************************************************************************/ -->
9. agregar al index.js
<!--
const msj = "    hola".trimStart();
console.log(msj);
 -->
10. npm run build
11. abrir en el navegador edge y chrome, verificar la consola de comandos
12. npm i core-js
13. agregar al archivo babel.config.json
<!--
{
    "presets":[
        ["@babel/env",
        {
            "corejs":3.6,
            "useBuiltIns": "entry"
        }
    ]
]
}
 -->

14. agregar a index.js import "core-js/stable" y ejecutar npm run build
15. comparar el index-compiled.js
16. cambiar "useBuiltIns": "entry" a "useBuiltIns": "usage" y eliminar de index.js import "core-js/stable";
17. npm run build
18. comparar el index-compiled.js
