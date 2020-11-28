<template>
  <v-btn :height="heigth" :class="clas" color="#349A89">
    {{ title }}
  </v-btn>
</template>
<script>
export default {
  props: {
    heigth: { type: Number, default: 31 },
    clas: { type: String, default: "header-submit" },
    title: { type: String, default: "Button" },
  },
};
</script>
<style lang="scss" scoped>
.header-submit {
  color: #ffffff;
  box-sizing: inherit;
  border-radius: 4px;
  width: 131px;
}
.form-submit {
  color: #ffffff;
  box-sizing: inherit;
  border-radius: 5px;
  width: auto;
}
</style>