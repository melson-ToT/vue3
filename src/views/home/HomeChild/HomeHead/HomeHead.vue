<template>
  <div class="head">
    <van-nav-bar title="标题" />

    <div class="ban">
      <van-search
        v-model="value"
        background="transparent"
        shape="round"
        placeholder="请输入搜索关键词"
      />
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <van-grid>
      <van-grid-item text="热销榜">
        <template #icon
          ><img src="../../../../components/img/icon_512pt@2x.png" alt=""
        /></template>
      </van-grid-item>
      <van-grid-item text="每日福利">
        <template #icon
          ><img src="../../../../components/img/啟動頁.png" alt=""
        /></template>
      </van-grid-item>
      <van-grid-item text="热销榜">
        <template #icon
          ><img src="../../../../components/img/啟動頁5.png" alt=""
        /></template>
      </van-grid-item>
      <van-grid-item text="每日福利">
        <template #icon
          ><img src="../../../../components/img/啟動頁6.png" alt=""
        /></template>
      </van-grid-item>
    </van-grid>

    <div class="father"></div>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in alist" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { showToast, List } from "vant";
export default {
  setup() {
    const list = ref<string[]>([]);
    onMounted(() => {
      fetch("http://www.pudge.wang:4000/home/banner")
        .then((response) => response.json())
        .then((res) => {
          list.value = res.result.list;
        });
    });
    const value = ref<string>("");

    const alist = ref([] as any[]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          alist.value.push(alist.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (alist.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    return {
      list,
      value,
      loading,
      finished,
      alist,
      onLoad,
    };
  },
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 100%;
  .ban {
    position: relative;
  }

  .van-search {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
  }

  /deep/.van-search__content {
    background: rgba(255, 255, 255, 0.3);
    // 改变input框的字体颜色
    #van-search-1-input::placeholder {
      color: red;
    }
  }

  .my-swipe .van-swipe-item {
    height: 250px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  ///deep/ 是vue3 的写法，可以改写 Vant 的 css 样式
  //:deep()是vue2 的写法，可以改写 Vant 的 css 样式
  /deep/.van-swipe__indicator {
    width: 30px;
    height: 8px;
    background: green;
    border-radius: 4px;
  }

.van-grid-item{
    img {
      width: 40px;
      height: 20px;
      position: relative;
    }
    /deep/.van-grid-item__text::before {
      content: "";
      position: absolute;
      bottom: 10px;
      left: calc(50% - 15px);
      width: 30px;
      height: 4px;
      background: red;
    }
  }


  .father {
    width: 100%;
    height: calc(100% - 46px - 250px - 78px - 48px);
    overflow: auto;
  }
  .van-list {
    width: 100%;
    // height: calc(100% - 46px - 250px - 78px - 48px);
    overflow: hidden;
    display: inline-flex;
    flex-direction: column;
  }
}
</style>