/*
 * @Author: liuYang
 * @Description: 请填写描述信息
 * @Path: 引入路径
 * @Date: 2019-12-24 14:43:35
 * @LastEditors: liuYang
 * @LastEditTime: 2021-04-12 11:35:01
 * @MustParam: 必传参数
 * @OptionalParam: 选传参数
 * @EmitFunction: 函数
 * @Slot/Props.children: 提供的插槽或render
 * @Examples: 使用示例
 */


const compareFunc = require('compare-func');
const Q = require('q');
const readFile = Q.denodeify(require('fs').readFile);
const resolve = require('path').resolve;

module.exports = Q.all([
  readFile(resolve(__dirname, './templates/template.hbs'), 'utf-8'),
  readFile(resolve(__dirname, './templates/header.hbs'), 'utf-8'),
  readFile(resolve(__dirname, './templates/commit.hbs'), 'utf-8'),
  readFile(resolve(__dirname, './templates/footer.hbs'), 'utf-8')
])
  .spread((template, header, commit, footer) => {
    const writerOpts = getWriterOpts();
    writerOpts.mainTemplate = template;
    writerOpts.headerPartial = header;
    writerOpts.commitPartial = commit;
    writerOpts.footerPartial = footer;

    return writerOpts;
  });

function getWriterOpts() {
  return {
    transform: (commit, context) => {
      let discard = false;
      const issues = [];
      commit.notes.forEach(note => {
        note.title = '💡 不兼容变更';
        discard = true;
      });
      if (commit.type === 'feat') {
        commit.type = '🌟 新功能';
      } else if (commit.type === 'fix') {
        commit.type = '🐛 Bug修复';
      } else if (commit.type === 'perf') {
        commit.type = '🚀 性能优化';
      } else if (commit.type === 'ui') {
        commit.type = '💄 UI变更';
      } else if (commit.type === 'revert') {
        commit.type = '🔙 撤销上一次的提交';
      } else if (commit.type === 'merge') {
        commit.type = '🪡 合并代码';
      } else if (discard) {
        return;
      } else if (commit.type === 'components') {
        commit.type = '⚙ 组件变化';
      } else if (commit.type === 'art') {
        commit.type = '🎨 代码格式化';
      } else if (commit.type === 'docs') {
        commit.type = '📝 文档';
      } else if (commit.type === 'style') {
        commit.type = '🎨 代码样式';
      } else if (commit.type === 'refactor') {
        commit.type = '🔨 代码重构';
      } else if (commit.type === 'test') {
        commit.type = '✅ 测试用例';
      } else if (commit.type === 'build') {
        commit.type = '🏠 构建系统';
      } else if (commit.type === 'release') {
        commit.type = '🔖 发布版本';
      } else if (commit.type === 'init') {
        commit.type = '🎉 init';
      } else if (commit.type === 'dep_rm') {
        commit.type = '➖ 删除依赖';
      } else if (commit.type === 'dep_add') {
        commit.type = '➕ 添加依赖';
      }
      
      if (typeof commit.hash === 'string') {
        commit.hash = commit.hash.substring(0, 7);
      }

      if (typeof commit.subject === 'string') {
        let url = context.repository ? `${context.host}/${context.owner}/${context.repository}` : context.repoUrl;
        if (url) {
          url = `${url}/issues/`;
          // Issue URLs.
          commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
            issues.push(issue);
            return `[#${issue}](${url}${issue})`;
          });
        }
        if (context.host) {
          // User URLs.
          commit.subject = commit.subject.replace(/\B@([a-z0-9](?:-?[a-z0-9]){0,38})/g, `[@$1](${context.host}/$1)`);
        }
      }

      // remove references that already appear in the subject
      commit.references = commit.references.filter(reference => {
        if (issues.indexOf(reference.issue) === -1) {
          return true;
        }
        return false;
      });

      return commit;
    },
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    notesSort: compareFunc
  };
}
