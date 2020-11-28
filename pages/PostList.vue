<template>
  <v-container>
    <FilterBlock />
    <div class="posts">
      <PostContainer />
    </div>
  </v-container>
</template>
<script>
import FilterBlock from "@/components/main/FilterBlock";
import PostContainer from "@/components/main/PostContainer";
export default {
  layout: "main",
  components: {
    FilterBlock,
    PostContainer,
  },
};
</script>
<style lang="scss" scoped>
.posts {
  margin: 18px auto 0;
}
</style>