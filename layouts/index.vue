<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-head">
      <nav class="navbar is-light">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </nav>
    </div>
    <nuxt/>
  </section>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  letter-spacing: -1.5px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
