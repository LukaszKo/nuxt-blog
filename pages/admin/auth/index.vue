<template>
  <v-row align="center" justify="center">
    <v-col md="4">
      <v-card>
        <v-card-title>{{ submitBtnText }} Form</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required />
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
              type="password"
            />

            <v-card-actions>
              <v-btn :disabled="!valid" color="success" class="" @click="submit">
                {{ submitBtnText }}
              </v-btn>

              <v-btn color="" class="" @click="switchForm">
                {{ btnText }}
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  layout: 'admin',
  data: () => ({
    valid: true,
    password: '',
    passwordRules: [v => !!v || 'Password is required'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    isLogin: false
  }),
  computed: {
    submitBtnText () {
      return this.isLogin ? 'Sign up' : 'Sign in'
    },
    btnText () {
      return this.isLogin ? 'Switch to Signin' : 'Switch to Signup'
    }
  },
  methods: {
    async submit () {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        await this.$store.dispatch('core/authorizeUser', { email: this.email, password: this.password, isLogin: this.isLogin })
        this.$router.push('/admin')
      }
    },
    switchForm () {
      this.isLogin = !this.isLogin
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
