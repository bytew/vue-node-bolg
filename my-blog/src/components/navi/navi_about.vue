  <template>
    <div class="insto">
      <div class="about-head">关于</div>
      <dvi class="about-content">
        <span class="content-title">
          {{name}}
        </span>
        <span class="content-desc">{{desc}}</span>
      </dvi>
    </div>
  </template>


  <script>

    export default {
      name: 'navi_about',
      data () {
        return {
          name:"byte的博客",
          desc:"不忘初心，方得始终"
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

    .about-head{
      width: auto;
      height: 80px;
      padding: 30px;
      font-size: 32px;
      color: #5e6d82;

    }

    .about-content{
      width:auto;
      height: 400px;
      padding-left: 30px;

    }
    .content-title{
      font-size: 18px;


    }
    .content-desc{
      padding-left: 30px;
      margin-top: 10px;
    }

  </style>
