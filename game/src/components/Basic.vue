<template>
<div>
    <h1>Math Game</h1>
    <div>
        <label>Student </label>
        <input type="text" v-model="player1Name"/>
    </div>
    <div>
        <label>Age </label>
        <input type="text" v-model="age"/>
    </div>
    <div>
        <label>Date </label>
        <input type="date" v-model="date"/>
    </div>
   
    <button @click="begin">Begin game</button>
</div>
</template>

<script>
import axios from "axios";
export default {
    data: function() {
        return {
            player1Name:"",
            age:"",
            date:""
        }
    },
    methods:{
        begin:async function(){
            this.$emit('beginGameEvent', this.player1Name);
            await axios.post(
                "https://3000-ff14a68d-65db-460b-9c76-56a7d9128bd5.ws-us03.gitpod.io/",
                { 
                    name:this.player1Name,
                    age:this.age,
                    date:this.date
                }
            );
            this.player1Name = "",
            this.age="",
            this.date=""
            
            alert("Your name is keyed in.")
        }//async function
    }//method
}//end
</script>

<style scoped>

</style>