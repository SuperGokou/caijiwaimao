# AI 外贸增长引擎 · 内部作战图

一份给团队的"作战图" — 讲清楚我们在做什么、为什么做、未来 21 天和 12 个月怎么走。这不是融资 BP，是一份**自己投钱、自己干、要自己看懂**的产品蓝图。

[在线预览（GitHub Pages）](https://supergokou.github.io/caijiwaimao/) · [项目源仓库](https://github.com/SuperGokou/caijiwaimao)

---

## 文件结构

```
website/
├── index.html          # 单页应用，所有内容在这里
├── style/
│   └── main.css        # 全部样式（设计 token + 组件 + 响应式）
├── js/
│   └── main.js         # TOC 平滑滚动 + 当前章节高亮 + 滚动进度条
├── README.md           # 这个文件
└── .gitignore
```

## 设计选型

- **字体**：Noto Serif SC（中文衬线，大标题）+ Inter（英文 / 数据）+ JetBrains Mono（标号 / 代码）
- **配色**：深墨 `#0c0c0c` + 暖橙 `#ea580c`（accent）+ 警示色 `#be123c`（红）+ 成功色 `#0d9488`（青）
- **网格**：1180px 容器 + 32px 边距 + 24px 卡片间距
- **避坑**：不用渐变 banner、不用 emoji 装饰、不用居中正文、不用浅米色背景（避免 AI Slop 的常见审美陷阱）

## 文档章节

| # | 章节 | 内容 |
|---|---|---|
| 01 | 这份文档是什么 | 阅读对象 + 5 个问题 |
| 02 | 30 秒读懂 | TL;DR |
| 03 | 我们的现状 | 8 步手动流程剖析 |
| 04 | 七大痛点 | 为什么必须做 |
| 05 | 三类同行参照 | 苏杭 / 龙虾 Hermes / 海外工具对比 |
| 06 | 产品定位 | 增长引擎，不是工具 |
| 07 | 产品架构 | 6 个 AI Agent 编队 + GBRAIN 知识中枢 |
| 08 | 全流程映射 | 手动 → AI 对照表 |
| 09 | 五大杀手锏 | 差异化护城河 |
| 10 | 21 天冲刺计划 | MVP 落地时间线 |
| 11 | 技术栈 | 选型与理由 |
| 12 | 商业模式 | 自用 → 内测 → 付费 → 公开 |
| 13 | 12 个月路线图 | Q1-Q4 |
| 14 | 团队分工 | 角色与职责 |
| 15 | 度量复盘 | 北极星 + 护栏指标 |
| 16 | FAQ | 关键决策记录 |

## 本地预览

直接打开 `index.html` 即可，没有任何构建步骤。

或者起一个简单的 HTTP 服务（任选一个）：

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

然后访问 `http://localhost:8000`。

## 部署 GitHub Pages

仓库 Settings → Pages → Source 选 `main` 分支 + `/website` 子目录（或先把 website 内容移到根目录）。

## 修改建议

- 改文案：直接编辑 `index.html`
- 改样式：编辑 `style/main.css`，所有 token 在文件顶部 `:root`
- 改交互：编辑 `js/main.js`

## License

Internal · Confidential · 仅供核心团队使用
