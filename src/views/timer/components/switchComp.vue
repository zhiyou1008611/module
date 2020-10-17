<template>
  <div>
    <ul style="bottom: -35px;">
      <li>
        <input
          type="checkbox"
          id="checkbox"
          @click="swap"
          style="z-index: 9999999;position: relative;"
        />
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * 切换组件
 */

export default {
  methods: {
    swap() {
      this.$parent.switchFont();
    },
  },
};
</script>
