<template>
  <div class="all">
    <v-card class="authorize" max-width="425">
      <v-form class="authorize_form" ref="form" v-model="valid" lazy-validation>
        <div>
          <h1 class="authorize_header">Login</h1>
        </div>
        <span class="titleInput">Email</span>
        <div>
          <v-text-field
            class="authorize_inputfield"
            validate-on-blur
            v-model="email"
            :rules="emailRules"
            placeholder="Example@gmail.com"
            required
            background-color="#F9FAFB"
            outlined
          ></v-text-field>
        </div>
        <span class="titleInput">Password</span>
        <div>
          <v-text-field
            validate-on-blur
            background-color="#F9FAFB"
            outlined
            :rules="rulesPassword"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
        </div>
        <span class="authorize_remember">Don’t remember password?</span>
        <v-btn
          height="58"
          class="authorize_submit"
          color="#349A89"
          @click="validate"
        >
          Continue
        </v-btn>
      </v-form>
    </v-card>
    <BottomCardAuth
      text="I have no account, "
      textLink="REGISTER NOW"
      link="Register"
    />
  </div>
</template>

<script>
import Button from "@/components/Button";
import BottomCardAuth from "@/components/Auth/BottomCardAuth";
export default {
  data() {
    return {
      valid: true,
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      password: "",
      minLength: 8,
      rulesPassword: [
        (v) =>
          (v || "").length >= this.minLength ||
          `A minimum of ${this.minLength} characters is allowed`,
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  components: {
    BottomCardAuth,
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        const formData = {
          email: this.email,
          password: this.password,
        };
        await this.$store
          .dispatch("login", formData)
          .then(() => {
            this.email = "";
            this.password = "";
          })
          .catch((err) => {
            alert(err.message);
          });
        await this.$store.dispatch("getUid").then((data) => {
          localStorage.setItem("userId", data);
          this.$router.push(`PostList`);
        });
      }
    },
  },
};
</script>

<style lang="scss">
.all {
  margin: 50px;
}
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
    margin-bottom: -18px;
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
  &_submit {
    color: #ffffff;
    box-sizing: inherit;
    border-radius: 5px;
    width: auto;
  }
  .v-text-field__details {
    display: block;
    text-align: right;
  }
}
</style>
