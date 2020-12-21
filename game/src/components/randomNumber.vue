<template>
  <div>
    {{randomNumber1}}
    {{randomNumber2}}
  </div>
</template>
 
<script>
export default {
  computed:{
      randomNumber1: function() {
      return Math.floor(Math.random()*(6-1+1))+1
      },
      randomNumber2: function () {
      return Math.floor(Math.random()*(6-1+1))+1
  }
}
//end of script
}
</script>
<style>

</style>