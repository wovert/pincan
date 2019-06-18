# 品餐网

## 功能架构

- 前台
  - 系统首页
  - 选择城市
  - 搜素页面
  - 详情页面
  - 收藏购买
  - 登录页面
- 后台
  - 用户中心
  - 评价功能

- 构建工具
  - webpack
  - babel
  - less postcss
- 系统框架
  - React
  - React-router
  - Redux
- 数据交互
  - fetch
  - mock
- 其他辅助
  - npm
  - git

- Windows 用户
  - "start": "set NODE_ENV=XXX &&  .."
  - rm -rf ./build 改为 `rd/s/q build`
    - 手动创建 `build`目录

## 环境搭建

- vendor.xxx 第三方库的合并压缩文件
- app.xxx 手写业务代码压缩文件

```sh
# TypeScript 启动新的 Create React App 项目
npx create-react-app app --typescript

# 将 TypeScript 添加到 Create React App 项目
$ npm install --save typescript @types/node @types/react @types/react-dom @types/jest stylus stylus-loader
```

接下来，将任何文件重命名为 TypeScript 文件（例如 src/index.js 重命名为 src/index.tsx ）并 重新启动开发服务器！