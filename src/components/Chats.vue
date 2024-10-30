<template>
  <div
    class="flex h-full flex-col gap-y-1 overflow-y-auto bg-gray-100 px-3 py-10 pt-20"
  >
    <div class="chat" v-for="n in 30">Chat {{ n }}</div>
  </div>
</template>
<script setup></script>
<style scoped lang="postcss">
.chat {
  @apply bg-gray-200 px-4 py-2;
  @apply flex items-center gap-x-2;
  @apply rounded-md text-center;
}
</style>
