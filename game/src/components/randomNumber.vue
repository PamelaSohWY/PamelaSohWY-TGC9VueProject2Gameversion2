<template>
  <div>
    {{randomNumber}}
  </div>
</template>
 
<script>
export default {
  methods:{
      randomNumber: function() {
      return Math.floor(Math.random()*(6-1+1))+1;
  }
}
}
</script>
 
<style>
.title {
  font-family: Verdana;
}
</style>