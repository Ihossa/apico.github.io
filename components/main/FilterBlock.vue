<template>
  <div class="wrap">
    <v-card class="filter">
      <div class="filter_category">
        <v-select
          placeholder="Choose Category"
          prepend-inner-icon="mdi-view-grid"
          height="37px"
          dense
          background-color="#F9FAFB"
          outlined
        ></v-select>
      </div>
      <div class="filter_price">
        <v-text-field
          placeholder="Price from (USD)"
          height="37px"
          v-model="minPrice"
          @input="findMore"
          dense
          background-color="#F9FAFB"
          outlined
        ></v-text-field>
      </div>
      <div class="filter_devider"></div>
      <div class="filter_price last">
        <v-text-field
          placeholder="Price to (USD)"
          height="37px"
          v-model="maxPrice"
          @input="findFill"
          dense
          background-color="#F9FAFB"
          outlined
        ></v-text-field>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      minPrice: "",
      maxPrice: "",
    };
  },
  methods: {
    findMore() {
      let resSearch = [];
      this.$store.dispatch("getPosts");
      if (this.minPrice !== "") {
        let arrPosts = this.$store.state.posts;
        resSearch = arrPosts.filter(
          (el) => Number(el.price) > Number(this.minPrice)
        );
      } else {
        this.$store.dispatch("getPosts");
        resSearch = this.$store.state.posts;
      }
      this.$store.commit("setSearchPosts", resSearch);
    },
    findFill() {
      this.$store.dispatch("getPosts");
      let resSearch = [];
      if (this.maxPrice !== "") {
        let arrPosts = this.$store.state.posts;
        resSearch = arrPosts.filter(
          (el) => Number(el.price) < Number(this.maxPrice)
        );
      } else {
        this.$store.dispatch("getPosts");
        resSearch = this.$store.state.posts;
      }
      this.$store.commit("setSearchPosts", resSearch);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: center;
}
.filter {
  display: flex;
  width: 855px;
  align-items: center;

  &_category {
    max-width: 285px;
    display: flex;
    height: 35px;
    margin: 12px 23px 12px 11px;
  }
  &_price {
    max-width: 143px;
    display: flex;
    height: 35px;
  }
  &_devider {
    width: 12px;
    margin: 7px;
    height: 1px;
    background: #dedee0;
  }
}
.last {
  margin-right: 11px;
}
</style>