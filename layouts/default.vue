<template>
  <div class="content">
    <Header :triangleColor="logoColor" />
    <v-container>
      <nuxt />
    </v-container>
  </div>
</template>

<script>
import Header from "@/components/Auth/HeaderAuth";

export default {
  data() {
    return {
      logoColor:
        this.$router.history.current.name === "Register"
          ? "#FF9900"
          : "#349A89",
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  mounted() {
    if (localStorage.getItem("userId")) {
      this.$router.push("/PostList");
    }
  },
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
.content {
  background: #f2f2f2;
}
</style>
