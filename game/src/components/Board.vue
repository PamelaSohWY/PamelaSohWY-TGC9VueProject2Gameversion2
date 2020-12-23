<template>
  <div>
    <h1>from board</h1>
        <table> 
            <tr v-for="(row,rindex) in grid" v-bind:key="rindex">
                <td v-for="(col,cindex) in row" v-bind:key="cindex"> 
                    <!-- colon must be next to key -->
                    {{col}}
                    </td>
                    </tr>
        </table>
        <button @click="change()">Changeboard</button>
    </div> 
</template>
 
<script>
export default {
    data: function(){
        return{
            grid:[
                [1,2,3,4,5,6,7],
                [8,9,10,11,12,13,14],
                [15,16,17,18,19,20,21],
                [22,23,24,25,26,27,28],
                [29,30,31,32,33,34,35],
                [36,37,38,39,40,41,42],
                [43,44,45,46,47,48,49],
                [50,51,52,53,54,55,56]
            ],
        }; // end of return
    },// end of data function
    
mounted: function(){
    for(let i=0; i<7; i++){
        for(let j=0; j<8; j++){
    this.$set(this.grid[0],j,Math.floor(Math.random()*(6-1+1))+1);

        }//end of j
    } //end of i
        },//end of mounted function
methods:{
    change: function(){
        this.$set(this.grid[0],0, Math.floor(Math.random()*6));
    }, // end of change    }
    } // end of methods
    } //end of export default

</script>
<style>
</style> 
