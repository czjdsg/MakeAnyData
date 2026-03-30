# Make Any Data Showcase Template

这是一个独立静态模板，不依赖框架，适合先快速确认展示页视觉方向。

## 文件

- `index.html`: 页面结构
- `styles.css`: 视觉样式和动画
- `app.js`: 卡片切换、滚动切换、reveal 和鼠标光晕动效

## 预览

直接打开 `index.html` 即可。

如果你想用本地服务预览：

```bash
cd /data0/cone/MakeAnyData/showcase-template
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 后续改造建议

- 把右侧大面板替换成真实论文 case 截图或视频封面
- 在 `caseData` 和 `storyData` 中换成你的正式文案
- 如果后面接入 React / Next.js，可以保留这套结构和样式语言，只把数据驱动部分改成组件
