<template>
    <section>
    <article>
         <img src="../../../images/logo.png" alt="">
        <p>
            <input
            placeholder="Search by keywords, technical specifications, or part number"
            />
        </p>
    </article>
      <nav>
        <ul>
          <li v-for="item in search" :key="item.jobName">
            <ul class="list_mfg">
              <li>{{item.ip}}</li>
              <li>{{item.jobName}}</li>
              <li>{{item.jobGroup}}</li>
              <li>{{item.triggerName}}</li>
              <li>{{item.fireTimeAfter}}</li>
            </ul>
          </li>
        </ul>
      </nav>
    </section>
</template>

<script>
import axios from "axios";
import api from "../../api";
import { mapGetters } from "vuex";
export default {
  asyncData({ store, route }) {
    return store.dispatch("getArticleDesc");
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      search: "getArticleDesc"
    })
  },

  methods: {}
};
</script>


<style scoped>
article{
    text-align: center;
    margin-top: 50px;
}
input{
    min-width:500px;
      margin:0 auto;
      margin-top: 2%;
      height: 38px;
       border-radius: 0px;
       border: 1px solid #000;
       padding-left: 10px;
       background: url('../../../images/search.png') right center no-repeat;
       outline:none;
}
ul {
  padding-left: 0px;
}
nav ul li {
  list-style: none;
  height: 50px;
  border-right: 1px solid #ccc;
}
nav ul li:nth-child(1) {
  border-top: 1px solid #ccc;
}
.list_mfg {
  display: flex;
  justify-content: space-around;
  margin: 0px;
}
.list_mfg li {
  padding: 0px 10px;
  text-align: center;
  width: 20%;
  line-height: 50px;
}
.list_mfg li:nth-child(even) {
  border: 1px solid #ccc;
  border-right: 0px;
  border-top: 0px;
}
.list_mfg li:nth-child(odd) {
  border: 1px solid #ccc;
  border-right: 0px;
  border-top: 0px;
}
</style>


