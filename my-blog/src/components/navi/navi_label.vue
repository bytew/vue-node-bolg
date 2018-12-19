<template>
  <div class="insto">
    <div class="label-title">
      标签
    </div>
    <div class="label-content">
      <!--<el-tag v-for="item in categorys " class="label-tag">{{item.category_name}}</el-tag>-->
    </div>
  </div>
</template>


<script>

  export default {
    name: 'navi_file',
    data () {
      return {
         categorys:[
           {
             category_name:'标签1'
           },{
             category_name:'标签2'
           },{
             category_name:'标签3'
           },{
             category_name:'标签4'
           }
         ],
      }
    },
    methods:{
      loadData(){
        let url = '/api/blogCategory/select'
        let params={}
        let self = this
        $post(url,params,function (res) {
            let data = res||[]
            self.categorys = data ||[]
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
  @import './navi.css';
  .insto{
    margin: 30px;
  }
  .label-title{
    width: auto;
    height: 60px;
    font-size: 32px;
    color: #5e6d82;
  }
  .label-content{
    width:auto;
    height:auto;
  }
  .label-tag{
    margin-left: 10px;
    margin-top: 5px;
  }


</style>
