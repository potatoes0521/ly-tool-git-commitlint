/*
 * @Author: liuYang
 * @Description: 请填写描述信息
 * @Path: 引入路径
 * @Date: 2021-03-18 13:17:52
 * @LastEditors: liuYang
 * @LastEditTime: 2021-03-18 14:24:41
 * @MustParam: 必传参数
 * @OptionalParam: 选传参数
 * @EmitFunction: 函数
 * @Slot/Props.children: 提供的插槽或render
 * @Examples: 使用示例
 */
module.exports = (api, option) => {
  if (option.replace) {
    api.render('./template');
    api.extendPackage({
      devDependencies: {
        "commitizen": "^4.0.3",
        "commitlint": "^8.2.0",
        "conventional-changelog-cli": "^2.0.28",
        "husky": "^3.0.9"
      },
      scripts: {
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
    })
    console.log('添加 ly-tool-git-commitlint 插件成功！')
  } else {
    console.log('添加 ly-tool-git-commitlint 插件失败！')
  }
}
