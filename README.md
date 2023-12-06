# plugin-web-update-notification

```bash
pnpm add @plugin-web-update-notification/vite@1.6 -D # 注意版本号，与vite对应
```

```js
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    webUpdateNotice({
      logVersion: true,
    }),
  ]
})
```

# 本地测试方式

1. `npm run build` 运行打包命令 生成dist目录

2. VSCode 下载插件， live server

3. 右键 `dist/index.html`， 选择 `open with live server`

4. 修改 `web_version_by_plugin`的版本号

此时就能在页面上看到更新提醒了。

![](https://gitee.com/beat-the-buzzer/pictures/raw/master/blog/update-notification/notification.png)

