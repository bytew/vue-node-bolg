<template>
  <div class="wrapper">
    <v-sidebar></v-sidebar>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import vSidebar from './Sidebar.vue'
  export default {
    name: 'hello',
    data () {
      return {
        isCollapse:false
      };

    },
    components: {
       vSidebar
    },
    methods: {}
  };
</script>

<style scoped>
  .tab_page{
    position: absolute;
    left: 170px;
    right: 0;
    top: 45px;
    height: 35px;
  }
  .content {
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 220px;
    right: 0;
    top: 1px;
    bottom: 0;
    width: auto;
    background-color: #f1f3f4;
    box-sizing: border-box;
    overflow: auto;
  }


  .page-changelog{
    content: "";
    display: block;
    /*position: absolute;*/
    left: -31px;
    top: 13px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: transparent;
    /*border: 2px solid #20a0ff;*/
    box-sizing: border-box;
    background-color: #fff;
  }

  .page-changelog .timeline {
    margin: 0 0 0 105px;
    padding-left: 25px;
    position: relative;
    color: #5e6d82;
    width: 480px;
  }
  .page-changelog .timeline:before {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 10px;
    background-color: #eaeefa;
  }

  .page-changelog .timeline>li:first-child {
    margin-top: -10px;
  }

  .page-changelog .timeline>li:not(:last-child) {
    margin-bottom: 50px;
  }

  .page-changelog .timeline h3 {
    margin: 20px 0 10px;
  }
  .page-changelog .timeline>li {
    list-style: none;
    position: relative;
    line-height: 1.8;

  }



  .page-changelog .timeline h3:before {
    content: "";
    display: block;
    position: absolute;
    left: -31px;
    top: 13px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid #20a0ff;
    box-sizing: border-box;
    background-color: #fff;

  }

  .page-changelog .timeline>li:first-child h3:before {
    left: -33px;
    top: 10px;
    width: 17px;
    height: 17px;
    background-color: #20a0ff;
    border: 0;
  }
  .page-changelog .timeline ul {
    padding-left: 0;
    width: 100%;
  }

  .page-changelog .timeline li li {
    content: "";
    font-size: 16px;
    list-style: none;
    padding-left: 0;
    word-break: break-all;
  }

  .page-changelog .timeline li li:before {
    /*  content: "";
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #5e6d82;
      margin-right: 5px;
      display: inline-block;
      vertical-align: middle;*/
  }

  .page-changelog .timeline li li li{
    font-size: 13px;
    padding: 2px;
    margin-left: 20px;
  }

  .page-changelog .timeline li li li :before {
    content: "";

    list-style: none;
    padding-left: 0;

    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #5e6d82;
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
  }

  .page-changelog .timeline li li li p  :before {
    background: none;
  }

  .page-changelog .timeline em {
    position: absolute;
    left: -127px;
    font-style: normal;
    top: 6px;
    font-size: 14px;
    color: #99a9bf;
  }
</style>
<style>
  .el-dialog__body {
    overflow: auto;
  }
</style>
