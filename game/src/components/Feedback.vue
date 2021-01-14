<template>
  <div>
    <h1>Feedback:</h1>
    
  </div>
</template>
 
<script>
</script>
<style>
</style> 

<template>
  <div class="dice">
   <h1 class=dice1> {{randomNumber1}} </h1>
   <h1 class=dice2> {{randomNumber2}} </h1>
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
.dice1{
  border: 1px solid black;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 32px;
  
}
.dice2{
  border: 1px solid black;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 32px;
}
</style>