<template>
  <div>
    <AuthCard />
  </div>
</template>

<script>
import AuthCard from "@/components/Auth/AuthCard";
export default {
  components: {
    AuthCard,
  },
};
</script>

<style lang="scss">
.authorize {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  &_form {
    margin: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  &_inputfield {
    height: fit-content;
    margin-bottom: 15px;
  }
  &_header {
    text-align: center;
    margin: 0 0 32px 0;
  }
  &_remember {
    text-align: right;
    font-size: 14px;
    color: #8c8c8c;
    margin-bottom: 16px;
  }
}
.auth-register {
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
.v-text-field__details {
  display: none;
}
</style>
