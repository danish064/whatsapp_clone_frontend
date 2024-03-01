<template>
  <div class="msg" :class="recieved ? 'msg_recieved' : 'msg_sent'">
    {{ message }}
  </div>
</template>
<script setup>
const props = defineProps({
  message: {
    type: String,
    default: "This is a test message",
  },
  recieved: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="postcss" scoped>
.msg {
  @apply break-words rounded-xl px-3 py-2;
  @apply max-h-fit w-fit max-w-[60%];
  @apply bg-pink-400;
}
.msg_sent {
  @apply bg-secondary self-end;
}
.msg_recieved {
  @apply bg-primary;
}
</style>
