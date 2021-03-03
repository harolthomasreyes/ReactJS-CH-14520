0. npm i @babel/core babel-loader @babel/preset-env -D
1. npm i core-js
2. agregar a webpack.config.json en la parte de module
<!--
  {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
 -->
3. crear babel.config.json
<!--
{
    "presets":[
        ["@babel/env",
        {
            "corejs":3.6,
            "useBuiltIns": "usage",
            "targets": "> 0.25%, not dead, not ie 11"
        }
    ]
]
}
 -->
4. npm run build
