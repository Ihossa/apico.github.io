<template>
  <v-card class="nav-card" max-width="425">
    <span class="nav-card_message">{{ text }}</span>
    <nuxt-link class="nav-card_link" :to="link">{{ textLink }}</nuxt-link>
  </v-card>
</template>
<script>
export default {
  props: {
    text: { type: String, default: "I already have an account, " },
    textLink: { type: String, default: "LOG IN" },
    link: { type: String, default: "/" },
  },
};
</script>
<style lang="scss">
.nav-card {
  display: flex;
  justify-content: center;
  margin: 21px auto;
  padding: 30px;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  &_link {
    color: #349a89;
    text-decoration: none;
  }
}
</style>