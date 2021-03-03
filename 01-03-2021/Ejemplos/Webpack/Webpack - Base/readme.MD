<!-- ENTRY -->

0. Crear archivo webpack.config.js
1. exportar un objeto literal con la configuracion deseada => module.exports = {}
<!--
const path = require("path");
module.exports = {
entry: "./src/index.js",
  output: {
      filename: "build.js",
      path: path.resolve(__dirname, 'dist')
  }
}-->
2. importrar en webpack.config.js => const path = require('path')
3. modificar en el index.html <script src="./dist/main.js"></script> por <script src="./dist/build.js"></script>
4. npm run build

<!-- Loaders -->

0. crear archivo css y importarlo en el index.js => si intentamos compilar webpack da error, no soporta css
1. npm i style-loader css-loader
2. configurar los loader en el archivo webpack.config.js
<!--
module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
-->
3. npm run build

<!-- Plugins -->

0. npm install html-webpack-plugin -D
1. dentro de webpack.config.js agregar la linea: var HtmlWebpackPlugin = require('html-webpack-plugin');
2. configurar
<!--
plugins: [new HtmlWebpackPlugin()]
 -->
3. usar e; index.html que esta en dist para produccion

<!-- Mode -->
