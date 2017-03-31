<template>
  <div  v-cloak>
    <div class="search-box">
      <input type="text" ></input>
    </div>
    <section class='box-card' v-for='List in movieListInof'>
      <header class='box-title'>{{ List.title }} <router-link :to="{ name: 'm_list', params: { name: List.moreId }}">更多 ></router-link></header>
      <div class='box-content'>
        <div class='box-item' v-for='movieItem in List.dataList'>
        <router-link :to="{ name: 'm_detail', params: { id: movieItem.id }}">
          <span class='item-img'><img :src='movieItem.images.large'></span>
          <h5 class='item-title'>{{ movieItem.title }}</h5>
          <div class='item-desc'>
            <div v-if="movieItem.rating.stars == '00'" class="gray">暂无评分</div>
            <div v-else>
              <div class='start-box'>
                <div class="start-value" :style="{ width: (movieItem.rating.stars/50)*100 + '%' }"></div>
              </div>
              <span>{{ movieItem.rating.average }}</span>
            </div>
          </div>
        </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        'movieListInof': [{
          'title': '即将上映',
          'moreId': 'coming_soon',
          'dataList': []
        }, {
          'title': 'TOP250',
          'moreId': 'in_theaters',
          'dataList': []
        }, {
          'title': 'TOP250',
          'moreId': 'top250',
          'dataList': []
        }]
      }
    },
    mounted () {
      var commingsoomUrl = '/v2/movie/coming_soon'
      var top250Url = '/v2/movie/top250'
      var inTheaters = '/v2/movie/in_theaters'
      this.getDate(commingsoomUrl, this.movieListInof[0])
      this.getDate(top250Url, this.movieListInof[2])
      this.getDate(inTheaters, this.movieListInof[1])
      // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      //   headers: {

      //   },
      //   emulateJSON: true
      // }).then(function (response) {
      //   // 这里是处理正确的回调
      //   this.articles = response.data.subjects
      // }, function (response) {
      //   // 这里是处理错误的回调
      //   console.log(response)
      // })
    },
    methods: {
      getDate (url, obj) {
        this.$http.get(url, { // 获取全部数据
          params: {
            count: 3
          }
        }).then(function (response) {
          obj['title'] = response.data.title
          obj['dataList'] = response.data.subjects
        }, function (response) {
          // 这里是处理错误的回调
          console.log(response)
        })
      },
      gotoList (id) {
        alert(id)
      }
    }
  }
</script>
