<template>
  <div>
    <h1>Step 2: Click the answer in the board. 
        Try to get a horizontal or vertical line of 4 numbers. 
    </h1>
        <table> 
            <tr v-for="(row,rindex) in grid" v-bind:key="rindex">
                <td v-for="(col,cindex) in row" v-bind:key="cindex"> 
                    <!-- colon must be next to key -->

                    {{col}}
                    </td>
                    </tr>
        </table>
        <!-- <button @click="change()">Changeboard</button> -->
    </div> 
</template>
 
<script>
export default {
    data: function(){
        return{
            grid:[
                [7,9,3,8,2,11,10],
                [4,2,9,5,12,5,12],
                [10,6,4,7,4,7,9],
                [3,10,6,2,8,12,3],
                [8,5,9,11,3,6,11],
                [11,7,8,3,5,8,4],
                [10,2,6,7,10,2,6],
                [5,12,11,4,7,9,12]
            ],
        }; // end of return
    },// end of data function
    
mounted: function(){
    for(let i=0; i<8; i++){
        for(let j=0; j<7; j++){
    this.$set(this.grid[0],j,Math.floor(Math.random()*(6-1+1))+1);

        }//end of j
    } //end of i
        },//end of mounted function
methods:{
    change: function(){
        this.$set(this.grid[0],0, Math.floor(Math.random()*12));
        this.$set(this.grid[0],1, Math.floor(Math.random()*12));
        //traversal of array = map return
        // look through array and extract all row, and set the cells 
    }, // end of change    }
    } // end of methods
    } //end of export default

</script>
<style>
td {
  border: 1px solid black;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 32px;
}
</style> 
