<template>
  <div class='movie_detail read_detail' v-cloak>
    <section class='header-banner'  >
      <img :src="book.images.large" class='maoboli' v-if='book.images'>
      <div class='m_imgbox'  v-if='book.images' ><img :src='book.images.large' /></div>
    </section>
    <section class='m_info'>
      <h2>{{book.title}}</h2>
      <ul class='label_ul'>
        <li><label>评分</label>
          <span v-if="book.rating && book.rating.stars == '00'" class='gray'>暂无评分</span>
          <div class='start-box' v-if="book.rating && book.rating.stars != '00'">
            <div class='start-value' v-if="book.rating" :style="{ width: ((book.rating.average * 10) / 100 )*100 + '%' }"></div>
          </div>
          <span v-if="book.rating">{{ book.rating.average }}</span>
          <!-- <span v-if="book.rating">{{ book.rating.numRaters }}人</span> -->
        </li>
        <li><label>作者</label>
        <span v-for="name in book.author">{{ name }} / </span>
        </li>
        <li><label>出版社</label>{{ book.publisher }}</li>
        <li><label>出版时间</label>{{ book.pubdate }}</li>
      </ul>
    </section>
    <section class='m_synopsis'>
      <div class='sec_title'>简介</div>
      <div id="open_text1">
        {{ book.summary }}
      </div>
    </section>
    <section class='m_synopsis'>
      <div class='sec_title'>作者简介</div>
      <div id="open_text">
        {{ book.author_intro }}
      </div>
    </section>
    <section class='m_synopsis'>
      <div class='sec_title'>目录</div>
      <div id="open_text3">
        {{ book.catalog }}
      </div>
    </section>
  </div>
</template>

<script>
  import { myFn } from '../assets/js/util.js'
  export default {
    data () {
      return {
        'book': {},
        'id': this.$route.params.id
      }
    },
    mounted () {
      this.$http.get('/v2/book/' + this._data.id, { // 获取全部数据
        params: {
        }
      }).then(function (response) {
        this._data.book = response.data
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    updated () {
      // var textObj = document.getElementById('open_text')
      // this.openText(textObj)
    },
    methods: {
      gotoList (id) {
        alert(id)
      },
      openText (obj) {
        var txtstr = obj.innerHTML
        var objH = myFn.getObjStyle(obj, null).height
        objH = Number(objH.split('p')[0])
        console.log(txtstr)
        console.log(objH)
        if (objH > 63) {
          obj.innerHTML = txtstr.substr(0, 70) + '...<span >[展开]</span>'
        }
      }
    }
  }
</script>
