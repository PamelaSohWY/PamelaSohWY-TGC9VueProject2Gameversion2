<template>
  <div id="app">
      <Basic></Basic>
      <randomNumber>Random Number</randomNumber>
  </div>
</template>

<script>

import Basic from "./components/Basic"
import randomNumber from "./components/randomNumber"

export default {
  name: 'App',
  components: {
      Basic,
      randomNumber
  }
}
</script>

<style>