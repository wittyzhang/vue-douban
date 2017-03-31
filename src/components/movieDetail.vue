<template>
  <div class="movie_detail" v-cloak>

    <section class="header-banner"  >
      <img :src="movieDetail.images.large" class="maoboli" v-if="movieDetail.images">
      <div class="m_imgbox"  v-if="movieDetail.images" ><img :src='movieDetail.images.large' /></div>
      <h2 class="m_title">{{ movieDetail.title }}</h2>
      <div class="m_desc"><span v-for="country in movieDetail.countries">{{country}} </span>● {{movieDetail.year}}</div>
      <p class="m_cf_info"><span class="red">{{movieDetail.wish_count}}</span>人喜欢，<span class="red">{{movieDetail.ratings_count}}</span>条评论</p>
    </section>
    <section class="m_info">
      <h2>{{movieDetail.original_title}}</h2>
      <ul class="label_ul">
        <li><label>评分</label>
          <span v-if="movieDetail.rating && movieDetail.rating.stars == '00'" class="gray">暂无评分</span>
          <div class='start-box' v-if="movieDetail.rating && movieDetail.rating.stars != '00'">
            <div class="start-value" :style="{ width: (movieDetail.rating.stars/50) *100 + '%'}"></div>
          </div>
        </li>
        <li><label>导演</label>
        <span v-for='man in movieDetail.directors'>{{ man.name }} / </span>
        </li>
        <li><label>影人</label><span v-for='cast in movieDetail.casts'>{{ cast.name }} / </span></li>
        <li><label>类型</label><span v-for='genre in movieDetail.genres'>{{ genre }} / </span></li>
      </ul>
    </section>
    <section class="m_synopsis">
      <div class="sec_title">剧情简介</div>
      <div>
        {{ movieDetail.summary }}
      </div>
    </section>
    <section class="m_theatres">
      <div class="sec_title">影人</div>
      <div class="theatres_ul" id="theatres_ul">
        <ul>
          <li v-for='cast in movieDetail.casts'><span><img :src="cast.avatars.small"></span><p>{{cast.name}}</p></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        'movieDetail': {},
        'id': this.$route.params.id
      }
    },
    mounted () {
      this.$http.get('/v2/movie/subject/' + this._data.id, { // 获取全部数据
        params: {
          count: 3
        }
      }).then(function (response) {
        this._data.movieDetail = response.data
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    methods: {
      gotoList (id) {
        alert(id)
      }
    }
  }
</script>
