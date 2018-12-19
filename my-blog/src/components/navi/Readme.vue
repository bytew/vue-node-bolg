<template>
  <div class="insto">
    <ul class="byte-ul">
      <li v-for="item in articles">
        <div class="byte-head">
          <el-row :gutter="20">
            <el-col :span="18">
              <div class="head-title">
                {{item.title}}
              </div>
            </el-col>
            <el-col :span="6">
              <div class="head-date">
                发布于：{{item.do_date}}
              </div>
              <div class="head-record">
                浏览：{{item.readtimes}}
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="byte-content">
          {{item.content}}
        </div>
        <div class="byte-bottom">
          <a @click="readMore(item.blogid)">阅读全文</a>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>

  export default {
    name: 'navi_file',
    data () {
      return {
        articles:[
          {
            title:'腾讯云服务器搭建',
            do_date:'2018-07-11',
            readtimes:'20',
            content:'这里是文章内容'
          },
          {
            title:'前端开发经验分享',
            do_date:'2018-06-11',
            readtimes:'50',
            content:'这里是文章内容'
          },
          {
            title:'博客开通之旅',
            do_date:'2018-05-11',
            readtimes:'16',
            content:'这里是文章内容'
          }
        ],

      }
    },
    methods:{
      goto(url){
        this.$router.push(url);
      },


      loadData(){
        let url = '/api/blog/select'
        let params = {}
        let self = this
        $post(url,params,function (res) {
            console.log(res,'res')
          let data = res||[]
            self.articles =data
        })
      },


      readMore(id){
        this.$router.push('/details/'+id)
      },
    },
    created(){
    },
    destroyed(){
    },
    mounted() {
      this.loadData()
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import './navi.css';

  .byte-ul{
    padding-left: 25px;
    list-style: none;
  }
  .byte-head{
    width:auto;
    height: 50px;
    margin-top: 30px;
  }
  .byte-head .head-title{
    font-size: 26px;
    font-weight: 400;
    color: #5e6d82;
  }
  .byte-head .head-date{
    text-align: right;
    margin: 2px 30px ;
    color: #5e6d82;

  }
  .byte-head .head-record{
    text-align: right;
    margin: 5px 30px;
    font-size: 12px;
    color: #abafb7;

  }


  .byte-content{
    width: auto;
    height: 320px;
    margin-top: 10px;
    color:#606266;
    background-color: rgba(242, 243, 244, 0.6)

  }
  .byte-bottom{
    width:auto;
    height: 35px;
    margin-top: 10px;
    margin-bottom: 50px;
    border-bottom: dashed 1px #404244;

  }

</style>
