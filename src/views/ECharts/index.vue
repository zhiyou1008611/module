<template>
  <div class="echarts">
    <h3>{{title}}</h3>
    <div id="myChart" style="width: 450px;height:300px;"></div>
    <div id="myChart2" style="width: 450px;height:300px;"></div>
    <div id="myChart3" style="width: 450px;height:300px;"></div>
    <div id="myChart4" style="width: 450px;height:300px;"></div>
    <div id="myChart5" style="width: 450px;height:300px;"></div>
    <!-- <div id="myChart" :style="{width: '300px', height: '300px'}"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "图表"
    };
  },
  mounted() {
    this.drawLine();
    // 当调整窗口大小时重绘canvas;
    window.onresize = () => {
      this.drawLine();
      // this.timer = setInterval(() => {
      //   this.draw();
      // }, 1000);
    };
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      let myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      let myChart4 = this.$echarts.init(document.getElementById("myChart4"));
      let myChart5 = this.$echarts.init(document.getElementById("myChart5"));
      // 绘制柱状图图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
          subtext: "就这样吧", //子标题
          left: 10, //定位
          borderColor: "red", //边框颜色
          borderWidth: 0 //边框宽度
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {
              show: true
            },
            restore: {
              show: true
            },
            dataZoom: {
              show: true
            },
            saveAsImage: {
              show: true
            },
            magicType: {
              type: ["line", "bar"]
            }
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
      // 绘制折线图图表
      myChart2.setOption({
        title: {
          text: "ECharts 入门示例",
          subtext: "就这样吧", //子标题
          left: 10, //定位
          borderColor: "red", //边框颜色
          borderWidth: 0 //边框宽度
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {
              show: true
            },
            restore: {
              show: true
            },
            dataZoom: {
              show: true
            },
            saveAsImage: {
              show: true
            },
            magicType: {
              type: ["line", "bar"]
            }
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
      // 绘制饼图图表
      myChart3.setOption({
        title: {
          text: "ECharts 饼图",
          subtext: "就这样吧", //子标题
          x: "center"
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {
              show: true
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{c}({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "来源",
            type: "pie",
            radius: "70%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 153, name: "视频广告" },
              { value: 1532, name: "搜索引擎" }
            ]
          }
        ]
      });
      // 绘制仪表盘图表
      myChart4.setOption({
        title: {
          text: "ECharts 仪表盘",
          x: "center"
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {
              show: true
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{c}%"
        },
        series: [
          {
            name: "来源",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 35, name: "完成率" }]
          }
        ]
      });
      // 绘制高级多个坐标图表
      myChart5.setOption({
        toolbox: {
          show: true,
          feature: {
            dataView: {
              show: true,
              readOnly: false
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            },
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["蒸发量", "降水量", "平均温度"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "水量",
            min: 0,
            max: 350,
            interval: 50,
            axisLabel: {
              formatter: "{value}ml"
            }
          },
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 40,
            interval: 5,
            axisLabel: {
              formatter: "{value}℃"
            }
          }
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            data: [50, 100, 136, 150, 120, 200],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "降水量",
            type: "bar",
            data: [50, 203, 239, 150, 183, 219],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "平均温度",
            type: "line",
            yAxisIndex:1,
            data: [21, 25, 32, 30, 31, 24],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
