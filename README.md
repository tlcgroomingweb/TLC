# TLC Grooming Website

TLC Grooming and Sharpening Services 的新版官网项目。当前代码把两份静态概念稿转换成可维护、可直接部署到 Vercel 的正式开发基础。

## Tech stack

- **Next.js 16 / App Router** — SEO、图片优化、静态生成和 Vercel 原生部署支持
- **React 19 + TypeScript** — 组件化 UI 与类型安全
- **Tailwind CSS 4 + CSS Modules** — 全局设计 token 加局部样式隔离
- **ESLint 9** — 基础代码质量检查
- **npm lockfile** — 固定依赖版本，保证本地与 Vercel 构建一致
- **Local Geist fonts** — 字体随代码部署，构建和页面加载不依赖 Google Fonts 网络请求

运行时固定为 **Node.js 24 LTS**，与 Vercel 新项目默认运行时一致。项目暂时使用 Next.js 的 webpack 构建器，避免非 LTS Node 25 环境下的 Turbopack 构建等待问题。

目前不需要数据库、CMS 或自建 API。预约继续使用 TLC 现有的 DaySmart/Online Appointment 页面；地图使用 Google Maps embed。

## Local development

```bash
nvm use
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

提交前运行：

```bash
npm run lint
npm run build
```

## Project structure

```text
src/
  app/
    layout.tsx          # 全站 metadata、字体与根布局
    page.tsx            # 首页 Server Component
    page.module.css     # 首页响应式视觉系统
  components/
    site-header.tsx     # 唯一需要客户端 JS 的移动导航
  lib/
    site.ts             # 商家资料、服务、价格与外部链接
design-references/
  index-concept-a.html  # 原始成熟/可信方向概念稿
  index-concept-b.html  # 原始活泼/圆润方向概念稿
```

## Vercel deployment

1. 把仓库推送到 GitHub、GitLab 或 Bitbucket。
2. 在 Vercel 导入仓库。
3. Framework Preset 选择/自动识别 **Next.js**。
4. 保持默认 Build Command `npm run build` 和 Output 设置即可。

当前版本不需要环境变量，也不需要 `vercel.json`。

## Content checklist before launch

参考稿内的营业时间、价格、美容时段、地址、电话和邮件已集中在 `src/lib/site.ts` 或首页数据中。上线前需要客户逐项确认，并替换旧站远程图片为有授权的高清原图。
