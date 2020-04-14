import api from '../../api'

const state = {
  articleDesc: {}
}

const getters = {
  getArticleDesc: state => state.articleDesc
}

const mutations = {
  ARTICLE_DESC: (state, theme) => {
    state.articleDesc = theme
  }
}

const actions = {
  getArticleDesc({ state, commit }, id) {
    return api.get('http://192.168.123.189:8081/Utmel/Scheduler/GetSchedule?page=1&limit=10').then((response) => {
      commit('ARTICLE_DESC', response.data.resultList)
      // }
    }).catch((error) => {
      console.log(error)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}