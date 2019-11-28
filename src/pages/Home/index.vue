<template>
  <div class="home">
    <div v-for="item of hotGoods" :key="item.goodsId">
      <img :src="item.goodsDefaultImage" alt="tu" width="80">
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  asyncData({ store, route }) {
    console.log("getHot");
    return store.dispatch("getHot");
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      hotGoods: state => state.home.hotGoods
    })
  },
  mounted() {},
  components: {}
};
</script>

<style lang="less">
</style>
