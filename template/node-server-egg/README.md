## Node接口服务 egg框架
- https://eggjs.org/zh-cn/intro/


## 目录结构
```sh
├── app 
│   ├── controller # api入口
│   │   └── home.js
│   ├── middleware # 中间件
│   │   └──my-middle.js 
│   ├── extend # 扩展
│   │   └── context.js
│   ├── service # 服务器操作相关、sql操作等
│   │   └── user.js
│   └── router.js #路由
├── config 
│   ├── config.default.js #默认加载的配置
│   └── plugin.js # 加载的插件
├── test # 单测目录
│   └── index.test.js
└── package.json
```
