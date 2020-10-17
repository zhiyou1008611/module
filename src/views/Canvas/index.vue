<template>
  <div>
    <h3>{{title}}</h3>
    <canvas id="canvas" width="200px" height="200px"></canvas>
  </div>
</template>

<script>
let canvas;
let ctx;
let r;
export default {
  data() {
    return {
      title:"时钟",
      timer: null,
      width: null,
      height: null,
      canvas,
      ctx,
      r,
      rem: 0
    };
  },
  mounted() {
    this.initCanvas();
    this.timer = setInterval(() => {
      this.draw();
    }, 1000);
    // 当调整窗口大小时重绘canvas;
    window.onresize = () => {
      this.initCanvas();
      this.timer = setInterval(() => {
        this.draw();
      }, 1000);
    };
  },
  methods: {
    initCanvas() {
      console.log("初始化canvas");
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.width = this.ctx.canvas.width;
      this.height = this.ctx.canvas.height;
      this.r = this.canvas.width / 2;
      this.rem = this.width / 200;
    },
    drawSmile() {
      this.ctx.save();
      this.ctx.translate(this.r, this.r);
      this.ctx.beginPath();
      this.ctx.lineWidth = 6 * this.rem;
      this.ctx.arc(0, 0, this.r - this.ctx.lineWidth / 2, 0, 2 * Math.PI, false); // 绘制
      // this.ctx.moveTo(110, 75);
      // this.ctx.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
      // this.ctx.moveTo(65, 65);
      // this.ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
      // this.ctx.moveTo(95, 65);
      // this.ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
      this.ctx.stroke();
      var hourNumber = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
      this.ctx.font = 16 * this.rem + "px Arial";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      hourNumber.forEach((number, i) => {
        var rad = ((2 * Math.PI) / 12) * i;
        var x = Math.cos(rad) * (this.r - 24 * this.rem);
        var y = Math.sin(rad) * (this.r - 24 * this.rem);
        this.ctx.fillText(number, x, y);
      });
      for (let i = 0; i < 60; i++) {
        var rad = ((2 * Math.PI) / 60) * i;
        var x = Math.cos(rad) * (this.r - 10 * this.rem);
        var y = Math.sin(rad) * (this.r - 10 * this.rem);
        this.ctx.beginPath();
        this.ctx.arc(x, y, 1.5 * this.rem, 0, 2 * Math.PI, false);
        if (i % 5 != 0) {
          this.ctx.fillStyle = "#aaa";
        } else {
          this.ctx.fillStyle = "#222";
        }
        this.ctx.fill();
      }
    },
    drawHour(hour, minute) {
      this.ctx.save();
      this.ctx.beginPath();
      let rad = ((2 * Math.PI) / 12) * hour;
      let mrad = ((2 * Math.PI) / 12 / 60) * minute;
      this.ctx.rotate(rad + mrad);
      this.ctx.lineWidth = 6 * this.rem;
      this.ctx.lineCap = "round";
      this.ctx.moveTo(0, 10 * this.rem);
      this.ctx.lineTo(0, -this.r / 2);
      this.ctx.stroke();
      this.ctx.restore();
    },
    drawMinute(minute, second) {
      this.ctx.save();
      this.ctx.beginPath();
      let rad = ((2 * Math.PI) / 60) * minute;
      let mrad = ((2 * Math.PI) / 60 / 60) * second;
      this.ctx.rotate(rad + mrad);
      this.ctx.lineWidth = 4 * this.rem;
      this.ctx.lineCap = "round";
      this.ctx.moveTo(0, 15 * this.rem);
      this.ctx.lineTo(0, -this.r + 20 * this.rem);
      this.ctx.stroke();
      this.ctx.restore();
    },
    drawSecond(second) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#c14543";
      let rad = ((2 * Math.PI) / 60) * second;
      this.ctx.rotate(rad);
      this.ctx.moveTo(-2 * this.rem, 20 * this.rem);
      this.ctx.lineTo(2 * this.rem, 20 * this.rem);
      this.ctx.lineTo(1, -this.r + 15 * this.rem);
      this.ctx.lineTo(-1, -this.r + 15 * this.rem);
      this.ctx.fill();
      this.ctx.restore();
    },
    drawDot() {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#F2F6FC";
      this.ctx.arc(0, 0, 3 * this.rem, 0, 2 * Math.PI, false);
      this.ctx.fill();
      this.ctx.restore();
    },
    draw() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      let now = new Date();
      let hour = now.getHours();
      let middle = now.getMinutes();
      let second = now.getSeconds();
      this.drawSmile();
      this.drawHour(hour, middle);
      this.drawMinute(middle, second);
      this.drawSecond(second);
      this.drawDot();
      this.ctx.restore();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
