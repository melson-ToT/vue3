<template>
  <div>
    <HomeHead />
    <HomeIfication />
    <HomeShopping />
    <HomeMy />
  </div>
</template>

<script lang="ts">
import HomeHead from "./HomeHead/HomeHead.vue";
import HomeIfication from "./HomeHead/HomeIfication.vue";
import HomeShopping from "./HomeHead/HomeShopping.vue";
import HomeMy from "./HomeHead/HomeMy.vue";
export default {
  components: {
    HomeHead,
    HomeIfication,
    HomeShopping,
    HomeMy,
  },
};
</script>

<style lang="less" scoped>
div {
    width: 100%;
    height: calc(100% - 49px);
}
</style>