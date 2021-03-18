/*
 * @Author: liuYang
 * @Description: 请填写描述信息
 * @Path: 引入路径
 * @Date: 2021-03-18 13:17:52
 * @LastEditors: liuYang
 * @LastEditTime: 2021-03-18 14:13:26
 * @MustParam: 必传参数
 * @OptionalParam: 选传参数
 * @EmitFunction: 函数
 * @Slot/Props.children: 提供的插槽或render
 * @Examples: 使用示例
 */
'format cjs';
const engine = require('./engine');

module.exports = engine({
  types: {
    feat: {
      description: '🌟  一个新功能',
      title: '🌟 新功能'
    },
    ui: {
      description: '💄 更新UI(更新用户界面和样式文件 )',
      title: '💄 UI变更'
    },
    fix: {
      description: '🐛 修复bug',
      title: '🐛 Bug修复'
    },
    docs: {
      description: '📝 修改文档(仅文档更改)',
      title: '📝修改修改文档'
    },
    merge: {
      description: '🪡 从上游分支合并代码',
      title: '🪡 合并代码'
    },
    art: {
      description: '🎨 对代码含义无影响的改动(空格、格式缩进、逗号等等，不改变代码逻辑)',
      title: '🎨 代码格式化'
    },
    perf: {
      description: '🚀  性能优化',
      title: '🚀  性能优化'
    },
    refactor: {
      description: '🔨 重构代码',
      title: '🔨 代码重构'
    },
    revert: {
      description: '🔙  撤销上一次的提交',
      title: '🔙 撤销'
    },
    release: {
      description: '🔖 发布版本',
      title: '🔖 发布版本'
    },
    test: {
      description: '✅ 增删测试',
      title: '✅ 测试'
    },
    build: {
      description: '🏠  影响构建系统或外部依赖的更改（例如：gulp，npm，webpack）',
      title: '🏠 构建'
    },
    init: {
      description: '🎉 初次提交',
      title: '🎉 init'
    },
    dep_add: {
      description: '➕ 添加依赖',
      title: '➕ 添加依赖'
    },
    dep_rm: {
      description: '➖ 删除依赖',
      title: '➖ 删除依赖'
    }
  },
  scopes: {
    global: {
      description: '影响整个项目',
      title: 'global'
    },
    ui: {
      description: 'UI 界面',
      title: 'ui'
    },
    data: {
      description: '数据变化',
      title: 'data'
    },
    component: {
      description: '影响公共组件使用',
      title: 'component'
    },
    unknown: {
      description: '不知道影响范围',
      title: 'unknown'
    }
  }
})