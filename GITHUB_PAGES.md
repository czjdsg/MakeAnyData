# GitHub Pages Publish Guide

推荐做法：把当前 `showcase-template` 目录作为一个独立仓库发布，并在 GitHub Pages 中选择 `main` 分支的 `/docs` 目录。

## 已准备好的发布目录

直接发布这个目录即可：

- `docs/index.html`
- `docs/styles.css`
- `docs/app.js`
- `docs/.nojekyll`

## 最短发布流程

### 1. 在 GitHub 上新建一个仓库

例如：`make-any-data-showcase`

### 2. 在本地初始化并推送

```bash
cd /data0/cone/MakeAnyData/showcase-template
git init
git branch -M main
git add .
git commit -m "init showcase template"
git remote add origin git@github.com:<your-name>/make-any-data-showcase.git
git push -u origin main
```

如果你用 HTTPS：

```bash
git remote add origin https://github.com/<your-name>/make-any-data-showcase.git
git push -u origin main
```

### 3. 在 GitHub 打开 Pages

仓库页面：

- `Settings`
- `Pages`
- `Build and deployment`
- `Source`: `Deploy from a branch`
- `Branch`: `main`
- `Folder`: `/docs`

保存后等待 1 到 3 分钟。

### 4. 访问地址

项目页通常会是：

```text
https://<your-name>.github.io/make-any-data-showcase/
```

## 后续更新

每次改完页面后，重新同步到 `docs/` 并推送：

```bash
cd /data0/cone/MakeAnyData/showcase-template
cp index.html styles.css app.js docs/
git add .
git commit -m "update showcase"
git push
```

## 如果你想把根目录也当源码目录

也可以直接发布根目录，但当前目录里还有 `deploy/` 等辅助文件。用 `/docs` 更干净。
