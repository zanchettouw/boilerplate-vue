<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-view />
</template>

<style lang="scss">
@import url('./assets/styles/_reset.scss');
</style>
