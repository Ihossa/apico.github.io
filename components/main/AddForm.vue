<template>
  <div class="add-form">
    <v-form ref="form">
      <h1 class="add-form_header">Add product</h1>
      <span class="titleInput">Title</span>
      <div>
        <v-text-field
          class="add-form_field"
          v-model="title"
          required
          background-color="#F9FAFB"
          outlined
        ></v-text-field>
      </div>
      <span class="titleInput">Location</span>
      <div>
        <v-text-field
          v-model="location"
          class="add-form_field"
          background-color="#F9FAFB"
          outlined
        ></v-text-field>
      </div>
      <span class="titleInput">Description</span>
      <div>
        <v-textarea
          v-model="description"
          class="add-form_field-area"
          background-color="#F9FAFB"
          outlined
          name="input-7-4"
        ></v-textarea>
      </div>
      <span class="titleInput">Photos</span>
      <div class="add-form_photos">
        <inputFile @selected="onChangeImg" />
      </div>
      <span class="titleInput">Price</span>
      <v-text-field
        type="number"
        v-model="price"
        class="add-form_field"
        background-color="#F9FAFB"
        outlined
      ></v-text-field>
      <div class="add-form_block-submit">
        <v-btn
          class="add-form_submit"
          @click="addPost"
          height="58"
          color="#349A89"
        >
          Submit
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import inputFile from "@/components/main/inputFile";
export default {
  data: () => {
    return {
      title: "",
      description: "",
      price: "",
      location: "",
      src: "",
    };
  },
  components: {
    inputFile,
  },
  methods: {
    async addPost() {
      const dataAddPost = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        location: this.location,
        price: this.price,
        img: this.src,
      };
      if (dataAddPost.title && dataAddPost.location && dataAddPost.img) {
        await this.$store.dispatch("addPost", dataAddPost);
        this.$router.push("PostList");
      } else {
        alert("Fill all input and download a photo");
      }
    },
    onChangeImg({ src, base64 }) {
      this.src = base64;
    },
  },
};
</script>
<style lang="scss" scoped>
.add-form {
  max-width: 664px;
  margin: auto;
  padding: 36px 0 32px;
  &_header {
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    color: #282828;
    margin-bottom: 24px;
  }
  &_field {
    height: 58px !important;
  }
  &_photos,
  &_field {
    margin-bottom: 24px;
  }
  &_block-submit {
    text-align: center;
    max-width: 337px;
    margin: auto;
  }
  &_submit {
    color: #ffffff;
    box-sizing: inherit;
    border-radius: 5px;
    width: 100%;
  }
  .v-text-field__details {
    display: none;
  }
}
</style>