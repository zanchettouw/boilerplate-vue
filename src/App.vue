<template>
  <router-view />
</template>

<style lang="scss">
@import url('./assets/styles/_reset.scss');

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
