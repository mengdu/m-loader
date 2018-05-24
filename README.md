# m-loader

用于加载第三方脚本的组件


[Example](https://mengdu.github.io/m-loader/example/)


npm 

```ls
npm install -S vue-m-loader
```

use

```js
import MLoader from 'vue-m-loader'

Vue.use(MLoader) // 注册组件 m-loader，注册方法 $loader
```

or

```js
import {MLoader, loader} from 'vue-m-loader

loader({
  url: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js',
  library: 'jQuery'
}).then(library => {
  console.log(library.target)
}).catch(err => {
  console.log(err)
})

```


## MLoder Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| url     | url   | string |  —  |    —     |
| type     | 类型   | string |  script/link  |    script    |
| library     | 挂载window下的属性 | string |   —  |   —   |
| force     | 是否重新加载 | boolean |   true/false  |   false  |


## $loader

```js
// 在vue组件里使用

this.$loader(options)
```

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| options.url     | url   | string |  —  |    —     |
| options.type     | 类型   | string |  script/link  |    script    |
| options.library     | 挂载window下的属性 | string |   —  |   —   |
| options.force     | 是否重新加载 | boolean |   true/false  |   false  |
