<template>
  <div class="index">
    <router-link :to="{path: '/timer'}">
      <el-button type="primary">大时钟</el-button>
    </router-link>
    <router-link :to="{path: '/WhiteBlock'}">
      <el-button type="primary">别踩白块</el-button>
    </router-link>
    <router-link :to="{path: '/Canvas'}">
      <el-button type="primary">钟表</el-button>
    </router-link>
    <router-link :to="{path: '/ECharts'}">
      <el-button type="primary">图表</el-button>
    </router-link>
    <!-- <canva></canva> -->
    <!-- <ECharts></ECharts> -->
    <!-- <timers />
    <WhiteBlock /> -->
  </div>
</template>

<script>
import canva from "../components/Canvas";
import ECharts from "../components/ECharts";
import timers from "./timer/index";
import WhiteBlock from "./WhiteBlock";
export default {
  components: {
    canva,
    ECharts,
    timers,
    WhiteBlock,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
</style>

