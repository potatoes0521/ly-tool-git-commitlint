<!--
 * @Author: liuYang
 * @Description: 请填写描述信息
 * @Path: 引入路径
 * @Date: 2021-03-18 13:17:52
 * @LastEditors: liuYang
 * @LastEditTime: 2021-03-18 15:35:39
 * @MustParam: 必传参数
 * @OptionalParam: 选传参数
 * @EmitFunction: 函数
 * @Slot/Props.children: 提供的插槽或render
 * @Examples: 使用示例
-->
## Git commit 规范

结合 `commitizen` `commitlint` `conventional-changelog-cli` `husky`，进行封装，一键安装，开箱即用的 `git commit` 规范。

## 功能

1. 自动检测 commit 是否规范，不规范不允许提交
2. 自动提示 commit 填写格式。不怕忘记规范怎么写
3. 集成 git add . && git commit 不需要在执行两个命令
4. 自动生成 changelog

## 配置

1. 下载

```bash

# npm
npm i ly-tool-git-commitlint commitizen commitlint conventional-changelog-cli husky -D

# yarn 
yarn dd ly-tool-git-commitlint commitizen commitlint conventional-changelog-cli husky -D

```

- 在 package.json 中添加

```json
{
  "scripts": {
    "log": "conventional-changelog --config ./node_modules/ly-tool-git-commitlint/lib/log -i CHANGELOG.md -s -r 0",
    "cz": "npm run log && git add . && git cz"
  },
  "husky": {
    "hooks": {
      "pre-push": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/ly-tool-git-commitlint/lib/cz"
    }
  }
}
```

增加 commitlint.config.js 文件

```js
module.exports = {
  extends: ['./node_modules/ly-tool-git-commitlint/lib/lint']
};
```

## 使用

```bash
npm run cz  # git add . && git commit -m 'feat:(xxx): xxx'
npm run log # 生成 CHANGELOG
```

1. 代码提交 npm run cz 
   
[![2a9618603ec5a160b.md.png](https://www.imageoss.com/images/2021/03/18/2a9618603ec5a160b.md.png)](https://www.imageoss.com/image/Fw9uC)

1. 选择一个类型会自动询问

    1. (必填）本次提交的改变所影响的范围(选择)
    2. (必填）写一个简短的变化描述(选择)
    3. (非必填）提供更详细的变更描述
    4. (非必填)是否存在不兼容变更?
    5. (非必填)此次变更是否影响某些打开的 issue 
 
[![1206a5d4ad62c5a7d.md.png](https://www.imageoss.com/images/2021/03/18/1206a5d4ad62c5a7d.md.png)](https://www.imageoss.com/image/Fw2m9)

### changelog 演示

[![3ff1905703eeff48c.png](https://www.imageoss.com/images/2021/03/18/3ff1905703eeff48c.png)](https://www.imageoss.com/image/FwbHe)

## 类型

| 规范名   | 描述                                                    |
| -------- | ------------------------------------------------------- |
| feat     | 一个新功能|
| ui     | 更新用户界面和样式文件|
| fix     | Bug修复|
| docs     | 修改文档|
| merge     | 合并代码|
| art     | 代码格式化|
| perf     | 性能优化|
| refactor     | 重构代码|
| revert     | 撤销上一次的提交|
| release     | 发布版本|
| test     | 测试用例|
| build     | 影响构建系统或外部依赖的更改（例如：gulp，npm，webpack）|
| init     | 初次提交|
| dep_add     | 添加依赖|
| dep_rm     | 删除依赖|

## 范围

| 规范名   | 描述                                                    |
| -------- | ------------------------------------------------------- |
| global     | 影响整个项目|
| noproblem     | 无影响|
| ui     | UI 界面|
| data     | 数据变化|
| component     | 影响公共组件使用|
| unknown     | 不知道影响范围|
| modules ||
