<template>
  <div>
    <h3 id="score">{{score}}</h3>
    <div id="main">
      <div id="con"></div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      score: 0,
      clock: null,
      state: 0,
      speed: 4,
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      for (var i = 0; i < 4; i++) {
        this.createrow();
      }
      // 添加onclick事件
      $("main").onclick = function (ev) {
        this.judge(ev);
      };
      // 定时器 每30毫秒调用一次move()
      this.clock = setInterval(() => {
        this.move();
      }, 90);
    },
    // 判断是否点击黑块
    judge(ev) {
      if (ev.target.className.indexOf("black") != -1) {
        ev.target.className = "cell";
        ev.target.parentNode.pass = 1; //定义属性pass，表明此行row的黑块已经被点击
        this.score();
      }
    },

    // 游戏结束
    fail() {
      clearInterval(clock);
      this.$confirm("得分：" + this.score, "游戏结束", {
        distinguishCancelAndClose: true,
        confirmButtonText: "重新开始",
        cancelButtonText: "退出游戏",
      })
        .then(() => {
          this.$message({
            type: "info",
            message: "重新开始",
          });
          this.score = 0;
          this.clock = null;
          this.state = 0;
          this.speed = 4;
          this.init();
        })
        .catch((action) => {
            this.$router.go(-1);
        });
    },

    // 创建div, className是其类名
    creatediv(className) {
      var div = document.createElement("div");
      div.className = className;
      return div;
    },

    // 创造一个<div class="row">并且有四个子节点<div class="cell">
    createrow() {
      var con = $("con");
      var row = this.creatediv("row"); //创建div className=row
      var arr = this.creatcell(); //定义div cell的类名,其中一个为cell black

      con.appendChild(row); // 添加row为con的子节点

      for (var i = 0; i < 4; i++) {
        row.appendChild(this.creatediv(arr[i])); //添加row的子节点 cell
      }

      if (con.firstChild == null) {
        con.appendChild(row);
      } else {
        con.insertBefore(row, con.firstChild);
      }
    },

    // 根据id来get DOM元素
    $(id) {
      return document.getElementById(id);
    },

    // 创建一个类名的数组，其中一个为cell black, 其余为cell
    creatcell() {
      var temp = ["cell", "cell", "cell", "cell"];
      var i = Math.floor(Math.random() * 4);
      temp[i] = "cell black";
      return temp;
    },

    //让黑块动起来
    move() {
      var con = $("con");
      var top = parseInt(window.getComputedStyle(con, null)["top"]);

      if (this.speed + top > 0) {
        top = 0;
      } else {
        top += this.speed;
      }
      con.style.top = top + "px";

      if (top == 0) {
        this.createrow();
        con.style.top = "-100px";
        this.delrow();
      } else if (top == -100 + this.speed) {
        var rows = con.childNodes;
        if (rows.length == 5 && rows[rows.length - 1].pass !== 1) {
          this.fail();
        }
      }
    },

    // 加速函数
    speedup() {
      this.speed += 2;
      if (this.speed == 20) {
        this.$message({
          type: "info",
          message: "你超神了",
        });
      }
    },

    //删除某行
    delrow() {
      var con = $("con");
      if (con.childNodes.length == 6) {
        con.removeChild(con.lastChild);
      }
    },

    // 记分
    score() {
      this.score += 1;
      if (this.score % 5 == 0) {
        this.speedup();
      }
    },
  },
};
</script>

<style lang="less" scoped>
#score {
  text-align: center;
}

h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: green;
}

div {
  margin: 0 auto;
  width: 100px;
  height: 100px;
}

#main {
  max-width: 720px;
  width: 100%;
  height: 100%;
  background: white;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

#con {
  width: 100%;
  height: 100%;
  position: relative;
  top: -20%;
  border-collapse: collapse;
}

.row {
  height: 25%;
  width: 100%;
}

.cell {
  height: 100%;
  width: 25%;
  float: left;
  border: 1px solid #cccccc;
  box-sizing: border-box;
}

.black {
  background: black;
}
</style>
