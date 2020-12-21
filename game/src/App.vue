<template>
  <div id="app">
      <Basic></Basic>
      <randomNumber>Random Number</randomNumber>
      <Answer></Answer>
      <Board></Board>
       <Feedback></Feedback>
  </div>
</template>

<script>

import Basic from "./components/Basic"
import randomNumber from "./components/randomNumber"
import Board from "./components/Board"
import Answer from "./components/Answer"
import Feedback from "./components/Feedback"

export default {
  name: 'App',
  components: {
      Basic,
      randomNumber, 
      Answer,
      Board,
      Feedback
      
  }
}
</script>

<style>