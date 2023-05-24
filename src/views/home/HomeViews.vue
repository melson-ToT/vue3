<template>
  <div>
    <router-view />
    <!-- <HomeHeads /> -->
    <HomeFoor />
  </div>
</template>

<script lang="ts">
// import HomeHeads from "./HomeChild/HomeHeads.vue"
import HomeFoor from "./HomeChild/HomeFoor.vue"
export default {
    components:{
        // HomeHeads,
        HomeFoor,
    }
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 100%;
}
</style>