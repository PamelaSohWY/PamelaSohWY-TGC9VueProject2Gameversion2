<template>
<div>
    <h1>Step 1: Key in the sum of the 2 random numbers</h1>
    <div>
        <label>Answer </label>
        <input type="text" v-model="sum1"/>
    </div>
   
    <button @click="sum">Submit Answer</button>
</div>
</template>

<script>
import axios from "axios";
export default {
    data: function() {
        return {
           sum1:"",
           
        }
    },
    methods:{
        sum:async function(){
            this.$emit('sum', this.sum);
            await axios.post(
                "https://3000-ff14a68d-65db-460b-9c76-56a7d9128bd5.ws-us03.gitpod.io/",
                { 
                    sum:this.sum1,
                }
            );
            this.sum1 = "",
            
            alert("You have keyed in the sum.")
        }//async function
    }//method
}//end
</script>

<style scoped>

</style>