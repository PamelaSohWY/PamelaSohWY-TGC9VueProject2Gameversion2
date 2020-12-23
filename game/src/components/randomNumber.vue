<template>
  <div>
    {{randomNumber1}}
    {{randomNumber2}}
    <button @click="roll()">Roll Dice</button> 
  </div>
</template>
 
<script>
export default {
//   data: function(){
//       dice: 1
//   },  
  computed:{
      randomNumber1: function() {
      return Math.floor(Math.random()*(6-1+1))+1
      },
      randomNumber2: function () {
      return Math.floor(Math.random()*(6-1+1))+1
  }
}, 
methods: { 
    roll: function(){
    this.$set(this.randomNumber1, Math.floor(Math.random()*6))
    }//end of roll function
}
//end of script
}
</script>
<style>

</style>