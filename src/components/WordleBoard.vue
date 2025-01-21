<script setup lang="ts">
import { DEFEAT_MESSAGE, VICTORY_MESSAGE } from "@/settings";
import words from "@/words.json"
import { ref } from "vue";

defineProps({
  wordOfTheDay: {
    type: String,
    validator: (wordGiven: string) => wordGiven.length === 5 
    && wordGiven.toUpperCase() === wordGiven 
    && words.includes(wordGiven),
  },
});

const guessInProgress = ref("");
const guessSubmitted = ref("");
</script>

<template>
  <div class="content">
    <input
      type="text"
      v-model="guessInProgress"
      @keydown.enter="guessSubmitted = guessInProgress"
    />
    <p
      v-if="guessSubmitted.length > 0"
      v-text="
        guessSubmitted === wordOfTheDay ? VICTORY_MESSAGE : DEFEAT_MESSAGE
      "
    />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>
