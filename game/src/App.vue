<template>

  <div id="app">
<!-- Nav Bar Code Sticky Top -->
<nav class="navbar fixed-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav>
      
      <Basic></Basic>
      <randomNumber>Random Number</randomNumber>
      <Answer></Answer>
      <Board></Board>
       <Feedback></Feedback>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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