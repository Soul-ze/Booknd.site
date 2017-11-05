<template>
  <div id="top-bar" v-bind:style="{ height: topbarHegiht + 'px'}">
    <div id="top-bar-bgs">    
    </div>
    <transition name="fade">
      <div id="link-groups" v-show="open">
        <div v-for="group in linkGroups" class="link-group" :key="group.id">
          <div class="link-group-title">
            {{ group.name }}
          </div>
          <div v-for="item in group.links" 
            class="link-group-item" 
            v-bind:key="item.id">
            <router-link :to="item.link">
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </div>
    </transition>
    <div id="bar-name" 
      v-bind:style="{ opacity: cShowTitle }">
      {{ barName }}
    </div>
    <button v-if="open" 
      class="top-bar-button"
      v-on:click="CloseTopbar">
      <i class="material-icons md-36">expand_less</i>
    </button>
    <button v-else 
      v-on:mouseenter="showTitle = 0" 
      v-on:mouseleave="showTitle = 1"
      class="top-bar-button"
      v-on:click="OpenTopbar">
      <i class="material-icons md-36">expand_more</i>
    </button>
    <input id="search-input" 
      v-on:keyup.enter="BeginSearch()"
      v-model="search"/>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  props: ['barName'],
  data: function() {
    return {
      linkGroups: [
        {
          id: 0,
          name: '消 息',
          links: [
            {
              id: 0,
              name: '留 言',
              link: '/comment'
            },
            {
              id: 1,
              name: '私 信',
              link: '/session'
            }
          ]
        },
        {
          id: 1,
          name: '交 易',
          links: [
            {
              id: 0,
              name: '订 单',
              link: '/order'
            },
            {
              id: 1,
              name: '在 售',
              link: '/sell'
            },
            {
              id: 2,
              name: '发 布',
              link: '/puton'
            }
          ]
        },
        {
          id: 2,
          name: '个 人',
          links: [ 
            {
              id: 0,
              name: '足 迹',
              link: '/history'
            },
            {
              id: 1,
              name: '想 买',
              link: '/want'
            },
            {
              id: 2,
              name: '设 置',
              link: '/setting'
            }
          ]
        }
      ],
      open: false,
      topbarHegiht: 50,
      showTitle: 1,
      search: ''
    }
  },
  methods: {
    CloseTopbar() {
      this.topbarHegiht = 50;
      this.open = false;
      this.showTitle = 1;
    },
    OpenTopbar() {
      this.topbarHegiht = 210;
      this.open = true;
    },
    BeginSearch() {
      document.getElementById('search-input').blur();
      this.CloseTopbar();
      this.$router.push(`/search/${this.search}`);
      this.search = '';
    }
  },
  watch: {
    '$route': 'CloseTopbar'
  },
  computed: {
    cShowTitle: function() {
      return !this.open ? this.showTitle : 0;
    }
  }
}
</script>

<style>
#top-bar {
  position: fixed;
  width: 100%;
  height: 210px;
  background: #41b883;
  overflow: hidden;
  transition: all 300ms;
  text-align: center;
}

#bar-name {
  position: relative;
  display: block;
  width: max-content;
  height: 50px;
  margin: 0 auto;
  line-height: 50px;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  transition: all 600ms;
}

#link-groups {
  width: 300px;
  height: 210px;
  margin: 0 auto;
  color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

.link-group {
  width: 33.33%;
  float: left;
  height: 200px;
  padding-top: 10px;
  transition: all 300ms;
}

.link-group:hover {
  background-color: rgb(245,245,245);
  color: #41b883;
}

.link-group-title {
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 10px;
}

.link-group-item {
  padding-top: 10px;
}

.link-group-item a {
  padding: 10px 15px 10px 15px;
  border: none;
  outline: none;
  font-size: 18px;
  color: inherit;
  text-decoration: none;
}

.top-bar-button {
  position: absolute;
  bottom: 0px;
  left: 50%;
  margin-left: -40px;
  width: 80px;
  height: 50px;
  color: rgb(245,245,245);
  background: transparent;
  border: none;
  outline: none;
  opacity: 0;
  cursor: pointer;
  transition: opacity 400ms;
}

.top-bar-button i{
  font-size: 36px;
}

.top-bar-button:hover {
  opacity: 1;
}

#search-input {
  position: absolute;
  top: 8px;
  right: 50px;
  width: 100px;
  height: 30px;
  border: 1px solid white;
  border-radius: 4px;
  outline: none;
  background: transparent;
  transition: all 400ms;
  color: white;
  padding-left: 10px; 
  opacity: 0;
}

#search-input:focus {
  width: 150px;
  opacity: 1;
}
</style>

