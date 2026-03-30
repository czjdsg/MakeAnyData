# FRP Deployment For Make Any Data Showcase

目标拓扑：

- 内网展示页服务：`127.0.0.1:8080`
- 公网 FRP 服务端：`222.223.112.209:7000`
- 公网访问地址：`http://222.223.112.209:18080`

这套配置把学校内网服务器上的展示页，通过 FRP 映射到公网服务器。

## 目录

- `frp.token`: 公网机和内网机共用的认证 token
- `public/frps.toml`: 公网服务器 FRP 服务端配置
- `public/frps.service`: 公网服务器 systemd 模板
- `internal/frpc.toml`: 内网服务器 FRP 客户端配置
- `internal/frpc.service`: 内网服务器 systemd 模板
- `internal/makeanydata-showcase.service`: 内网展示页常驻服务模板
- `internal/serve-showcase.sh`: 内网展示页启动脚本

## 1. 在公网服务器 222.223.112.209 上部署 frps

先放行端口：

- `7000/tcp`：FRP 控制连接
- `18080/tcp`：公网访问展示页

下载并解压 FRP：

```bash
cd /tmp
curl -L -o frp.tar.gz https://github.com/fatedier/frp/releases/download/v0.68.0/frp_0.68.0_linux_amd64.tar.gz
tar -xzf frp.tar.gz
sudo mkdir -p /opt/frp
sudo cp frp_0.68.0_linux_amd64/frps /opt/frp/
```

拷贝 token、配置并启动：

```bash
sudo cp frp.token /opt/frp/frp.token
sudo chmod 600 /opt/frp/frp.token
sudo cp public/frps.toml /opt/frp/frps.toml
sudo cp public/frps.service /etc/systemd/system/frps.service
sudo systemctl daemon-reload
sudo systemctl enable --now frps
sudo systemctl status frps
```

## 2. 在学校内网服务器上部署展示页常驻服务

如果你只想继续用当前页面模板，可以直接常驻 `python3 -m http.server`：

```bash
sudo cp internal/makeanydata-showcase.service /etc/systemd/system/makeanydata-showcase.service
sudo systemctl daemon-reload
sudo systemctl enable --now makeanydata-showcase
sudo systemctl status makeanydata-showcase
curl http://127.0.0.1:8080
```

## 3. 在学校内网服务器上部署 frpc

下载并解压 FRP：

```bash
cd /tmp
curl -L -o frp.tar.gz https://github.com/fatedier/frp/releases/download/v0.68.0/frp_0.68.0_linux_amd64.tar.gz
tar -xzf frp.tar.gz
sudo mkdir -p /opt/frp
sudo cp frp_0.68.0_linux_amd64/frpc /opt/frp/
```

拷贝 token、配置并启动：

```bash
sudo cp frp.token /opt/frp/frp.token
sudo chmod 600 /opt/frp/frp.token
sudo cp internal/frpc.toml /opt/frp/frpc.toml
sudo cp internal/frpc.service /etc/systemd/system/frpc.service
sudo systemctl daemon-reload
sudo systemctl enable --now frpc
sudo systemctl status frpc
```

## 4. 验证

内网服务器本地：

```bash
curl http://127.0.0.1:8080
```

公网或任意外部网络：

```bash
curl http://222.223.112.209:18080
```

浏览器访问：

```text
http://222.223.112.209:18080
```

## 说明

- 当前配置使用 `tcp` 转发，不依赖域名，适合先把页面快速暴露出去。
- token 现在单独保存在 `frp.token`，比直接写进配置文件更适合长期保留。
- 如果这个目录会进入版本控制，建议把 `frp.token` 排除出仓库，或者重新生成后只放到目标机器。
- 如果公网机的 `18080` 已占用，把 `public/frps.toml` 里的 `allowPorts` 和 `internal/frpc.toml` 里的 `remotePort` 改成新的端口。
- 如果以后要走 `80/443 + 域名`，建议下一步在公网服务器上用 Nginx 反代到 `127.0.0.1:18080`。

## 官方参考

- frp release: https://github.com/fatedier/frp/releases/latest
- frp config docs: https://gofrp.org/en/docs/features/common/configure/
- frp tcp example: https://gofrp.org/en/docs/examples/unix-domain-socket/
