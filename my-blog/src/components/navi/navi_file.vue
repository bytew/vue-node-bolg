<template>
  <div class="insto">
    <div class="archive-head">归档</div>
      <ul class="archive-ul" v-for="item in archives">
        <li class="archive-date" >{{item.archives_time}}
            <li class="archive-title" v-for="i in item.details">
              <a href="#" class="archive-title-a">{{i.title}}</a>
            </li>
        </li>
      </ul>
  </div>
</template>


<script>

  export default {
    name: 'navi_file',
    data () {
      return {
        archives:[
          {
            details:[
              {
                title:'Ubuntu armbian 版本中文乱码的解决方法'
              }
            ],
            archives_time:'2018年07月'
          },
          {
            details:[
              {
                title:'linux 移动硬盘格式化 & 分区'
              },
              {
                title:'树莓派Raspberry Pi 3 更换阿里云更新源'
              },
              {
                title:'acme.sh 一键申请通配符证书'
              }
            ],
            archives_time:'2018年06月'
          },
          {
            details:[
              {
                title:'IE 浏览器对于 css 文件大小限制的问题'
              },
              {
                title:'Nginx 反向代理动态域名的问题'
              },
              {
                title:'NodeJS 阿里云DNS解析API调用方式'
              },{
                title:'Gogs 设置Git钩子实现项目自动部署'
              }
            ],
            archives_time:'2018年05月'
          }
        ]
      }
    },
    methods:{
      goto(url){
        this.$router.push(url);
      },
    },
    created(){
    },
    destroyed(){
    },
    mounted() {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import './navi.css';

  .archive-head{
    width: auto;
    height: 60px;
    padding: 30px;
    font-size: 32px;
    color: #5e6d82;

  }

  .archive-ul{
    padding: 20px;
    list-style: none;
  }

  .archive-date{
    margin-left: 25px;
    width: auto;
    height: 40px;
    font-size: 20px;
    color: #5e6d82;
  }
  .archive-title{
    margin-left: 50px;
    width: auto;
    height: 40px;
    font-size: 16px;
    list-style: disc;
  }
  .archive-title-a{
    text-decoration: none;
  }

</style>
