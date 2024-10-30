<script setup></script>

<template>
  <div
    class="flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-50"
  >
    <Chats class="w-1/3" />
    <Chat class="w-2/3" />
  </div>
</template>

<script setup>
import Chats from "./components/Chats.vue";
import Chat from "./components/Chat.vue";
</script>
