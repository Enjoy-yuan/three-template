## 1.项目搭建

```js
Vue CLI v4.5.13
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, TS, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```

## 2.项目启动

- 安装依赖：yarn
- 启动项目：yarn serve
- 项目打包：yarn build

## 3.代码格式化配置

- 安装 vscode 扩展 ESLint 和 Prettier
- 在项目根目录下新建.vscode 文件夹，在 setting.json 中设置 prettier 格式

```js
// .vscode/setting.json
{
  // 设置字体大小
  "editor.fontSize": 14,
  // 设置prettier扩展格式化2个空格
  "prettier.tabWidth": 2,
  // 设置prettier扩展格式化单引号
  "prettier.singleQuote": true,
  // 设置prettier扩展末尾不带分号
  "prettier.semi": false,
  // 设置prettier扩展末尾不带逗号
  "prettier.trailingComma": "none",
  // 设置prettier扩展代码宽度130
  "prettier.printWidth": 130
}

// 将eslintrc.js中@vue/typescript/recommended注释
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
    // '@vue/typescript/recommended'
  ],
  parserOptions: {
    // 新加，需安装依赖yarn add babel-eslint -D
    parser: 'babel-eslint', 
    ecmaVersion: 2020
  },
  rules: {
    // 0 = off, 1 = warn, 2 = error
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off', // 设置函数后无空格
    'no-new': 'off', // 允许在使用 new 构造一个实例后不赋值
    'no-useless-return': 'off' // 允许 ruturn 空
  }
}

// 在.gitignore中注释.vscode文件夹
# .vscode
```
