<template>
<div>
  <div class="toolbar">
    <ul>
      <li><router-link to='/'><i class="icon read_icon"></i>阅读</router-link></li>
      <li><router-link to='/moviepage'><i class="icon movie_icon"></i>电影</router-link></li>
    </ul>
  </div>
  <div class="toolbar-div"></div>
</div>
</template>

<script>
  export default{
    data () {
      return {
      }
    }
  }
</script>
