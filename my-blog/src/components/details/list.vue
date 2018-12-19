<template>
  <div class="insto">
    <div class="byte-head">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="head-title">
            {{article.title}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="head-date">
            发布于：{{article.do_date}}
          </div>
          <div class="head-record">
            浏览：{{article.browse}}
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="byte-content">
      {{article.content}}
    </div>

  </div>
</template>


<script>

  export default {
    name: 'navi_file',
    data () {
      return {
        article:{
          title:'腾讯云服务器搭建',
          do_date:'2018-07-11',
          browse:'20',
          content:'这里是文章内容',
        }

      }
    },
    methods:{
      loadData(){
        let id = this.$route.params.id
        let url = '/api/blog/selectOne'
        let params = {
          id:id
        }
        let self = this
        $post(url,params,function (res) {
          console.log(res,1)
          let data = res[0]||{}
          self.article = data
        })
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
  .insto{
    margin-top: 25px;
    margin-left: 25px;
  }
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
    height: 620px;
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
