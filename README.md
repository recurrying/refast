# Refast

<a href="https://github.com/recore/refast" align="center"><img src="https://user-images.githubusercontent.com/7709602/27905492-afbe494e-6272-11e7-9ca2-7ecea4bd4c0b.jpg" alt="refast logo" height="120" align="right" /></a>

_5分钟就能学会的 React 组件状态管理工具_

[![npm version](https://img.shields.io/npm/v/refast.svg?style=flat)](https://www.npmjs.com/package/refast) [![download](https://img.shields.io/npm/dm/refast.svg?style=flat)](https://www.npmjs.com/package/refast) [![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/recore/refast) 

![npm install refast](https://nodei.co/npm/refast.png?downloadRank=true&downloads=true)

## 主要优势
- 概念少，学习成本较低。
- 搭配 [async-await](https://github.com/tc39/proposals/blob/master/finished-proposals.md) 异步操作更加流畅
- LogicRender 集成了通用视图处理逻辑，提升开发效率
- LogicRender 可根据条件自动执行脚本，减少逻辑处理

## 文档示例

Refast 的文档在 [doc.refast.cn](http://doc.refast.cn)。

[Demo](https://github.com/recore/refast-demo) 请看 [demo.refast.cn](http://demo.refast.cn)。

## 安装使用
#### 通过 npm 安装
Refast 可以通过 npm 安装到项目中： 
`npm install refast --save`

#### 通过 CDN 引用

Refast 可以通过 CDN 引入到项目中。
* 每次均引入最新版本：
https://unpkg.com/refast/dist/index.js

* 引入指定版本。用版本号替换 `[version]` 部分的内容即可：
https://unpkg.com/refast@[version]/dist/index.js

## 开源协议

Refast 采用 MIT 协议开源。

## 浏览器支持

Refast 的实现使用到了 Promise。如果您的浏览器不支持 Promise，请加入相应的 pollfill，比如 lie:

```html
<script src="https://g.alicdn.com/platform/c/lie/3.0.2/dist/lie.polyfill.min.js"></script>
```

## 感谢
感谢以下同学提供的帮助：

[@zhangyang](https://github.com/lpgray)

[@ex90rts](https://github.com/ex90rts)

[@yize](https://github.com/yize)

