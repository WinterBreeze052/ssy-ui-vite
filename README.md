# readme

以一种偏向自动化、脚本化的方式，结合一些工具的能力，解决一些纯人工处理的低效、非标准的问题，来有效的提升效率、质量和性能。

https://doc.riddler.wiki/widget/

## 2024-10-18

完成文档1-4

### 主要内容

- 1.学习前端工程化就从搭建组件库开始

- 2.MVP原型系统：将组件封装为组件库

- 3.CSS 样式：用 UnoCSS 实现原子化 CSS

- 4.文档建设：创建示例功能的文档网站

## 2024-10-25

完成文档5-9

### 主要内容

- 5.单元测试 ： 搭建 Vitest 的单元测试环境

- 6.规范化：Eslint + Husky + commitlint

- 7.软件包封装： 如何发布兼容多种 JS 模块标准的软件包

- 8.持续集成 CI： 基于 Github Action 的回归验证

- 9.开发许可证：维护自己的版权

### 其他

###### 1）出现下面错误

```
.husky/commit-msg: .husky/commit-msg: cannot execute binary file
husky - commit-msg script failed (code 126)
```

解决方法：将`ssy-ui-vite\.husky\`下文件由`UTF-16`更改为`UTF-8`

参考：https://blog.csdn.net/weixin_51799004/article/details/138308098?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_utm_term~default-1-138308098-blog-135292874.235^v43^pc_blog_bottom_relevance_base4&spm=1001.2101.3001.4242.2&utm_relevant_index=4

###### 2）安装工具验证脚本 commitlint时出现错误

```powershell
pnpm add --save-dev @commitlint/{cli,config-conventional}
```

解决方法：分别安装这两个包

```powershell
pnpm add --save-dev @commitlint/cli @commitlint/config-conventional
```

或

```powershell
& pnpm add --save-dev @commitlint/cli; & pnpm add --save-dev @commitlint/config-conventional
```

###### 3）出现Unocss样式不生效

解决方法：调整class顺序，将固定样式前置
