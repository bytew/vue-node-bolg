<template>
  <div class="sidebar">
    <span class="nav-head">
      <img src="../../../static/img/service.png" class="head-pic" />
      <div class="blog-name">{{blogger.username}}的博客</div>
    </span>
    <ul class="nav-list">
      <li :class="{active:curItem=='/home'}" @click="itemclick('/home')">
        <icon scale="1.1" name="home"></icon>
        <span class="title"> 首页 </span>

      </li>

      <li  :class="{active:curItem=='/navi_file'}" @click="itemclick('/navi_file')">
        <icon scale="1.1" name="exchange-alt"></icon>
        <span class="title"> 归档 </span>
      </li>
      <li  :class="{active:curItem=='/navi_label'}" @click="itemclick('/navi_label')">
        <icon scale="1.1" name="calendar-check"></icon>
        <span class="title"> 标签 </span>
      </li>
      <li  :class="{active:curItem=='/navi_about'}" @click="itemclick('/navi_about')">
        <icon scale="1.1" name="calendar-check"></icon>
        <span class="title"> 关于 </span>
      </li>
    </ul>
  </div>

</template>

<script>
  import axios from 'axios';
  import 'vue-awesome/icons/home'
  import 'vue-awesome/icons/calendar-check'
  import 'vue-awesome/icons/exchange-alt'

//  import {setCookie, getCookie} from '../util/cookie.js'

  export default {
    data(){
      return {
        curItem:"",
        blogger:{
          username:'杰'
        }
      }
    },
    methods:{
      getBlogger(){
        let url = '/api/blogger/select'
        let params = {
          ab:'1'
        }
        let self = this


        $post(url,params,function (res) {
          let data = res
          self.blogger = data
        })
      },


      itemclick(url){
        this.$router.push(url);
        this.curItem = url;
      },

    },
    computed:{

    },
    created(){
    },
    destroyed(){
    },
    mounted() {
      this.getBlogger()
    },

  }
</script>

<style >
  .nav-head{

  }

  .head-pic{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    margin-left: 50%;
    margin-top: 50%;
    transform: translate(-50%, -50%);
  }
  .blog-name{
    margin-top: -30px;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 18px;
    color: #c0c4cc;
    text-align: center;

  }


  .sidebar{
    display: block;
    position: absolute;
    width: 220px;
    left: 0;
    bottom:0;
    height:100%;
    overflow: auto;

    background-color: #323436;
    border-right: solid 1px  #f2f3f4 ;
    box-sizing: border-box;


  }
  .sidebar  ul {
    list-style: none;
  }


  .sidebar li.active  {
    font-weight: 700;
    color: #909399;
  }

  .sidebar li {
    display: block;
    position: relative;
    float: none;
    border-bottom: solid 1px  #323436;
    font-size: 16px;
    line-height: 60px;
    color:#ccc;
    background-color: #323436;
    padding-left: 30px;
    cursor: pointer;
  }
  .sidebar li:hover {
    /*background-color: #cccccc;*/
    color: #909399;
  }
  .sidebar .title{
    margin-left: 15px;
  }
  .sidebar li.active:after{
    content:' ';
    display: block;
    position: absolute;
    right: 0;
    top: 15px;
    border: 8px solid transparent;
    border-width: 14px 10px;
    border-right-color: #f2f3f4;
  }


</style>
