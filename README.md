<!--
 * @Author: liuYang
 * @Description: 请填写描述信息
 * @Path: 引入路径
 * @Date: 2021-03-18 13:17:52
 * @LastEditors: liuYang
 * @LastEditTime: 2021-03-24 16:31:24
 * @MustParam: 必传参数
 * @OptionalParam: 选传参数
 * @EmitFunction: 函数
 * @Slot/Props.children: 提供的插槽或render
 * @Examples: 使用示例
-->
## Git commit 规范

结合 `commitizen` `commitlint` `conventional-changelog-cli` `husky`，进行封装，一键安装，开箱即用的 `git commit` 规范。 

## 功能

1. 自动提示 commit 填写格式。 
2. 自动提示影响范围
3. commit 是否规范，不规范不允许提交
4. 集成 git add . && git commit 不需要在执行两个命令
5. 自动生成 changelog

## 配置

1. 下载

```bash

# 为了防止和已有的包冲突，可以提前移除 `node_modules` 后再安装
rm -rf node_modules

# npm
npm i ly-tool-git-commitlint commitizen@4.2.3 commitlint@12.0.1 conventional-changelog-cli@2.1.1 husky@3.0.9 husky@3.0.9 -D

# yarn 
yarn add ly-tool-git-commitlint commitizen@4.2.3 commitlint@12.0.1 conventional-changelog-cli@2.1.1 husky@3.0.9 -D

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
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
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
   标注一个提交的类型(选择)
   
[![2a9618603ec5a160b.md.png](https://www.imageoss.com/images/2021/03/18/2a9618603ec5a160b.md.png)](https://www.imageoss.com/image/Fw9uC)

2. (必填）本次提交的改变所影响的范围(选择)

[![16162376442926ca10d2e35ca8f50.md.jpg](https://www.imageoss.com/images/2021/03/20/16162376442926ca10d2e35ca8f50.md.jpg)](https://www.imageoss.com/image/F81OH)

[![1206a5d4ad62c5a7d.md.png](https://www.imageoss.com/images/2021/03/18/1206a5d4ad62c5a7d.md.png)](https://www.imageoss.com/image/Fw2m9)
3. (非必填）提供更详细的变更描述
4. (非必填)是否存在不兼容变更?
5. (非必填)此次变更是否影响某些打开的 bug/issue 

### changelog 演示

[![WX20210320-1857072x6265fb6784e85b8c.md.png](https://www.imageoss.com/images/2021/03/20/WX20210320-1857072x6265fb6784e85b8c.md.png)](https://www.imageoss.com/image/F86zE)

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


## 下版本准本使用generator实现基础配置 敬请期待  欢迎一起交流 欢迎star

#### 2021-3-20  

##### 1.1.10

1. 更新readme 

##### 1.1.1 - 1.1.9

1. 优化scope字段在changelog文件内的展示 由英文展示为中文  
2. 部分性能优化  
3. husky生效  

#### 2021-3-19  

##### 1.1.0

1. 修复没有选择scope时changelog错位的bug  
2. 限定husky包版本  
3. scope删除modules字段  


