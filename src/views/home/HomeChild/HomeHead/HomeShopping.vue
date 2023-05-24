<template>
  <div class="father">
    <div class="fenlei">购物车</div>
    <div class="buttom">
      <ul>
        <li v-for="(item, index) in list" :key="index" @click="activeindex=index" :class="{ active: activeindex === index }">
          <span>{{item.title}}</span>
        </li>
      </ul>
      <div class="box">{{ log[activeindex].res }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const list = ref([
      {
        title: "帽子",
      },
      {
        title: "衣服",
      },
      {
        title: "鞋子",
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
    // const fn = ((index)=>{
    //   active.value = index
    // })
    const activeindex = ref(0);

    return {
      activeindex,
      list,
      log,
    };
  },
};
</script>

<style lang="less" scoped>
.father {
  width: 100%;
  height:calc(100% - 49px);
  .fenlei {
    width: 100%;
    height: 50px;
    background: pink;
    text-align: center;
    line-height: 50px;
  }
  .buttom {
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    ul {
      width: 60px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: burlywood;
      li {
        width: 100%;
        height: calc(100% / 3);
        border-bottom: 1px solid black;
        box-sizing: border-box;
        background: burlywood;
        color: #fff;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      .active {
        background: blueviolet;
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 8px;
            height: 100%;
            background: red;
        }
      }
    }
    
  }
}
</style>