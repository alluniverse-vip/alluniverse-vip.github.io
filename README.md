<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">
    探路者
</h1>
<h4 align="center">开发者导航 - Pro Developer网站导航</h4>
<p align="center">
    <a target="_blank" href="https://hello.alluniverse.vip">
        <img src="https://img.shields.io/badge/%E6%8E%A2%E8%B7%AF%E8%80%85-hello.alluniverse.vip-blue">
    </a>
</p>

探路者是一款极简导航工具，致力于收录的每个站点都有其独特的作用。同时支持自定义[<u>导航</u>](./src/json/nav.json)，让用户快速实现个性化的导航站点。

## 特性概述
- [x] 免费ChatGPT
- [x] 装机必备
- [x] 开发工具
- [x] Git精选项目
- [x] 热门站点
- [ ] 工具破解
- [ ] 一键安装
- [ ] 经典教程
- [x] 自托管

## 部署
### GitHub Pages

1. [Fork](https://github.com/alluniverse-vip/alluniverse-vip.github.io/fork) 仓库
2. 自定义[nav.json](./src/json/nav.json)
3. 定义[个人令牌](./.github/workflows/deploy.yml#L24-L27)，参考[peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-set-personal-access-token-personal_token)
4. 配置`GitHub Pages`，选择`Deploy from a branch`-`gh-pages`-`/ (root)`
### Cloudflare Pages

1. 创建账号，选择`Workers & Pages`
2. `Create application`-`Connect to Git`，关联选择仓库
3. Build command - `npm run build`，Build output directory - `dist`
### web服务器
```bash
# 安装依赖
npm ci
# 构建
npm run build
# copy dist
```
