<template>
  <v-container>
    <v-card class="card-form">
      <AddForm />
    </v-card>
  </v-container>
</template>
<script>
import AddForm from "@/components/main/AddForm";

export default {
  layout: "main",
  components: {
    AddForm,
  },
};
</script>
<style lang="scss" scoped>
.card-form {
  max-width: 1136px;
}
</style>