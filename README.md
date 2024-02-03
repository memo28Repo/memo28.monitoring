<!--
 * @Author: 邱狮杰
 * @Date: 2023-03-09 11:53:37
 * @LastEditTime: 2024-01-08 23:12:56
 * @Description: 
 * @FilePath: /memo28.monitoring/README.md
-->

# memo28.monitoring

![status](https://github.com/memo28Repo/memo28.monitoring/actions/workflows/publish.yml/badge.svg?branch=main)

<!-- https://docs.github.com/zh/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge -->

## Packages

| Package (click for changelogs)                                                       | describe   |
|--------------------------------------------------------------------------------------|:-----------|
| [@memo28.monitoring/sdk-browser](https://github.com/memo28Repo/memo28.monitoring)    | 浏览器端提供的sdk |   |
| [memo28.monitoring.service](https://github.com/memo28Repo/memo28.monitoring.service) | 后端服务       |   |

## License

[MIT](LICENSE)

## 部署流程

### 克隆项目

```shell
# 克隆前端项目
git clone https://github.com/memo28Repo/memo28.monitoring.git
# 克隆后端项目
git clone https://github.com/memo28Repo/memo28.monitoring.service.git
```

### 启动

```shell
# 进入前端项目文件夹下 启动docker image
pnpm build:app:docker
```

```shell
# 进入后端项目文件夹下 后执行
go build -o main main.go
./main
```
