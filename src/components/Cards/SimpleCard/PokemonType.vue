<template>
  <div class="sc-type-wrapper has-tooltip" :class="'back-color-' + type">
    <img class="sc-type-picture" :src="getImg" :alt="type" />
    <span class="capitalize tooltip">{{ type }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: true,
    default: "",
  },
})
  const getImg = computed(() => {
    return `src/assets/images/types/${props.type}.png`
  })

</script>