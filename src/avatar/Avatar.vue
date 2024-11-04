<script lang="ts" setup>
import type { AvatarProps } from './avatar'

defineOptions({
  name: 'Avatar',
})

const { round = false, size = '24px' } = defineProps<AvatarProps>()
</script>

<template>
  <img
    :src="url" alt="" class="object-cover" :class="round ? 'rounded-full' : 'rounded-lg'"
    :style="{ width: size, height: size }"
  >
</template>
