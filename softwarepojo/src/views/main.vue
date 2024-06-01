
<template>
  <div class="body">
    <div class="wrapper">
    <form action="">
        <h1>Login</h1>
      <div class="input-box">
        <input type="text" placeholder="Username" required v-model="user.username">
        <box-icon type='solid' name='user'></box-icon>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Password" required v-model="user.password">
        <box-icon type='solid' name='lock-alt'></box-icon>
      </div>
      <div class="remember-me"> 
        <label ><input type="checkbox" >Remember me</label>
        <a href="#">Forgot Password?</a>
      </div>
      
      <button type="submit" class="btn" @click="login">Login</button>

      <div class="register-link" >
        <p>Don't have an account? <router-link to="/registry" >Register</router-link></p>
      </div>
    </form>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
export default {
    name: 'main',
    components: {
    },
    data() {
        return {
            centerDialogVisible,
            user:{
                username: '',
                password: '',
                checkPassword:''
            }
        }
    },
    methods: {
        login(){
            
        },

    },
    computed: {
    },
    mounted() {
    },
    watch: {
    }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.body{

    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url("@/assets/1.jpg");
}
.wrapper{
    padding: 25px 30px;
    width: 350px;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    background: pink;
    opacity: 0.8;
}
.wrapper h1{
    font-size: 36px;
    text-align: center;
    margin: 30px 0;
}
.wrapper .input-box{
    position: relative;
    margin: 30px 0;
    height: 50px;
    width: 100%;
}

.body .dialog{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}


.input-box box-icon{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
}
.wrapper .input-box input{
    width: 100%;
    height: 100%;
    padding: 20px 45px 20px 20px;
   background-color: transparent;
   border: 2px solid rgba(255,255,255,.2);
   border-radius: 40px;
   outline: none;
   font-size: 16px;
   color: #fff;
}
::placeholder{
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    opacity: 1;
}
.input-box i{
    color: #fff;
    font-size: 20px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}
.body .wrapper .remember-me{
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin-top: -15px 0 15px;
}
.remember-me label {
    accent-color: #fff;
    margin-right: 3px;
}
.remember-me{
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin-top: -15px 0 15px;
}
.remember-me label {
    color: #fff;
    accent-color: #fff;
    margin-right: 3px;
}
.body .wrapper .remember-me a{
    color: #fff;
    text-decoration: none;
}
.body .wrapper .remember-me a:hover{
    text-decoration: underline;
}

.wrapper .btn{
    background: #fff;
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
}
.wrapper btn:hover{
    color: red;
}
.wrapper .register-link{
    margin-top: 20px;
    font-size: 14.5px;
    text-align: center;
}
.register-link p {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}
.register-link p a:hover{
    text-decoration: underline;
}
</style>