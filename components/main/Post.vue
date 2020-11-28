<template>
  <v-card class="card_post">
    <v-img :src="item.img" height="148" class="grey darken-4"></v-img>
    <div class="card_content">
      <div class="card_title">{{ item.title }}</div>
      <div class="card_btn">
        <v-btn @click="like" class="card_like" color="#FFFFFF" dark fab>
          <v-icon :color="colorIcon">{{ titleIcon }}</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="card_price">${{ item.price }}</div>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: undefined,
    },
    isLike: {
      type: Array,
      default: false,
    },
  },
  data: () => {
    return {
      isClicked: false,
      titleIcon: "mdi-heart-outline",
      colorIcon: "#B7B7B7",
    };
  },
  mounted() {
    if (this.isLike.indexOf(this.item.id) != -1) {
      this.isClicked = true;
      this.titleIcon = "mdi-heart";
      this.colorIcon = "#349A89";
    } else {
      this.isClicked = false;
      this.titleIcon = "mdi-heart-outline";
      this.colorIcon = "#B7B7B7";
    }
  },
  methods: {
    async like() {
      if (this.isClicked) {
        this.isClicked = false;
        this.titleIcon = "mdi-heart-outline";
        this.colorIcon = "#B7B7B7";
        await this.$store.dispatch("removeLikePost", {
          idUser: localStorage.getItem("userId"),
          idPost: this.item.id,
        });
      } else {
        this.isClicked = true;
        this.titleIcon = "mdi-heart";
        this.colorIcon = "#349A89";
        await this.$store.dispatch("setLikePost", {
          idUser: localStorage.getItem("userId"),
          idPost: this.item.id,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &_post {
    display: inline-block;
    text-align: left;
    padding: 3px;
    margin: 0 3px 10px;
    max-width: 209px;
    height: 212px;
  }
  &_content {
    display: flex;
    justify-content: space-between;
  }
  &_btn {
    margin-right: 7px;
    transform: translateY(-50%);
  }
  &_like {
    height: 30px;
    width: 30px;
  }
  &_title {
    font-size: 15px;
    line-height: 17px;
    margin: 6px 12px 7px;
    color: #373738;
  }
  &_price {
    font-size: 18px;
    line-height: 21px;
    margin-left: 12px;
    color: #101010;
  }
}
</style>