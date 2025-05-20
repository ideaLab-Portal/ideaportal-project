# ideaportal-project
AI支持的创新项目发布系统 ( Innovation Project Knowledge Base ), 支持手机和电脑的浏览
## 页面 (react)
 - 用户登录界面  ( Login Page )
 - 项目搜索分页  ( A project search with preview: project title + snapshot )
   - 项目浏览/编辑分页
      - 与 Agent和其他用户聊天的侧边栏 ( Agent and other users who have access to the resource )
      - 项目的每个阶段都有需要确认完成的里程碑 ( A markdown document viewer/editor with sharing + milestones )
 - 用户资料库
    - 用户的资料空间，包括视频（上传后转lts），图片，文件等 (生成链接后，可以在项目里使用）

## Development

This repository includes a minimal Node.js server implementation. To start the server run:

```bash
npm start
```

The server will respond with "Hello from IdeaPortal" on port 3000.

To execute the built-in tests run:

```bash
npm test
```

These tests use Node's built-in test runner and require no additional dependencies.
