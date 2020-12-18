<template>
  <div>
    <h1 class="title">Mathematics</h1>
    <h2>{{message}}</h2>
  </div>
</template>
 
<script>
export default {
  name: 'Basic',
  data: function() {
      return {
          'message':'Hello World'
      }
  }
}
</script>
 
<style>
.title {
  font-family: Verdana;
}
</style>
