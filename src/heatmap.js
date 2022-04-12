import heatmapData from './heatmap.json'
const heatmap = document.getElementById('heatmap')
// const width = heatmap.clientWidth
// const height = heatmap.clientHeight
const width = 1200
const height = 800

const heatmapInstance = h337.create({
  container: heatmap,
  width: width,
  height: height,
  blur: '.85',
  radius: 25, //辐射圈范围大小e
  alpha: true,
  // opacity: 0.5,//透明度
  // minOpacity: 0.1,
  // maxOpacity: 0.9,
  //色带配置（比例）
  gradient: {
    0.1: 'rgb(0,0,255)',
    0.3: 'rgb(0,255,0)',
    0.5: 'rgb(255,255,0)',
    0.8: 'rgb(255,115,0)',
    1: 'rgb(255,0,0)',
  },
})

const heatmapPoints = formatHeatMapData()
// console.log(heatmapPoints)
let max = 0
heatmapPoints.map(item => {
  max = Math.max(max, item.value)
})
max = Math.round(max * 0.6)
const data = {
  max: max,
  data: heatmapPoints,
}

heatmapInstance.setData(data)
heatmapInstance._renderer.canvas.style.display = 'none'

function formatHeatMapData() {
  const list = []
  //   console.log(heatmapData)
  heatmapData.map(item => {
    const coordinate = JSON.parse(item.coordinate)
    const obj = {
      x: formatCoordinateX(coordinate.position.x),
      y: formatCoordinateY(coordinate.position.z),
      value: item.in_flow ? item.in_flow : item.out_flow,
    }
    list.push(obj)
  })

  return list
}

//将3d坐标系坐标转换为热力图坐标
function formatCoordinateX(data) {
  //根据热力图放大倍数找到放大后的中心点（对应3d原点）
  const heatMapWidth = width / 2
  //除8是因为3d模型的坐标缩小了8倍
  let param = Math.floor(heatMapWidth + data / 8)
  if (param < 0) {
    param = 0
  }
  return param
}

function formatCoordinateY(data) {
  const heatMapHeight = height / 2
  let param = Math.floor(heatMapHeight + data / 8)
  if (param < 0) {
    param = 0
  }
  return param
}

export default heatmapInstance
