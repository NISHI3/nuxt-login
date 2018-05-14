<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div v-if="$store.state.authUser">
        <h1 class="title">
          ようこそ {{$store.state.authUser.username}}
        </h1>
      </div>
      <div v-else>
        <h1 class="title">
          ログインしてね
        </h1>
      </div>
      <h2 class="subtitle">
        にゃーん
      </h2>
      <div v-if="!$store.state.authUser">
        <router-link class="button" to="/login">Go Login Page</router-link>
      </div>
      <div v-else>
        <button class="button" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'index',
  methods: {
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
