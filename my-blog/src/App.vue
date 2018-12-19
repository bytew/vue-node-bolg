<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>


<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    color: #337ab7;
    text-decoration: none;
  }
  a:focus, a:hover {
    color: #23527c;
    text-decoration: underline;
  }
  #app, .wrapper, body, html {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: "微软雅黑";
    font-size: 13px;
  }


  .page {
    height: 100%;
  }

  .mt-5 {
    margin-top: 5px;
  }

  .mt-10 {
    margin-top: 10px;
  }

  .pagination {
    height: 40px;
  }

  .toolbar {
    width: 100%;
    box-sizing: border-box;
    background-color: #f5f5f5;
    height: 46px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding: 5px 10px;
  }

  .toolbar .title {
    font-size: 20px;
    line-height: 40px;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .tab_page .el-tabs__header {
    margin: 0 !important;
  }

  .tab_page .el-tabs__item {
    height: 35px !important;
    line-height: 35px !important;
  }

  .el-dialog__body {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .el-table {
    font-size: 13px;
  }

  .sw-search-wrapper {
    vertical-align: middle;
    position: relative;
    border: 1px solid #e7e7e7;
    box-shadow: 0 0 1px 1px #f4f4f4;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 5px;
    /*margin-right: 10px;*/
    margin-left: 5px;
    transition: all ease-in-out .2s;
    margin-bottom: 9px;
    width: 200px;
    display: inline-table;
  }
  .el-table td, .el-table th {
    padding: 6px 0;
  }
  .el-table {
    color: #303133;
  }
  .el-table thead {
    color: #303133;

  }
  .el-form--inline .el-form-item {
    margin-right: 5px;
  }
  .sw-search-daterange{
    width: 285px;
  }
  .sw-search-mid-daterange{
    width: 210px;
  }
  .sw-search-daterange .el-date-editor.el-input {
    width: 205px;
  }

  .sw-long-search-wrapper{
    width: 240px;
  }
  .sw-search-wrapper > label {
    display: table-cell !important;
    white-space: nowrap;
  }

  .sw-search-wrapper .el-form-item__content {
    display: table-cell !important;
    width: 100%;
  }

  .sw-search-wrapper.is-error {
    border-color: #ff4949;
  }

  .sw-search-input input {
    border: 0 !important;
  }
  .sw-long-wrapper{
    width: 240px;
  }

  /*.sw-search-input.el-input, .sw-search-input.el-autocomplete {*/
  /*width: 160px;*/
  /*}*/

  /*.el-date-editor--daterange.el-input {*/
  /*width: 220px;*/
  /*}*/


  .sw-search-btn {
    margin-top: 7px;
    margin-bottom: 5px;
  }


  .audit-state {
    border-radius: 3px;
    color: #ffffff;
    padding: 2px;
  }

  /*草稿  拒绝*/
  .audit-state.assertive {
    background: #EA5A49;
    padding:2px 9px;
  }

  /*已审核 待受理  已接单*/
  .audit-state.energized {
    background: #FFBD17;
  }

  /* 已发货  已发送*/
  .audit-state.positive {
    background: #11c1f3;
  }
  /*发货*/
  .audit-state.blueviolet {
    background: #11c1f3;
    padding:2px 9px;
  }

  /*已受理 已配送 已生成 已下单 已录完*/
  .audit-state.turquoise {
    background: #6AD4A9;
  }

  /*已分单 已过账 已验收*/
  .audit-state.darkgreen {
    background: #64ae33;
  }

  /*待发送  已拒绝*/
  .audit-state.redbrown {
    background: #aa4d15;
  }

  /*未下单*/
  .audit-state.dark {
    background: #484746;
  }

  .audit-state.calm {
    background: #11C1F3;
  }

  .audit-state.balanced {
    background: #44CC00;
  }


  .audit-state.royal {
    background: #B5B5B5;
  }
  .el-autocomplete-suggestion li.highlighted, .el-autocomplete-suggestion li:hover {
    background-color: #dcdfe6;
  }

  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #e4e7ed;
  }

  .el-table--border, .el-table--group {
    border: 1px solid #dcdfe6;
  }
  .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    border-right: 1px solid #dcdfe6;
  }
  .el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #dcdfe6;
  }


  .el-table .cell {
    padding-left: 5px;
    padding-right: 5px;
  }

  .el-table th > .cell {
    text-align: center;
  }

  .el-table th,.el-table td {
    height: 32px;
  }


  .color-white {
    color: #ffffff;
  }

  .color-green {
    color: green;
  }
  .color-primary{
    color: #09b6ff;
  }
  .spanLink{
    color: #09b6ff;
    cursor: pointer;
  }
  .color-red{
    color: red;
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
  .badge{
    background-color: #ff4949;
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #fff;
    top: 10px;
    right: 32px;
    position: absolute;
    -ms-transform: translateY(-50%) translateX(100%);
    transform: translateY(-50%) translateX(100%);
  }

  .navi_left {
    flex: 0 0 150px;
    margin-right: 5px;
    height: 100%;
    overflow: auto;
  }


  .navi_content {
    flex: 1;
    overflow: auto;
  }

  .typeItem {
    line-height: 35px;
    height: 35px;
    width: 120px;
  }

  .navi_left li {
    border: 1px solid #ddd;
    padding-left: 10px;
    border-bottom: none;
    position: relative;
    cursor: pointer;
  }

  .navi_left li:nth-child(2n+1) {
    background-color: #f9f9f9;
  }

  .navi_left ul:last-child {
    border-bottom: 1px solid #ddd;
  }
  .navi_left ul li.active{
    background: #e2f0e4;
  }
  .sw-foot-top.height{
    height: 105px;
  }
  .toolbar  .el-button+.el-button {
    margin-left: 0px;
  }
  a{
    cursor: pointer;
  }
  .abn-header {
    height: 35px;
    line-height: 35px;
    background: #f1f1f1;
  }
  .abn-header span.title-btn {
    font-size: 14px;
    width: 30px;
    display: inline-block;
    text-align: center;

  }
  .abn-header span.title-btn a:hover, .f1bg:hover span.title-btn a {
    background: #e9e9e9;
    color: #05b2ff;
  }
  .abn-header span.title-btn a {
    color: #000;
    display: block;
    outline: 0;
  }
  .sorange {
    color: #e9cb70;
  }
  .noneborder{
    border: 0;
    box-shadow:none;
  }
  .addItem{
    border: 1px solid #e7e7e7;
    box-shadow: 0 0 1px 1px #f4f4f4;
    margin-top: 10px;
    margin-bottom: 0px;
    margin-right: 10px;
    padding: 10px;
    line-height: 22px;
  }
  .addItem .num{
    display: inline-block;
    width: 100px;
  }

  /****  element 重设大小   ****/
  .el-input__inner{
    height: 35px;
  }
  .el-form-item__content{
    height: 35px;
    line-height: 35px;
  }

  .el-form-item__label{
    padding: 8px 12px 8px 0;
    line-height: 35px;
  }
  .inlinebtn{
    padding: 8px 12px;
  }
  .el-date-editor.el-input {
    width: 140px;
  }
  .sw-date-input-inner{
    border:none;
  }
  .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner {
    width: 240px;
  }
  .el-date-editor .el-range-input {
    width: 35%;
  }
  .el-form-item__label {
    padding: 0px 5px
  }
  .el-input__icon{
    line-height: 0px;
  }




</style>

