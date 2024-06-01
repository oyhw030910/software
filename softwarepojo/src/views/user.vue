<template>
  <div>
    <h1>房间号：{{ roomId }}</h1>
    <p>室温：{{ roomTemp }}</p>
    <div class="text" v-if="isOpen">
        <p>温度：{{ temperature }}</p>
        <p>风速：{{ windSpeed }}</p>
    </div>

    <div class="button">
      <div class="temp">
        <button @click="incTemp">升温</button>
        <button @click="decTemp">降温</button>
        <button @click="open">开机</button>
      </div>
      <div class="speed">
        <button @click="setSpeed">风速</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomTemp:26, 
      roomId: this.$route.query.index,
      temperature: 26,
      windSpeed: 0,
      isOpen: false,
    };
  },
  methods: {
    incTemp() {
     if (this.temperature < 30) {
        if(!this.isOpen)return
        this.temperature++;
      }
    },
    decTemp() {
        if(!this.isOpen)return
      if(this.temperature > 16){
        this.temperature--;
      }
    },
    open() {
      if(this.isOpen){
        this.isOpen = false;
      }else{
        this.isOpen = true;
      }
    },
    setSpeed() {
        if(!this.isOpen)return
        this.windSpeed++;
        this.windSpeed=this.windSpeed%5;
    },
    
  },
  mounted() {
  },
};
</script>

<style>
</style>