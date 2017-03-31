<template>
  <div  v-cloak>
    <div class='box-content' >
      <div class='box-item' v-for='movieItem in movieListInof.dataList'>
      <router-link :to="{ name: 'm_detail', params: { id: movieItem.id }}">
        <span class='item-img' v-if="movieItem.images"><img :src='movieItem.images.large'></span>
        <h5 class='item-title'>{{ movieItem.title }}</h5>
        <div class='item-desc'>
          <div v-if="movieItem.rating && movieItem.rating.stars == '00'" class="gray">暂无评分</div>
          <div v-else>
            <div class='start-box' v-if="movieItem.rating">
              <div  class="start-value" :style="{ width: (movieItem.rating.stars/50)*100 + '%' }"></div>
            </div>
            <span v-if="movieItem.rating">{{ movieItem.rating.average }}</span>
          </div>
        </div>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        'httpName': this.$route.params.name,
        'movieListInof': {
          'title': '即将上映',
          'dataList': []
        },
        'ajaxLock': false,
        'page': 1,
        'step': 12,
        'url': '/v2/movie/'
      }
    },
    mounted () {
      var httpName = this._data.httpName
      var url = this._data.url + httpName
      this.getDate(url, 12)
      window.addEventListener('scroll', this.winScroll)
    },
    methods: {
      getDate (url, page) {
        this._data.ajaxLock = true
        this.$http.get(url, { // 获取全部数据
          params: {
            count: page
          }
        }).then(function (response) {
          this._data.movieListInof['title'] = response.data.title
          this._data.movieListInof.dataList = response.data.subjects
          this._data.ajaxLock = false
        }, function (response) {
          this._data.ajaxLock = false
          // 这里是处理错误的回调
          console.log(response)
        })
      },
      winScroll (e) {
        var elementScrollTop = document.body.scrollTop
        var bodyHeight = document.body.scrollHeight
        var viewHeight = window.screen.availHeight
        // var url = this._data.url + this._data.httpName
        if (elementScrollTop + viewHeight === bodyHeight) {
          if (!this._data.ajaxLock) {
            this._data.page++
            console.log('可分页加载 page=' + this._data.page)
            // this.getDate(url, this._data.pn)
          }
        }
      }
    }
  }
</script>
