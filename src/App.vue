<script setup>
import Message from "./components/Message.vue";
</script>

<template>
  <div class="flex h-screen w-screen bg-gray-100 p-6 text-white">
    <!-- All chats -->
    <div class="w-1/3 max-w-96 bg-purple-100">Chats</div>

    <!-- Current Chat -->
    <div class="flex w-full flex-col justify-between bg-pink-200">
      <!-- Current Chat Banner -->
      <div class="h-14 bg-blue-200">Top banner</div>
      <!-- Current Chat box -->
      <div
        class="bg-primaryLight flex h-full flex-col gap-y-1 overflow-y-auto px-4 py-3"
      >
        <Message :recieved="true" />
        <Message :recieved="false" />
        <Message :recieved="true" />
        <Message :recieved="true" />
        <Message :recieved="true" />
        <Message :recieved="false" />
        <Message :recieved="true" />
        <Message :recieved="false" />
        <Message :recieved="true" />
        <Message :recieved="false" />
        <Message :recieved="true" />
        <Message :recieved="true" />
        <Message :recieved="false" />
        <Message :recieved="true" />
        <Message :recieved="false" />
        <Message :recieved="false" />
        <Message :recieved="false" />
        <Message :recieved="true" />
        <Message :recieved="true" />
        <Message :recieved="false" />
        <Message :recieved="true" />
        <Message :recieved="true" />
        <Message :recieved="false" />
        <Message :recieved="true" />
        <Message :recieved="false" />
        <Message :recieved="false" />
        <Message :recieved="false" />
        <Message
          :recieved="true"
          message="daksjdhaskdjahsdlkasjdhlakjsdhalksdjhaldkjahsdlkajdhalksjdhaslksdjhalskdjhasldkjashdlkajsdhalksdjahsldkjasdhlakjsdhalskdjahdlaksjdhlk"
        />
      </div>
      <div class="h-14 bg-blue-200">Chat input</div>
    </div>
  </div>
</template>

<style scoped></style>
