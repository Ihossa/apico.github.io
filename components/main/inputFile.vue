<template>
  <div class="file-input">
    <div class="file-input_block">
      <input
        class="file-input_input"
        type="file"
        ref="myFiles"
        accept="image/png, image/jpeg, image/bmp"
        @change="selectedFile"
      />
      <div class="file-input_cover">
        <v-icon class="file-input_icon" color="#349A89"> mdi-plus </v-icon>
      </div>
    </div>
    <div class="file-input_load">
      <v-img class="file-input_load-img" :src="previewImg()"> </v-img>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    img: "",
  }),

  methods: {
    selectedFile() {
      const file = this.$refs.myFiles.files[0];
      this.img = URL.createObjectURL(file);
      const reader = new FileReader();
      reader.onloadend = () =>
        this.$emit("selected", {
          src: this.img,
          base64: reader.result,
        });

      reader.readAsDataURL(file);
    },
    previewImg() {
      return this.img ? this.img : this.src;
    },
  },
};
</script>
<style lang="scss" scoped>
.file-input {
  display: flex;
  background-color: #f9fafb;
  padding: 16px;
  border: 1px solid #888888;
  border-radius: 5px;
  &_block {
    position: relative;
    width: 92px;
    height: 92px;
  }
  &_input {
    cursor: pointer;
    z-index: 10;
    position: absolute;
    width: 92px;
    height: 92px;
    opacity: 0;
  }
  &_icon {
    font-size: 53px !important;
  }
  &_cover {
    background-color: #e4e4e4;
    border-radius: 4px;
    position: absolute;
    padding: 20px;
    width: 92px;
    height: 92px;
    top: 0;
    z-index: 1;
  }
  &_load {
    width: 92px;
    margin: 0 16px;
    &-img {
      border-radius: 4px;
      height: 92px;
    }
  }
}
</style>