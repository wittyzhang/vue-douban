<template>
  <div>
    <div class="search-box">
      <input type="text" value='散文'></input>
    </div>
    <div class='box-content' style="padding-top:0">
      <div class='read-box-item' v-for='book in books'>
      <router-link :to="{ name: 'r_detail', params: { id: book.id }}">
        <div class='item-img'><img :src="book.image"></div>
        <div class="item-info">
          <h5>{{ book.title }}</h5>
          <!-- <div class='rating-stars' :data-rating="book.rating.average / 2">
            <span class="rating-star star-full"></span>
            <span class="rating-star star-half"></span>
            <span class="rating-star star-gray"></span>
            <span class="rating-star star-gray"></span>
            <span class="rating-star star-gray"></span>
          </div> -->
          <div class='start-box'>
                <div v-if="book.rating" class="start-value" :style="{ width: ((book.rating.average / 2).toFixed(1) / 5 )*100 + '%' }"></div>
              </div>
          <span>{{ book.rating.average }}</span>
          <div class="authors gray"><span v-for='au in book.author'>{{ au }}</span></div>
          <div class="gray"><span>{{ book.publisher }}</span> / {{ book.pubdate }}</div>
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
      books: [],
      star: 0
    }
  },
  mounted () {
    this.getDate('/v2/book/search', 10)
  },
  methods: {
    getDate (url, count) {
      this.$http.get(url, { // 获取全部数据
        params: {
          count: count,
          tag: '散文'
        }
      }).then(function (response) {
        this._data.books = response.data.books
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    getStar (array) {
      if (!array.rating) return
      for (var i = 0; i < array.length; i++) {
        var star = array.rating.average
        var fixNum = Number(star + 1).toFixed(2) // 四舍五入之前加1
        var fixedNum = Number(fixNum - 1).toFixed(2) // 四舍五入之后减1，再四舍五入一下
        array.rating.star = fixedNum
      }
    }
  }
}
</script>
