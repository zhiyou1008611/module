<!--定义时钟组件-->
<template>
  <div id="timer">
    <!--秒钟子组件-->
    <Second :second="second" :secondBox="secondBox" :secondRange="330"></Second>
    <!--分钟子组件-->
    <Minute :minute="minute" :minuteBox="minuteBox" :minuteRange="280"></Minute>
    <!--小时子组件-->
    <Hour :hour="hour" :hourBox="hourBox" :hourRange="230"></Hour>
    <!--午时子组件-->
    <Apm :apm="apm" :apmBox="apmBox" :apmRange="195"></Apm>
    <!--日期子组件-->
    <Day :day="day" :dayBox="dayBox" :dayRange="160"></Day>
    <!--周子组件-->
    <Week :week="week" :weekBox="weekBox" :weekRange="110"></Week>
    <!--月度子组件-->
    <Month :month="month" :monthBox="monthBox" :monthRange="60"></Month>
    <!--年度子组件-->
    <Year :year="year"></Year>
    <!--语言转换开关-->
    <el-switch v-model="fontType" active-text="繁体" inactive-text="简体"></el-switch>
  </div>
</template>
<script>
//引入各个组件
import Year from "./components/yearComp";
import Month from "./components/Month";
import Week from "./components/Week";
import Day from "./components/Day";
import Apm from "./components/Apm";
import Hour from "./components/Hour";
import Minute from "./components/Minute";
import Second from "./components/Second";
import store from "@/store/timer/store.ts";

export default {
  name: "Timer",
  //引入组件
  components: {
    Year,
    Month,
    Week,
    Day,
    Apm,
    Hour,
    Minute,
    Second,
  },
  data() {
    //初始化时间
    return {
      //当前时间
      second: "",
      minute: "",
      hour: "",
      apm: "",
      day: "",
      week: "",
      month: "",
      year: "",
      //周期列表（用于存放对应的语言库）
      secondBox: [],
      minuteBox: [],
      hourBox: [],
      apmBox: [],
      dayBox: [],
      weekBox: [],
      monthBox: [],
      //当月天数（动态获取，根据当月天数要自动计算扇区角度，网络上有很多代码直接写成固定的30天）
      days: 0,
      //字体开关（默认简体中文）
      fontType: 0,
    };
  },
  methods: {
    //定时器启动方法
    start() {
      //初始化语言库，装配语言库（先把底图数据显示出来）
      this.makeDate();
      //获取当前时间（计算当前时间，实时更新）
      setInterval(() => {
        let date = new Date();
        //组装年份
        this.year = date.getFullYear();
        //组装月份
        this.month = date.getMonth() + 1;
        //获取当月总天数
        this.days = new Date(this.year, this.month, 0).getDate();
        //获取当年的天干地支信息
        this.year = store.sky[this.year % 10] + store.land[this.year % 12];
        //获取星期几
        this.week = date.getDay();
        //获取当天几号
        this.day = date.getDate();
        //获取当前小时（12小时制）
        this.hour =
          date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        //获取当前分钟（从0分钟开始，因此分钟需增加1）
        this.minute = date.getMinutes() + 1;
        //获取当前秒钟（从0秒钟开始，因此秒钟需增加1）
        this.second = date.getSeconds() + 1;
        //获取当前是上午还是下午
        if (date.getHours() > 12) {
          this.apm = 2;
        } else {
          this.apm = 1;
        }
        //组装数据（更新底图，重新装配，达到时钟转动的效果）
        this.makeDate();
      }, 1000);
    },
    makeDate() {
      //初始化数据
      this.secondBox = [];
      this.minuteBox = [];
      this.hourBox = [];
      this.apmBox = [];
      this.dayBox = [];
      this.weekBox = [];
      this.monthBox = [];
      //获取配置数据
      let fdata = null;
      if (this.fontType == 0) {
        fdata = store.format_Simplified;
      } else {
        fdata = store.format_Traditional;
      }
      //组装月
      for (let i = 1; i <= 12; i++) {
        if (i <= 10) {
          this.monthBox.push(fdata[i] + "月");
        } else {
          this.monthBox.push(fdata[10] + fdata[i % 10] + "月");
        }
      }
      //组装周
      for (let i = 1; i <= 7; i++) {
        this.weekBox.push("星期" + fdata[i]);
      }
      //组装日
      for (let i = 1; i <= this.days; i++) {
        if (i <= 10) {
          this.dayBox.push(fdata[i] + "日");
        } else if (i < 20) {
          this.dayBox.push(fdata[10] + fdata[i % 10] + "日");
        } else {
          if (i % 10 == 0) {
            this.dayBox.push(fdata[parseInt(i / 10)] + fdata[10] + "日");
          } else {
            this.dayBox.push(
              fdata[parseInt(i / 10)] + fdata[10] + fdata[i % 10] + "日"
            );
          }
        }
      }
      //组装午时
      this.apmBox.push("上午");
      this.apmBox.push("下午");
      //组装小时
      for (let i = 1; i <= 12; i++) {
        if (i <= 10) {
          this.hourBox.push(fdata[i] + "点");
        } else {
          this.hourBox.push(fdata[10] + fdata[i % 10] + "点");
        }
      }
      //组装分钟
      for (let i = 0; i < 60; i++) {
        if (i <= 10) {
          this.minuteBox.push(fdata[i] + "分");
        } else if (i < 20) {
          this.minuteBox.push(fdata[10] + fdata[i % 10] + "分");
        } else {
          if (i % 10 == 0) {
            this.minuteBox.push(fdata[parseInt(i / 10)] + fdata[10] + "分");
          } else {
            this.minuteBox.push(
              fdata[parseInt(i / 10)] + fdata[10] + fdata[i % 10] + "分"
            );
          }
        }
      }
      //组装秒
      for (let i = 0; i < 60; i++) {
        if (i <= 10) {
          this.secondBox.push(fdata[i] + "秒");
        } else if (i < 20) {
          this.secondBox.push(fdata[10] + fdata[i % 10] + "秒");
        } else {
          if (i % 10 == 0) {
            this.secondBox.push(fdata[parseInt(i / 10)] + fdata[10] + "秒");
          } else {
            this.secondBox.push(
              fdata[parseInt(i / 10)] + fdata[10] + fdata[i % 10] + "秒"
            );
          }
        }
      }
    },
  },
  created() {
    //页面加载完成后启动
    this.start();
  },
};
</script>
 
<style lang="scss">
//时钟样式
#timer {
  ul {
    list-style-type: none;
    padding: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 60px;
    width: 60px;
    transition: 0.1s 0.1s ease-in;
    li {
      position: absolute;
      height: 60px;
      width: 60px;
      color: rgb(204, 46, 46);
      text-align: center;
      font-size: 9px;
      line-height: 60px;
      &.hover {
        text-shadow: #009be5 0px 0px 10px, #98f24e 0px 0px 20px,
          #0c16d6 0px 0px 30px, #b5e927 0px 0px 40px, #d32cbe 0px 0px 70px,
          #dc1313 0px 0px 80px, #9a17c0 0px 0px 100px;
      }
    }
  }
}
</style>