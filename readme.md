## 项目启动
```bash
cnpm i
npm run dev
```


## 安装vue
```bash
cnm install vue@2
```

## 解析.vue文件
```bash
cnpm install vue-loader@13 vue-template-compiler@2 -D
```

## vue-router
```bash
cnpm i vue-router -S
```

## mint-ui
```bash
cnpm i mint-ui -S
```
#### 按需导入
```bash
cnpm install babel-plugin-component -D
```
* .babelrc
```json
{
  ...
  "plugins": [
    ...
    ["component", [
      {
        "libraryName": "mint-ui",
        "style":  true
      }
    ]]
  ]
}

```
* main.js
```js
// 按需导入mint-ui
import {Button} from 'mint-ui'
Vue.component(Button.name, Button)
```


