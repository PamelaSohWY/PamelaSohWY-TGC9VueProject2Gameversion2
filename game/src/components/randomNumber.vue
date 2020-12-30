<template>
  <div>
    {{randomNumber1}}
    {{randomNumber2}}
    <button @click="roll">Roll Dice</button> 
  </div>
</template>
 
<script>
export default {
//   data: function(){
//       dice: 1
//   },  
  data: function() {
      return{
      randomNumber1: Math.floor(Math.random()*(6-1+1))+1,
    //   function() {
    //   return Math.floor(Math.random()*(6-1+1))+1
    //   },
      randomNumber2: Math.floor(Math.random()*(6-1+1))+1
    //   function () {
    //   return Math.floor(Math.random()*(6-1+1))+1
  }
      
}, 
methods: { 
    roll: function() {
    this.randomNumber1=Math.floor(Math.random()*6)
    this.randomNumber2=Math.floor(Math.random()*6)

    }//end of roll function
}
//end of script
}
</script>
<style>

</style>