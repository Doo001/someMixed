<template>
  <div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getCourse('xxx');
  },
  computed: {
  },
  methods: {
    async getCourse(id) {
      let res = await this.axios.skuCourse(id);
      if (res && res.code=== +10000) {
        //do something
      } else {
        this.$message.warning(res.message);
      }
    },
  }
};
</script>
<style lang="less" scoped>
}
</style>
