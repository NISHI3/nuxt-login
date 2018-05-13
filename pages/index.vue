<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Title
      </h1>
      <h2 class="subtitle">
        Subtitle
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
