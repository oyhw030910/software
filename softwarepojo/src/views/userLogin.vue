<template>
  <input type="text" placeholder="请输入房间号" v-model="roomId"/>
  <p>{{ roomId }}</p>
  <button @click="jump">确认</button>
</template>

<script>
export default {
    data(){
        return{
            roomId:""
        }
    },
    methods:{
        jump(){
            this.$router.push({
                path:"/user",
                query:{
                    index: this.roomId
                }
            })
        }
    }
}
</script>

<style>

</style>