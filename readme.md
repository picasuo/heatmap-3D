# Three.js Starter
Courtesy of Bruno Simon of https://threejs-journey.xyz/

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```


## 程序思路

- 构建3d模型作为模块基础

- 绘制出热力图canvas

- 根据3d坐标系与热力坐标系的差异，将后端返回的3d点位坐标转换为热力坐标

- 隐藏热力图canvas

- 将热力图canvas作为贴出传入3d模型，形成热力地板


## 依赖包

- three.js

- heatmap.js

