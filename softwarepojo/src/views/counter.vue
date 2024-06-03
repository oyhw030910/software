<template>
  <div class="contain" v-if="false">
    <div class="boxs">
        <div class="row">
            <div class="box" id="0"></div>
            <div class="box" id="1"></div>
            <div class="box" id="2"></div>
            <div class="box" id="3"></div>
        </div>
        <div class="row">
            <div class="box" id="4"></div>
            <div class="box" id="5"></div>
            <div class="box" id="6"></div>
            <div class="box" id="7"></div>
        </div>
        <div class="row">
            <div class="box" id="8"></div>
            <div class="box" id="9"></div>
        </div>
    </div>
    <div class="changeBtn">
        <div class="changeBtn_right">
            <div class="button_box"><button @click="last">上一页</button></div>
            <div class="button_box"><button @click="next">下一页</button></div>
        </div>
    </div>
  </div>
  <div class="check_in" v-if="true">
    <div class="form_row">
        <p>账号</p>
        <input type="text" placeholder="手机号"/>
    </div>
    <div class="form_row">
        <p>昵称</p>
        <input type="text" placeholder="昵称"/>
    </div>
    <div class="form_row">
        <p>房型</p>
    </div>
  </div>
</template>

<script>
export default {
 data(){
    return{
        isClick:false
    }
 }
}
</script>

<style>
.form_row{
    display: block;
    margin-top: 50px;
}
.form_row p{
    display: inline;
}
.form_row input{
    display: inline;
}
.check_in{
    background-color: green;
    width: 300px;
    height: 300px;
    position: absolute;
    left: 40%;
    top: 25%;
}
.contain{
    display: flex;;
}
.boxs {
    display: inline-block;
    background-color: red;
}
.row {
    margin:0 auto;
    display:block;
    background-color: blue;
}
.boxs .row .box {
    display: inline-block;
    width: 250px;
    height:220px;
    margin: 20px;
    background-color: aqua;
}
.changeBtn{
    display:inline-block;
    flex:1;
    width: auto;
    height: auto;
    background-color: black;
}
.changeBtn .changeBtn_right{
    display: block;
    position: absolute;
    top: 20%;
    right: 8%;
}
.button_box{
    background-color: aquamarine;
    display: block;
    padding: 25px ;
    border: 10px solid black;
}
.changeBtn .changeBtn_right button{
    margin: 30px;
    width:60px;
    font-size: 30px;
    outline: none;
    background-color: transparent;
    height: 100px;
    display: block;
    border: 0px;
    margin: 50px 0;
}

</style>