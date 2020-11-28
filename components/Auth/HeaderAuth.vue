<template>
  <header>
    <v-container class="header-content">
      <div @click="goToList" class="header-content_logo">
        <Logo :colorFillText="logoColor" :colorFillTriangle="triangleColor" />
      </div>
      <div class="header-content_nav">
        <v-btn
          :height="31"
          class="header-content_submit"
          color="#349A89"
          @click="showAddForm"
        >
          {{ btnText }}
        </v-btn>
        <span
          @click="goLoginPage"
          :class="
            likeColor === '#2E2E2E'
              ? 'header-content_login'
              : 'header-content_login-auth'
          "
        >
          {{ textLabel }}
        </span>
        <IconLike class="header-content_icon" :colorFill="likeColor" />
      </div>
    </v-container>
  </header>
</template>
<script>
import Logo from "@/components/Logofull";
import IconLike from "@/components/IconLike";
import Button from "@/components/Button";
export default {
  props: {
    logoColor: { type: String, default: "#262525" },
    triangleColor: { type: String, default: "#349A89" },
    likeColor: { type: String, default: "#2E2E2E" },
    btnText: { type: String, default: "SELL" },
    textLabel: { type: String, default: "LOGIN" },
  },
  components: {
    Logo,
    IconLike,
    Button,
  },
  methods: {
    async showAddForm() {
      if (this.btnText === "+ Add") {
        this.$emit("is-show-search", false);
        this.$router.push("AddProduct");
      }
    },
    goLoginPage() {
      this.$store.dispatch("logout");
      localStorage.removeItem("userId");
      this.$router.push("/");
    },
    goToList() {
      if (this.logoColor === "#FFFFFF") {
        this.$router.push("/PostList");
        this.$emit("is-show-search", true);
        this.$store.dispatch("getLikePost", localStorage.getItem("userId"));
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 450px) {
  .header-content {
    &_nav {
      flex-direction: column;
    }
    &_submit {
      margin-bottom: 15px;
    }
    &_icon {
      display: none;
    }
  }
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_login {
    margin: 0 33px 0 39px;
    cursor: pointer;
    &-auth {
      margin: 0 33px 0 39px;
      color: #ffffff;
      cursor: pointer;
    }
  }
  &_submit {
    color: #ffffff;
    box-sizing: inherit;
    border-radius: 4px;
    width: 131px;
  }
  &_nav {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }
}
</style>