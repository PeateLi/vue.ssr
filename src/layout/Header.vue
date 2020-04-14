/*
 * @Author:李平勇
 * @Date: 2020-02-25 14:48:52 
 * @desc:除主页头部其他页面头部
 */
<template>
  <section>
    <article>
          <p class="logo">UTEML</p>
          <p class="search-bottom">
            <!-- <input
              placeholder="Search by keywords, technical specifications, or part number"
              v-model="search"
            /> -->
          </p>
    </article>
          <nav class="nav-list" :style="{height:isShowNav+'px'}">
            <ul>
              <li>Categories</li>
              <li>BOM Tool</li>
              <li>About Octopart</li>
              <li>FAQ</li>
              <li></li>
            </ul>
          </nav>
    
  </section>
</template>
<script>
export default {
//   asyncData:,
  data() {
    return {
      search: "",
      isShowNav: 0
    };
  },
  methods: {
    ShowNav() {
      let height = document.querySelectorAll(".nav-list ul li")[0].offsetHeight; //获取li的高度
      let num = document.querySelectorAll(".nav-list ul li").length; //获取有多少个li
      if (this.isShowNav == 0) {
        this.isShowNav = height * num; //适应ul的高度  往后添加li的话不用调整高度 会自动获取所有li的高度相加适应
      } else {
        this.isShowNav = 0;
      }
    }
  },
  mounted() {
      // 因为服务端渲染只有 beforeCreate 和 created 两个生命周期，不会走这里
      // 所以把调用 Ajax 初始化数据也写在这里，是为了供单独浏览器渲染使用
    },

};
</script>



<style lang="sass" scoped>
@import '../../scss/header.scss'
</style>

