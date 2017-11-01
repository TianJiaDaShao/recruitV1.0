const state = {
    tabIndex: 0,
    userStatus: 0,
    isShow: '',
    userHead: '',
    userId: '',
    country: '西班牙',
    countriesId: 1,
    url: 'https://pc.hboss.com/',
    // url: 'http://test.13701918.com/'
    //记得改publish.vue,company.vue和commonUtils
}

const mutations = {
    CHANGEINDEX(state,curIndex){
      state.tabIndex = curIndex;
    }
}

export default new Vuex.Store({
  state,
  mutations
})
