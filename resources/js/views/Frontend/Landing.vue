<template>
       <div id="app">
<router-view></router-view>

       </div>
</template>

<script>
export default {
    name:"Landing",
    data(){
        return {

        }
    },
        created(){
            console.log("landing")
        }
}
</script>