<template>
  <div id="app">
    <top-bar v-bind:bar-name="barName"></top-bar>
    <router-view class="view"/>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Bottombar from '@/components/Bottombar'
export default {
  name: 'app',
  components: { 
    'top-bar': Topbar,
    'bottom-bar': Bottombar
  },
  data: function() {
    return {
      barName: ''
    }
  },
  methods: {
    changeTitle() {
      switch(this.$route.name){
        case 'Home':
          this.barName = 'Hey Boy!';
          break;
        case 'CatList':
          this.barName = '搜 索';
          break;
        case 'Cat':
          this.barName = '搜 索';
          break;
        case 'CommentList':
          this.barName = '留 言';
          break;
        case 'SessionList':
          this.barName = '私 信';
          break;
        case 'OrderList':
          this.barName = '订 单';
          break;
        case 'SellList':
          this.barName = '在 售';
          break;
        case 'Puton':
          this.barName = '发 布';
          break;
        case 'HistoryList':
          this.barName = '足 迹';
          break;
        case 'WantList':
          this.barName = '想 买';
          break;
        case 'Setting':
          this.barName = '设 置';
          break;
        default:
          break;
      }
    }
  },
  watch: {
    '$route': 'changeTitle'
  },
  created: function() {
    this.changeTitle();
  }
}
</script>

<style>
body {
  margin: 0px;
  background: rgb(245,245,245);
}
#app {
  position: absolute;
  width: 100%;
  height: max-content;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.view {
  /* text-align:center; */
  padding-top: 50px;
  margin: 0 auto;
}
::-webkit-scrollbar {  
  
   width: 0em;
  
}
</style>
