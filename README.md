# digo-node-sass
[digo](https://github.com/digojs/digo) 插件：使用 [node-sass](https://github.com/sass/node-sass) 编译 SASS。

## 安装
```bash
npm install digo-node-sass -g
```

## 用法
### 编译 SASS 并重命名为 CSS
```js
digo.src("*.scss", "*.sass").pipe("digo-node-sass");
```

### 源映射(Source Map)
本插件支持生成源映射，详见 [源映射](https://github.com/digojs/digo/wiki/源映射)。

## 选项
```js 
digo.src("*.scss", "*.sass").pipe("digo-node-sass", {
    importer: null,             // 自定义解析 @import 地址的函数。函数原型为: function(url, prev, done)。
    functions: {},              // 供 sass 用法的内置系统函数。
    includePaths: [],           // 解析 @import 的搜索路径。
    indentedSyntax: false,      // 用法 lisp 风格的缩进语法。[1]
    indentType: "tab",	        // 设置缩进字符，可以是 'tab' 或 'space'。
    indentWidth: 2,             // 缩进字符的个数。
    linefeed: "cr",    	        // 设置换行符，可以是 'cr'、'lf' 或 'crlf'。
    omitSourceMapUrl: true,     // 如果为 true 则不在文件末位追加 #SourceMappingURL。[1]
    outFile: null,              // 设置生成文件的路径。
    outputStyle: "expanded",    // 设置生成的 CSS 代码风格。"nested": 紧挨；"expanded": 展开；"compact": 紧凑；"compressed": 压缩。[1]
    precision: 5,               // 设置计算得到的小数保留的小数位数，超过的部分将四舍五入。
    sourceComments: false,      // 保留源码中的注释。
    sourceMap: false,           // 是否生成源映射。[1]
    sourceMapContents: false,   // 是否在源映射中包含源码。[1]
    sourceMapEmbed: false,      // 是否在源码中包含源映射。[1]
    sourceMapRoot: null,        // 源映射中的根路径。[1]
});
```

> [1]: 插件内部已重设了此选项的默认值。

另参考: [https://github.com/sass/node-sass](https://github.com/sass/node-sass)。
