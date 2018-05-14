<template>
  <div class="hero-body login">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <div class="box">
          <h3 class="title has-text-grey">Login</h3>
          <form @submit.prevent="login">
            <p class="error" v-if="formError">{{ formError }}</p>
            <div class="field">
              <div class="control">
                <input class="input is-large" type="text" v-model="formUsername" name="username" placeholder="Username" autofocus="">
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input class="input is-large" type="password" v-model="formPassword" name="password" placeholder="Password">
              </div>
            </div>
            <button class="button is-large is-fullwidth" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'index',
  middleware: 'login',
  data() {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
        this.$router.push("/")
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style>

</style>

