<template>
  <div>
    <MainHeader
      :isShowFilter="this.$router.history.current.name === 'PostList'"
    />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/main/MainHeader";

export default {
  data() {
    return {
      isShowFilter: true,
    };
  },
  components: {
    MainHeader,
  },
  mounted() {
    if (!localStorage.getItem("userId")) {
      this.$router.push("/");
    }
  },
  updated() {
    this.isShowFilter = this.$router.history.current.name === "PostList";
  },
};
</script>
<style lang="scss" scoped>
.content {
  min-height: 100%;
  background: #f2f2f2;
}
</style>