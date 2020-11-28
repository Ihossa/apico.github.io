<template>
  <header class="main-header">
    <HeaderAuth
      logoColor="#FFFFFF"
      likeColor="#FFFFFF"
      btnText="+ Add"
      textLabel="LOGOUT"
      @is-show-search="ShowFilter"
    />
    <v-container class="main-header_nav" v-if="isFilter">
      <v-text-field
        solo
        v-model="findNames"
        label="Solo"
        placeholder="Search products by name"
        prepend-inner-icon="mdi-magnify"
        class="main-header_search"
      ></v-text-field>
      <v-text-field
        solo
        v-model="findLocations"
        label="Solo"
        placeholder="Location"
        prepend-inner-icon="mdi-map-marker"
        class="main-header_locate"
      ></v-text-field>
      <v-btn
        class="main-header_button-search"
        height="50px"
        width="176px"
        color="#3E3961"
        @click="search"
      >
        SEARCH
      </v-btn>
    </v-container>
  </header>
</template>
<script>
import HeaderAuth from "@/components/Auth/HeaderAuth";

export default {
  data: () => {
    return {
      isFilter: false,
      findNames: "",
      findLocations: "",
    };
  },
  props: {
    isShowFilter: { type: Boolean, default: false },
  },
  mounted() {
    this.isFilter = this.isShowFilter;
  },
  components: {
    HeaderAuth,
  },
  methods: {
    ShowFilter(res) {
      this.isFilter = res;
    },
    search() {
      let resSearch = [];
      if (this.findNames !== "") {
        let arrPosts = this.$store.state.posts;
        resSearch = arrPosts.filter((el) => el.title.includes(this.findNames));
      }
      if (this.findLocations !== "") {
        let arrPosts = this.$store.state.posts;
        resSearch = arrPosts.filter((el) =>
          el.location.includes(this.findLocations)
        );
      }
      this.$store.commit("setSearchPosts", resSearch);
      this.findNames = "";
      this.findLocations = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 450px) {
  .main-header {
    &_button-search {
      width: 50px !important;
    }
  }
}
.main-header {
  background: linear-gradient(180deg, #090810 0%, #171236 100%);
  &_nav {
    display: flex;
    justify-content: center;
  }
  &_search {
    max-width: 467px;
    height: 50px;
  }
  &_locate {
    max-width: 198px;
    height: 50px;
    margin: 0 7px;
  }
  &_button-search {
    color: #ffffff;
  }
}
</style>
