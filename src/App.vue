<template>
  <div id='app'>
    <router-view class='view'></router-view> 
    <toolbar></toolbar>
  </div>
</template>

<script>
// 引入模块
import readPage from './components/readPage.vue'
import moviePage from './components/moviePage.vue'
import toolbar from './components/toolbar'
import movieDetail from './components/movieDetail'
import readDetail from './components/readDetail'
import movieList from './components/movieList'
export default {
  data () {
    return {
    }
  },
  // 注册组件
  components: {
    toolbar,
    readPage,
    readDetail,
    moviePage,
    movieDetail,
    movieList
  },
  mounted () {
    // this.getUrl()
    // this.$http.get(this.defUrl, {// 获取全部数据
    //   params: {
    //     type: 'top',
    //     key: this.key
    //   }
    // }).then(function (response) {
    //   this.items = response.data.result.data
    //   // console.log(response.data.result.data)
    // })
  }
}
</script>
