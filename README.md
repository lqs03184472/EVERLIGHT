<p align="center">
  <img src="./public/logo.png" alt="永夜星灯 EVERLIGHT Logo" width="140" />
</p>

# 永夜星灯 EVERLIGHT

> 七盏星灯熄灭三百年后，你是最后一位拾光者。

《永夜星灯》是一个原创开放世界奇幻题材的**概念官网**，使用 React + TypeScript 手写实现。站点采用深蓝黑与香槟金的视觉语言、衬线大标题与视差滚动，包含世界观、六律、五城邦、玩法、角色档案与下载等板块。

所有世界观、角色与美术素材均为原创或 AI 生成的概念内容，仅用于前端作品演示。

![永夜星灯 首页预览](./public/images/hero.jpg)

## 项目亮点

- **30 位可查阅角色**：20 位女性 / 10 位男性，覆盖风、焰、霜、潮、岩、星六系律能
- **角色档案画廊**：列式立绘墙，悬停放大，卡片内一键切换「立绘 / 特写」
- **角色详情页**：立绘与特写双视图切换、8 项档案数据、技能、星痕、语音与形象设定
- **筛选与检索**：按性别、律能实时过滤角色
- **动效体系**：基于 Framer Motion 的进场、视差与页面过渡
- **响应式**：桌面 5 列 / 平板 4–3 列 / 手机 2 列，无横向溢出
- **自托管字体**：Cormorant Garamond 与 Inter 以 woff2 打包，无外部字体请求

## 技术栈

| 分类 | 选型 |
| --- | --- |
| 框架 | React 18 |
| 语言 | TypeScript 5（strict） |
| 构建 | Vite 5 |
| 路由 | React Router 6（HashRouter） |
| 动效 | Framer Motion 11 |
| 样式 | 原生 CSS 设计系统（CSS 变量 + clamp 响应式） |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 类型检查并构建到 dist/
npm run build

# 本地预览构建产物
npm run preview
```

运行环境要求：Node.js 18+（推荐 20 LTS）。

## 目录结构

```
.
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署
├── public/
│   ├── .nojekyll                  # 关闭 GitHub Pages 的 Jekyll 处理
│   ├── favicon.svg
│   └── images/                    # 30 张立绘 + 30 张特写 + 场景图
├── src/
│   ├── assets/fonts/              # 自托管 woff2 字体
│   ├── components/                # 页面区块组件（Hero / Nav / 角色舞台等）
│   ├── data/
│   │   ├── game.ts                # 世界观、律能、城邦与首批角色
│   │   └── characters-extra.ts    # 扩充的 22 位角色
│   ├── lib/motion.ts              # 共享缓动与动效参数
│   ├── pages/
│   │   ├── Home.tsx               # 首页
│   │   ├── CharactersPage.tsx     # 角色档案画廊
│   │   └── CharacterDetail.tsx    # 角色详情
│   ├── styles/global.css          # 全局设计系统与全部布局样式
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tsconfig.json
└── vite.config.ts
```

## 部署到 GitHub Pages

仓库已内置 GitHub Actions 工作流，推送到 `main` 分支即自动构建并发布。

1. 在 GitHub 新建仓库并推送本项目：

   ```bash
   git init
   git add .
   git commit -m "feat: init everlight chronicle"
   git branch -M main
   git remote add origin https://github.com/<your-name>/<repo-name>.git
   git push -u origin main
   ```

2. 打开仓库 **Settings → Pages**，将 **Source** 设为 **GitHub Actions**。
3. 等待 Actions 中的 `Deploy to GitHub Pages` 完成，访问
   `https://<your-name>.github.io/<repo-name>/`。

站点使用 `HashRouter` 且 `vite.config.ts` 中 `base: './'`，因此部署在任意子路径下都能正常访问，无需修改配置。若使用自定义域名或根路径部署，也无需额外调整。

## 素材与免责声明

- 站内所有角色、地名、设定与美术素材均为**原创虚构内容**或由 AI 生成的概念稿，与任何现有商业作品无关。
- 本项目仅用于前端工程与交互设计的展示，不提供游戏本体，也不含任何内购或商业服务。
- 角色设定中出现的体型、服饰等描述均为角色设计元素，所有角色均为成年人设定。
- 如需二次使用，请保留本仓库出处。
