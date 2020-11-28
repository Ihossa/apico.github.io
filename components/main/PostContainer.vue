<template>
  <div class="posts">
    <Post v-for="item in posts" :key="item.id" :item="item" :isLike="likes" />
  </div>
</template>

<script>
import Post from "@/components/main/Post";
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    likes() {
      return this.$store.state.likes;
    },
  },
  components: {
    Post,
  },
  created() {
    this.$store.commit("clearPosts");
  },
  mounted() {
    this.$store.dispatch("getLikePost", localStorage.getItem("userId"));
    this.$store.dispatch("getPosts");
  },
};
</script>

<style lang="scss" scoped>
.posts {
  min-height: 100hv;
  display: flex;
  text-align: center;
  max-width: 861px;
  display: block;
}
</style>