<template>
  <div class="father">
    <div class="fenlei">分类</div>
    <div class="buttom">
      <van-sidebar v-model="active">
        <van-sidebar-item v-for="(item, index) in list" :key="index" :title="item.title"/>
      </van-sidebar>
      <div class="box">{{ log[active].res }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Sidebar, SidebarItem } from "vant";

export default {
  setup() {
    const list = ref([
      {
        title: 1,
      },
      {
        title: 2,
      },
      {
        title: 3,
      },
    ]);


    const log = ref([
      {
        res: "44444",
      },
      {
        res: "55555",
      },
      {
        res: "66666",
      },
    ]);

    const active = ref(0);

    return {
      active,
      list,
      log,
    };
  },
};
</script>

<style lang="less" scoped>
.father {
  width: 100%;
  height: 100%;
  .fenlei {
    width: 100%;
    height: 50px;
    background: pink;
    text-align: center;
    line-height: 50px;
  }
  .buttom {
    width: 100%;
    height: calc(100% - 50px - 49px);
    display: flex;
    .van-sidebar {
      width: 60px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .van-sidebar-item {
        display: flex;
        flex: 1;
        &::before {
          width: 6px;
          height: 100%;
          background: red;
        }
      }
    }
    
  }
}
</style>

