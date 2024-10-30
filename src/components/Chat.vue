<template>
  <div
    class="flex h-full flex-col gap-y-2 overflow-y-auto bg-blue-100 px-4 py-10"
  >
    <div class="message" v-for="n in 20">This is a recieved message</div>
    <div class="message sent" v-for="n in 20">This is a sent message</div>
    <div class="message" v-for="n in 20">This is a recieved message</div>
    <div class="message sent" v-for="n in 20">This is a sent message</div>
    <div class="message" v-for="n in 20">This is a recieved message</div>
    <div class="message sent" v-for="n in 20">This is a sent message</div>
  </div>
</template>
<script setup></script>
<style scoped lang="postcss">
.message {
  @apply w-fit;
  @apply px-4 py-1;
  @apply cursor-pointer rounded-lg bg-gray-100 text-left text-gray-600 hover:bg-gray-100/70;
}
.revieved {
  /* NOTHING TO DO */
}
.sent {
  @apply self-end;
}
</style>
