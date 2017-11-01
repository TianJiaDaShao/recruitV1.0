/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
	var _route = __webpack_require__(6);
	
	var _route2 = _interopRequireDefault(_route);
	
	var _store = __webpack_require__(54);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_commonUtils2.default.initwx();
	//引入路由js文件
	
	
	var router = new VueRouter();
	
	var App = Vue.extend({
	  store: _store2.default
	});
	Vue.config.devtools = true;
	
	router.map(_route2.default);
	
	router.start(App, 'body');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var commonUtil = {
	  waitLoading: function waitLoading() {
	    $('body').append('<div id="bg"><img src="/images/icons/loading.gif"></div>');
	  },
	  endLoading: function endLoading() {
	    $('#bg').remove();
	  },
	  initwx: function initwx() {
	    var url = window.location.href.split('#')[0];
	    $.ajax({
	      url: 'https://pc.hboss.com/weixin/config/jsConfig',
	      async: false,
	      data: {
	        url: url
	      },
	      success: function success(res) {
	        var data = res.data;
	        wx.config({
	          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	          appId: data.appId, // 必填，公众号的唯一标识
	          timestamp: data.timestamp, // 必填，生成签名的时间戳
	          nonceStr: data.nonceStr, // 必填，生成签名的随机串
	          signature: data.signature, // 必填，签名，见附录1
	          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	        });
	        wx.error(function (res) {
	          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
	          history.go(0);
	        });
	      }
	    });
	  },
	  jobListwx: function jobListwx() {
	    wx.ready(function () {
	      // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
	      wx.onMenuShareTimeline({
	        title: '招聘求职找工作', // 分享标题
	        link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	        imgUrl: 'http://ofot6413t.bkt.clouddn.com/3f04c2bf513091dc34ee46f01e8eee43.jpg', // 分享图标
	        success: function success() {
	          // 用户确认分享后执行的回调函数
	        },
	        cancel: function cancel() {
	          // 用户取消分享后执行的回调函数
	        }
	      });
	      wx.onMenuShareAppMessage({
	        title: '招聘求职找工作', // 分享标题
	        desc: '', // 分享描述
	        link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	        imgUrl: 'http://ofot6413t.bkt.clouddn.com/3f04c2bf513091dc34ee46f01e8eee43.jpg', // 分享图标
	        type: '', // 分享类型,music、video或link，不填默认为link
	        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	        success: function success() {
	          // 用户确认分享后执行的回调函数
	        },
	        cancel: function cancel() {
	          // 用户取消分享后执行的回调函数
	        }
	      });
	    });
	  }
	};
	
	exports.default = commonUtil;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jobList = __webpack_require__(7);
	
	var _jobList2 = _interopRequireDefault(_jobList);
	
	var _search = __webpack_require__(39);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _publish = __webpack_require__(42);
	
	var _publish2 = _interopRequireDefault(_publish);
	
	var _details = __webpack_require__(45);
	
	var _details2 = _interopRequireDefault(_details);
	
	var _wode = __webpack_require__(48);
	
	var _wode2 = _interopRequireDefault(_wode);
	
	var _company = __webpack_require__(51);
	
	var _company2 = _interopRequireDefault(_company);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//首页
	exports.default = {
	  '/': {
	    name: '/',
	    component: _jobList2.default,
	    subRoutes: {
	      '/': {
	        component: _jobList2.default
	      },
	      '/jobList': {
	        name: "jobList",
	        component: _jobList2.default
	      }
	    }
	  },
	  '/search/:type': {
	    name: "search",
	    component: _search2.default
	  },
	  '/publish/:type/:id': {
	    name: "publish",
	    component: _publish2.default
	  },
	  '/details/:jobId/:type': {
	    name: "details",
	    component: _details2.default
	  },
	  '/wode': {
	    name: "wode",
	    component: _wode2.default
	  },
	  '/company': {
	    name: 'company',
	    component: _company2.default
	  }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(8)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\scripts\\components\\jobList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-03f52ac1/jobList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // <template id="jobList">
	//   <div class="homeback homebackTop" @click="homeback"></div>
	//   <ul class="listTop" v-show="listTop">
	//     <li class="parentLi" v-on:click="showChildUl(0)" id="newReruit">{{dflushData}}<div><ul v-show="newReruit" class="childUl"><li class="childLi" v-on:click="flushData(0)">最新发布</li><li class="childLi" v-on:click="flushData(1)">最高工资</li><li class="childLi" v-on:click="flushData(2)">企业招聘专区</li></ul></div></li>
	//     <li class="parentLi" v-on:click="showChildUl(1)" id="city">{{city}}<div class="cityIscroll"><ul v-show="cityUlShow" class="childUl"><li class="childLi" v-for="item in cityArr_list" v-on:click="flushNewData(item, 1)">{{item.name}}</li></ul></div></li>
	//     <li class="parentLi" v-on:click="showChildUl(2)">{{leibie}}<div><ul v-show="jobKindsShow" class="childUl"><li class="childLi" v-for="item in jobKindsArr_list" v-on:click="flushNewData(item, 2)">{{item.code}}</li></ul></div></li>
	//     <li class="parentLi" v-on:click="showChildUl(3)">{{quanzhi}}<div><ul v-show="quanZhiUlShow" class="childUl"><li class="childLi" v-for="item in quanZhiArr_list" v-on:click="flushNewData(item, 3)">{{item.code}}</li></ul></div></li>
	//   </ul>
	// <section id="index-scroll" v-el:indexscroll>
	//   <ul>
	//     <div class="search">
	//       <div class="select_box">
	//         <span id="select_country">{{selectedCountry}}</span>
	//       </div>
	//       <span v-on:click="tabClick('search', 1)" class="serch_span">搜索好工作 / 公司</span>
	//       <div class="_zhan"></div>
	//     </div>
	//     <div id="jobListSwiper" class="swiper-container">
	//       <div class="swiper-wrapper">
	//         <div class="swiper-slide"><img src="/images/icons/banner.jpg" alt=""></div>
	//         <!-- <div class="swiper-slide"></div>
	//         <div class="swiper-slide"></div> -->
	//       </div>
	//     </div>
	//
	//     <section class="searchCountry">
	//        <div class="fourTab" v-for="(index,item) in tabsList" >
	//          <img :src="item.img" />
	//          <text>{{item.text}}</text>
	//        </div>
	//     </section>
	//     <div v-show="isShow" class="jumpBox">
	//       <div class="leftBox">
	//         <span class="leftBox_top" v-on:click="flushData(0)">
	//           最新发布
	//         </span>
	//         <span class="leftBox_bottom" v-on:click="flushData(1)">
	//           最高工资
	//         </span>
	//       </div>
	//       <div class="rightBox" v-on:click="flushData(2)">
	//       </div>
	//     </div>
	//     <span class="downPull">
	//
	//     </span>
	//     <li class="content" v-for="(index, item) in details" v-on:click="showDetails(index, $event)">
	//       <div class="sussecc" v-show="item.dataSource.status != 0"></div>
	//       <div class="contentBox1">
	//         <div class="titleBox">
	//           <div class="companyName">{{item.title}}</div>
	//           <div class="money" v-if="!item.dataSource.someoneTypeName">{{item.money}}</div>
	//           <div class="money" v-if="item.dataSource.someoneTypeName">找活挣钱</div>
	//         </div>
	//         <div class="requireBox">
	//           <div class="spanArr">
	//             <span v-for="i in item.spanArr">{{i}}</span>
	//           </div>
	//           <div class="timeBox">
	//             {{item.createDate}}
	//           </div>
	//         </div>
	//         <div class="details" v-show="item.isShowDetails">
	//           {{item.dataSource.details}}
	//         </div>
	//         <div class="suoxie" v-if="item.companyName">
	//           <img :src="item.dataSource.companyLogo" alt="">
	//           <div class="suoxie_text">
	//             <p class='suoxieName'>{{item.companyName}}</p>
	//            <p class='suo_Info'>{{item.companyInfo}}</p>
	//           </div>
	//         </div>
	//         <div v-show="item.isShowDetails" class="hideBox">
	//           <img class="picBox" v-bind:src="item.companyPic">
	//
	//           </img>
	//           <a :href="changePhone(item.dataSource.tel)" class="callPhone">
	//             一 键 拨 打
	//           </a>
	//           <div class="shareBox">
	//             <div v-show="item.dataSource.cId != null" v-if="!dingState" class="like" @click="unlike($event,item)"></div>
	//             <div v-show="item.dataSource.cId == null" v-if="!dingState" class="unlike" @click="like($event,item)"></div>
	//             <div v-show="dingState" class="ding" @click="ding($event,item)">顶</div>
	//             <div v-show="dingState" class="ding" @click="zhaodao($event,item)"><div v-show="item.dataSource.status == 0">关闭</div><div v-show="item.dataSource.status != 0">开启</div></div>
	//             <div v-show="dingState" class="ding" @click="edit(item)">编辑</div>
	//             <div class="shareWx" v-on:click='jumpDetails(item)'>
	//               分享给朋友
	//             </div>
	//           </div>
	//         </div>
	//       </div>
	//     </li>
	//   </ul>
	// </section>
	// </template>
	// <script>
	
	
	var _axios = __webpack_require__(9);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _swiper = __webpack_require__(35);
	
	var _swiper2 = _interopRequireDefault(_swiper);
	
	var _betterScroll = __webpack_require__(36);
	
	var _betterScroll2 = _interopRequireDefault(_betterScroll);
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
	var _actions = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mySwiper = null;
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    }
	  },
	  data: function data() {
	    return {
	      curIndex: 0,
	      cityUlShow: false,
	      newReruit: false,
	      jobKindsShow: false,
	      quanZhiUlShow: false,
	      inputShowed: false,
	      message: '',
	      isShow: true,
	      showState: false,
	      countriesId: this.$store.state.countriesId,
	      scroll: '',
	      details: '',
	      listTop: false,
	      dingState: false,
	      url: '',
	      link: '',
	      dflushData: '最新发布',
	      city: '城市',
	      leibie: '类别',
	      quanzhi: '全职',
	      cityArr_list: [],
	      quanZhiArr_list: [],
	      jobKindsArr_list: [],
	      title: '招聘列表',
	      countryList: [{
	        value: '西班牙',
	        id: '1'
	      }, {
	        value: '葡萄牙',
	        id: '2'
	      }, {
	        value: '法国',
	        id: '3'
	      }, {
	        value: '意大利',
	        id: '4'
	      }, {
	        value: '英国',
	        id: '5'
	      }], //可选择国家列表
	      selectedCountry: this.$store.state.country,
	      tabsList: [{
	        'img': '/images/tabs/find_bg.png',
	        'text': '找工作'
	      }, {
	        'img': '/images/tabs/fa_bg.png',
	        'text': '发招聘'
	      }, {
	        'img': '/images/tabs/thing_bg.png',
	        'text': '找人办事'
	      }, {
	        'img': '/images/tabs/add_bg.png',
	        'text': '我的发布'
	      }]
	    };
	  },
	
	  ready: function ready() {
	    _commonUtils2.default.jobListwx();
	    _axios2.default.defaults.baseURL = this.$store.state.url;
	    if (localStorage._hbossUserId != undefined) {
	      this.$store.state.userId = localStorage._hbossUserId;
	    }
	    this.selectedCountry = this.$store.state.country;
	    this.countriesId = this.$store.state.countriesId;
	    var that = this;
	    that.choiceCountry();
	    that.getUlContent();
	    //获取地址栏信息
	    if (typeof window.listData != 'undefined') {
	      that.isShow = false;
	      that.initData(window.listData);
	      Vue.nextTick(function () {
	        that.indexscroll = new _betterScroll2.default(that.$els.indexscroll, {
	          click: true
	        });
	      });
	    } else {
	      that.isShow = true;
	      that.url = 'job/index/searchJobIndex';
	      that.loading();
	    }
	
	    //是否是我的发布页
	    if (window.myPublish != '' && typeof window.myPublish != 'undefined' && window.myPublish == 1) {
	      this.dingState = true;
	    } else {
	      this.dingState = false;
	    }
	
	    $(document).on('click', function () {
	      that.showState = false;
	      $('.select_box').find('span').css({
	        'background': "#6E3FFF url('/images/icons/sanjiao_bottom.png') no-repeat 54px center",
	        'background-size': '12px 7px'
	      });
	    });
	    $('.fourTab').on('click', function () {
	      if ($(this).index() == 0) {
	        that.tabClick('search', 1);
	      } else if ($(this).index() == 1) {
	        that.tabClick('publish', 1);
	      } else if ($(this).index() == 2) {
	        that.tabClick('search', 2);
	      } else if ($(this).index() == 3) {
	        that.$router.go({
	          name: 'wode'
	        });
	      }
	    });
	
	    function getUrl() {
	      var name, value;
	      var str = location.href; //取得整个地址栏
	      var num = str.indexOf("?");
	      str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
	      var arr = str.split("&"); //各个参数放到数组里
	      for (var i = 0; i < arr.length; i++) {
	        num = arr[i].indexOf("=");
	        if (num > 0) {
	          name = arr[i].substring(0, num);
	          value = arr[i].substr(num + 1);
	          this[name] = value;
	        }
	      }
	    }
	  },
	  destroyed: function destroyed() {
	    window.myPublish = 0;
	  },
	  watch: {
	    // 如果路由有变化，会再次执行该方法
	    '$route': 'loading'
	  },
	  methods: {
	    //刷新首页
	    homeback: function homeback() {
	      this.url = 'job/index/searchJobIndex';
	      this.loading();
	      this.isShow = true;
	      this.dingState = false;
	    },
	    //编辑
	    edit: function edit(item) {
	      var type;
	      if (!item.dataSource.someoneTypeName) {
	        type = 1;
	      } else {
	        type = 2;
	      }
	      this.$router.go({
	        name: "publish",
	        params: {
	          type: type,
	          id: item.id
	        }
	      });
	    },
	    //招到人
	    zhaodao: function zhaodao(e, item) {
	      e.stopPropagation();
	      var that = this;
	      var type;
	      if (!item.dataSource.someoneTypeName) {
	        type = "job";
	      } else {
	        type = "someone";
	      }
	      if (item.dataSource.status != 1) {
	        _axios2.default.get("job/user/infoOver", {
	          params: {
	            "type": type,
	            "id": item.id,
	            "status": 1
	          }
	        }).then(function (res) {
	          console.log(res);
	          item.dataSource.status = 1;
	        });
	      } else {
	        _axios2.default.get("job/user/infoOver", {
	          params: {
	            "type": type,
	            "id": item.id,
	            "status": 0
	          }
	        }).then(function (res) {
	          console.log(res);
	          item.dataSource.status = 0;
	        });
	      }
	    },
	    //顶
	    ding: function ding(e, item) {
	      e.stopPropagation();
	      var that = this;
	      var type;
	      if (!item.dataSource.someoneTypeName) {
	        type = "job";
	      } else {
	        type = "someone";
	      }
	      _axios2.default.get("job/user/infoRefresh", {
	        params: {
	          "userId": that.$store.state.userId,
	          "userName": item.dataSource.userName,
	          "title": item.title,
	          "type": type,
	          "id": item.id
	        }
	      }).then(function (res) {
	        console.log(res);
	        that.homeback();
	      });
	    },
	    //收藏
	    like: function functionName(e, item) {
	      e.stopPropagation();
	      var _this = this;
	      var that = this;
	      var type;
	      if (!item.dataSource.someoneTypeName) {
	        type = 1;
	      } else {
	        type = 2;
	      }
	      if (_this.$store.state.userId == '') {
	        if (window.location.href.split('?userId=')[1] == undefined) {
	          _axios2.default.get('weixin/config/oauth', {
	            params: {
	              "state": window.location.href + "?userId=okid"
	            }
	          }).then(function (res) {
	            window.location.href = res.data.data;
	          }).catch(function (err) {
	            console.log(err);
	          });
	        } else {
	          _this.$store.state.userId = window.location.href.split('?userId=')[1];
	          localStorage._hbossUserId = window.location.href.split('?userId=')[1];
	          _axios2.default.get("job/user/saveCollection", {
	            params: {
	              "userId": that.$store.state.userId,
	              "status": 1,
	              "title": item.title,
	              "type": type,
	              "jobId": item.id
	            }
	          }).then(function (res) {
	            item.dataSource.cId = '';
	          });
	        }
	      } else {
	        _axios2.default.get("job/user/saveCollection", {
	          params: {
	            "userId": that.$store.state.userId,
	            "status": 1,
	            "title": item.title,
	            "type": type,
	            "jobId": item.id
	          }
	        }).then(function (res) {
	          console.log(res);
	          item.dataSource.cId = '';
	        });
	      }
	    },
	    unlike: function unlike(e, item) {
	      e.stopPropagation();
	      var _this = this;
	      var that = this;
	      var type;
	      if (!item.dataSource.someoneTypeName) {
	        type = 1;
	      } else {
	        type = 2;
	      }
	      if (_this.$store.state.userId == '') {
	        if (window.location.href.split('?userId=')[1] == undefined) {
	          _axios2.default.get('weixin/config/oauth', {
	            params: {
	              "state": window.location.href + "?userId=okid"
	            }
	          }).then(function (res) {
	            window.location.href = res.data.data;
	          }).catch(function (err) {
	            console.log(err);
	          });
	        } else {
	          _this.$store.state.userId = window.location.href.split('?userId=')[1];
	          localStorage._hbossUserId = window.location.href.split('?userId=')[1];
	          _axios2.default.get("job/user/saveCollection", {
	            params: {
	              "userId": that.$store.state.userId,
	              "status": 0,
	              "title": item.title,
	              "type": type,
	              "jobId": item.id
	            }
	          }).then(function (res) {
	            console.log(res);
	            item.dataSource.cId = null;
	          });
	        }
	      } else {
	        _axios2.default.get("job/user/saveCollection", {
	          params: {
	            "userId": that.$store.state.userId,
	            "status": 0,
	            "title": item.title,
	            "type": type,
	            "jobId": item.id
	          }
	        }).then(function (res) {
	          console.log(res);
	          item.dataSource.cId = null;
	        });
	      }
	    },
	    //获取列表
	    getUlContent: function getUlContent() {
	      var that = this;
	      _axios2.default.get("job/info/jobInfoConfig", {
	        params: {
	          'countriesId': that.countriesId
	        }
	      }).then(function (res) {
	        if (res.status == 200) {
	          var data = res.data.data;
	          that.cityArr_list = [];
	          that.jobKindsArr_list = [];
	          that.quanZhiArr_list = [];
	          that.cityArr_list = data.cityList;
	          that.jobKindsArr_list = data.jobType;
	          that.quanZhiArr_list = data.jobNature;
	        }
	      });
	    },
	    //增加图片
	    addPic: function addPic(src) {
	      console.log(src);
	      return 'background:' + src;
	    },
	    //item表示当前数据,type表示类型
	    flushNewData: function flushNewData(item, type) {
	      var _this = this;
	      var jobTypeJson = '',
	          cityIdJson = '',
	          jobNatureJson = '';
	      switch (type) {
	        case 1:
	          _this.city = item.name;
	          cityIdJson = item.id;
	          break;
	        case 2:
	          _this.leibie = item.code;
	          jobTypeJson = item.code;
	          break;
	        case 3:
	          _this.quanzhi = item.code;
	          jobNatureJson = item.code;
	          break;
	        default:
	          console.log('flushNewData bug!');
	      }
	      var param = {
	        'userId': _this.$store.state.userId,
	        'countriesId': _this.countriesId,
	        'cityId': cityIdJson,
	        'jobType': jobTypeJson,
	        'title': '',
	        'jobNature': jobNatureJson,
	        'type': '',
	        'pageNumber': 1,
	        'pageSize': 9999
	      };
	      _commonUtils2.default.waitLoading();
	      _axios2.default.get('job/info/searchJobInfo', {
	        params: param
	      }).then(function (res) {
	        if (res.status == 200) {
	          _this.initData(res.data.data);
	          Vue.nextTick(function () {
	            _this.indexscroll.refresh();
	            _commonUtils2.default.endLoading();
	          });
	        }
	      });
	    },
	    showChildUl: function showChildUl(type) {
	      $('.goDown').remove();
	      switch (type) {
	        case 0:
	          this.newReruit = !this.newReruit;
	          this.cityUlShow = false;
	          this.jobKindsShow = false;
	          this.quanZhiUlShow = false;
	          break;
	        case 1:
	          this.cityUlShow = !this.cityUlShow;
	          this.newReruit = false;
	          this.jobKindsShow = false;
	          this.quanZhiUlShow = false;
	          break;
	        case 2:
	          this.jobKindsShow = !this.jobKindsShow;
	          this.newReruit = false;
	          this.cityUlShow = false;
	          this.quanZhiUlShow = false;
	          break;
	        default:
	          this.quanZhiUlShow = !this.quanZhiUlShow;
	          this.newReruit = false;
	          this.cityUlShow = false;
	          this.jobKindsShow = false;
	      }
	      setTimeout(function () {
	        if ($('.parentLi:eq(' + type + ') .childUl')[0].clientHeight < $('.parentLi:eq(' + type + ') .childUl')[0].scrollHeight) {
	          $('.parentLi:eq(' + type + ')').append('<div class="goDown"><div></div></div>');
	        }
	      }, 0);
	    },
	    changePhone: function changePhone(phoneNum) {
	      if (typeof phoneNum != 'undefined') {
	        return 'tel:' + phoneNum;
	      } else {
	        return '';
	      }
	    },
	
	    flushData: function flushData(type) {
	      var _this = this;
	      var postType = '';
	      switch (type) {
	        case 0:
	          postType = '';
	          _this.dflushData = "最新发布";
	          break;
	        case 1:
	          _this.dflushData = "最高工资";
	          postType = type;
	          break;
	        case 2:
	          _this.dflushData = "最高工资";
	          postType = type;
	          break;
	        default:
	          console.log('flushData bug!');
	      }
	      _this.url = 'job/info/searchJobInfo';
	      var param = {
	        'userId': _this.$store.state.userId,
	        'countriesId': _this.countriesId,
	        'cityId': '',
	        'jobType': '',
	        'title': '',
	        'jobNature': '',
	        'type': postType,
	        'pageNumber': 1,
	        'pageSize': 9999
	      };
	      _commonUtils2.default.waitLoading();
	      _axios2.default.get(_this.url, {
	        params: param
	      }).then(function (res) {
	        if (res.status == 200) {
	          console.log(res.data.data);
	          _this.initData(res.data.data);
	          Vue.nextTick(function () {
	            _this.indexscroll.refresh();
	          });
	          _commonUtils2.default.endLoading();
	        }
	      });
	    },
	    //跳转详情
	    jumpDetails: function jumpDetails(item) {
	      this.$store.state.isShow = 1;
	      if (item.dataSource.someoneTypeName) {
	        this.$router.go({
	          name: 'details',
	          params: {
	            jobId: item.id,
	            type: 2,
	            isShow: 1
	          }
	        });
	      } else {
	        this.$router.go({
	          name: 'details',
	          params: {
	            jobId: item.id,
	            type: 1,
	            isShow: 1
	          }
	        });
	      }
	    },
	    showDetails: function showDetails(num, event) {
	      console.log('show');
	      var targetClass = event.target.getAttribute('class');
	      var that = this;
	      if (targetClass != 'callPhone') {
	        if (this.details[num].isShowDetails == false) {
	          this.details[num].isShowDetails = true;
	        } else {
	          this.details[num].isShowDetails = false;
	        }
	        Vue.nextTick(function () {
	          that.indexscroll.refresh();
	        });
	      }
	    },
	    initData: function initData(initdata) {
	      var data;
	      if (typeof initdata.list != "undefined") {
	        data = initdata.list;
	      } else {
	        data = initdata;
	      }
	      var currentArr = [];
	      var that = this;
	      this.details = '';
	
	      if (data.length > 0) {
	        data.forEach(function (item) {
	          var objList = {
	            'jobName': '',
	            'money': '',
	            'id': '',
	            'isShowDetails': false,
	            'spanArr': '',
	            'companyName': '',
	            'companyInfo': '',
	            'companyPic': '',
	            'createDate': '',
	            'dataSource': item,
	            'title': ''
	          };
	          var spanArr = [];
	          for (var x in item) {
	
	            if (x == 'title') {
	              objList.title = item[x];
	            } else if (x == 'id') {
	              objList.id = item[x];
	            } else if (x == 'createDate') {
	              if (_typeof(item[x]) != "object") {
	                objList.createDate = item[x].split(' ')[0];
	              }
	            } else if (x == 'jobTypeName') {
	              spanArr[1] = item[x];
	            } else if (x == 'jobSalaryName') {
	              objList.money = item[x];
	            } else if (x == 'jobNatureName' || x == 'jobRequirementsName') {
	              spanArr.push(item[x]);
	            } else if (x == 'countriesName') {
	              // spanArr.push(item[x]);
	
	            } else if (x == 'cityName') {
	              spanArr[0] = item[x];
	            } else if (x == 'jobWelfareName') {
	              if (_typeof(item[x]) != "object") {
	                var arrone = item[x].split('&amp;');
	                if (arrone.length > 1) {
	                  for (var y = 0; y < arrone.length; y++) {
	                    spanArr.push(arrone[y]);
	                  }
	                } else {
	                  spanArr.push(item[x]);
	                }
	              }
	            } else if (x == 'companyName') {
	              objList.companyName = item[x];
	            } else if (x == 'companyPublicity') {
	              objList.companyPic = item[x];
	            } else if (x == 'companyInfo') {
	              objList.companyInfo = item[x];
	            }
	          }
	          objList.spanArr = spanArr;
	          currentArr.push(objList);
	        });
	        this.details = currentArr;
	      }
	    },
	    /**
	     *跳转到搜索页面
	     *@param(type)     传入的种类，在search中会有判断并改变布局。（1：搜索1页面，2:搜索2页面）
	     *@param(name)     传入的路由地址
	     **/
	    tabClick: function tabClick(name, num) {
	      this.$router.go({
	        name: name,
	        params: {
	          type: num,
	          id: null
	        }
	      });
	    },
	    //点击展示下拉列表并改变样式
	    showUl: function showUl() {
	      console.log("show");
	      if (this.showState) {
	        this.showState = false;
	        $('.select_box').find('span').css({
	          'background': "#6E3FFF url('/images/icons/sanjiao_bottom.png') no-repeat 54px center",
	          'background-size': '12px 7px'
	        });
	      } else {
	        this.showState = true;
	        $('.select_box').find('span').css({
	          'background': "#6E3FFF url('/images/icons/sanjiao_top.png') no-repeat 54px center",
	          'background-size': '12px 7px'
	        });
	      }
	    },
	    loading: function loading() {
	      var that = this;
	      $('.weui_toast_content').text("数据加载中");
	      _commonUtils2.default.waitLoading();
	      var param = {
	        'userId': that.$store.state.userId,
	        'countriesId': that.countriesId
	      };
	      _axios2.default.get(that.url, {
	        params: param
	      }).then(function (res) {
	        var data = res.data.data;
	        that.initData(data);
	        Vue.nextTick(function () {
	          that.indexscroll = new _betterScroll2.default(that.$els.indexscroll, {
	            click: true
	          });
	        });
	        _commonUtils2.default.endLoading();
	      });
	    },
	    choiceCountry: function choiceCountry() {
	      var that = this;
	      var Spain = new MobileSelect({
	        trigger: '#select_country',
	        title: that.$store.state.country,
	        wheels: [{
	          data: that.countryList
	        }],
	        transitionEnd: function transitionEnd(indexArr, data) {
	          that.countriesId = data[0].id;
	        },
	        callback: function callback(indexArr, data) {
	          that.countriesId = data[0].id;
	          that.$store.state.countriesId = data[0].id, that.selectedCountry = data[0].value;
	          that.$store.state.country = data[0].value;
	          that.getUlContent();
	          that.loading();
	        }
	      });
	    }
	  }
	  // </script>
	
	  /* generated by vue-loader */
	
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(10);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(11);
	var bind = __webpack_require__(12);
	var Axios = __webpack_require__(13);
	var defaults = __webpack_require__(14);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(32);
	axios.CancelToken = __webpack_require__(33);
	axios.isCancel = __webpack_require__(29);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(34);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var bind = __webpack_require__(12);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return typeof FormData !== 'undefined' && val instanceof FormData;
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function';
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge() /* obj1, obj2, obj3, ... */{
	  var result = {};
	  function assignValue(val, key) {
	    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(14);
	var utils = __webpack_require__(11);
	var InterceptorManager = __webpack_require__(26);
	var dispatchRequest = __webpack_require__(27);
	var isAbsoluteURL = __webpack_require__(30);
	var combineURLs = __webpack_require__(31);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function (url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function (url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(11);
	var normalizeHeaderName = __webpack_require__(16);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(17);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(17);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) {/* Ignore */}
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) {
	    return [];
	};
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(11);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(11);
	var settle = __webpack_require__(18);
	var buildURL = __webpack_require__(21);
	var parseHeaders = __webpack_require__(22);
	var isURLSameOrigin = __webpack_require__(23);
	var createError = __webpack_require__(19);
	var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(24);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || request.readyState !== 4 && !xDomain) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(25);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(19);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError('Request failed with status code ' + response.status, response.config, null, response));
	  }
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(20);
	
	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(11);
	
	function encode(val) {
	  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(11);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) {
	    return parsed;
	  }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(11);
	
	module.exports = utils.isStandardBrowserEnv() ?
	
	// Standard browser envs have full support of the APIs needed to test
	// whether the request URL is of the same origin as current location.
	function standardBrowserEnv() {
	  var msie = /(msie|trident)/i.test(navigator.userAgent);
	  var urlParsingNode = document.createElement('a');
	  var originURL;
	
	  /**
	  * Parse a URL to discover it's components
	  *
	  * @param {String} url The URL to be parsed
	  * @returns {Object}
	  */
	  function resolveURL(url) {
	    var href = url;
	
	    if (msie) {
	      // IE needs attribute set twice to normalize properties
	      urlParsingNode.setAttribute('href', href);
	      href = urlParsingNode.href;
	    }
	
	    urlParsingNode.setAttribute('href', href);
	
	    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	    return {
	      href: urlParsingNode.href,
	      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	      host: urlParsingNode.host,
	      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	      hostname: urlParsingNode.hostname,
	      port: urlParsingNode.port,
	      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
	    };
	  }
	
	  originURL = resolveURL(window.location.href);
	
	  /**
	  * Determine if a URL shares the same origin as the current location
	  *
	  * @param {String} requestURL The URL to test
	  * @returns {boolean} True if URL shares the same origin, otherwise false
	  */
	  return function isURLSameOrigin(requestURL) {
	    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
	    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
	  };
	}() :
	
	// Non standard browser envs (web workers, react-native) lack needed support.
	function nonStandardBrowserEnv() {
	  return function isURLSameOrigin() {
	    return true;
	  };
	}();

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error();
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	  // initialize result and counter
	  var block, charCode, idx = 0, map = chars;
	  // if the next str index does not exist:
	  //   change the mapping table to "="
	  //   check if d has no fractional digits
	  str.charAt(idx | 0) || (map = '=', idx % 1);
	  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(11);
	
	module.exports = utils.isStandardBrowserEnv() ?
	
	// Standard browser envs support document.cookie
	function standardBrowserEnv() {
	  return {
	    write: function write(name, value, expires, path, domain, secure) {
	      var cookie = [];
	      cookie.push(name + '=' + encodeURIComponent(value));
	
	      if (utils.isNumber(expires)) {
	        cookie.push('expires=' + new Date(expires).toGMTString());
	      }
	
	      if (utils.isString(path)) {
	        cookie.push('path=' + path);
	      }
	
	      if (utils.isString(domain)) {
	        cookie.push('domain=' + domain);
	      }
	
	      if (secure === true) {
	        cookie.push('secure');
	      }
	
	      document.cookie = cookie.join('; ');
	    },
	
	    read: function read(name) {
	      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	      return match ? decodeURIComponent(match[3]) : null;
	    },
	
	    remove: function remove(name) {
	      this.write(name, '', Date.now() - 86400000);
	    }
	  };
	}() :
	
	// Non standard browser env (web workers, react-native) lack needed support.
	function nonStandardBrowserEnv() {
	  return {
	    write: function write() {},
	    read: function read() {
	      return null;
	    },
	    remove: function remove() {}
	  };
	}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(11);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(11);
	var transformData = __webpack_require__(28);
	var isCancel = __webpack_require__(29);
	var defaults = __webpack_require__(14);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(config.data, config.headers, config.transformRequest);
	
	  // Flatten headers
	  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
	
	  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
	    delete config.headers[method];
	  });
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(response.data, response.headers, config.transformResponse);
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(11);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
	  );
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(32);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Swiper 3.4.2
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * 
	 * http://www.idangero.us/swiper/
	 * 
	 * Copyright 2017, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 * 
	 * Licensed under MIT
	 * 
	 * Released on: March 10, 2017
	 */
	(function () {
	    'use strict';
	
	    var $;
	
	    /*===========================
	    Swiper
	    ===========================*/
	    var Swiper = function Swiper(container, params) {
	        if (!(this instanceof Swiper)) return new Swiper(container, params);
	
	        var defaults = {
	            direction: 'horizontal',
	            touchEventsTarget: 'container',
	            initialSlide: 0,
	            speed: 300,
	            // autoplay
	            autoplay: false,
	            autoplayDisableOnInteraction: true,
	            autoplayStopOnLast: false,
	            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	            iOSEdgeSwipeDetection: false,
	            iOSEdgeSwipeThreshold: 20,
	            // Free mode
	            freeMode: false,
	            freeModeMomentum: true,
	            freeModeMomentumRatio: 1,
	            freeModeMomentumBounce: true,
	            freeModeMomentumBounceRatio: 1,
	            freeModeMomentumVelocityRatio: 1,
	            freeModeSticky: false,
	            freeModeMinimumVelocity: 0.02,
	            // Autoheight
	            autoHeight: false,
	            // Set wrapper width
	            setWrapperSize: false,
	            // Virtual Translate
	            virtualTranslate: false,
	            // Effects
	            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
	            coverflow: {
	                rotate: 50,
	                stretch: 0,
	                depth: 100,
	                modifier: 1,
	                slideShadows: true
	            },
	            flip: {
	                slideShadows: true,
	                limitRotation: true
	            },
	            cube: {
	                slideShadows: true,
	                shadow: true,
	                shadowOffset: 20,
	                shadowScale: 0.94
	            },
	            fade: {
	                crossFade: false
	            },
	            // Parallax
	            parallax: false,
	            // Zoom
	            zoom: false,
	            zoomMax: 3,
	            zoomMin: 1,
	            zoomToggle: true,
	            // Scrollbar
	            scrollbar: null,
	            scrollbarHide: true,
	            scrollbarDraggable: false,
	            scrollbarSnapOnRelease: false,
	            // Keyboard Mousewheel
	            keyboardControl: false,
	            mousewheelControl: false,
	            mousewheelReleaseOnEdges: false,
	            mousewheelInvert: false,
	            mousewheelForceToAxis: false,
	            mousewheelSensitivity: 1,
	            mousewheelEventsTarged: 'container',
	            // Hash Navigation
	            hashnav: false,
	            hashnavWatchState: false,
	            // History
	            history: false,
	            // Commong Nav State
	            replaceState: false,
	            // Breakpoints
	            breakpoints: undefined,
	            // Slides grid
	            spaceBetween: 0,
	            slidesPerView: 1,
	            slidesPerColumn: 1,
	            slidesPerColumnFill: 'column',
	            slidesPerGroup: 1,
	            centeredSlides: false,
	            slidesOffsetBefore: 0, // in px
	            slidesOffsetAfter: 0, // in px
	            // Round length
	            roundLengths: false,
	            // Touches
	            touchRatio: 1,
	            touchAngle: 45,
	            simulateTouch: true,
	            shortSwipes: true,
	            longSwipes: true,
	            longSwipesRatio: 0.5,
	            longSwipesMs: 300,
	            followFinger: true,
	            onlyExternal: false,
	            threshold: 0,
	            touchMoveStopPropagation: true,
	            touchReleaseOnEdges: false,
	            // Unique Navigation Elements
	            uniqueNavElements: true,
	            // Pagination
	            pagination: null,
	            paginationElement: 'span',
	            paginationClickable: false,
	            paginationHide: false,
	            paginationBulletRender: null,
	            paginationProgressRender: null,
	            paginationFractionRender: null,
	            paginationCustomRender: null,
	            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
	            // Resistance
	            resistance: true,
	            resistanceRatio: 0.85,
	            // Next/prev buttons
	            nextButton: null,
	            prevButton: null,
	            // Progress
	            watchSlidesProgress: false,
	            watchSlidesVisibility: false,
	            // Cursor
	            grabCursor: false,
	            // Clicks
	            preventClicks: true,
	            preventClicksPropagation: true,
	            slideToClickedSlide: false,
	            // Lazy Loading
	            lazyLoading: false,
	            lazyLoadingInPrevNext: false,
	            lazyLoadingInPrevNextAmount: 1,
	            lazyLoadingOnTransitionStart: false,
	            // Images
	            preloadImages: true,
	            updateOnImagesReady: true,
	            // loop
	            loop: false,
	            loopAdditionalSlides: 0,
	            loopedSlides: null,
	            // Control
	            control: undefined,
	            controlInverse: false,
	            controlBy: 'slide', //or 'container'
	            normalizeSlideIndex: true,
	            // Swiping/no swiping
	            allowSwipeToPrev: true,
	            allowSwipeToNext: true,
	            swipeHandler: null, //'.swipe-handler',
	            noSwiping: true,
	            noSwipingClass: 'swiper-no-swiping',
	            // Passive Listeners
	            passiveListeners: true,
	            // NS
	            containerModifierClass: 'swiper-container-', // NEW
	            slideClass: 'swiper-slide',
	            slideActiveClass: 'swiper-slide-active',
	            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
	            slideVisibleClass: 'swiper-slide-visible',
	            slideDuplicateClass: 'swiper-slide-duplicate',
	            slideNextClass: 'swiper-slide-next',
	            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
	            slidePrevClass: 'swiper-slide-prev',
	            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
	            wrapperClass: 'swiper-wrapper',
	            bulletClass: 'swiper-pagination-bullet',
	            bulletActiveClass: 'swiper-pagination-bullet-active',
	            buttonDisabledClass: 'swiper-button-disabled',
	            paginationCurrentClass: 'swiper-pagination-current',
	            paginationTotalClass: 'swiper-pagination-total',
	            paginationHiddenClass: 'swiper-pagination-hidden',
	            paginationProgressbarClass: 'swiper-pagination-progressbar',
	            paginationClickableClass: 'swiper-pagination-clickable', // NEW
	            paginationModifierClass: 'swiper-pagination-', // NEW
	            lazyLoadingClass: 'swiper-lazy',
	            lazyStatusLoadingClass: 'swiper-lazy-loading',
	            lazyStatusLoadedClass: 'swiper-lazy-loaded',
	            lazyPreloaderClass: 'swiper-lazy-preloader',
	            notificationClass: 'swiper-notification',
	            preloaderClass: 'preloader',
	            zoomContainerClass: 'swiper-zoom-container',
	
	            // Observer
	            observer: false,
	            observeParents: false,
	            // Accessibility
	            a11y: false,
	            prevSlideMessage: 'Previous slide',
	            nextSlideMessage: 'Next slide',
	            firstSlideMessage: 'This is the first slide',
	            lastSlideMessage: 'This is the last slide',
	            paginationBulletMessage: 'Go to slide {{index}}',
	            // Callbacks
	            runCallbacksOnInit: true
	            /*
	            Callbacks:
	            onInit: function (swiper)
	            onDestroy: function (swiper)
	            onBeforeResize: function (swiper)
	            onAfterResize: function (swiper)
	            onClick: function (swiper, e)
	            onTap: function (swiper, e)
	            onDoubleTap: function (swiper, e)
	            onSliderMove: function (swiper, e)
	            onSlideChangeStart: function (swiper)
	            onSlideChangeEnd: function (swiper)
	            onTransitionStart: function (swiper)
	            onTransitionEnd: function (swiper)
	            onImagesReady: function (swiper)
	            onProgress: function (swiper, progress)
	            onTouchStart: function (swiper, e)
	            onTouchMove: function (swiper, e)
	            onTouchMoveOpposite: function (swiper, e)
	            onTouchEnd: function (swiper, e)
	            onReachBeginning: function (swiper)
	            onReachEnd: function (swiper)
	            onSetTransition: function (swiper, duration)
	            onSetTranslate: function (swiper, translate)
	            onAutoplayStart: function (swiper)
	            onAutoplayStop: function (swiper),
	            onLazyImageLoad: function (swiper, slide, image)
	            onLazyImageReady: function (swiper, slide, image)
	            onKeyPress: function (swiper, keyCode)
	            */
	
	        };
	        var initialVirtualTranslate = params && params.virtualTranslate;
	
	        params = params || {};
	        var originalParams = {};
	        for (var param in params) {
	            if (_typeof(params[param]) === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || typeof Dom7 !== 'undefined' && params[param] instanceof Dom7 || typeof jQuery !== 'undefined' && params[param] instanceof jQuery)) {
	                originalParams[param] = {};
	                for (var deepParam in params[param]) {
	                    originalParams[param][deepParam] = params[param][deepParam];
	                }
	            } else {
	                originalParams[param] = params[param];
	            }
	        }
	        for (var def in defaults) {
	            if (typeof params[def] === 'undefined') {
	                params[def] = defaults[def];
	            } else if (_typeof(params[def]) === 'object') {
	                for (var deepDef in defaults[def]) {
	                    if (typeof params[def][deepDef] === 'undefined') {
	                        params[def][deepDef] = defaults[def][deepDef];
	                    }
	                }
	            }
	        }
	
	        // Swiper
	        var s = this;
	
	        // Params
	        s.params = params;
	        s.originalParams = originalParams;
	
	        // Classname
	        s.classNames = [];
	        /*=========================
	          Dom Library and plugins
	          ===========================*/
	        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined') {
	            $ = Dom7;
	        }
	        if (typeof $ === 'undefined') {
	            if (typeof Dom7 === 'undefined') {
	                $ = window.Dom7 || window.Zepto || window.jQuery;
	            } else {
	                $ = Dom7;
	            }
	            if (!$) return;
	        }
	        // Export it to Swiper instance
	        s.$ = $;
	
	        /*=========================
	          Breakpoints
	          ===========================*/
	        s.currentBreakpoint = undefined;
	        s.getActiveBreakpoint = function () {
	            //Get breakpoint for window width
	            if (!s.params.breakpoints) return false;
	            var breakpoint = false;
	            var points = [],
	                point;
	            for (point in s.params.breakpoints) {
	                if (s.params.breakpoints.hasOwnProperty(point)) {
	                    points.push(point);
	                }
	            }
	            points.sort(function (a, b) {
	                return parseInt(a, 10) > parseInt(b, 10);
	            });
	            for (var i = 0; i < points.length; i++) {
	                point = points[i];
	                if (point >= window.innerWidth && !breakpoint) {
	                    breakpoint = point;
	                }
	            }
	            return breakpoint || 'max';
	        };
	        s.setBreakpoint = function () {
	            //Set breakpoint for window width and update parameters
	            var breakpoint = s.getActiveBreakpoint();
	            if (breakpoint && s.currentBreakpoint !== breakpoint) {
	                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
	                var needsReLoop = s.params.loop && breakPointsParams.slidesPerView !== s.params.slidesPerView;
	                for (var param in breakPointsParams) {
	                    s.params[param] = breakPointsParams[param];
	                }
	                s.currentBreakpoint = breakpoint;
	                if (needsReLoop && s.destroyLoop) {
	                    s.reLoop(true);
	                }
	            }
	        };
	        // Set breakpoint on load
	        if (s.params.breakpoints) {
	            s.setBreakpoint();
	        }
	
	        /*=========================
	          Preparation - Define Container, Wrapper and Pagination
	          ===========================*/
	        s.container = $(container);
	        if (s.container.length === 0) return;
	        if (s.container.length > 1) {
	            var swipers = [];
	            s.container.each(function () {
	                var container = this;
	                swipers.push(new Swiper(this, params));
	            });
	            return swipers;
	        }
	
	        // Save instance in container HTML Element and in data
	        s.container[0].swiper = s;
	        s.container.data('swiper', s);
	
	        s.classNames.push(s.params.containerModifierClass + s.params.direction);
	
	        if (s.params.freeMode) {
	            s.classNames.push(s.params.containerModifierClass + 'free-mode');
	        }
	        if (!s.support.flexbox) {
	            s.classNames.push(s.params.containerModifierClass + 'no-flexbox');
	            s.params.slidesPerColumn = 1;
	        }
	        if (s.params.autoHeight) {
	            s.classNames.push(s.params.containerModifierClass + 'autoheight');
	        }
	        // Enable slides progress when required
	        if (s.params.parallax || s.params.watchSlidesVisibility) {
	            s.params.watchSlidesProgress = true;
	        }
	        // Max resistance when touchReleaseOnEdges
	        if (s.params.touchReleaseOnEdges) {
	            s.params.resistanceRatio = 0;
	        }
	        // Coverflow / 3D
	        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
	            if (s.support.transforms3d) {
	                s.params.watchSlidesProgress = true;
	                s.classNames.push(s.params.containerModifierClass + '3d');
	            } else {
	                s.params.effect = 'slide';
	            }
	        }
	        if (s.params.effect !== 'slide') {
	            s.classNames.push(s.params.containerModifierClass + s.params.effect);
	        }
	        if (s.params.effect === 'cube') {
	            s.params.resistanceRatio = 0;
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.centeredSlides = false;
	            s.params.spaceBetween = 0;
	            s.params.virtualTranslate = true;
	        }
	        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.watchSlidesProgress = true;
	            s.params.spaceBetween = 0;
	            if (typeof initialVirtualTranslate === 'undefined') {
	                s.params.virtualTranslate = true;
	            }
	        }
	
	        // Grab Cursor
	        if (s.params.grabCursor && s.support.touch) {
	            s.params.grabCursor = false;
	        }
	
	        // Wrapper
	        s.wrapper = s.container.children('.' + s.params.wrapperClass);
	
	        // Pagination
	        if (s.params.pagination) {
	            s.paginationContainer = $(s.params.pagination);
	            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
	                s.paginationContainer = s.container.find(s.params.pagination);
	            }
	
	            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
	                s.paginationContainer.addClass(s.params.paginationModifierClass + 'clickable');
	            } else {
	                s.params.paginationClickable = false;
	            }
	            s.paginationContainer.addClass(s.params.paginationModifierClass + s.params.paginationType);
	        }
	        // Next/Prev Buttons
	        if (s.params.nextButton || s.params.prevButton) {
	            if (s.params.nextButton) {
	                s.nextButton = $(s.params.nextButton);
	                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
	                    s.nextButton = s.container.find(s.params.nextButton);
	                }
	            }
	            if (s.params.prevButton) {
	                s.prevButton = $(s.params.prevButton);
	                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
	                    s.prevButton = s.container.find(s.params.prevButton);
	                }
	            }
	        }
	
	        // Is Horizontal
	        s.isHorizontal = function () {
	            return s.params.direction === 'horizontal';
	        };
	        // s.isH = isH;
	
	        // RTL
	        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
	        if (s.rtl) {
	            s.classNames.push(s.params.containerModifierClass + 'rtl');
	        }
	
	        // Wrong RTL support
	        if (s.rtl) {
	            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
	        }
	
	        // Columns
	        if (s.params.slidesPerColumn > 1) {
	            s.classNames.push(s.params.containerModifierClass + 'multirow');
	        }
	
	        // Check for Android
	        if (s.device.android) {
	            s.classNames.push(s.params.containerModifierClass + 'android');
	        }
	
	        // Add classes
	        s.container.addClass(s.classNames.join(' '));
	
	        // Translate
	        s.translate = 0;
	
	        // Progress
	        s.progress = 0;
	
	        // Velocity
	        s.velocity = 0;
	
	        /*=========================
	          Locks, unlocks
	          ===========================*/
	        s.lockSwipeToNext = function () {
	            s.params.allowSwipeToNext = false;
	            if (s.params.allowSwipeToPrev === false && s.params.grabCursor) {
	                s.unsetGrabCursor();
	            }
	        };
	        s.lockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = false;
	            if (s.params.allowSwipeToNext === false && s.params.grabCursor) {
	                s.unsetGrabCursor();
	            }
	        };
	        s.lockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
	            if (s.params.grabCursor) s.unsetGrabCursor();
	        };
	        s.unlockSwipeToNext = function () {
	            s.params.allowSwipeToNext = true;
	            if (s.params.allowSwipeToPrev === true && s.params.grabCursor) {
	                s.setGrabCursor();
	            }
	        };
	        s.unlockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = true;
	            if (s.params.allowSwipeToNext === true && s.params.grabCursor) {
	                s.setGrabCursor();
	            }
	        };
	        s.unlockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
	            if (s.params.grabCursor) s.setGrabCursor();
	        };
	
	        /*=========================
	          Round helper
	          ===========================*/
	        function round(a) {
	            return Math.floor(a);
	        }
	        /*=========================
	          Set grab cursor
	          ===========================*/
	        s.setGrabCursor = function (moving) {
	            s.container[0].style.cursor = 'move';
	            s.container[0].style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
	            s.container[0].style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
	            s.container[0].style.cursor = moving ? 'grabbing' : 'grab';
	        };
	        s.unsetGrabCursor = function () {
	            s.container[0].style.cursor = '';
	        };
	        if (s.params.grabCursor) {
	            s.setGrabCursor();
	        }
	        /*=========================
	          Update on Images Ready
	          ===========================*/
	        s.imagesToLoad = [];
	        s.imagesLoaded = 0;
	
	        s.loadImage = function (imgElement, src, srcset, sizes, checkForComplete, callback) {
	            var image;
	            function onReady() {
	                if (callback) callback();
	            }
	            if (!imgElement.complete || !checkForComplete) {
	                if (src) {
	                    image = new window.Image();
	                    image.onload = onReady;
	                    image.onerror = onReady;
	                    if (sizes) {
	                        image.sizes = sizes;
	                    }
	                    if (srcset) {
	                        image.srcset = srcset;
	                    }
	                    if (src) {
	                        image.src = src;
	                    }
	                } else {
	                    onReady();
	                }
	            } else {
	                //image already loaded...
	                onReady();
	            }
	        };
	        s.preloadImages = function () {
	            s.imagesToLoad = s.container.find('img');
	            function _onReady() {
	                if (typeof s === 'undefined' || s === null || !s) return;
	                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
	                if (s.imagesLoaded === s.imagesToLoad.length) {
	                    if (s.params.updateOnImagesReady) s.update();
	                    s.emit('onImagesReady', s);
	                }
	            }
	            for (var i = 0; i < s.imagesToLoad.length; i++) {
	                s.loadImage(s.imagesToLoad[i], s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src'), s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset'), s.imagesToLoad[i].sizes || s.imagesToLoad[i].getAttribute('sizes'), true, _onReady);
	            }
	        };
	
	        /*=========================
	          Autoplay
	          ===========================*/
	        s.autoplayTimeoutId = undefined;
	        s.autoplaying = false;
	        s.autoplayPaused = false;
	        function autoplay() {
	            var autoplayDelay = s.params.autoplay;
	            var activeSlide = s.slides.eq(s.activeIndex);
	            if (activeSlide.attr('data-swiper-autoplay')) {
	                autoplayDelay = activeSlide.attr('data-swiper-autoplay') || s.params.autoplay;
	            }
	            s.autoplayTimeoutId = setTimeout(function () {
	                if (s.params.loop) {
	                    s.fixLoop();
	                    s._slideNext();
	                    s.emit('onAutoplay', s);
	                } else {
	                    if (!s.isEnd) {
	                        s._slideNext();
	                        s.emit('onAutoplay', s);
	                    } else {
	                        if (!params.autoplayStopOnLast) {
	                            s._slideTo(0);
	                            s.emit('onAutoplay', s);
	                        } else {
	                            s.stopAutoplay();
	                        }
	                    }
	                }
	            }, autoplayDelay);
	        }
	        s.startAutoplay = function () {
	            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
	            if (!s.params.autoplay) return false;
	            if (s.autoplaying) return false;
	            s.autoplaying = true;
	            s.emit('onAutoplayStart', s);
	            autoplay();
	        };
	        s.stopAutoplay = function (internal) {
	            if (!s.autoplayTimeoutId) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplaying = false;
	            s.autoplayTimeoutId = undefined;
	            s.emit('onAutoplayStop', s);
	        };
	        s.pauseAutoplay = function (speed) {
	            if (s.autoplayPaused) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplayPaused = true;
	            if (speed === 0) {
	                s.autoplayPaused = false;
	                autoplay();
	            } else {
	                s.wrapper.transitionEnd(function () {
	                    if (!s) return;
	                    s.autoplayPaused = false;
	                    if (!s.autoplaying) {
	                        s.stopAutoplay();
	                    } else {
	                        autoplay();
	                    }
	                });
	            }
	        };
	        /*=========================
	          Min/Max Translate
	          ===========================*/
	        s.minTranslate = function () {
	            return -s.snapGrid[0];
	        };
	        s.maxTranslate = function () {
	            return -s.snapGrid[s.snapGrid.length - 1];
	        };
	        /*=========================
	          Slider/slides sizes
	          ===========================*/
	        s.updateAutoHeight = function () {
	            var activeSlides = [];
	            var newHeight = 0;
	            var i;
	
	            // Find slides currently in view
	            if (s.params.slidesPerView !== 'auto' && s.params.slidesPerView > 1) {
	                for (i = 0; i < Math.ceil(s.params.slidesPerView); i++) {
	                    var index = s.activeIndex + i;
	                    if (index > s.slides.length) break;
	                    activeSlides.push(s.slides.eq(index)[0]);
	                }
	            } else {
	                activeSlides.push(s.slides.eq(s.activeIndex)[0]);
	            }
	
	            // Find new height from heighest slide in view
	            for (i = 0; i < activeSlides.length; i++) {
	                if (typeof activeSlides[i] !== 'undefined') {
	                    var height = activeSlides[i].offsetHeight;
	                    newHeight = height > newHeight ? height : newHeight;
	                }
	            }
	
	            // Update Height
	            if (newHeight) s.wrapper.css('height', newHeight + 'px');
	        };
	        s.updateContainerSize = function () {
	            var width, height;
	            if (typeof s.params.width !== 'undefined') {
	                width = s.params.width;
	            } else {
	                width = s.container[0].clientWidth;
	            }
	            if (typeof s.params.height !== 'undefined') {
	                height = s.params.height;
	            } else {
	                height = s.container[0].clientHeight;
	            }
	            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
	                return;
	            }
	
	            //Subtract paddings
	            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
	            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
	
	            // Store values
	            s.width = width;
	            s.height = height;
	            s.size = s.isHorizontal() ? s.width : s.height;
	        };
	
	        s.updateSlidesSize = function () {
	            s.slides = s.wrapper.children('.' + s.params.slideClass);
	            s.snapGrid = [];
	            s.slidesGrid = [];
	            s.slidesSizesGrid = [];
	
	            var spaceBetween = s.params.spaceBetween,
	                slidePosition = -s.params.slidesOffsetBefore,
	                i,
	                prevSlideSize = 0,
	                index = 0;
	            if (typeof s.size === 'undefined') return;
	            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
	            }
	
	            s.virtualSize = -spaceBetween;
	            // reset margins
	            if (s.rtl) s.slides.css({ marginLeft: '', marginTop: '' });else s.slides.css({ marginRight: '', marginBottom: '' });
	
	            var slidesNumberEvenToRows;
	            if (s.params.slidesPerColumn > 1) {
	                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
	                    slidesNumberEvenToRows = s.slides.length;
	                } else {
	                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
	                }
	                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
	                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
	                }
	            }
	
	            // Calc slides
	            var slideSize;
	            var slidesPerColumn = s.params.slidesPerColumn;
	            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
	            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
	            for (i = 0; i < s.slides.length; i++) {
	                slideSize = 0;
	                var slide = s.slides.eq(i);
	                if (s.params.slidesPerColumn > 1) {
	                    // Set slides order
	                    var newSlideOrderIndex;
	                    var column, row;
	                    if (s.params.slidesPerColumnFill === 'column') {
	                        column = Math.floor(i / slidesPerColumn);
	                        row = i - column * slidesPerColumn;
	                        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
	                            if (++row >= slidesPerColumn) {
	                                row = 0;
	                                column++;
	                            }
	                        }
	                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
	                        slide.css({
	                            '-webkit-box-ordinal-group': newSlideOrderIndex,
	                            '-moz-box-ordinal-group': newSlideOrderIndex,
	                            '-ms-flex-order': newSlideOrderIndex,
	                            '-webkit-order': newSlideOrderIndex,
	                            'order': newSlideOrderIndex
	                        });
	                    } else {
	                        row = Math.floor(i / slidesPerRow);
	                        column = i - row * slidesPerRow;
	                    }
	                    slide.css('margin-' + (s.isHorizontal() ? 'top' : 'left'), row !== 0 && s.params.spaceBetween && s.params.spaceBetween + 'px').attr('data-swiper-column', column).attr('data-swiper-row', row);
	                }
	                if (slide.css('display') === 'none') continue;
	                if (s.params.slidesPerView === 'auto') {
	                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	                } else {
	                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	
	                    if (s.isHorizontal()) {
	                        s.slides[i].style.width = slideSize + 'px';
	                    } else {
	                        s.slides[i].style.height = slideSize + 'px';
	                    }
	                }
	                s.slides[i].swiperSlideSize = slideSize;
	                s.slidesSizesGrid.push(slideSize);
	
	                if (s.params.centeredSlides) {
	                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
	                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
	                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
	                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
	                    if (index % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                } else {
	                    if (index % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                    slidePosition = slidePosition + slideSize + spaceBetween;
	                }
	
	                s.virtualSize += slideSize + spaceBetween;
	
	                prevSlideSize = slideSize;
	
	                index++;
	            }
	            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
	            var newSlidesGrid;
	
	            if (s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
	                s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });
	            }
	            if (!s.support.flexbox || s.params.setWrapperSize) {
	                if (s.isHorizontal()) s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });else s.wrapper.css({ height: s.virtualSize + s.params.spaceBetween + 'px' });
	            }
	
	            if (s.params.slidesPerColumn > 1) {
	                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
	                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
	                if (s.isHorizontal()) s.wrapper.css({ width: s.virtualSize + s.params.spaceBetween + 'px' });else s.wrapper.css({ height: s.virtualSize + s.params.spaceBetween + 'px' });
	                if (s.params.centeredSlides) {
	                    newSlidesGrid = [];
	                    for (i = 0; i < s.snapGrid.length; i++) {
	                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                    s.snapGrid = newSlidesGrid;
	                }
	            }
	
	            // Remove last grid elements depending on width
	            if (!s.params.centeredSlides) {
	                newSlidesGrid = [];
	                for (i = 0; i < s.snapGrid.length; i++) {
	                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
	                        newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                }
	                s.snapGrid = newSlidesGrid;
	                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
	                    s.snapGrid.push(s.virtualSize - s.size);
	                }
	            }
	            if (s.snapGrid.length === 0) s.snapGrid = [0];
	
	            if (s.params.spaceBetween !== 0) {
	                if (s.isHorizontal()) {
	                    if (s.rtl) s.slides.css({ marginLeft: spaceBetween + 'px' });else s.slides.css({ marginRight: spaceBetween + 'px' });
	                } else s.slides.css({ marginBottom: spaceBetween + 'px' });
	            }
	            if (s.params.watchSlidesProgress) {
	                s.updateSlidesOffset();
	            }
	        };
	        s.updateSlidesOffset = function () {
	            for (var i = 0; i < s.slides.length; i++) {
	                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
	            }
	        };
	
	        /*=========================
	          Dynamic Slides Per View
	          ===========================*/
	        s.currentSlidesPerView = function () {
	            var spv = 1,
	                i,
	                j;
	            if (s.params.centeredSlides) {
	                var size = s.slides[s.activeIndex].swiperSlideSize;
	                var breakLoop;
	                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
	                    if (s.slides[i] && !breakLoop) {
	                        size += s.slides[i].swiperSlideSize;
	                        spv++;
	                        if (size > s.size) breakLoop = true;
	                    }
	                }
	                for (j = s.activeIndex - 1; j >= 0; j--) {
	                    if (s.slides[j] && !breakLoop) {
	                        size += s.slides[j].swiperSlideSize;
	                        spv++;
	                        if (size > s.size) breakLoop = true;
	                    }
	                }
	            } else {
	                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
	                    if (s.slidesGrid[i] - s.slidesGrid[s.activeIndex] < s.size) {
	                        spv++;
	                    }
	                }
	            }
	            return spv;
	        };
	        /*=========================
	          Slider/slides progress
	          ===========================*/
	        s.updateSlidesProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            if (s.slides.length === 0) return;
	            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
	
	            var offsetCenter = -translate;
	            if (s.rtl) offsetCenter = translate;
	
	            // Visible Slides
	            s.slides.removeClass(s.params.slideVisibleClass);
	            for (var i = 0; i < s.slides.length; i++) {
	                var slide = s.slides[i];
	                var slideProgress = (offsetCenter + (s.params.centeredSlides ? s.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
	                if (s.params.watchSlidesVisibility) {
	                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
	                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
	                    var isVisible = slideBefore >= 0 && slideBefore < s.size || slideAfter > 0 && slideAfter <= s.size || slideBefore <= 0 && slideAfter >= s.size;
	                    if (isVisible) {
	                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
	                    }
	                }
	                slide.progress = s.rtl ? -slideProgress : slideProgress;
	            }
	        };
	        s.updateProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            var wasBeginning = s.isBeginning;
	            var wasEnd = s.isEnd;
	            if (translatesDiff === 0) {
	                s.progress = 0;
	                s.isBeginning = s.isEnd = true;
	            } else {
	                s.progress = (translate - s.minTranslate()) / translatesDiff;
	                s.isBeginning = s.progress <= 0;
	                s.isEnd = s.progress >= 1;
	            }
	            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
	            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
	
	            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
	            s.emit('onProgress', s, s.progress);
	        };
	        s.updateActiveIndex = function () {
	            var translate = s.rtl ? s.translate : -s.translate;
	            var newActiveIndex, i, snapIndex;
	            for (i = 0; i < s.slidesGrid.length; i++) {
	                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
	                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
	                        newActiveIndex = i;
	                    } else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
	                        newActiveIndex = i + 1;
	                    }
	                } else {
	                    if (translate >= s.slidesGrid[i]) {
	                        newActiveIndex = i;
	                    }
	                }
	            }
	            // Normalize slideIndex
	            if (s.params.normalizeSlideIndex) {
	                if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
	            }
	            // for (i = 0; i < s.slidesGrid.length; i++) {
	            // if (- translate >= s.slidesGrid[i]) {
	            // newActiveIndex = i;
	            // }
	            // }
	            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
	            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
	
	            if (newActiveIndex === s.activeIndex) {
	                return;
	            }
	            s.snapIndex = snapIndex;
	            s.previousIndex = s.activeIndex;
	            s.activeIndex = newActiveIndex;
	            s.updateClasses();
	            s.updateRealIndex();
	        };
	        s.updateRealIndex = function () {
	            s.realIndex = parseInt(s.slides.eq(s.activeIndex).attr('data-swiper-slide-index') || s.activeIndex, 10);
	        };
	
	        /*=========================
	          Classes
	          ===========================*/
	        s.updateClasses = function () {
	            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass + ' ' + s.params.slideDuplicateActiveClass + ' ' + s.params.slideDuplicateNextClass + ' ' + s.params.slideDuplicatePrevClass);
	            var activeSlide = s.slides.eq(s.activeIndex);
	            // Active classes
	            activeSlide.addClass(s.params.slideActiveClass);
	            if (params.loop) {
	                // Duplicate to all looped slides
	                if (activeSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
	                } else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
	                }
	            }
	            // Next Slide
	            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
	            if (s.params.loop && nextSlide.length === 0) {
	                nextSlide = s.slides.eq(0);
	                nextSlide.addClass(s.params.slideNextClass);
	            }
	            // Prev Slide
	            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
	            if (s.params.loop && prevSlide.length === 0) {
	                prevSlide = s.slides.eq(-1);
	                prevSlide.addClass(s.params.slidePrevClass);
	            }
	            if (params.loop) {
	                // Duplicate to all looped slides
	                if (nextSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
	                } else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
	                }
	                if (prevSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
	                } else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
	                }
	            }
	
	            // Pagination
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                // Current/Total
	                var current,
	                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                if (s.params.loop) {
	                    current = Math.ceil((s.activeIndex - s.loopedSlides) / s.params.slidesPerGroup);
	                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
	                        current = current - (s.slides.length - s.loopedSlides * 2);
	                    }
	                    if (current > total - 1) current = current - total;
	                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
	                } else {
	                    if (typeof s.snapIndex !== 'undefined') {
	                        current = s.snapIndex;
	                    } else {
	                        current = s.activeIndex || 0;
	                    }
	                }
	                // Types
	                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
	                    s.bullets.removeClass(s.params.bulletActiveClass);
	                    if (s.paginationContainer.length > 1) {
	                        s.bullets.each(function () {
	                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
	                        });
	                    } else {
	                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
	                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
	                }
	                if (s.params.paginationType === 'progress') {
	                    var scale = (current + 1) / total,
	                        scaleX = scale,
	                        scaleY = 1;
	                    if (!s.isHorizontal()) {
	                        scaleY = scale;
	                        scaleX = 1;
	                    }
	                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
	                }
	                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
	                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	
	            // Next/active buttons
	            if (!s.params.loop) {
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    if (s.isBeginning) {
	                        s.prevButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
	                    } else {
	                        s.prevButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
	                    }
	                }
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    if (s.isEnd) {
	                        s.nextButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
	                    } else {
	                        s.nextButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
	                    }
	                }
	            }
	        };
	
	        /*=========================
	          Pagination
	          ===========================*/
	        s.updatePagination = function () {
	            if (!s.params.pagination) return;
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                var paginationHTML = '';
	                if (s.params.paginationType === 'bullets') {
	                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                    for (var i = 0; i < numberOfBullets; i++) {
	                        if (s.params.paginationBulletRender) {
	                            paginationHTML += s.params.paginationBulletRender(s, i, s.params.bulletClass);
	                        } else {
	                            paginationHTML += '<' + s.params.paginationElement + ' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
	                        }
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
	                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
	                        s.a11y.initPagination();
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    if (s.params.paginationFractionRender) {
	                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
	                    } else {
	                        paginationHTML = '<span class="' + s.params.paginationCurrentClass + '"></span>' + ' / ' + '<span class="' + s.params.paginationTotalClass + '"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType === 'progress') {
	                    if (s.params.paginationProgressRender) {
	                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
	                    } else {
	                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType !== 'custom') {
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        };
	        /*=========================
	          Common update method
	          ===========================*/
	        s.update = function (updateTranslate) {
	            if (!s) return;
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updateProgress();
	            s.updatePagination();
	            s.updateClasses();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            var newTranslate;
	            function forceSetTranslate() {
	                var translate = s.rtl ? -s.translate : s.translate;
	                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	            }
	            if (updateTranslate) {
	                var translated;
	                if (s.controller && s.controller.spline) {
	                    s.controller.spline = undefined;
	                }
	                if (s.params.freeMode) {
	                    forceSetTranslate();
	                    if (s.params.autoHeight) {
	                        s.updateAutoHeight();
	                    }
	                } else {
	                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
	                    } else {
	                        translated = s.slideTo(s.activeIndex, 0, false, true);
	                    }
	                    if (!translated) {
	                        forceSetTranslate();
	                    }
	                }
	            } else if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	        };
	
	        /*=========================
	          Resize Handler
	          ===========================*/
	        s.onResize = function (forceUpdatePagination) {
	            if (s.params.onBeforeResize) s.params.onBeforeResize(s);
	            //Breakpoints
	            if (s.params.breakpoints) {
	                s.setBreakpoint();
	            }
	
	            // Disable locks on resize
	            var allowSwipeToPrev = s.params.allowSwipeToPrev;
	            var allowSwipeToNext = s.params.allowSwipeToNext;
	            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
	
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            if (s.controller && s.controller.spline) {
	                s.controller.spline = undefined;
	            }
	            var slideChangedBySlideTo = false;
	            if (s.params.freeMode) {
	                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	            } else {
	                s.updateClasses();
	                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
	                } else {
	                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
	                }
	            }
	            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
	                s.lazy.load();
	            }
	            // Return locks after resize
	            s.params.allowSwipeToPrev = allowSwipeToPrev;
	            s.params.allowSwipeToNext = allowSwipeToNext;
	            if (s.params.onAfterResize) s.params.onAfterResize(s);
	        };
	
	        /*=========================
	          Events
	          ===========================*/
	
	        //Define Touch Events
	        s.touchEventsDesktop = { start: 'mousedown', move: 'mousemove', end: 'mouseup' };
	        if (window.navigator.pointerEnabled) s.touchEventsDesktop = { start: 'pointerdown', move: 'pointermove', end: 'pointerup' };else if (window.navigator.msPointerEnabled) s.touchEventsDesktop = { start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp' };
	        s.touchEvents = {
	            start: s.support.touch || !s.params.simulateTouch ? 'touchstart' : s.touchEventsDesktop.start,
	            move: s.support.touch || !s.params.simulateTouch ? 'touchmove' : s.touchEventsDesktop.move,
	            end: s.support.touch || !s.params.simulateTouch ? 'touchend' : s.touchEventsDesktop.end
	        };
	
	        // WP8 Touch Events Fix
	        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
	            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
	        }
	
	        // Attach/detach events
	        s.initEvents = function (detach) {
	            var actionDom = detach ? 'off' : 'on';
	            var action = detach ? 'removeEventListener' : 'addEventListener';
	            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
	            var target = s.support.touch ? touchEventsTarget : document;
	
	            var moveCapture = s.params.nested ? true : false;
	
	            //Touch Events
	            if (s.browser.ie) {
	                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
	                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                target[action](s.touchEvents.end, s.onTouchEnd, false);
	            } else {
	                if (s.support.touch) {
	                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? { passive: true, capture: false } : false;
	                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, passiveListener);
	                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, passiveListener);
	                }
	                if (params.simulateTouch && !s.device.ios && !s.device.android || params.simulateTouch && !s.support.touch && s.device.ios) {
	                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
	                    document[action]('mousemove', s.onTouchMove, moveCapture);
	                    document[action]('mouseup', s.onTouchEnd, false);
	                }
	            }
	            window[action]('resize', s.onResize);
	
	            // Next, Prev, Index
	            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                s.nextButton[actionDom]('click', s.onClickNext);
	                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                s.prevButton[actionDom]('click', s.onClickPrev);
	                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.pagination && s.params.paginationClickable) {
	                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
	                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
	            }
	
	            // Prevent Links Clicks
	            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
	        };
	        s.attachEvents = function () {
	            s.initEvents();
	        };
	        s.detachEvents = function () {
	            s.initEvents(true);
	        };
	
	        /*=========================
	          Handle Clicks
	          ===========================*/
	        // Prevent Clicks
	        s.allowClick = true;
	        s.preventClicks = function (e) {
	            if (!s.allowClick) {
	                if (s.params.preventClicks) e.preventDefault();
	                if (s.params.preventClicksPropagation && s.animating) {
	                    e.stopPropagation();
	                    e.stopImmediatePropagation();
	                }
	            }
	        };
	        // Clicks
	        s.onClickNext = function (e) {
	            e.preventDefault();
	            if (s.isEnd && !s.params.loop) return;
	            s.slideNext();
	        };
	        s.onClickPrev = function (e) {
	            e.preventDefault();
	            if (s.isBeginning && !s.params.loop) return;
	            s.slidePrev();
	        };
	        s.onClickIndex = function (e) {
	            e.preventDefault();
	            var index = $(this).index() * s.params.slidesPerGroup;
	            if (s.params.loop) index = index + s.loopedSlides;
	            s.slideTo(index);
	        };
	
	        /*=========================
	          Handle Touches
	          ===========================*/
	        function findElementInEvent(e, selector) {
	            var el = $(e.target);
	            if (!el.is(selector)) {
	                if (typeof selector === 'string') {
	                    el = el.parents(selector);
	                } else if (selector.nodeType) {
	                    var found;
	                    el.parents().each(function (index, _el) {
	                        if (_el === selector) found = selector;
	                    });
	                    if (!found) return undefined;else return selector;
	                }
	            }
	            if (el.length === 0) {
	                return undefined;
	            }
	            return el[0];
	        }
	        s.updateClickedSlide = function (e) {
	            var slide = findElementInEvent(e, '.' + s.params.slideClass);
	            var slideFound = false;
	            if (slide) {
	                for (var i = 0; i < s.slides.length; i++) {
	                    if (s.slides[i] === slide) slideFound = true;
	                }
	            }
	
	            if (slide && slideFound) {
	                s.clickedSlide = slide;
	                s.clickedIndex = $(slide).index();
	            } else {
	                s.clickedSlide = undefined;
	                s.clickedIndex = undefined;
	                return;
	            }
	            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
	                var slideToIndex = s.clickedIndex,
	                    realIndex,
	                    duplicatedSlides,
	                    slidesPerView = s.params.slidesPerView === 'auto' ? s.currentSlidesPerView() : s.params.slidesPerView;
	                if (s.params.loop) {
	                    if (s.animating) return;
	                    realIndex = parseInt($(s.clickedSlide).attr('data-swiper-slide-index'), 10);
	                    if (s.params.centeredSlides) {
	                        if (slideToIndex < s.loopedSlides - slidesPerView / 2 || slideToIndex > s.slides.length - s.loopedSlides + slidesPerView / 2) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        } else {
	                            s.slideTo(slideToIndex);
	                        }
	                    } else {
	                        if (slideToIndex > s.slides.length - slidesPerView) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        } else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                } else {
	                    s.slideTo(slideToIndex);
	                }
	            }
	        };
	
	        var isTouched,
	            isMoved,
	            allowTouchCallbacks,
	            touchStartTime,
	            isScrolling,
	            currentTranslate,
	            startTranslate,
	            allowThresholdMove,
	
	        // Form elements to match
	        formElements = 'input, select, textarea, button, video',
	
	        // Last click time
	        lastClickTime = Date.now(),
	            clickTimeout,
	
	        //Velocities
	        velocities = [],
	            allowMomentumBounce;
	
	        // Animating Flag
	        s.animating = false;
	
	        // Touches information
	        s.touches = {
	            startX: 0,
	            startY: 0,
	            currentX: 0,
	            currentY: 0,
	            diff: 0
	        };
	
	        // Touch handlers
	        var isTouchEvent, startMoving;
	        s.onTouchStart = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            isTouchEvent = e.type === 'touchstart';
	            if (!isTouchEvent && 'which' in e && e.which === 3) return;
	            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
	                s.allowClick = true;
	                return;
	            }
	            if (s.params.swipeHandler) {
	                if (!findElementInEvent(e, s.params.swipeHandler)) return;
	            }
	
	            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	
	            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
	            if (s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
	                return;
	            }
	
	            isTouched = true;
	            isMoved = false;
	            allowTouchCallbacks = true;
	            isScrolling = undefined;
	            startMoving = undefined;
	            s.touches.startX = startX;
	            s.touches.startY = startY;
	            touchStartTime = Date.now();
	            s.allowClick = true;
	            s.updateContainerSize();
	            s.swipeDirection = undefined;
	            if (s.params.threshold > 0) allowThresholdMove = false;
	            if (e.type !== 'touchstart') {
	                var preventDefault = true;
	                if ($(e.target).is(formElements)) preventDefault = false;
	                if (document.activeElement && $(document.activeElement).is(formElements)) {
	                    document.activeElement.blur();
	                }
	                if (preventDefault) {
	                    e.preventDefault();
	                }
	            }
	            s.emit('onTouchStart', s, e);
	        };
	
	        s.onTouchMove = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (isTouchEvent && e.type === 'mousemove') return;
	            if (e.preventedByNestedSwiper) {
	                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                return;
	            }
	            if (s.params.onlyExternal) {
	                // isMoved = true;
	                s.allowClick = false;
	                if (isTouched) {
	                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                    touchStartTime = Date.now();
	                }
	                return;
	            }
	            if (isTouchEvent && s.params.touchReleaseOnEdges && !s.params.loop) {
	                if (!s.isHorizontal()) {
	                    // Vertical
	                    if (s.touches.currentY < s.touches.startY && s.translate <= s.maxTranslate() || s.touches.currentY > s.touches.startY && s.translate >= s.minTranslate()) {
	                        return;
	                    }
	                } else {
	                    if (s.touches.currentX < s.touches.startX && s.translate <= s.maxTranslate() || s.touches.currentX > s.touches.startX && s.translate >= s.minTranslate()) {
	                        return;
	                    }
	                }
	            }
	            if (isTouchEvent && document.activeElement) {
	                if (e.target === document.activeElement && $(e.target).is(formElements)) {
	                    isMoved = true;
	                    s.allowClick = false;
	                    return;
	                }
	            }
	            if (allowTouchCallbacks) {
	                s.emit('onTouchMove', s, e);
	            }
	            if (e.targetTouches && e.targetTouches.length > 1) return;
	
	            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	
	            if (typeof isScrolling === 'undefined') {
	                var touchAngle;
	                if (s.isHorizontal() && s.touches.currentY === s.touches.startY || !s.isHorizontal() && s.touches.currentX === s.touches.startX) {
	                    isScrolling = false;
	                } else {
	                    touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
	                    isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : 90 - touchAngle > s.params.touchAngle;
	                }
	            }
	            if (isScrolling) {
	                s.emit('onTouchMoveOpposite', s, e);
	            }
	            if (typeof startMoving === 'undefined') {
	                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
	                    startMoving = true;
	                }
	            }
	            if (!isTouched) return;
	            if (isScrolling) {
	                isTouched = false;
	                return;
	            }
	            if (!startMoving) {
	                return;
	            }
	            s.allowClick = false;
	            s.emit('onSliderMove', s, e);
	            e.preventDefault();
	            if (s.params.touchMoveStopPropagation && !s.params.nested) {
	                e.stopPropagation();
	            }
	
	            if (!isMoved) {
	                if (params.loop) {
	                    s.fixLoop();
	                }
	                startTranslate = s.getWrapperTranslate();
	                s.setWrapperTransition(0);
	                if (s.animating) {
	                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
	                }
	                if (s.params.autoplay && s.autoplaying) {
	                    if (s.params.autoplayDisableOnInteraction) {
	                        s.stopAutoplay();
	                    } else {
	                        s.pauseAutoplay();
	                    }
	                }
	                allowMomentumBounce = false;
	                //Grab Cursor
	                if (s.params.grabCursor && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
	                    s.setGrabCursor(true);
	                }
	            }
	            isMoved = true;
	
	            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	
	            diff = diff * s.params.touchRatio;
	            if (s.rtl) diff = -diff;
	
	            s.swipeDirection = diff > 0 ? 'prev' : 'next';
	            currentTranslate = diff + startTranslate;
	
	            var disableParentSwiper = true;
	            if (diff > 0 && currentTranslate > s.minTranslate()) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
	            } else if (diff < 0 && currentTranslate < s.maxTranslate()) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
	            }
	
	            if (disableParentSwiper) {
	                e.preventedByNestedSwiper = true;
	            }
	
	            // Directions locks
	            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
	                currentTranslate = startTranslate;
	            }
	            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
	                currentTranslate = startTranslate;
	            }
	
	            // Threshold
	            if (s.params.threshold > 0) {
	                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
	                    if (!allowThresholdMove) {
	                        allowThresholdMove = true;
	                        s.touches.startX = s.touches.currentX;
	                        s.touches.startY = s.touches.currentY;
	                        currentTranslate = startTranslate;
	                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	                        return;
	                    }
	                } else {
	                    currentTranslate = startTranslate;
	                    return;
	                }
	            }
	
	            if (!s.params.followFinger) return;
	
	            // Update active index in free mode
	            if (s.params.freeMode || s.params.watchSlidesProgress) {
	                s.updateActiveIndex();
	            }
	            if (s.params.freeMode) {
	                //Velocity
	                if (velocities.length === 0) {
	                    velocities.push({
	                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
	                        time: touchStartTime
	                    });
	                }
	                velocities.push({
	                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
	                    time: new window.Date().getTime()
	                });
	            }
	            // Update progress
	            s.updateProgress(currentTranslate);
	            // Update translate
	            s.setWrapperTranslate(currentTranslate);
	        };
	        s.onTouchEnd = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (allowTouchCallbacks) {
	                s.emit('onTouchEnd', s, e);
	            }
	            allowTouchCallbacks = false;
	            if (!isTouched) return;
	            //Return Grab Cursor
	            if (s.params.grabCursor && isMoved && isTouched && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
	                s.setGrabCursor(false);
	            }
	
	            // Time diff
	            var touchEndTime = Date.now();
	            var timeDiff = touchEndTime - touchStartTime;
	
	            // Tap, doubleTap, Click
	            if (s.allowClick) {
	                s.updateClickedSlide(e);
	                s.emit('onTap', s, e);
	                if (timeDiff < 300 && touchEndTime - lastClickTime > 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    clickTimeout = setTimeout(function () {
	                        if (!s) return;
	                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
	                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
	                        }
	                        s.emit('onClick', s, e);
	                    }, 300);
	                }
	                if (timeDiff < 300 && touchEndTime - lastClickTime < 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    s.emit('onDoubleTap', s, e);
	                }
	            }
	
	            lastClickTime = Date.now();
	            setTimeout(function () {
	                if (s) s.allowClick = true;
	            }, 0);
	
	            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
	                isTouched = isMoved = false;
	                return;
	            }
	            isTouched = isMoved = false;
	
	            var currentPos;
	            if (s.params.followFinger) {
	                currentPos = s.rtl ? s.translate : -s.translate;
	            } else {
	                currentPos = -currentTranslate;
	            }
	            if (s.params.freeMode) {
	                if (currentPos < -s.minTranslate()) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                } else if (currentPos > -s.maxTranslate()) {
	                    if (s.slides.length < s.snapGrid.length) {
	                        s.slideTo(s.snapGrid.length - 1);
	                    } else {
	                        s.slideTo(s.slides.length - 1);
	                    }
	                    return;
	                }
	
	                if (s.params.freeModeMomentum) {
	                    if (velocities.length > 1) {
	                        var lastMoveEvent = velocities.pop(),
	                            velocityEvent = velocities.pop();
	
	                        var distance = lastMoveEvent.position - velocityEvent.position;
	                        var time = lastMoveEvent.time - velocityEvent.time;
	                        s.velocity = distance / time;
	                        s.velocity = s.velocity / 2;
	                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
	                            s.velocity = 0;
	                        }
	                        // this implies that the user stopped moving a finger then released.
	                        // There would be no events with distance zero, so the last event is stale.
	                        if (time > 150 || new window.Date().getTime() - lastMoveEvent.time > 300) {
	                            s.velocity = 0;
	                        }
	                    } else {
	                        s.velocity = 0;
	                    }
	                    s.velocity = s.velocity * s.params.freeModeMomentumVelocityRatio;
	
	                    velocities.length = 0;
	                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
	                    var momentumDistance = s.velocity * momentumDuration;
	
	                    var newPosition = s.translate + momentumDistance;
	                    if (s.rtl) newPosition = -newPosition;
	                    var doBounce = false;
	                    var afterBouncePosition;
	                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
	                    if (newPosition < s.maxTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition + s.maxTranslate() < -bounceAmount) {
	                                newPosition = s.maxTranslate() - bounceAmount;
	                            }
	                            afterBouncePosition = s.maxTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        } else {
	                            newPosition = s.maxTranslate();
	                        }
	                    } else if (newPosition > s.minTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition - s.minTranslate() > bounceAmount) {
	                                newPosition = s.minTranslate() + bounceAmount;
	                            }
	                            afterBouncePosition = s.minTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        } else {
	                            newPosition = s.minTranslate();
	                        }
	                    } else if (s.params.freeModeSticky) {
	                        var j = 0,
	                            nextSlide;
	                        for (j = 0; j < s.snapGrid.length; j += 1) {
	                            if (s.snapGrid[j] > -newPosition) {
	                                nextSlide = j;
	                                break;
	                            }
	                        }
	                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
	                            newPosition = s.snapGrid[nextSlide];
	                        } else {
	                            newPosition = s.snapGrid[nextSlide - 1];
	                        }
	                        if (!s.rtl) newPosition = -newPosition;
	                    }
	                    //Fix duration
	                    if (s.velocity !== 0) {
	                        if (s.rtl) {
	                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
	                        } else {
	                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
	                        }
	                    } else if (s.params.freeModeSticky) {
	                        s.slideReset();
	                        return;
	                    }
	
	                    if (s.params.freeModeMomentumBounce && doBounce) {
	                        s.updateProgress(afterBouncePosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        s.animating = true;
	                        s.wrapper.transitionEnd(function () {
	                            if (!s || !allowMomentumBounce) return;
	                            s.emit('onMomentumBounce', s);
	
	                            s.setWrapperTransition(s.params.speed);
	                            s.setWrapperTranslate(afterBouncePosition);
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        });
	                    } else if (s.velocity) {
	                        s.updateProgress(newPosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        if (!s.animating) {
	                            s.animating = true;
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        }
	                    } else {
	                        s.updateProgress(newPosition);
	                    }
	
	                    s.updateActiveIndex();
	                }
	                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
	                    s.updateProgress();
	                    s.updateActiveIndex();
	                }
	                return;
	            }
	
	            // Find current slide
	            var i,
	                stopIndex = 0,
	                groupSize = s.slidesSizesGrid[0];
	            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
	                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
	                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
	                    }
	                } else {
	                    if (currentPos >= s.slidesGrid[i]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
	                    }
	                }
	            }
	
	            // Find current slide size
	            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
	
	            if (timeDiff > s.params.longSwipesMs) {
	                // Long touches
	                if (!s.params.longSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);
	                }
	                if (s.swipeDirection === 'prev') {
	                    if (ratio > 1 - s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);
	                }
	            } else {
	                // Short swipes
	                if (!s.params.shortSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    s.slideTo(stopIndex + s.params.slidesPerGroup);
	                }
	                if (s.swipeDirection === 'prev') {
	                    s.slideTo(stopIndex);
	                }
	            }
	        };
	        /*=========================
	          Transitions
	          ===========================*/
	        s._slideTo = function (slideIndex, speed) {
	            return s.slideTo(slideIndex, speed, true, true);
	        };
	        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (typeof slideIndex === 'undefined') slideIndex = 0;
	            if (slideIndex < 0) slideIndex = 0;
	            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
	            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
	
	            var translate = -s.snapGrid[s.snapIndex];
	            // Stop autoplay
	            if (s.params.autoplay && s.autoplaying) {
	                if (internal || !s.params.autoplayDisableOnInteraction) {
	                    s.pauseAutoplay(speed);
	                } else {
	                    s.stopAutoplay();
	                }
	            }
	            // Update progress
	            s.updateProgress(translate);
	
	            // Normalize slideIndex
	            if (s.params.normalizeSlideIndex) {
	                for (var i = 0; i < s.slidesGrid.length; i++) {
	                    if (-Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
	                        slideIndex = i;
	                    }
	                }
	            }
	
	            // Directions locks
	            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
	                if ((s.activeIndex || 0) !== slideIndex) return false;
	            }
	
	            // Update Index
	            if (typeof speed === 'undefined') speed = s.params.speed;
	            s.previousIndex = s.activeIndex || 0;
	            s.activeIndex = slideIndex;
	            s.updateRealIndex();
	            if (s.rtl && -translate === s.translate || !s.rtl && translate === s.translate) {
	                // Update Height
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	                s.updateClasses();
	                if (s.params.effect !== 'slide') {
	                    s.setWrapperTranslate(translate);
	                }
	                return false;
	            }
	            s.updateClasses();
	            s.onTransitionStart(runCallbacks);
	
	            if (speed === 0 || s.browser.lteIE9) {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(0);
	                s.onTransitionEnd(runCallbacks);
	            } else {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(speed);
	                if (!s.animating) {
	                    s.animating = true;
	                    s.wrapper.transitionEnd(function () {
	                        if (!s) return;
	                        s.onTransitionEnd(runCallbacks);
	                    });
	                }
	            }
	
	            return true;
	        };
	
	        s.onTransitionStart = function (runCallbacks) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	            if (s.lazy) s.lazy.onTransitionStart();
	            if (runCallbacks) {
	                s.emit('onTransitionStart', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeStart', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextStart', s);
	                    } else {
	                        s.emit('onSlidePrevStart', s);
	                    }
	                }
	            }
	        };
	        s.onTransitionEnd = function (runCallbacks) {
	            s.animating = false;
	            s.setWrapperTransition(0);
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.lazy) s.lazy.onTransitionEnd();
	            if (runCallbacks) {
	                s.emit('onTransitionEnd', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeEnd', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextEnd', s);
	                    } else {
	                        s.emit('onSlidePrevEnd', s);
	                    }
	                }
	            }
	            if (s.params.history && s.history) {
	                s.history.setHistory(s.params.history, s.activeIndex);
	            }
	            if (s.params.hashnav && s.hashnav) {
	                s.hashnav.setHash();
	            }
	        };
	        s.slideNext = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	            } else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	        };
	        s._slideNext = function (speed) {
	            return s.slideNext(true, speed, true);
	        };
	        s.slidePrev = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	            } else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	        };
	        s._slidePrev = function (speed) {
	            return s.slidePrev(true, speed, true);
	        };
	        s.slideReset = function (runCallbacks, speed, internal) {
	            return s.slideTo(s.activeIndex, speed, runCallbacks);
	        };
	
	        s.disableTouchControl = function () {
	            s.params.onlyExternal = true;
	            return true;
	        };
	        s.enableTouchControl = function () {
	            s.params.onlyExternal = false;
	            return true;
	        };
	
	        /*=========================
	          Translate/transition helpers
	          ===========================*/
	        s.setWrapperTransition = function (duration, byController) {
	            s.wrapper.transition(duration);
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTransition(duration);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTransition(duration);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTransition(duration);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTransition(duration, byController);
	            }
	            s.emit('onSetTransition', s, duration);
	        };
	        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
	            var x = 0,
	                y = 0,
	                z = 0;
	            if (s.isHorizontal()) {
	                x = s.rtl ? -translate : translate;
	            } else {
	                y = translate;
	            }
	
	            if (s.params.roundLengths) {
	                x = round(x);
	                y = round(y);
	            }
	
	            if (!s.params.virtualTranslate) {
	                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
	            }
	
	            s.translate = s.isHorizontal() ? x : y;
	
	            // Check if we need to update progress
	            var progress;
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            if (translatesDiff === 0) {
	                progress = 0;
	            } else {
	                progress = (translate - s.minTranslate()) / translatesDiff;
	            }
	            if (progress !== s.progress) {
	                s.updateProgress(translate);
	            }
	
	            if (updateActiveIndex) s.updateActiveIndex();
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTranslate(s.translate);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTranslate(s.translate);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTranslate(s.translate);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTranslate(s.translate, byController);
	            }
	            s.emit('onSetTranslate', s, s.translate);
	        };
	
	        s.getTranslate = function (el, axis) {
	            var matrix, curTransform, curStyle, transformMatrix;
	
	            // automatic axis detection
	            if (typeof axis === 'undefined') {
	                axis = 'x';
	            }
	
	            if (s.params.virtualTranslate) {
	                return s.rtl ? -s.translate : s.translate;
	            }
	
	            curStyle = window.getComputedStyle(el, null);
	            if (window.WebKitCSSMatrix) {
	                curTransform = curStyle.transform || curStyle.webkitTransform;
	                if (curTransform.split(',').length > 6) {
	                    curTransform = curTransform.split(', ').map(function (a) {
	                        return a.replace(',', '.');
	                    }).join(', ');
	                }
	                // Some old versions of Webkit choke when 'none' is passed; pass
	                // empty string instead in this case
	                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
	            } else {
	                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	                matrix = transformMatrix.toString().split(',');
	            }
	
	            if (axis === 'x') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
	                    //Normal Browsers
	                    else curTransform = parseFloat(matrix[4]);
	            }
	            if (axis === 'y') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
	                    //Normal Browsers
	                    else curTransform = parseFloat(matrix[5]);
	            }
	            if (s.rtl && curTransform) curTransform = -curTransform;
	            return curTransform || 0;
	        };
	        s.getWrapperTranslate = function (axis) {
	            if (typeof axis === 'undefined') {
	                axis = s.isHorizontal() ? 'x' : 'y';
	            }
	            return s.getTranslate(s.wrapper[0], axis);
	        };
	
	        /*=========================
	          Observer
	          ===========================*/
	        s.observers = [];
	        function initObserver(target, options) {
	            options = options || {};
	            // create an observer instance
	            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
	            var observer = new ObserverFunc(function (mutations) {
	                mutations.forEach(function (mutation) {
	                    s.onResize(true);
	                    s.emit('onObserverUpdate', s, mutation);
	                });
	            });
	
	            observer.observe(target, {
	                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
	                childList: typeof options.childList === 'undefined' ? true : options.childList,
	                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
	            });
	
	            s.observers.push(observer);
	        }
	        s.initObservers = function () {
	            if (s.params.observeParents) {
	                var containerParents = s.container.parents();
	                for (var i = 0; i < containerParents.length; i++) {
	                    initObserver(containerParents[i]);
	                }
	            }
	
	            // Observe container
	            initObserver(s.container[0], { childList: false });
	
	            // Observe wrapper
	            initObserver(s.wrapper[0], { attributes: false });
	        };
	        s.disconnectObservers = function () {
	            for (var i = 0; i < s.observers.length; i++) {
	                s.observers[i].disconnect();
	            }
	            s.observers = [];
	        };
	        /*=========================
	          Loop
	          ===========================*/
	        // Create looped slides
	        s.createLoop = function () {
	            // Remove duplicated slides
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	
	            var slides = s.wrapper.children('.' + s.params.slideClass);
	
	            if (s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
	
	            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
	            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
	            if (s.loopedSlides > slides.length) {
	                s.loopedSlides = slides.length;
	            }
	
	            var prependSlides = [],
	                appendSlides = [],
	                i;
	            slides.each(function (index, el) {
	                var slide = $(this);
	                if (index < s.loopedSlides) appendSlides.push(el);
	                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
	                slide.attr('data-swiper-slide-index', index);
	            });
	            for (i = 0; i < appendSlides.length; i++) {
	                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	            for (i = prependSlides.length - 1; i >= 0; i--) {
	                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	        };
	        s.destroyLoop = function () {
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	            s.slides.removeAttr('data-swiper-slide-index');
	        };
	        s.reLoop = function (updatePosition) {
	            var oldIndex = s.activeIndex - s.loopedSlides;
	            s.destroyLoop();
	            s.createLoop();
	            s.updateSlidesSize();
	            if (updatePosition) {
	                s.slideTo(oldIndex + s.loopedSlides, 0, false);
	            }
	        };
	        s.fixLoop = function () {
	            var newIndex;
	            //Fix For Negative Oversliding
	            if (s.activeIndex < s.loopedSlides) {
	                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	            //Fix For Positive Oversliding
	            else if (s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2 || s.activeIndex > s.slides.length - s.params.slidesPerView * 2) {
	                    newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
	                    newIndex = newIndex + s.loopedSlides;
	                    s.slideTo(newIndex, 0, false, true);
	                }
	        };
	        /*=========================
	          Append/Prepend/Remove Slides
	          ===========================*/
	        s.appendSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            if ((typeof slides === 'undefined' ? 'undefined' : _typeof(slides)) === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.append(slides[i]);
	                }
	            } else {
	                s.wrapper.append(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	        };
	        s.prependSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            var newActiveIndex = s.activeIndex + 1;
	            if ((typeof slides === 'undefined' ? 'undefined' : _typeof(slides)) === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.prepend(slides[i]);
	                }
	                newActiveIndex = s.activeIndex + slides.length;
	            } else {
	                s.wrapper.prepend(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            s.slideTo(newActiveIndex, 0, false);
	        };
	        s.removeSlide = function (slidesIndexes) {
	            if (s.params.loop) {
	                s.destroyLoop();
	                s.slides = s.wrapper.children('.' + s.params.slideClass);
	            }
	            var newActiveIndex = s.activeIndex,
	                indexToRemove;
	            if ((typeof slidesIndexes === 'undefined' ? 'undefined' : _typeof(slidesIndexes)) === 'object' && slidesIndexes.length) {
	                for (var i = 0; i < slidesIndexes.length; i++) {
	                    indexToRemove = slidesIndexes[i];
	                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                    if (indexToRemove < newActiveIndex) newActiveIndex--;
	                }
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            } else {
	                indexToRemove = slidesIndexes;
	                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                if (indexToRemove < newActiveIndex) newActiveIndex--;
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	
	            if (s.params.loop) {
	                s.createLoop();
	            }
	
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            if (s.params.loop) {
	                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
	            } else {
	                s.slideTo(newActiveIndex, 0, false);
	            }
	        };
	        s.removeAllSlides = function () {
	            var slidesIndexes = [];
	            for (var i = 0; i < s.slides.length; i++) {
	                slidesIndexes.push(i);
	            }
	            s.removeSlide(slidesIndexes);
	        };
	
	        /*=========================
	          Effects
	          ===========================*/
	        s.effects = {
	            fade: {
	                setTranslate: function setTranslate() {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var offset = slide[0].swiperSlideOffset;
	                        var tx = -offset;
	                        if (!s.params.virtualTranslate) tx = tx - s.translate;
	                        var ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	                        var slideOpacity = s.params.fade.crossFade ? Math.max(1 - Math.abs(slide[0].progress), 0) : 1 + Math.min(Math.max(slide[0].progress, -1), 0);
	                        slide.css({
	                            opacity: slideOpacity
	                        }).transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
	                    }
	                },
	                setTransition: function setTransition(duration) {
	                    s.slides.transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            flip: {
	                setTranslate: function setTranslate() {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var progress = slide[0].progress;
	                        if (s.params.flip.limitRotation) {
	                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        }
	                        var offset = slide[0].swiperSlideOffset;
	                        var rotate = -180 * progress,
	                            rotateY = rotate,
	                            rotateX = 0,
	                            tx = -offset,
	                            ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                            rotateX = -rotateY;
	                            rotateY = 0;
	                        } else if (s.rtl) {
	                            rotateY = -rotateY;
	                        }
	
	                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
	
	                        if (s.params.flip.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	
	                        slide.transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
	                    }
	                },
	                setTransition: function setTransition(duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.eq(s.activeIndex).transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            cube: {
	                setTranslate: function setTranslate() {
	                    var wrapperRotate = 0,
	                        cubeShadow;
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.wrapper.append(cubeShadow);
	                            }
	                            cubeShadow.css({ height: s.width + 'px' });
	                        } else {
	                            cubeShadow = s.container.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.container.append(cubeShadow);
	                            }
	                        }
	                    }
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideAngle = i * 90;
	                        var round = Math.floor(slideAngle / 360);
	                        if (s.rtl) {
	                            slideAngle = -slideAngle;
	                            round = Math.floor(-slideAngle / 360);
	                        }
	                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        var tx = 0,
	                            ty = 0,
	                            tz = 0;
	                        if (i % 4 === 0) {
	                            tx = -round * 4 * s.size;
	                            tz = 0;
	                        } else if ((i - 1) % 4 === 0) {
	                            tx = 0;
	                            tz = -round * 4 * s.size;
	                        } else if ((i - 2) % 4 === 0) {
	                            tx = s.size + round * 4 * s.size;
	                            tz = s.size;
	                        } else if ((i - 3) % 4 === 0) {
	                            tx = -s.size;
	                            tz = 3 * s.size + s.size * 4 * round;
	                        }
	                        if (s.rtl) {
	                            tx = -tx;
	                        }
	
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	
	                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
	                        if (progress <= 1 && progress > -1) {
	                            wrapperRotate = i * 90 + progress * 90;
	                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
	                        }
	                        slide.transform(transform);
	                        if (s.params.cube.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	                    }
	                    s.wrapper.css({
	                        '-webkit-transform-origin': '50% 50% -' + s.size / 2 + 'px',
	                        '-moz-transform-origin': '50% 50% -' + s.size / 2 + 'px',
	                        '-ms-transform-origin': '50% 50% -' + s.size / 2 + 'px',
	                        'transform-origin': '50% 50% -' + s.size / 2 + 'px'
	                    });
	
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + -s.width / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + s.params.cube.shadowScale + ')');
	                        } else {
	                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
	                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
	                            var scale1 = s.params.cube.shadowScale,
	                                scale2 = s.params.cube.shadowScale / multiplier,
	                                offset = s.params.cube.shadowOffset;
	                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + -s.height / 2 / scale2 + 'px) rotateX(-90deg)');
	                        }
	                    }
	                    var zFactor = s.isSafari || s.isUiWebView ? -s.size / 2 : 0;
	                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
	                },
	                setTransition: function setTransition(duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.cube.shadow && !s.isHorizontal()) {
	                        s.container.find('.swiper-cube-shadow').transition(duration);
	                    }
	                }
	            },
	            coverflow: {
	                setTranslate: function setTranslate() {
	                    var transform = s.translate;
	                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
	                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate : -s.params.coverflow.rotate;
	                    var translate = s.params.coverflow.depth;
	                    //Each slide offset from center
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideSize = s.slidesSizesGrid[i];
	                        var slideOffset = slide[0].swiperSlideOffset;
	                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
	
	                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
	                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
	                        // var rotateZ = 0
	                        var translateZ = -translate * Math.abs(offsetMultiplier);
	
	                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * offsetMultiplier;
	                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * offsetMultiplier : 0;
	
	                        //Fix for ultra small values
	                        if (Math.abs(translateX) < 0.001) translateX = 0;
	                        if (Math.abs(translateY) < 0.001) translateY = 0;
	                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
	                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
	                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
	
	                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
	
	                        slide.transform(slideTransform);
	                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
	                        if (s.params.coverflow.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
	                        }
	                    }
	
	                    //Set correct perspective for IE10
	                    if (s.browser.ie) {
	                        var ws = s.wrapper[0].style;
	                        ws.perspectiveOrigin = center + 'px 50%';
	                    }
	                },
	                setTransition: function setTransition(duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                }
	            }
	        };
	
	        /*=========================
	          Images Lazy Loading
	          ===========================*/
	        s.lazy = {
	            initialImageLoaded: false,
	            loadImageInSlide: function loadImageInSlide(index, loadInDuplicate) {
	                if (typeof index === 'undefined') return;
	                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
	                if (s.slides.length === 0) return;
	
	                var slide = s.slides.eq(index);
	                var img = slide.find('.' + s.params.lazyLoadingClass + ':not(.' + s.params.lazyStatusLoadedClass + '):not(.' + s.params.lazyStatusLoadingClass + ')');
	                if (slide.hasClass(s.params.lazyLoadingClass) && !slide.hasClass(s.params.lazyStatusLoadedClass) && !slide.hasClass(s.params.lazyStatusLoadingClass)) {
	                    img = img.add(slide[0]);
	                }
	                if (img.length === 0) return;
	
	                img.each(function () {
	                    var _img = $(this);
	                    _img.addClass(s.params.lazyStatusLoadingClass);
	                    var background = _img.attr('data-background');
	                    var src = _img.attr('data-src'),
	                        srcset = _img.attr('data-srcset'),
	                        sizes = _img.attr('data-sizes');
	                    s.loadImage(_img[0], src || background, srcset, sizes, false, function () {
	                        if (typeof s === 'undefined' || s === null || !s) return;
	                        if (background) {
	                            _img.css('background-image', 'url("' + background + '")');
	                            _img.removeAttr('data-background');
	                        } else {
	                            if (srcset) {
	                                _img.attr('srcset', srcset);
	                                _img.removeAttr('data-srcset');
	                            }
	                            if (sizes) {
	                                _img.attr('sizes', sizes);
	                                _img.removeAttr('data-sizes');
	                            }
	                            if (src) {
	                                _img.attr('src', src);
	                                _img.removeAttr('data-src');
	                            }
	                        }
	
	                        _img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);
	                        slide.find('.' + s.params.lazyPreloaderClass + ', .' + s.params.preloaderClass).remove();
	                        if (s.params.loop && loadInDuplicate) {
	                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
	                            if (slide.hasClass(s.params.slideDuplicateClass)) {
	                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
	                                s.lazy.loadImageInSlide(originalSlide.index(), false);
	                            } else {
	                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
	                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
	                            }
	                        }
	                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
	                    });
	
	                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
	                });
	            },
	            load: function load() {
	                var i;
	                var slidesPerView = s.params.slidesPerView;
	                if (slidesPerView === 'auto') {
	                    slidesPerView = 0;
	                }
	                if (!s.lazy.initialImageLoaded) s.lazy.initialImageLoaded = true;
	                if (s.params.watchSlidesVisibility) {
	                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
	                        s.lazy.loadImageInSlide($(this).index());
	                    });
	                } else {
	                    if (slidesPerView > 1) {
	                        for (i = s.activeIndex; i < s.activeIndex + slidesPerView; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    } else {
	                        s.lazy.loadImageInSlide(s.activeIndex);
	                    }
	                }
	                if (s.params.lazyLoadingInPrevNext) {
	                    if (slidesPerView > 1 || s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1) {
	                        var amount = s.params.lazyLoadingInPrevNextAmount;
	                        var spv = slidesPerView;
	                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
	                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
	                        // Next Slides
	                        for (i = s.activeIndex + slidesPerView; i < maxIndex; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                        // Prev Slides
	                        for (i = minIndex; i < s.activeIndex; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    } else {
	                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
	                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
	
	                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
	                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
	                    }
	                }
	            },
	            onTransitionStart: function onTransitionStart() {
	                if (s.params.lazyLoading) {
	                    if (s.params.lazyLoadingOnTransitionStart || !s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded) {
	                        s.lazy.load();
	                    }
	                }
	            },
	            onTransitionEnd: function onTransitionEnd() {
	                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
	                    s.lazy.load();
	                }
	            }
	        };
	
	        /*=========================
	          Scrollbar
	          ===========================*/
	        s.scrollbar = {
	            isTouched: false,
	            setDragPosition: function setDragPosition(e) {
	                var sb = s.scrollbar;
	                var x = 0,
	                    y = 0;
	                var translate;
	                var pointerPosition = s.isHorizontal() ? e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX || e.clientX : e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY || e.clientY;
	                var position = pointerPosition - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
	                var positionMin = -s.minTranslate() * sb.moveDivider;
	                var positionMax = -s.maxTranslate() * sb.moveDivider;
	                if (position < positionMin) {
	                    position = positionMin;
	                } else if (position > positionMax) {
	                    position = positionMax;
	                }
	                position = -position / sb.moveDivider;
	                s.updateProgress(position);
	                s.setWrapperTranslate(position, true);
	            },
	            dragStart: function dragStart(e) {
	                var sb = s.scrollbar;
	                sb.isTouched = true;
	                e.preventDefault();
	                e.stopPropagation();
	
	                sb.setDragPosition(e);
	                clearTimeout(sb.dragTimeout);
	
	                sb.track.transition(0);
	                if (s.params.scrollbarHide) {
	                    sb.track.css('opacity', 1);
	                }
	                s.wrapper.transition(100);
	                sb.drag.transition(100);
	                s.emit('onScrollbarDragStart', s);
	            },
	            dragMove: function dragMove(e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                if (e.preventDefault) e.preventDefault();else e.returnValue = false;
	                sb.setDragPosition(e);
	                s.wrapper.transition(0);
	                sb.track.transition(0);
	                sb.drag.transition(0);
	                s.emit('onScrollbarDragMove', s);
	            },
	            dragEnd: function dragEnd(e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                sb.isTouched = false;
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.dragTimeout);
	                    sb.dragTimeout = setTimeout(function () {
	                        sb.track.css('opacity', 0);
	                        sb.track.transition(400);
	                    }, 1000);
	                }
	                s.emit('onScrollbarDragEnd', s);
	                if (s.params.scrollbarSnapOnRelease) {
	                    s.slideReset();
	                }
	            },
	            draggableEvents: function () {
	                if (s.params.simulateTouch === false && !s.support.touch) return s.touchEventsDesktop;else return s.touchEvents;
	            }(),
	            enableDraggable: function enableDraggable() {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).on(sb.draggableEvents.start, sb.dragStart);
	                $(target).on(sb.draggableEvents.move, sb.dragMove);
	                $(target).on(sb.draggableEvents.end, sb.dragEnd);
	            },
	            disableDraggable: function disableDraggable() {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).off(sb.draggableEvents.start, sb.dragStart);
	                $(target).off(sb.draggableEvents.move, sb.dragMove);
	                $(target).off(sb.draggableEvents.end, sb.dragEnd);
	            },
	            set: function set() {
	                if (!s.params.scrollbar) return;
	                var sb = s.scrollbar;
	                sb.track = $(s.params.scrollbar);
	                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
	                    sb.track = s.container.find(s.params.scrollbar);
	                }
	                sb.drag = sb.track.find('.swiper-scrollbar-drag');
	                if (sb.drag.length === 0) {
	                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
	                    sb.track.append(sb.drag);
	                }
	                sb.drag[0].style.width = '';
	                sb.drag[0].style.height = '';
	                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
	
	                sb.divider = s.size / s.virtualSize;
	                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
	                sb.dragSize = sb.trackSize * sb.divider;
	
	                if (s.isHorizontal()) {
	                    sb.drag[0].style.width = sb.dragSize + 'px';
	                } else {
	                    sb.drag[0].style.height = sb.dragSize + 'px';
	                }
	
	                if (sb.divider >= 1) {
	                    sb.track[0].style.display = 'none';
	                } else {
	                    sb.track[0].style.display = '';
	                }
	                if (s.params.scrollbarHide) {
	                    sb.track[0].style.opacity = 0;
	                }
	            },
	            setTranslate: function setTranslate() {
	                if (!s.params.scrollbar) return;
	                var diff;
	                var sb = s.scrollbar;
	                var translate = s.translate || 0;
	                var newPos;
	
	                var newSize = sb.dragSize;
	                newPos = (sb.trackSize - sb.dragSize) * s.progress;
	                if (s.rtl && s.isHorizontal()) {
	                    newPos = -newPos;
	                    if (newPos > 0) {
	                        newSize = sb.dragSize - newPos;
	                        newPos = 0;
	                    } else if (-newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize + newPos;
	                    }
	                } else {
	                    if (newPos < 0) {
	                        newSize = sb.dragSize + newPos;
	                        newPos = 0;
	                    } else if (newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize - newPos;
	                    }
	                }
	                if (s.isHorizontal()) {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(' + newPos + 'px, 0, 0)');
	                    } else {
	                        sb.drag.transform('translateX(' + newPos + 'px)');
	                    }
	                    sb.drag[0].style.width = newSize + 'px';
	                } else {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(0px, ' + newPos + 'px, 0)');
	                    } else {
	                        sb.drag.transform('translateY(' + newPos + 'px)');
	                    }
	                    sb.drag[0].style.height = newSize + 'px';
	                }
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.timeout);
	                    sb.track[0].style.opacity = 1;
	                    sb.timeout = setTimeout(function () {
	                        sb.track[0].style.opacity = 0;
	                        sb.track.transition(400);
	                    }, 1000);
	                }
	            },
	            setTransition: function setTransition(duration) {
	                if (!s.params.scrollbar) return;
	                s.scrollbar.drag.transition(duration);
	            }
	        };
	
	        /*=========================
	          Controller
	          ===========================*/
	        s.controller = {
	            LinearSpline: function LinearSpline(x, y) {
	                var binarySearch = function () {
	                    var maxIndex, minIndex, guess;
	                    return function (array, val) {
	                        minIndex = -1;
	                        maxIndex = array.length;
	                        while (maxIndex - minIndex > 1) {
	                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
	                                minIndex = guess;
	                            } else {
	                                maxIndex = guess;
	                            }
	                        }return maxIndex;
	                    };
	                }();
	                this.x = x;
	                this.y = y;
	                this.lastIndex = x.length - 1;
	                // Given an x value (x2), return the expected y2 value:
	                // (x1,y1) is the known point before given value,
	                // (x3,y3) is the known point after given value.
	                var i1, i3;
	                var l = this.x.length;
	
	                this.interpolate = function (x2) {
	                    if (!x2) return 0;
	
	                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
	                    i3 = binarySearch(this.x, x2);
	                    i1 = i3 - 1;
	
	                    // We have our indexes i1 & i3, so we can calculate already:
	                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
	                    return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
	                };
	            },
	            //xxx: for now i will just save one spline function to to
	            getInterpolateFunction: function getInterpolateFunction(c) {
	                if (!s.controller.spline) s.controller.spline = s.params.loop ? new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) : new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
	            },
	            setTranslate: function setTranslate(translate, byController) {
	                var controlled = s.params.control;
	                var multiplier, controlledTranslate;
	                function setControlledTranslate(c) {
	                    // this will create an Interpolate function based on the snapGrids
	                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
	                    // it makes sense to create this only once and recall it for the interpolation
	                    // the function does a lot of value caching for performance
	                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
	                    if (s.params.controlBy === 'slide') {
	                        s.controller.getInterpolateFunction(c);
	                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	                        // but it did not work out
	                        controlledTranslate = -s.controller.spline.interpolate(-translate);
	                    }
	
	                    if (!controlledTranslate || s.params.controlBy === 'container') {
	                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
	                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
	                    }
	
	                    if (s.params.controlInverse) {
	                        controlledTranslate = c.maxTranslate() - controlledTranslate;
	                    }
	                    c.updateProgress(controlledTranslate);
	                    c.setWrapperTranslate(controlledTranslate, false, s);
	                    c.updateActiveIndex();
	                }
	                if (Array.isArray(controlled)) {
	                    for (var i = 0; i < controlled.length; i++) {
	                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                            setControlledTranslate(controlled[i]);
	                        }
	                    }
	                } else if (controlled instanceof Swiper && byController !== controlled) {
	
	                    setControlledTranslate(controlled);
	                }
	            },
	            setTransition: function setTransition(duration, byController) {
	                var controlled = s.params.control;
	                var i;
	                function setControlledTransition(c) {
	                    c.setWrapperTransition(duration, s);
	                    if (duration !== 0) {
	                        c.onTransitionStart();
	                        c.wrapper.transitionEnd(function () {
	                            if (!controlled) return;
	                            if (c.params.loop && s.params.controlBy === 'slide') {
	                                c.fixLoop();
	                            }
	                            c.onTransitionEnd();
	                        });
	                    }
	                }
	                if (Array.isArray(controlled)) {
	                    for (i = 0; i < controlled.length; i++) {
	                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                            setControlledTransition(controlled[i]);
	                        }
	                    }
	                } else if (controlled instanceof Swiper && byController !== controlled) {
	                    setControlledTransition(controlled);
	                }
	            }
	        };
	
	        /*=========================
	          Hash Navigation
	          ===========================*/
	        s.hashnav = {
	            onHashCange: function onHashCange(e, a) {
	                var newHash = document.location.hash.replace('#', '');
	                var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
	                if (newHash !== activeSlideHash) {
	                    s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + newHash + '"]').index());
	                }
	            },
	            attachEvents: function attachEvents(detach) {
	                var action = detach ? 'off' : 'on';
	                $(window)[action]('hashchange', s.hashnav.onHashCange);
	            },
	            setHash: function setHash() {
	                if (!s.hashnav.initialized || !s.params.hashnav) return;
	                if (s.params.replaceState && window.history && window.history.replaceState) {
	                    window.history.replaceState(null, null, '#' + s.slides.eq(s.activeIndex).attr('data-hash') || '');
	                } else {
	                    var slide = s.slides.eq(s.activeIndex);
	                    var hash = slide.attr('data-hash') || slide.attr('data-history');
	                    document.location.hash = hash || '';
	                }
	            },
	            init: function init() {
	                if (!s.params.hashnav || s.params.history) return;
	                s.hashnav.initialized = true;
	                var hash = document.location.hash.replace('#', '');
	                if (hash) {
	                    var speed = 0;
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideHash = slide.attr('data-hash') || slide.attr('data-history');
	                        if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
	                            var index = slide.index();
	                            s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
	                        }
	                    }
	                }
	                if (s.params.hashnavWatchState) s.hashnav.attachEvents();
	            },
	            destroy: function destroy() {
	                if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
	            }
	        };
	
	        /*=========================
	          History Api with fallback to Hashnav
	          ===========================*/
	        s.history = {
	            init: function init() {
	                if (!s.params.history) return;
	                if (!window.history || !window.history.pushState) {
	                    s.params.history = false;
	                    s.params.hashnav = true;
	                    return;
	                }
	                s.history.initialized = true;
	                this.paths = this.getPathValues();
	                if (!this.paths.key && !this.paths.value) return;
	                this.scrollToSlide(0, this.paths.value, s.params.runCallbacksOnInit);
	                if (!s.params.replaceState) {
	                    window.addEventListener('popstate', this.setHistoryPopState);
	                }
	            },
	            setHistoryPopState: function setHistoryPopState() {
	                s.history.paths = s.history.getPathValues();
	                s.history.scrollToSlide(s.params.speed, s.history.paths.value, false);
	            },
	            getPathValues: function getPathValues() {
	                var pathArray = window.location.pathname.slice(1).split('/');
	                var total = pathArray.length;
	                var key = pathArray[total - 2];
	                var value = pathArray[total - 1];
	                return { key: key, value: value };
	            },
	            setHistory: function setHistory(key, index) {
	                if (!s.history.initialized || !s.params.history) return;
	                var slide = s.slides.eq(index);
	                var value = this.slugify(slide.attr('data-history'));
	                if (!window.location.pathname.includes(key)) {
	                    value = key + '/' + value;
	                }
	                if (s.params.replaceState) {
	                    window.history.replaceState(null, null, value);
	                } else {
	                    window.history.pushState(null, null, value);
	                }
	            },
	            slugify: function slugify(text) {
	                return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
	            },
	            scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
	                if (value) {
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideHistory = this.slugify(slide.attr('data-history'));
	                        if (slideHistory === value && !slide.hasClass(s.params.slideDuplicateClass)) {
	                            var index = slide.index();
	                            s.slideTo(index, speed, runCallbacks);
	                        }
	                    }
	                } else {
	                    s.slideTo(0, speed, runCallbacks);
	                }
	            }
	        };
	
	        /*=========================
	          Keyboard Control
	          ===========================*/
	        function handleKeyboard(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var kc = e.keyCode || e.charCode;
	            // Directions locks
	            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
	                return false;
	            }
	            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
	                return;
	            }
	            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
	                return;
	            }
	            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
	                var inView = false;
	                //Check that swiper should be inside of visible area of window
	                if (s.container.parents('.' + s.params.slideClass).length > 0 && s.container.parents('.' + s.params.slideActiveClass).length === 0) {
	                    return;
	                }
	                var windowScroll = {
	                    left: window.pageXOffset,
	                    top: window.pageYOffset
	                };
	                var windowWidth = window.innerWidth;
	                var windowHeight = window.innerHeight;
	                var swiperOffset = s.container.offset();
	                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
	                var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + s.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + s.height], [swiperOffset.left + s.width, swiperOffset.top + s.height]];
	                for (var i = 0; i < swiperCoord.length; i++) {
	                    var point = swiperCoord[i];
	                    if (point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth && point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight) {
	                        inView = true;
	                    }
	                }
	                if (!inView) return;
	            }
	            if (s.isHorizontal()) {
	                if (kc === 37 || kc === 39) {
	                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
	                }
	                if (kc === 39 && !s.rtl || kc === 37 && s.rtl) s.slideNext();
	                if (kc === 37 && !s.rtl || kc === 39 && s.rtl) s.slidePrev();
	            } else {
	                if (kc === 38 || kc === 40) {
	                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
	                }
	                if (kc === 40) s.slideNext();
	                if (kc === 38) s.slidePrev();
	            }
	            s.emit('onKeyPress', s, kc);
	        }
	        s.disableKeyboardControl = function () {
	            s.params.keyboardControl = false;
	            $(document).off('keydown', handleKeyboard);
	        };
	        s.enableKeyboardControl = function () {
	            s.params.keyboardControl = true;
	            $(document).on('keydown', handleKeyboard);
	        };
	
	        /*=========================
	          Mousewheel Control
	          ===========================*/
	        s.mousewheel = {
	            event: false,
	            lastScrollTime: new window.Date().getTime()
	        };
	        function isEventSupported() {
	            var eventName = 'onwheel';
	            var isSupported = eventName in document;
	
	            if (!isSupported) {
	                var element = document.createElement('div');
	                element.setAttribute(eventName, 'return;');
	                isSupported = typeof element[eventName] === 'function';
	            }
	
	            if (!isSupported && document.implementation && document.implementation.hasFeature &&
	            // always returns true in newer browsers as per the standard.
	            // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	            document.implementation.hasFeature('', '') !== true) {
	                // This is the only way to test support for the `wheel` event in IE9+.
	                isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	            }
	
	            return isSupported;
	        }
	        /**
	         * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
	         * complicated, thus this doc is long and (hopefully) detailed enough to answer
	         * your questions.
	         *
	         * If you need to react to the mouse wheel in a predictable way, this code is
	         * like your bestest friend. * hugs *
	         *
	         * As of today, there are 4 DOM event types you can listen to:
	         *
	         *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
	         *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
	         *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
	         *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
	         *
	         * So what to do?  The is the best:
	         *
	         *   normalizeWheel.getEventType();
	         *
	         * In your event callback, use this code to get sane interpretation of the
	         * deltas.  This code will return an object with properties:
	         *
	         *   spinX   -- normalized spin speed (use for zoom) - x plane
	         *   spinY   -- " - y plane
	         *   pixelX  -- normalized distance (to pixels) - x plane
	         *   pixelY  -- " - y plane
	         *
	         * Wheel values are provided by the browser assuming you are using the wheel to
	         * scroll a web page by a number of lines or pixels (or pages).  Values can vary
	         * significantly on different platforms and browsers, forgetting that you can
	         * scroll at different speeds.  Some devices (like trackpads) emit more events
	         * at smaller increments with fine granularity, and some emit massive jumps with
	         * linear speed or acceleration.
	         *
	         * This code does its best to normalize the deltas for you:
	         *
	         *   - spin is trying to normalize how far the wheel was spun (or trackpad
	         *     dragged).  This is super useful for zoom support where you want to
	         *     throw away the chunky scroll steps on the PC and make those equal to
	         *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
	         *     resolve a single slow step on a wheel to 1.
	         *
	         *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
	         *     get the crazy differences between browsers, but at least it'll be in
	         *     pixels!
	         *
	         *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
	         *     should translate to positive value zooming IN, negative zooming OUT.
	         *     This matches the newer 'wheel' event.
	         *
	         * Why are there spinX, spinY (or pixels)?
	         *
	         *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
	         *     with a mouse.  It results in side-scrolling in the browser by default.
	         *
	         *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
	         *
	         *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
	         *     probably is by browsers in conjunction with fancy 3D controllers .. but
	         *     you know.
	         *
	         * Implementation info:
	         *
	         * Examples of 'wheel' event if you scroll slowly (down) by one step with an
	         * average mouse:
	         *
	         *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
	         *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
	         *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
	         *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
	         *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
	         *
	         * On the trackpad:
	         *
	         *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
	         *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
	         *
	         * On other/older browsers.. it's more complicated as there can be multiple and
	         * also missing delta values.
	         *
	         * The 'wheel' event is more standard:
	         *
	         * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
	         *
	         * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
	         * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
	         * backward compatibility with older events.  Those other values help us
	         * better normalize spin speed.  Example of what the browsers provide:
	         *
	         *                          | event.wheelDelta | event.detail
	         *        ------------------+------------------+--------------
	         *          Safari v5/OS X  |       -120       |       0
	         *          Safari v5/Win7  |       -120       |       0
	         *         Chrome v17/OS X  |       -120       |       0
	         *         Chrome v17/Win7  |       -120       |       0
	         *                IE9/Win7  |       -120       |   undefined
	         *         Firefox v4/OS X  |     undefined    |       1
	         *         Firefox v4/Win7  |     undefined    |       3
	         *
	         */
	        function normalizeWheel( /*object*/event) /*object*/{
	            // Reasonable defaults
	            var PIXEL_STEP = 10;
	            var LINE_HEIGHT = 40;
	            var PAGE_HEIGHT = 800;
	
	            var sX = 0,
	                sY = 0,
	                // spinX, spinY
	            pX = 0,
	                pY = 0; // pixelX, pixelY
	
	            // Legacy
	            if ('detail' in event) {
	                sY = event.detail;
	            }
	            if ('wheelDelta' in event) {
	                sY = -event.wheelDelta / 120;
	            }
	            if ('wheelDeltaY' in event) {
	                sY = -event.wheelDeltaY / 120;
	            }
	            if ('wheelDeltaX' in event) {
	                sX = -event.wheelDeltaX / 120;
	            }
	
	            // side scrolling on FF with DOMMouseScroll
	            if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
	                sX = sY;
	                sY = 0;
	            }
	
	            pX = sX * PIXEL_STEP;
	            pY = sY * PIXEL_STEP;
	
	            if ('deltaY' in event) {
	                pY = event.deltaY;
	            }
	            if ('deltaX' in event) {
	                pX = event.deltaX;
	            }
	
	            if ((pX || pY) && event.deltaMode) {
	                if (event.deltaMode === 1) {
	                    // delta in LINE units
	                    pX *= LINE_HEIGHT;
	                    pY *= LINE_HEIGHT;
	                } else {
	                    // delta in PAGE units
	                    pX *= PAGE_HEIGHT;
	                    pY *= PAGE_HEIGHT;
	                }
	            }
	
	            // Fall-back if spin cannot be determined
	            if (pX && !sX) {
	                sX = pX < 1 ? -1 : 1;
	            }
	            if (pY && !sY) {
	                sY = pY < 1 ? -1 : 1;
	            }
	
	            return {
	                spinX: sX,
	                spinY: sY,
	                pixelX: pX,
	                pixelY: pY
	            };
	        }
	        if (s.params.mousewheelControl) {
	            /**
	             * The best combination if you prefer spinX + spinY normalization.  It favors
	             * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
	             * 'wheel' event, making spin speed determination impossible.
	             */
	            s.mousewheel.event = navigator.userAgent.indexOf('firefox') > -1 ? 'DOMMouseScroll' : isEventSupported() ? 'wheel' : 'mousewheel';
	        }
	        function handleMousewheel(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var delta = 0;
	            var rtlFactor = s.rtl ? -1 : 1;
	
	            var data = normalizeWheel(e);
	
	            if (s.params.mousewheelForceToAxis) {
	                if (s.isHorizontal()) {
	                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;else return;
	                } else {
	                    if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;else return;
	                }
	            } else {
	                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
	            }
	
	            if (delta === 0) return;
	
	            if (s.params.mousewheelInvert) delta = -delta;
	
	            if (!s.params.freeMode) {
	                if (new window.Date().getTime() - s.mousewheel.lastScrollTime > 60) {
	                    if (delta < 0) {
	                        if ((!s.isEnd || s.params.loop) && !s.animating) {
	                            s.slideNext();
	                            s.emit('onScroll', s, e);
	                        } else if (s.params.mousewheelReleaseOnEdges) return true;
	                    } else {
	                        if ((!s.isBeginning || s.params.loop) && !s.animating) {
	                            s.slidePrev();
	                            s.emit('onScroll', s, e);
	                        } else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                }
	                s.mousewheel.lastScrollTime = new window.Date().getTime();
	            } else {
	                //Freemode or scrollContainer:
	                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
	                var wasBeginning = s.isBeginning,
	                    wasEnd = s.isEnd;
	
	                if (position >= s.minTranslate()) position = s.minTranslate();
	                if (position <= s.maxTranslate()) position = s.maxTranslate();
	
	                s.setWrapperTransition(0);
	                s.setWrapperTranslate(position);
	                s.updateProgress();
	                s.updateActiveIndex();
	
	                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
	                    s.updateClasses();
	                }
	
	                if (s.params.freeModeSticky) {
	                    clearTimeout(s.mousewheel.timeout);
	                    s.mousewheel.timeout = setTimeout(function () {
	                        s.slideReset();
	                    }, 300);
	                } else {
	                    if (s.params.lazyLoading && s.lazy) {
	                        s.lazy.load();
	                    }
	                }
	                // Emit event
	                s.emit('onScroll', s, e);
	
	                // Stop autoplay
	                if (s.params.autoplay && s.params.autoplayDisableOnInteraction) s.stopAutoplay();
	
	                // Return page scroll on edge positions
	                if (position === 0 || position === s.maxTranslate()) return;
	            }
	
	            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
	            return false;
	        }
	        s.disableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            var target = s.container;
	            if (s.params.mousewheelEventsTarged !== 'container') {
	                target = $(s.params.mousewheelEventsTarged);
	            }
	            target.off(s.mousewheel.event, handleMousewheel);
	            s.params.mousewheelControl = false;
	            return true;
	        };
	
	        s.enableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            var target = s.container;
	            if (s.params.mousewheelEventsTarged !== 'container') {
	                target = $(s.params.mousewheelEventsTarged);
	            }
	            target.on(s.mousewheel.event, handleMousewheel);
	            s.params.mousewheelControl = true;
	            return true;
	        };
	
	        /*=========================
	          Parallax
	          ===========================*/
	        function setParallaxTransform(el, progress) {
	            el = $(el);
	            var p, pX, pY;
	            var rtlFactor = s.rtl ? -1 : 1;
	
	            p = el.attr('data-swiper-parallax') || '0';
	            pX = el.attr('data-swiper-parallax-x');
	            pY = el.attr('data-swiper-parallax-y');
	            if (pX || pY) {
	                pX = pX || '0';
	                pY = pY || '0';
	            } else {
	                if (s.isHorizontal()) {
	                    pX = p;
	                    pY = '0';
	                } else {
	                    pY = p;
	                    pX = '0';
	                }
	            }
	
	            if (pX.indexOf('%') >= 0) {
	                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
	            } else {
	                pX = pX * progress * rtlFactor + 'px';
	            }
	            if (pY.indexOf('%') >= 0) {
	                pY = parseInt(pY, 10) * progress + '%';
	            } else {
	                pY = pY * progress + 'px';
	            }
	
	            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
	        }
	        s.parallax = {
	            setTranslate: function setTranslate() {
	                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	                    setParallaxTransform(this, s.progress);
	                });
	                s.slides.each(function () {
	                    var slide = $(this);
	                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
	                        setParallaxTransform(this, progress);
	                    });
	                });
	            },
	            setTransition: function setTransition(duration) {
	                if (typeof duration === 'undefined') duration = s.params.speed;
	                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	                    var el = $(this);
	                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
	                    if (duration === 0) parallaxDuration = 0;
	                    el.transition(parallaxDuration);
	                });
	            }
	        };
	
	        /*=========================
	          Zoom
	          ===========================*/
	        s.zoom = {
	            // "Global" Props
	            scale: 1,
	            currentScale: 1,
	            isScaling: false,
	            gesture: {
	                slide: undefined,
	                slideWidth: undefined,
	                slideHeight: undefined,
	                image: undefined,
	                imageWrap: undefined,
	                zoomMax: s.params.zoomMax
	            },
	            image: {
	                isTouched: undefined,
	                isMoved: undefined,
	                currentX: undefined,
	                currentY: undefined,
	                minX: undefined,
	                minY: undefined,
	                maxX: undefined,
	                maxY: undefined,
	                width: undefined,
	                height: undefined,
	                startX: undefined,
	                startY: undefined,
	                touchesStart: {},
	                touchesCurrent: {}
	            },
	            velocity: {
	                x: undefined,
	                y: undefined,
	                prevPositionX: undefined,
	                prevPositionY: undefined,
	                prevTime: undefined
	            },
	            // Calc Scale From Multi-touches
	            getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
	                if (e.targetTouches.length < 2) return 1;
	                var x1 = e.targetTouches[0].pageX,
	                    y1 = e.targetTouches[0].pageY,
	                    x2 = e.targetTouches[1].pageX,
	                    y2 = e.targetTouches[1].pageY;
	                var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	                return distance;
	            },
	            // Events
	            onGestureStart: function onGestureStart(e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
	                        return;
	                    }
	                    z.gesture.scaleStart = z.getDistanceBetweenTouches(e);
	                }
	                if (!z.gesture.slide || !z.gesture.slide.length) {
	                    z.gesture.slide = $(this);
	                    if (z.gesture.slide.length === 0) z.gesture.slide = s.slides.eq(s.activeIndex);
	                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
	                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
	                    z.gesture.zoomMax = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
	                    if (z.gesture.imageWrap.length === 0) {
	                        z.gesture.image = undefined;
	                        return;
	                    }
	                }
	                z.gesture.image.transition(0);
	                z.isScaling = true;
	            },
	            onGestureChange: function onGestureChange(e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
	                        return;
	                    }
	                    z.gesture.scaleMove = z.getDistanceBetweenTouches(e);
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (s.support.gestures) {
	                    z.scale = e.scale * z.currentScale;
	                } else {
	                    z.scale = z.gesture.scaleMove / z.gesture.scaleStart * z.currentScale;
	                }
	                if (z.scale > z.gesture.zoomMax) {
	                    z.scale = z.gesture.zoomMax - 1 + Math.pow(z.scale - z.gesture.zoomMax + 1, 0.5);
	                }
	                if (z.scale < s.params.zoomMin) {
	                    z.scale = s.params.zoomMin + 1 - Math.pow(s.params.zoomMin - z.scale + 1, 0.5);
	                }
	                z.gesture.image.transform('translate3d(0,0,0) scale(' + z.scale + ')');
	            },
	            onGestureEnd: function onGestureEnd(e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2) {
	                        return;
	                    }
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                z.scale = Math.max(Math.min(z.scale, z.gesture.zoomMax), s.params.zoomMin);
	                z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale(' + z.scale + ')');
	                z.currentScale = z.scale;
	                z.isScaling = false;
	                if (z.scale === 1) z.gesture.slide = undefined;
	            },
	            onTouchStart: function onTouchStart(s, e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (z.image.isTouched) return;
	                if (s.device.os === 'android') e.preventDefault();
	                z.image.isTouched = true;
	                z.image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	                z.image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	            },
	            onTouchMove: function onTouchMove(e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                s.allowClick = false;
	                if (!z.image.isTouched || !z.gesture.slide) return;
	
	                if (!z.image.isMoved) {
	                    z.image.width = z.gesture.image[0].offsetWidth;
	                    z.image.height = z.gesture.image[0].offsetHeight;
	                    z.image.startX = s.getTranslate(z.gesture.imageWrap[0], 'x') || 0;
	                    z.image.startY = s.getTranslate(z.gesture.imageWrap[0], 'y') || 0;
	                    z.gesture.slideWidth = z.gesture.slide[0].offsetWidth;
	                    z.gesture.slideHeight = z.gesture.slide[0].offsetHeight;
	                    z.gesture.imageWrap.transition(0);
	                    if (s.rtl) z.image.startX = -z.image.startX;
	                    if (s.rtl) z.image.startY = -z.image.startY;
	                }
	                // Define if we need image drag
	                var scaledWidth = z.image.width * z.scale;
	                var scaledHeight = z.image.height * z.scale;
	
	                if (scaledWidth < z.gesture.slideWidth && scaledHeight < z.gesture.slideHeight) return;
	
	                z.image.minX = Math.min(z.gesture.slideWidth / 2 - scaledWidth / 2, 0);
	                z.image.maxX = -z.image.minX;
	                z.image.minY = Math.min(z.gesture.slideHeight / 2 - scaledHeight / 2, 0);
	                z.image.maxY = -z.image.minY;
	
	                z.image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                z.image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	
	                if (!z.image.isMoved && !z.isScaling) {
	                    if (s.isHorizontal() && Math.floor(z.image.minX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x < z.image.touchesStart.x || Math.floor(z.image.maxX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x > z.image.touchesStart.x) {
	                        z.image.isTouched = false;
	                        return;
	                    } else if (!s.isHorizontal() && Math.floor(z.image.minY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y < z.image.touchesStart.y || Math.floor(z.image.maxY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y > z.image.touchesStart.y) {
	                        z.image.isTouched = false;
	                        return;
	                    }
	                }
	                e.preventDefault();
	                e.stopPropagation();
	
	                z.image.isMoved = true;
	                z.image.currentX = z.image.touchesCurrent.x - z.image.touchesStart.x + z.image.startX;
	                z.image.currentY = z.image.touchesCurrent.y - z.image.touchesStart.y + z.image.startY;
	
	                if (z.image.currentX < z.image.minX) {
	                    z.image.currentX = z.image.minX + 1 - Math.pow(z.image.minX - z.image.currentX + 1, 0.8);
	                }
	                if (z.image.currentX > z.image.maxX) {
	                    z.image.currentX = z.image.maxX - 1 + Math.pow(z.image.currentX - z.image.maxX + 1, 0.8);
	                }
	
	                if (z.image.currentY < z.image.minY) {
	                    z.image.currentY = z.image.minY + 1 - Math.pow(z.image.minY - z.image.currentY + 1, 0.8);
	                }
	                if (z.image.currentY > z.image.maxY) {
	                    z.image.currentY = z.image.maxY - 1 + Math.pow(z.image.currentY - z.image.maxY + 1, 0.8);
	                }
	
	                //Velocity
	                if (!z.velocity.prevPositionX) z.velocity.prevPositionX = z.image.touchesCurrent.x;
	                if (!z.velocity.prevPositionY) z.velocity.prevPositionY = z.image.touchesCurrent.y;
	                if (!z.velocity.prevTime) z.velocity.prevTime = Date.now();
	                z.velocity.x = (z.image.touchesCurrent.x - z.velocity.prevPositionX) / (Date.now() - z.velocity.prevTime) / 2;
	                z.velocity.y = (z.image.touchesCurrent.y - z.velocity.prevPositionY) / (Date.now() - z.velocity.prevTime) / 2;
	                if (Math.abs(z.image.touchesCurrent.x - z.velocity.prevPositionX) < 2) z.velocity.x = 0;
	                if (Math.abs(z.image.touchesCurrent.y - z.velocity.prevPositionY) < 2) z.velocity.y = 0;
	                z.velocity.prevPositionX = z.image.touchesCurrent.x;
	                z.velocity.prevPositionY = z.image.touchesCurrent.y;
	                z.velocity.prevTime = Date.now();
	
	                z.gesture.imageWrap.transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
	            },
	            onTouchEnd: function onTouchEnd(s, e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (!z.image.isTouched || !z.image.isMoved) {
	                    z.image.isTouched = false;
	                    z.image.isMoved = false;
	                    return;
	                }
	                z.image.isTouched = false;
	                z.image.isMoved = false;
	                var momentumDurationX = 300;
	                var momentumDurationY = 300;
	                var momentumDistanceX = z.velocity.x * momentumDurationX;
	                var newPositionX = z.image.currentX + momentumDistanceX;
	                var momentumDistanceY = z.velocity.y * momentumDurationY;
	                var newPositionY = z.image.currentY + momentumDistanceY;
	
	                //Fix duration
	                if (z.velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - z.image.currentX) / z.velocity.x);
	                if (z.velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - z.image.currentY) / z.velocity.y);
	                var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
	
	                z.image.currentX = newPositionX;
	                z.image.currentY = newPositionY;
	
	                // Define if we need image drag
	                var scaledWidth = z.image.width * z.scale;
	                var scaledHeight = z.image.height * z.scale;
	                z.image.minX = Math.min(z.gesture.slideWidth / 2 - scaledWidth / 2, 0);
	                z.image.maxX = -z.image.minX;
	                z.image.minY = Math.min(z.gesture.slideHeight / 2 - scaledHeight / 2, 0);
	                z.image.maxY = -z.image.minY;
	                z.image.currentX = Math.max(Math.min(z.image.currentX, z.image.maxX), z.image.minX);
	                z.image.currentY = Math.max(Math.min(z.image.currentY, z.image.maxY), z.image.minY);
	
	                z.gesture.imageWrap.transition(momentumDuration).transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
	            },
	            onTransitionEnd: function onTransitionEnd(s) {
	                var z = s.zoom;
	                if (z.gesture.slide && s.previousIndex !== s.activeIndex) {
	                    z.gesture.image.transform('translate3d(0,0,0) scale(1)');
	                    z.gesture.imageWrap.transform('translate3d(0,0,0)');
	                    z.gesture.slide = z.gesture.image = z.gesture.imageWrap = undefined;
	                    z.scale = z.currentScale = 1;
	                }
	            },
	            // Toggle Zoom
	            toggleZoom: function toggleZoom(s, e) {
	                var z = s.zoom;
	                if (!z.gesture.slide) {
	                    z.gesture.slide = s.clickedSlide ? $(s.clickedSlide) : s.slides.eq(s.activeIndex);
	                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
	                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	
	                var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;
	
	                if (typeof z.image.touchesStart.x === 'undefined' && e) {
	                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
	                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
	                } else {
	                    touchX = z.image.touchesStart.x;
	                    touchY = z.image.touchesStart.y;
	                }
	
	                if (z.scale && z.scale !== 1) {
	                    // Zoom Out
	                    z.scale = z.currentScale = 1;
	                    z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');
	                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');
	                    z.gesture.slide = undefined;
	                } else {
	                    // Zoom In
	                    z.scale = z.currentScale = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
	                    if (e) {
	                        slideWidth = z.gesture.slide[0].offsetWidth;
	                        slideHeight = z.gesture.slide[0].offsetHeight;
	                        offsetX = z.gesture.slide.offset().left;
	                        offsetY = z.gesture.slide.offset().top;
	                        diffX = offsetX + slideWidth / 2 - touchX;
	                        diffY = offsetY + slideHeight / 2 - touchY;
	
	                        imageWidth = z.gesture.image[0].offsetWidth;
	                        imageHeight = z.gesture.image[0].offsetHeight;
	                        scaledWidth = imageWidth * z.scale;
	                        scaledHeight = imageHeight * z.scale;
	
	                        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
	                        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
	                        translateMaxX = -translateMinX;
	                        translateMaxY = -translateMinY;
	
	                        translateX = diffX * z.scale;
	                        translateY = diffY * z.scale;
	
	                        if (translateX < translateMinX) {
	                            translateX = translateMinX;
	                        }
	                        if (translateX > translateMaxX) {
	                            translateX = translateMaxX;
	                        }
	
	                        if (translateY < translateMinY) {
	                            translateY = translateMinY;
	                        }
	                        if (translateY > translateMaxY) {
	                            translateY = translateMaxY;
	                        }
	                    } else {
	                        translateX = 0;
	                        translateY = 0;
	                    }
	                    z.gesture.imageWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
	                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + z.scale + ')');
	                }
	            },
	            // Attach/Detach Events
	            attachEvents: function attachEvents(detach) {
	                var action = detach ? 'off' : 'on';
	
	                if (s.params.zoom) {
	                    var target = s.slides;
	                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? { passive: true, capture: false } : false;
	                    // Scale image
	                    if (s.support.gestures) {
	                        s.slides[action]('gesturestart', s.zoom.onGestureStart, passiveListener);
	                        s.slides[action]('gesturechange', s.zoom.onGestureChange, passiveListener);
	                        s.slides[action]('gestureend', s.zoom.onGestureEnd, passiveListener);
	                    } else if (s.touchEvents.start === 'touchstart') {
	                        s.slides[action](s.touchEvents.start, s.zoom.onGestureStart, passiveListener);
	                        s.slides[action](s.touchEvents.move, s.zoom.onGestureChange, passiveListener);
	                        s.slides[action](s.touchEvents.end, s.zoom.onGestureEnd, passiveListener);
	                    }
	
	                    // Move image
	                    s[action]('touchStart', s.zoom.onTouchStart);
	                    s.slides.each(function (index, slide) {
	                        if ($(slide).find('.' + s.params.zoomContainerClass).length > 0) {
	                            $(slide)[action](s.touchEvents.move, s.zoom.onTouchMove);
	                        }
	                    });
	                    s[action]('touchEnd', s.zoom.onTouchEnd);
	
	                    // Scale Out
	                    s[action]('transitionEnd', s.zoom.onTransitionEnd);
	                    if (s.params.zoomToggle) {
	                        s.on('doubleTap', s.zoom.toggleZoom);
	                    }
	                }
	            },
	            init: function init() {
	                s.zoom.attachEvents();
	            },
	            destroy: function destroy() {
	                s.zoom.attachEvents(true);
	            }
	        };
	
	        /*=========================
	          Plugins API. Collect all and init all plugins
	          ===========================*/
	        s._plugins = [];
	        for (var plugin in s.plugins) {
	            var p = s.plugins[plugin](s, s.params[plugin]);
	            if (p) s._plugins.push(p);
	        }
	        // Method to call all plugins event/method
	        s.callPlugins = function (eventName) {
	            for (var i = 0; i < s._plugins.length; i++) {
	                if (eventName in s._plugins[i]) {
	                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	        };
	
	        /*=========================
	          Events/Callbacks/Plugins Emitter
	          ===========================*/
	        function normalizeEventName(eventName) {
	            if (eventName.indexOf('on') !== 0) {
	                if (eventName[0] !== eventName[0].toUpperCase()) {
	                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
	                } else {
	                    eventName = 'on' + eventName;
	                }
	            }
	            return eventName;
	        }
	        s.emitterEventListeners = {};
	        s.emit = function (eventName) {
	            // Trigger callbacks
	            if (s.params[eventName]) {
	                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	            }
	            var i;
	            // Trigger events
	            if (s.emitterEventListeners[eventName]) {
	                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	            // Trigger plugins
	            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        };
	        s.on = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
	            s.emitterEventListeners[eventName].push(handler);
	            return s;
	        };
	        s.off = function (eventName, handler) {
	            var i;
	            eventName = normalizeEventName(eventName);
	            if (typeof handler === 'undefined') {
	                // Remove all handlers for such event
	                s.emitterEventListeners[eventName] = [];
	                return s;
	            }
	            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
	            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                if (s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
	            }
	            return s;
	        };
	        s.once = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            var _handler = function _handler() {
	                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
	                s.off(eventName, _handler);
	            };
	            s.on(eventName, _handler);
	            return s;
	        };
	
	        // Accessibility tools
	        s.a11y = {
	            makeFocusable: function makeFocusable($el) {
	                $el.attr('tabIndex', '0');
	                return $el;
	            },
	            addRole: function addRole($el, role) {
	                $el.attr('role', role);
	                return $el;
	            },
	
	            addLabel: function addLabel($el, label) {
	                $el.attr('aria-label', label);
	                return $el;
	            },
	
	            disable: function disable($el) {
	                $el.attr('aria-disabled', true);
	                return $el;
	            },
	
	            enable: function enable($el) {
	                $el.attr('aria-disabled', false);
	                return $el;
	            },
	
	            onEnterKey: function onEnterKey(event) {
	                if (event.keyCode !== 13) return;
	                if ($(event.target).is(s.params.nextButton)) {
	                    s.onClickNext(event);
	                    if (s.isEnd) {
	                        s.a11y.notify(s.params.lastSlideMessage);
	                    } else {
	                        s.a11y.notify(s.params.nextSlideMessage);
	                    }
	                } else if ($(event.target).is(s.params.prevButton)) {
	                    s.onClickPrev(event);
	                    if (s.isBeginning) {
	                        s.a11y.notify(s.params.firstSlideMessage);
	                    } else {
	                        s.a11y.notify(s.params.prevSlideMessage);
	                    }
	                }
	                if ($(event.target).is('.' + s.params.bulletClass)) {
	                    $(event.target)[0].click();
	                }
	            },
	
	            liveRegion: $('<span class="' + s.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
	
	            notify: function notify(message) {
	                var notification = s.a11y.liveRegion;
	                if (notification.length === 0) return;
	                notification.html('');
	                notification.html(message);
	            },
	            init: function init() {
	                // Setup accessibility
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    s.a11y.makeFocusable(s.nextButton);
	                    s.a11y.addRole(s.nextButton, 'button');
	                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
	                }
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    s.a11y.makeFocusable(s.prevButton);
	                    s.a11y.addRole(s.prevButton, 'button');
	                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
	                }
	
	                $(s.container).append(s.a11y.liveRegion);
	            },
	            initPagination: function initPagination() {
	                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
	                    s.bullets.each(function () {
	                        var bullet = $(this);
	                        s.a11y.makeFocusable(bullet);
	                        s.a11y.addRole(bullet, 'button');
	                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
	                    });
	                }
	            },
	            destroy: function destroy() {
	                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
	            }
	        };
	
	        /*=========================
	          Init/Destroy
	          ===========================*/
	        s.init = function () {
	            if (s.params.loop) s.createLoop();
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.enableDraggable();
	                }
	            }
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                if (!s.params.loop) s.updateProgress();
	                s.effects[s.params.effect].setTranslate();
	            }
	            if (s.params.loop) {
	                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
	            } else {
	                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
	                if (s.params.initialSlide === 0) {
	                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
	                    if (s.lazy && s.params.lazyLoading) {
	                        s.lazy.load();
	                        s.lazy.initialImageLoaded = true;
	                    }
	                }
	            }
	            s.attachEvents();
	            if (s.params.observer && s.support.observer) {
	                s.initObservers();
	            }
	            if (s.params.preloadImages && !s.params.lazyLoading) {
	                s.preloadImages();
	            }
	            if (s.params.zoom && s.zoom) {
	                s.zoom.init();
	            }
	            if (s.params.autoplay) {
	                s.startAutoplay();
	            }
	            if (s.params.keyboardControl) {
	                if (s.enableKeyboardControl) s.enableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.enableMousewheelControl) s.enableMousewheelControl();
	            }
	            // Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
	            if (s.params.hashnavReplaceState) {
	                s.params.replaceState = s.params.hashnavReplaceState;
	            }
	            if (s.params.history) {
	                if (s.history) s.history.init();
	            }
	            if (s.params.hashnav) {
	                if (s.hashnav) s.hashnav.init();
	            }
	            if (s.params.a11y && s.a11y) s.a11y.init();
	            s.emit('onInit', s);
	        };
	
	        // Cleanup dynamic styles
	        s.cleanupStyles = function () {
	            // Container
	            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
	
	            // Wrapper
	            s.wrapper.removeAttr('style');
	
	            // Slides
	            if (s.slides && s.slides.length) {
	                s.slides.removeClass([s.params.slideVisibleClass, s.params.slideActiveClass, s.params.slideNextClass, s.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
	            }
	
	            // Pagination/Bullets
	            if (s.paginationContainer && s.paginationContainer.length) {
	                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
	            }
	            if (s.bullets && s.bullets.length) {
	                s.bullets.removeClass(s.params.bulletActiveClass);
	            }
	
	            // Buttons
	            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
	            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
	
	            // Scrollbar
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
	                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
	            }
	        };
	
	        // Destroy
	        s.destroy = function (deleteInstance, cleanupStyles) {
	            // Detach evebts
	            s.detachEvents();
	            // Stop autoplay
	            s.stopAutoplay();
	            // Disable draggable
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.disableDraggable();
	                }
	            }
	            // Destroy loop
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            // Cleanup styles
	            if (cleanupStyles) {
	                s.cleanupStyles();
	            }
	            // Disconnect observer
	            s.disconnectObservers();
	
	            // Destroy zoom
	            if (s.params.zoom && s.zoom) {
	                s.zoom.destroy();
	            }
	            // Disable keyboard/mousewheel
	            if (s.params.keyboardControl) {
	                if (s.disableKeyboardControl) s.disableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.disableMousewheelControl) s.disableMousewheelControl();
	            }
	            // Disable a11y
	            if (s.params.a11y && s.a11y) s.a11y.destroy();
	            // Delete history popstate
	            if (s.params.history && !s.params.replaceState) {
	                window.removeEventListener('popstate', s.history.setHistoryPopState);
	            }
	            if (s.params.hashnav && s.hashnav) {
	                s.hashnav.destroy();
	            }
	            // Destroy callback
	            s.emit('onDestroy');
	            // Delete instance
	            if (deleteInstance !== false) s = null;
	        };
	
	        s.init();
	
	        // Return swiper instance
	        return s;
	    };
	
	    /*==================================================
	        Prototype
	    ====================================================*/
	    Swiper.prototype = {
	        isSafari: function () {
	            var ua = window.navigator.userAgent.toLowerCase();
	            return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
	        }(),
	        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
	        isArray: function isArray(arr) {
	            return Object.prototype.toString.apply(arr) === '[object Array]';
	        },
	        /*==================================================
	        Browser
	        ====================================================*/
	        browser: {
	            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
	            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
	            lteIE9: function () {
	                // create temporary DIV
	                var div = document.createElement('div');
	                // add content to tmp DIV which is wrapped into the IE HTML conditional statement
	                div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
	                // return true / false value based on what will browser render
	                return div.getElementsByTagName('i').length === 1;
	            }()
	        },
	        /*==================================================
	        Devices
	        ====================================================*/
	        device: function () {
	            var ua = window.navigator.userAgent;
	            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	            var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
	            return {
	                ios: ipad || iphone || ipod,
	                android: android
	            };
	        }(),
	        /*==================================================
	        Feature Detection
	        ====================================================*/
	        support: {
	            touch: window.Modernizr && Modernizr.touch === true || function () {
	                return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
	            }(),
	
	            transforms3d: window.Modernizr && Modernizr.csstransforms3d === true || function () {
	                var div = document.createElement('div').style;
	                return 'webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div;
	            }(),
	
	            flexbox: function () {
	                var div = document.createElement('div').style;
	                var styles = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');
	                for (var i = 0; i < styles.length; i++) {
	                    if (styles[i] in div) return true;
	                }
	            }(),
	
	            observer: function () {
	                return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
	            }(),
	
	            passiveListener: function () {
	                var supportsPassive = false;
	                try {
	                    var opts = Object.defineProperty({}, 'passive', {
	                        get: function get() {
	                            supportsPassive = true;
	                        }
	                    });
	                    window.addEventListener('testPassiveListener', null, opts);
	                } catch (e) {}
	                return supportsPassive;
	            }(),
	
	            gestures: function () {
	                return 'ongesturestart' in window;
	            }()
	        },
	        /*==================================================
	        Plugins
	        ====================================================*/
	        plugins: {}
	    };
	
	    /*===========================
	    Dom7 Library
	    ===========================*/
	    var Dom7 = function () {
	        var Dom7 = function Dom7(arr) {
	            var _this = this,
	                i = 0;
	            // Create array-like object
	            for (i = 0; i < arr.length; i++) {
	                _this[i] = arr[i];
	            }
	            _this.length = arr.length;
	            // Return collection with methods
	            return this;
	        };
	        var $ = function $(selector, context) {
	            var arr = [],
	                i = 0;
	            if (selector && !context) {
	                if (selector instanceof Dom7) {
	                    return selector;
	                }
	            }
	            if (selector) {
	                // String
	                if (typeof selector === 'string') {
	                    var els,
	                        tempParent,
	                        html = selector.trim();
	                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
	                        var toCreate = 'div';
	                        if (html.indexOf('<li') === 0) toCreate = 'ul';
	                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
	                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
	                        if (html.indexOf('<tbody') === 0) toCreate = 'table';
	                        if (html.indexOf('<option') === 0) toCreate = 'select';
	                        tempParent = document.createElement(toCreate);
	                        tempParent.innerHTML = selector;
	                        for (i = 0; i < tempParent.childNodes.length; i++) {
	                            arr.push(tempParent.childNodes[i]);
	                        }
	                    } else {
	                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
	                            // Pure ID selector
	                            els = [document.getElementById(selector.split('#')[1])];
	                        } else {
	                            // Other selectors
	                            els = (context || document).querySelectorAll(selector);
	                        }
	                        for (i = 0; i < els.length; i++) {
	                            if (els[i]) arr.push(els[i]);
	                        }
	                    }
	                }
	                // Node/element
	                else if (selector.nodeType || selector === window || selector === document) {
	                        arr.push(selector);
	                    }
	                    //Array of elements or instance of Dom
	                    else if (selector.length > 0 && selector[0].nodeType) {
	                            for (i = 0; i < selector.length; i++) {
	                                arr.push(selector[i]);
	                            }
	                        }
	            }
	            return new Dom7(arr);
	        };
	        Dom7.prototype = {
	            // Classes and attriutes
	            addClass: function addClass(className) {
	                if (typeof className === 'undefined') {
	                    return this;
	                }
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.add(classes[i]);
	                    }
	                }
	                return this;
	            },
	            removeClass: function removeClass(className) {
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.remove(classes[i]);
	                    }
	                }
	                return this;
	            },
	            hasClass: function hasClass(className) {
	                if (!this[0]) return false;else return this[0].classList.contains(className);
	            },
	            toggleClass: function toggleClass(className) {
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.toggle(classes[i]);
	                    }
	                }
	                return this;
	            },
	            attr: function attr(attrs, value) {
	                if (arguments.length === 1 && typeof attrs === 'string') {
	                    // Get attr
	                    if (this[0]) return this[0].getAttribute(attrs);else return undefined;
	                } else {
	                    // Set attrs
	                    for (var i = 0; i < this.length; i++) {
	                        if (arguments.length === 2) {
	                            // String
	                            this[i].setAttribute(attrs, value);
	                        } else {
	                            // Object
	                            for (var attrName in attrs) {
	                                this[i][attrName] = attrs[attrName];
	                                this[i].setAttribute(attrName, attrs[attrName]);
	                            }
	                        }
	                    }
	                    return this;
	                }
	            },
	            removeAttr: function removeAttr(attr) {
	                for (var i = 0; i < this.length; i++) {
	                    this[i].removeAttribute(attr);
	                }
	                return this;
	            },
	            data: function data(key, value) {
	                if (typeof value === 'undefined') {
	                    // Get value
	                    if (this[0]) {
	                        var dataKey = this[0].getAttribute('data-' + key);
	                        if (dataKey) return dataKey;else if (this[0].dom7ElementDataStorage && key in this[0].dom7ElementDataStorage) return this[0].dom7ElementDataStorage[key];else return undefined;
	                    } else return undefined;
	                } else {
	                    // Set value
	                    for (var i = 0; i < this.length; i++) {
	                        var el = this[i];
	                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
	                        el.dom7ElementDataStorage[key] = value;
	                    }
	                    return this;
	                }
	            },
	            // Transforms
	            transform: function transform(_transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = _transform;
	                }
	                return this;
	            },
	            transition: function transition(duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            },
	            //Events
	            on: function on(eventName, targetSelector, listener, capture) {
	                function handleLiveEvent(e) {
	                    var target = e.target;
	                    if ($(target).is(targetSelector)) listener.call(target, e);else {
	                        var parents = $(target).parents();
	                        for (var k = 0; k < parents.length; k++) {
	                            if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
	                        }
	                    }
	                }
	                var events = eventName.split(' ');
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof targetSelector === 'function' || targetSelector === false) {
	                        // Usual events
	                        if (typeof targetSelector === 'function') {
	                            listener = arguments[1];
	                            capture = arguments[2] || false;
	                        }
	                        for (j = 0; j < events.length; j++) {
	                            this[i].addEventListener(events[j], listener, capture);
	                        }
	                    } else {
	                        //Live events
	                        for (j = 0; j < events.length; j++) {
	                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
	                            this[i].dom7LiveListeners.push({ listener: listener, liveListener: handleLiveEvent });
	                            this[i].addEventListener(events[j], handleLiveEvent, capture);
	                        }
	                    }
	                }
	
	                return this;
	            },
	            off: function off(eventName, targetSelector, listener, capture) {
	                var events = eventName.split(' ');
	                for (var i = 0; i < events.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        if (typeof targetSelector === 'function' || targetSelector === false) {
	                            // Usual events
	                            if (typeof targetSelector === 'function') {
	                                listener = arguments[1];
	                                capture = arguments[2] || false;
	                            }
	                            this[j].removeEventListener(events[i], listener, capture);
	                        } else {
	                            // Live event
	                            if (this[j].dom7LiveListeners) {
	                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
	                                    if (this[j].dom7LiveListeners[k].listener === listener) {
	                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	                return this;
	            },
	            once: function once(eventName, targetSelector, listener, capture) {
	                var dom = this;
	                if (typeof targetSelector === 'function') {
	                    targetSelector = false;
	                    listener = arguments[1];
	                    capture = arguments[2];
	                }
	                function proxy(e) {
	                    listener(e);
	                    dom.off(eventName, targetSelector, proxy, capture);
	                }
	                dom.on(eventName, targetSelector, proxy, capture);
	            },
	            trigger: function trigger(eventName, eventData) {
	                for (var i = 0; i < this.length; i++) {
	                    var evt;
	                    try {
	                        evt = new window.CustomEvent(eventName, { detail: eventData, bubbles: true, cancelable: true });
	                    } catch (e) {
	                        evt = document.createEvent('Event');
	                        evt.initEvent(eventName, true, true);
	                        evt.detail = eventData;
	                    }
	                    this[i].dispatchEvent(evt);
	                }
	                return this;
	            },
	            transitionEnd: function transitionEnd(callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i,
	                    j,
	                    dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            },
	            // Sizing/Styles
	            width: function width() {
	                if (this[0] === window) {
	                    return window.innerWidth;
	                } else {
	                    if (this.length > 0) {
	                        return parseFloat(this.css('width'));
	                    } else {
	                        return null;
	                    }
	                }
	            },
	            outerWidth: function outerWidth(includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins) return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));else return this[0].offsetWidth;
	                } else return null;
	            },
	            height: function height() {
	                if (this[0] === window) {
	                    return window.innerHeight;
	                } else {
	                    if (this.length > 0) {
	                        return parseFloat(this.css('height'));
	                    } else {
	                        return null;
	                    }
	                }
	            },
	            outerHeight: function outerHeight(includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins) return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));else return this[0].offsetHeight;
	                } else return null;
	            },
	            offset: function offset() {
	                if (this.length > 0) {
	                    var el = this[0];
	                    var box = el.getBoundingClientRect();
	                    var body = document.body;
	                    var clientTop = el.clientTop || body.clientTop || 0;
	                    var clientLeft = el.clientLeft || body.clientLeft || 0;
	                    var scrollTop = window.pageYOffset || el.scrollTop;
	                    var scrollLeft = window.pageXOffset || el.scrollLeft;
	                    return {
	                        top: box.top + scrollTop - clientTop,
	                        left: box.left + scrollLeft - clientLeft
	                    };
	                } else {
	                    return null;
	                }
	            },
	            css: function css(props, value) {
	                var i;
	                if (arguments.length === 1) {
	                    if (typeof props === 'string') {
	                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
	                    } else {
	                        for (i = 0; i < this.length; i++) {
	                            for (var prop in props) {
	                                this[i].style[prop] = props[prop];
	                            }
	                        }
	                        return this;
	                    }
	                }
	                if (arguments.length === 2 && typeof props === 'string') {
	                    for (i = 0; i < this.length; i++) {
	                        this[i].style[props] = value;
	                    }
	                    return this;
	                }
	                return this;
	            },
	
	            //Dom manipulation
	            each: function each(callback) {
	                for (var i = 0; i < this.length; i++) {
	                    callback.call(this[i], i, this[i]);
	                }
	                return this;
	            },
	            html: function html(_html) {
	                if (typeof _html === 'undefined') {
	                    return this[0] ? this[0].innerHTML : undefined;
	                } else {
	                    for (var i = 0; i < this.length; i++) {
	                        this[i].innerHTML = _html;
	                    }
	                    return this;
	                }
	            },
	            text: function text(_text) {
	                if (typeof _text === 'undefined') {
	                    if (this[0]) {
	                        return this[0].textContent.trim();
	                    } else return null;
	                } else {
	                    for (var i = 0; i < this.length; i++) {
	                        this[i].textContent = _text;
	                    }
	                    return this;
	                }
	            },
	            is: function is(selector) {
	                if (!this[0]) return false;
	                var compareWith, i;
	                if (typeof selector === 'string') {
	                    var el = this[0];
	                    if (el === document) return selector === document;
	                    if (el === window) return selector === window;
	
	                    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);else {
	                        compareWith = $(selector);
	                        for (i = 0; i < compareWith.length; i++) {
	                            if (compareWith[i] === this[0]) return true;
	                        }
	                        return false;
	                    }
	                } else if (selector === document) return this[0] === document;else if (selector === window) return this[0] === window;else {
	                    if (selector.nodeType || selector instanceof Dom7) {
	                        compareWith = selector.nodeType ? [selector] : selector;
	                        for (i = 0; i < compareWith.length; i++) {
	                            if (compareWith[i] === this[0]) return true;
	                        }
	                        return false;
	                    }
	                    return false;
	                }
	            },
	            index: function index() {
	                if (this[0]) {
	                    var child = this[0];
	                    var i = 0;
	                    while ((child = child.previousSibling) !== null) {
	                        if (child.nodeType === 1) i++;
	                    }
	                    return i;
	                } else return undefined;
	            },
	            eq: function eq(index) {
	                if (typeof index === 'undefined') return this;
	                var length = this.length;
	                var returnIndex;
	                if (index > length - 1) {
	                    return new Dom7([]);
	                }
	                if (index < 0) {
	                    returnIndex = length + index;
	                    if (returnIndex < 0) return new Dom7([]);else return new Dom7([this[returnIndex]]);
	                }
	                return new Dom7([this[index]]);
	            },
	            append: function append(newChild) {
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof newChild === 'string') {
	                        var tempDiv = document.createElement('div');
	                        tempDiv.innerHTML = newChild;
	                        while (tempDiv.firstChild) {
	                            this[i].appendChild(tempDiv.firstChild);
	                        }
	                    } else if (newChild instanceof Dom7) {
	                        for (j = 0; j < newChild.length; j++) {
	                            this[i].appendChild(newChild[j]);
	                        }
	                    } else {
	                        this[i].appendChild(newChild);
	                    }
	                }
	                return this;
	            },
	            prepend: function prepend(newChild) {
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof newChild === 'string') {
	                        var tempDiv = document.createElement('div');
	                        tempDiv.innerHTML = newChild;
	                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
	                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
	                        }
	                        // this[i].insertAdjacentHTML('afterbegin', newChild);
	                    } else if (newChild instanceof Dom7) {
	                        for (j = 0; j < newChild.length; j++) {
	                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
	                        }
	                    } else {
	                        this[i].insertBefore(newChild, this[i].childNodes[0]);
	                    }
	                }
	                return this;
	            },
	            insertBefore: function insertBefore(selector) {
	                var before = $(selector);
	                for (var i = 0; i < this.length; i++) {
	                    if (before.length === 1) {
	                        before[0].parentNode.insertBefore(this[i], before[0]);
	                    } else if (before.length > 1) {
	                        for (var j = 0; j < before.length; j++) {
	                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
	                        }
	                    }
	                }
	            },
	            insertAfter: function insertAfter(selector) {
	                var after = $(selector);
	                for (var i = 0; i < this.length; i++) {
	                    if (after.length === 1) {
	                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
	                    } else if (after.length > 1) {
	                        for (var j = 0; j < after.length; j++) {
	                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
	                        }
	                    }
	                }
	            },
	            next: function next(selector) {
	                if (this.length > 0) {
	                    if (selector) {
	                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);
	                    } else {
	                        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);
	                    }
	                } else return new Dom7([]);
	            },
	            nextAll: function nextAll(selector) {
	                var nextEls = [];
	                var el = this[0];
	                if (!el) return new Dom7([]);
	                while (el.nextElementSibling) {
	                    var next = el.nextElementSibling;
	                    if (selector) {
	                        if ($(next).is(selector)) nextEls.push(next);
	                    } else nextEls.push(next);
	                    el = next;
	                }
	                return new Dom7(nextEls);
	            },
	            prev: function prev(selector) {
	                if (this.length > 0) {
	                    if (selector) {
	                        if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);
	                    } else {
	                        if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);
	                    }
	                } else return new Dom7([]);
	            },
	            prevAll: function prevAll(selector) {
	                var prevEls = [];
	                var el = this[0];
	                if (!el) return new Dom7([]);
	                while (el.previousElementSibling) {
	                    var prev = el.previousElementSibling;
	                    if (selector) {
	                        if ($(prev).is(selector)) prevEls.push(prev);
	                    } else prevEls.push(prev);
	                    el = prev;
	                }
	                return new Dom7(prevEls);
	            },
	            parent: function parent(selector) {
	                var parents = [];
	                for (var i = 0; i < this.length; i++) {
	                    if (selector) {
	                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
	                    } else {
	                        parents.push(this[i].parentNode);
	                    }
	                }
	                return $($.unique(parents));
	            },
	            parents: function parents(selector) {
	                var parents = [];
	                for (var i = 0; i < this.length; i++) {
	                    var parent = this[i].parentNode;
	                    while (parent) {
	                        if (selector) {
	                            if ($(parent).is(selector)) parents.push(parent);
	                        } else {
	                            parents.push(parent);
	                        }
	                        parent = parent.parentNode;
	                    }
	                }
	                return $($.unique(parents));
	            },
	            find: function find(selector) {
	                var foundElements = [];
	                for (var i = 0; i < this.length; i++) {
	                    var found = this[i].querySelectorAll(selector);
	                    for (var j = 0; j < found.length; j++) {
	                        foundElements.push(found[j]);
	                    }
	                }
	                return new Dom7(foundElements);
	            },
	            children: function children(selector) {
	                var children = [];
	                for (var i = 0; i < this.length; i++) {
	                    var childNodes = this[i].childNodes;
	
	                    for (var j = 0; j < childNodes.length; j++) {
	                        if (!selector) {
	                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
	                        } else {
	                            if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
	                        }
	                    }
	                }
	                return new Dom7($.unique(children));
	            },
	            remove: function remove() {
	                for (var i = 0; i < this.length; i++) {
	                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
	                }
	                return this;
	            },
	            add: function add() {
	                var dom = this;
	                var i, j;
	                for (i = 0; i < arguments.length; i++) {
	                    var toAdd = $(arguments[i]);
	                    for (j = 0; j < toAdd.length; j++) {
	                        dom[dom.length] = toAdd[j];
	                        dom.length++;
	                    }
	                }
	                return dom;
	            }
	        };
	        $.fn = Dom7.prototype;
	        $.unique = function (arr) {
	            var unique = [];
	            for (var i = 0; i < arr.length; i++) {
	                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
	            }
	            return unique;
	        };
	
	        return $;
	    }();
	
	    /*===========================
	     Get Dom libraries
	     ===========================*/
	    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
	    for (var i = 0; i < swiperDomPlugins.length; i++) {
	        if (window[swiperDomPlugins[i]]) {
	            addLibraryPlugin(window[swiperDomPlugins[i]]);
	        }
	    }
	    // Required DOM Plugins
	    var domLib;
	    if (typeof Dom7 === 'undefined') {
	        domLib = window.Dom7 || window.Zepto || window.jQuery;
	    } else {
	        domLib = Dom7;
	    }
	
	    /*===========================
	    Add .swiper plugin from Dom libraries
	    ===========================*/
	    function addLibraryPlugin(lib) {
	        lib.fn.swiper = function (params) {
	            var firstInstance;
	            lib(this).each(function () {
	                var s = new Swiper(this, params);
	                if (!firstInstance) firstInstance = s;
	            });
	            return firstInstance;
	        };
	    }
	
	    if (domLib) {
	        if (!('transitionEnd' in domLib.fn)) {
	            domLib.fn.transitionEnd = function (callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i,
	                    j,
	                    dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            };
	        }
	        if (!('transform' in domLib.fn)) {
	            domLib.fn.transform = function (transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	                }
	                return this;
	            };
	        }
	        if (!('transition' in domLib.fn)) {
	            domLib.fn.transition = function (duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            };
	        }
	        if (!('outerWidth' in domLib.fn)) {
	            domLib.fn.outerWidth = function (includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins) return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));else return this[0].offsetWidth;
	                } else return null;
	            };
	        }
	    }
	
	    window.Swiper = Swiper;
	})();
	
	/*===========================
	Swiper AMD Export
	===========================*/
	if (true) {
	    module.exports = window.Swiper;
	} else if (typeof define === 'function' && define.amd) {
	    define([], function () {
	        'use strict';
	
	        return window.Swiper;
	    });
	}
	
	//# sourceMappingURL=maps/swiper.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * better-normal-scroll v1.2.0
	 * (c) 2016-2017 ustbhuangyi
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.BScroll = factory();
	})(undefined, function () {
	  'use strict';
	
	  var slicedToArray = function () {
	    function sliceIterator(arr, i) {
	      var _arr = [];
	      var _n = true;
	      var _d = false;
	      var _e = undefined;
	
	      try {
	        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	          _arr.push(_s.value);
	
	          if (i && _arr.length === i) break;
	        }
	      } catch (err) {
	        _d = true;
	        _e = err;
	      } finally {
	        try {
	          if (!_n && _i["return"]) _i["return"]();
	        } finally {
	          if (_d) throw _e;
	        }
	      }
	
	      return _arr;
	    }
	
	    return function (arr, i) {
	      if (Array.isArray(arr)) {
	        return arr;
	      } else if (Symbol.iterator in Object(arr)) {
	        return sliceIterator(arr, i);
	      } else {
	        throw new TypeError("Invalid attempt to destructure non-iterable instance");
	      }
	    };
	  }();
	
	  var toConsumableArray = function toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	        arr2[i] = arr[i];
	      }return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };
	
	  function eventMixin(BScroll) {
	    BScroll.prototype.on = function (type, fn) {
	      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
	
	      if (!this._events[type]) {
	        this._events[type] = [];
	      }
	
	      this._events[type].push([fn, context]);
	    };
	
	    BScroll.prototype.once = function (type, fn) {
	      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
	
	      var fired = false;
	
	      function magic() {
	        this.off(type, magic);
	
	        if (!fired) {
	          fired = true;
	          fn.apply(context, arguments);
	        }
	      }
	
	      this.on(type, magic);
	    };
	
	    BScroll.prototype.off = function (type, fn) {
	      var _events = this._events[type];
	      if (!_events) {
	        return;
	      }
	
	      var count = _events.length;
	      while (count--) {
	        if (_events[count][0] === fn) {
	          _events[count][0] = undefined;
	        }
	      }
	    };
	
	    BScroll.prototype.trigger = function (type) {
	      var events = this._events[type];
	      if (!events) {
	        return;
	      }
	
	      var len = events.length;
	      var eventsCopy = [].concat(toConsumableArray(events));
	      for (var i = 0; i < len; i++) {
	        var event = eventsCopy[i];
	
	        var _event = slicedToArray(event, 2),
	            fn = _event[0],
	            context = _event[1];
	
	        if (fn) {
	          fn.apply(context, [].slice.call(arguments, 1));
	        }
	      }
	    };
	  }
	
	  var elementStyle = document.createElement('div').style;
	
	  var vendor = function () {
	    var transformNames = {
	      webkit: 'webkitTransform',
	      Moz: 'MozTransform',
	      O: 'OTransform',
	      ms: 'msTransform',
	      standard: 'transform'
	    };
	
	    for (var key in transformNames) {
	      if (elementStyle[transformNames[key]] !== undefined) {
	        return key;
	      }
	    }
	
	    return false;
	  }();
	
	  function prefixStyle(style) {
	    if (vendor === false) {
	      return false;
	    }
	
	    if (vendor === 'standard') {
	      return style;
	    }
	
	    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
	  }
	
	  function addEvent(el, type, fn, capture) {
	    el.addEventListener(type, fn, { passive: false, capture: !!capture });
	  }
	
	  function removeEvent(el, type, fn, capture) {
	    el.removeEventListener(type, fn, { passive: false, capture: !!capture });
	  }
	
	  function offset(el) {
	    var left = 0;
	    var top = 0;
	
	    while (el) {
	      left -= el.offsetLeft;
	      top -= el.offsetTop;
	      el = el.offsetParent;
	    }
	
	    return {
	      left: left,
	      top: top
	    };
	  }
	
	  var transform = prefixStyle('transform');
	
	  var hasPerspective = prefixStyle('perspective') in elementStyle;
	  var hasTouch = 'ontouchstart' in window;
	  var hasTransform = transform !== false;
	  var hasTransition = prefixStyle('transition') in elementStyle;
	
	  var style = {
	    transform: transform,
	    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
	    transitionDuration: prefixStyle('transitionDuration'),
	    transitionDelay: prefixStyle('transitionDelay'),
	    transformOrigin: prefixStyle('transformOrigin'),
	    transitionEnd: prefixStyle('transitionEnd')
	  };
	
	  var TOUCH_EVENT = 1;
	  var MOUSE_EVENT = 2;
	
	  var eventType = {
	    touchstart: TOUCH_EVENT,
	    touchmove: TOUCH_EVENT,
	    touchend: TOUCH_EVENT,
	
	    mousedown: MOUSE_EVENT,
	    mousemove: MOUSE_EVENT,
	    mouseup: MOUSE_EVENT
	  };
	
	  function getRect(el) {
	    if (el instanceof window.SVGElement) {
	      var rect = el.getBoundingClientRect();
	      return {
	        top: rect.top,
	        left: rect.left,
	        width: rect.width,
	        height: rect.height
	      };
	    } else {
	      return {
	        top: el.offsetTop,
	        left: el.offsetLeft,
	        width: el.offsetWidth,
	        height: el.offsetHeight
	      };
	    }
	  }
	
	  function preventDefaultException(el, exceptions) {
	    for (var i in exceptions) {
	      if (exceptions[i].test(el[i])) {
	        return true;
	      }
	    }
	    return false;
	  }
	
	  function tap(e, eventName) {
	    var ev = document.createEvent('Event');
	    ev.initEvent(eventName, true, true);
	    ev.pageX = e.pageX;
	    ev.pageY = e.pageY;
	    e.target.dispatchEvent(ev);
	  }
	
	  function click(e) {
	    var target = e.target;
	
	    if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
	      var ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
	      // cancelable 设置为 false 是为了解决和 fastclick 冲突问题
	      ev.initEvent('click', true, false);
	      ev._constructed = true;
	      target.dispatchEvent(ev);
	    }
	  }
	
	  function prepend(el, target) {
	    if (target.firstChild) {
	      before(el, target.firstChild);
	    } else {
	      target.appendChild(el);
	    }
	  }
	
	  function before(el, target) {
	    target.parentNode.insertBefore(el, target);
	  }
	
	  var DEFAULT_OPTIONS = {
	    startX: 0,
	    startY: 0,
	    scrollX: false,
	    scrollY: true,
	    freeScroll: false,
	    directionLockThreshold: 5,
	    eventPassthrough: '',
	    click: false,
	    tap: false,
	    bounce: true,
	    bounceTime: 700,
	    momentum: true,
	    momentumLimitTime: 300,
	    momentumLimitDistance: 15,
	    swipeTime: 2500,
	    swipeBounceTime: 500,
	    deceleration: 0.001,
	    flickLimitTime: 200,
	    flickLimitDistance: 100,
	    resizePolling: 60,
	    probeType: 0,
	    preventDefault: true,
	    preventDefaultException: {
	      tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
	    },
	    HWCompositing: true,
	    useTransition: true,
	    useTransform: true,
	    bindToWrapper: false,
	    disableMouse: hasTouch,
	    disableTouch: !hasTouch,
	    /**
	     * for picker
	     * wheel: {
	     *   selectedIndex: 0,
	     *   rotate: 25,
	     *   adjustTime: 400
	     * }
	     */
	    wheel: false,
	    /**
	     * for slide
	     * snap: {
	     *   loop: false,
	     *   threshold: 0.1,
	     *   stepX: 100,
	     *   stepY: 100
	     * }
	     */
	    snap: false,
	    /**
	     * for scrollbar
	     * scrollbar: {
	     *   fade: true
	     * }
	     */
	    scrollbar: false,
	    /**
	     * for pull down and refresh
	     * pullDownRefresh: {
	     *   threshold: 50,
	     *   stop: 20
	     * }
	     */
	    pullDownRefresh: false,
	    /**
	     * for pull up and load
	     * pullUpLoad: {
	     *   threshold: 50
	     * }
	     */
	    pullUpLoad: false
	  };
	
	  function initMixin(BScroll) {
	    BScroll.prototype._init = function (el, options) {
	      this._handleOptions(options);
	
	      // init private custom events
	      this._events = {};
	
	      this.x = 0;
	      this.y = 0;
	      this.directionX = 0;
	      this.directionY = 0;
	
	      this._addDOMEvents();
	
	      this._initExtFeatures();
	
	      this.refresh();
	
	      if (!this.options.snap) {
	        this.scrollTo(this.options.startX, this.options.startY);
	      }
	
	      this.enable();
	    };
	
	    BScroll.prototype._handleOptions = function (options) {
	      this.options = Object.assign({}, DEFAULT_OPTIONS, options);
	
	      this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';
	
	      this.options.useTransition = this.options.useTransition && hasTransition;
	      this.options.useTransform = this.options.useTransform && hasTransform;
	
	      this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
	
	      // If you want eventPassthrough I have to lock one of the axes
	      this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
	      this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;
	
	      // With eventPassthrough we also need lockDirection mechanism
	      this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	      this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
	
	      if (this.options.tap === true) {
	        this.options.tap = 'tap';
	      }
	    };
	
	    BScroll.prototype._addDOMEvents = function () {
	      var eventOperation = addEvent;
	      this._handleDOMEvents(eventOperation);
	    };
	
	    BScroll.prototype._removeDOMEvents = function () {
	      var eventOperation = removeEvent;
	      this._handleDOMEvents(eventOperation);
	    };
	
	    BScroll.prototype._handleDOMEvents = function (eventOperation) {
	      var target = this.options.bindToWrapper ? this.wrapper : window;
	      eventOperation(window, 'orientationchange', this);
	      eventOperation(window, 'resize', this);
	
	      if (this.options.click) {
	        eventOperation(this.wrapper, 'click', this, true);
	      }
	
	      if (!this.options.disableMouse) {
	        eventOperation(this.wrapper, 'mousedown', this);
	        eventOperation(target, 'mousemove', this);
	        eventOperation(target, 'mousecancel', this);
	        eventOperation(target, 'mouseup', this);
	      }
	
	      if (hasTouch && !this.options.disableTouch) {
	        eventOperation(this.wrapper, 'touchstart', this);
	        eventOperation(target, 'touchmove', this);
	        eventOperation(target, 'touchcancel', this);
	        eventOperation(target, 'touchend', this);
	      }
	
	      eventOperation(this.scroller, style.transitionEnd, this);
	    };
	
	    BScroll.prototype._initExtFeatures = function () {
	      if (this.options.snap) {
	        this._initSnap();
	      }
	      if (this.options.scrollbar) {
	        this._initScrollbar();
	      }
	      if (this.options.pullUpLoad) {
	        this._initPullUp();
	      }
	    };
	
	    BScroll.prototype.handleEvent = function (e) {
	      switch (e.type) {
	        case 'touchstart':
	        case 'mousedown':
	          this._start(e);
	          break;
	        case 'touchmove':
	        case 'mousemove':
	          this._move(e);
	          break;
	        case 'touchend':
	        case 'mouseup':
	        case 'touchcancel':
	        case 'mousecancel':
	          this._end(e);
	          break;
	        case 'orientationchange':
	        case 'resize':
	          this._resize();
	          break;
	        case 'transitionend':
	        case 'webkitTransitionEnd':
	        case 'oTransitionEnd':
	        case 'MSTransitionEnd':
	          this._transitionEnd(e);
	          break;
	        case 'click':
	          if (this.enabled && !e._constructed) {
	            e.preventDefault();
	            e.stopPropagation();
	          }
	          break;
	      }
	    };
	
	    BScroll.prototype.refresh = function () {
	      /* eslint-disable no-unused-vars */
	      var rf = this.wrapper.offsetHeight;
	
	      this.wrapperWidth = parseInt(this.wrapper.style.width) || this.wrapper.clientWidth;
	      this.wrapperHeight = parseInt(this.wrapper.style.height) || this.wrapper.clientHeight;
	
	      this.scrollerWidth = parseInt(this.scroller.style.width) || this.scroller.clientWidth;
	      this.scrollerHeight = parseInt(this.scroller.style.height) || this.scroller.clientHeight;
	
	      var wheel = this.options.wheel;
	      if (wheel) {
	        this.items = this.scroller.children;
	        this.options.itemHeight = this.itemHeight = this.items.length ? this.items[0].clientHeight : 0;
	        if (this.selectedIndex === undefined) {
	          this.selectedIndex = wheel.selectedIndex;
	        }
	        this.options.startY = -this.selectedIndex * this.itemHeight;
	        this.maxScrollX = 0;
	        this.maxScrollY = -this.itemHeight * (this.items.length - 1);
	      } else {
	        this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
	        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
	      }
	
	      this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
	      this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
	
	      if (!this.hasHorizontalScroll) {
	        this.maxScrollX = 0;
	        this.scrollerWidth = this.wrapperWidth;
	      }
	
	      if (!this.hasVerticalScroll) {
	        this.maxScrollY = 0;
	        this.scrollerHeight = this.wrapperHeight;
	      }
	
	      this.endTime = 0;
	      this.directionX = 0;
	      this.directionY = 0;
	      this.wrapperOffset = offset(this.wrapper);
	
	      this.trigger('refresh');
	
	      this.resetPosition();
	    };
	
	    BScroll.prototype.enable = function () {
	      this.enabled = true;
	    };
	
	    BScroll.prototype.disable = function () {
	      this.enabled = false;
	    };
	  }
	
	  var ease = {
	    // easeOutQuint
	    swipe: {
	      style: 'cubic-bezier(0.23, 1, 0.32, 1)',
	      fn: function fn(t) {
	        return 1 + --t * t * t * t * t;
	      }
	    },
	    // easeOutQuard
	    swipeBounce: {
	      style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	      fn: function fn(t) {
	        return t * (2 - t);
	      }
	    },
	    // easeOutQuart
	    bounce: {
	      style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
	      fn: function fn(t) {
	        return 1 - --t * t * t * t;
	      }
	    }
	  };
	
	  function momentum(current, start, time, lowerMargin, wrapperSize, options) {
	    var distance = current - start;
	    var speed = Math.abs(distance) / time;
	
	    var deceleration = options.deceleration,
	        itemHeight = options.itemHeight,
	        swipeBounceTime = options.swipeBounceTime,
	        wheel = options.wheel,
	        swipeTime = options.swipeTime;
	
	    var duration = swipeTime;
	    var rate = wheel ? 4 : 15;
	
	    var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);
	
	    if (wheel && itemHeight) {
	      destination = Math.round(destination / itemHeight) * itemHeight;
	    }
	
	    if (destination < lowerMargin) {
	      destination = wrapperSize ? lowerMargin - wrapperSize / rate * speed : lowerMargin;
	      duration = swipeBounceTime;
	    } else if (destination > 0) {
	      destination = wrapperSize ? wrapperSize / rate * speed : 0;
	      duration = swipeBounceTime;
	    }
	
	    return {
	      destination: Math.round(destination),
	      duration: duration
	    };
	  }
	
	  var DEFAULT_INTERVAL = 100 / 60;
	
	  var requestAnimationFrame = function () {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
	    // if all else fails, use setTimeout
	    function (callback) {
	      return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
	    };
	  }();
	
	  var cancelAnimationFrame = function () {
	    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
	      window.clearTimeout(id);
	    };
	  }();
	
	  function getNow() {
	    return window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
	  }
	
	  function coreMixin(BScroll) {
	    BScroll.prototype._start = function (e) {
	      var _eventType = eventType[e.type];
	      if (_eventType !== TOUCH_EVENT) {
	        if (e.button !== 0) {
	          return;
	        }
	      }
	      if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
	        return;
	      }
	      this.initiated = _eventType;
	
	      if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
	        e.preventDefault();
	      }
	
	      this.moved = false;
	      this.distX = 0;
	      this.distY = 0;
	      this.directionX = 0;
	      this.directionY = 0;
	      this.directionLocked = 0;
	
	      this._transitionTime();
	      this.startTime = getNow();
	
	      if (this.options.wheel) {
	        this.target = e.target;
	      }
	
	      this.stop();
	
	      var point = e.touches ? e.touches[0] : e;
	
	      this.startX = this.x;
	      this.startY = this.y;
	      this.absStartX = this.x;
	      this.absStartY = this.y;
	      this.pointX = point.pageX;
	      this.pointY = point.pageY;
	
	      this.trigger('beforeScrollStart');
	    };
	
	    BScroll.prototype._move = function (e) {
	      if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
	        return;
	      }
	
	      if (this.options.preventDefault) {
	        e.preventDefault();
	      }
	
	      var point = e.touches ? e.touches[0] : e;
	      var deltaX = point.pageX - this.pointX;
	      var deltaY = point.pageY - this.pointY;
	
	      this.pointX = point.pageX;
	      this.pointY = point.pageY;
	
	      this.distX += deltaX;
	      this.distY += deltaY;
	
	      var absDistX = Math.abs(this.distX);
	      var absDistY = Math.abs(this.distY);
	
	      var timestamp = getNow();
	
	      // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
	      if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
	        return;
	      }
	
	      // If you are scrolling in one direction lock the other
	      if (!this.directionLocked && !this.options.freeScroll) {
	        if (absDistX > absDistY + this.options.directionLockThreshold) {
	          this.directionLocked = 'h'; // lock horizontally
	        } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
	          this.directionLocked = 'v'; // lock vertically
	        } else {
	          this.directionLocked = 'n'; // no lock
	        }
	      }
	
	      if (this.directionLocked === 'h') {
	        if (this.options.eventPassthrough === 'vertical') {
	          e.preventDefault();
	        } else if (this.options.eventPassthrough === 'horizontal') {
	          this.initiated = false;
	          return;
	        }
	        deltaY = 0;
	      } else if (this.directionLocked === 'v') {
	        if (this.options.eventPassthrough === 'horizontal') {
	          e.preventDefault();
	        } else if (this.options.eventPassthrough === 'vertical') {
	          this.initiated = false;
	          return;
	        }
	        deltaX = 0;
	      }
	
	      deltaX = this.hasHorizontalScroll ? deltaX : 0;
	      deltaY = this.hasVerticalScroll ? deltaY : 0;
	
	      var newX = this.x + deltaX;
	      var newY = this.y + deltaY;
	
	      // Slow down or stop if outside of the boundaries
	      if (newX > 0 || newX < this.maxScrollX) {
	        if (this.options.bounce) {
	          newX = this.x + deltaX / 3;
	        } else {
	          newX = newX > 0 ? 0 : this.maxScrollX;
	        }
	      }
	      if (newY > 0 || newY < this.maxScrollY) {
	        if (this.options.bounce) {
	          newY = this.y + deltaY / 3;
	        } else {
	          newY = newY > 0 ? 0 : this.maxScrollY;
	        }
	      }
	
	      if (!this.moved) {
	        this.moved = true;
	        this.trigger('scrollStart');
	      }
	
	      this._translate(newX, newY);
	
	      if (timestamp - this.startTime > this.options.momentumLimitTime) {
	        this.startTime = timestamp;
	        this.startX = this.x;
	        this.startY = this.y;
	
	        if (this.options.probeType === 1) {
	          this.trigger('scroll', {
	            x: this.x,
	            y: this.y
	          });
	        }
	      }
	
	      if (this.options.probeType > 1) {
	        this.trigger('scroll', {
	          x: this.x,
	          y: this.y
	        });
	      }
	
	      var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
	      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	
	      var pX = this.pointX - scrollLeft;
	      var pY = this.pointY - scrollTop;
	
	      if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
	        this._end(e);
	      }
	    };
	
	    BScroll.prototype._end = function (e) {
	      if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
	        return;
	      }
	      this.initiated = false;
	
	      if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
	        e.preventDefault();
	      }
	
	      this.trigger('touchEnd', {
	        x: this.x,
	        y: this.y
	      });
	
	      // if configure pull down refresh, check it first
	      if (this.options.pullDownRefresh && this._checkPullDown()) {
	        return;
	      }
	
	      // reset if we are outside of the boundaries
	      if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
	        return;
	      }
	      this.isInTransition = false;
	      // ensures that the last position is rounded
	      var newX = Math.round(this.x);
	      var newY = Math.round(this.y);
	
	      // we scrolled less than 15 pixels
	      if (!this.moved) {
	        if (this.options.wheel) {
	          if (this.target && this.target.className === 'wheel-scroll') {
	            var index = Math.abs(Math.round(newY / this.itemHeight));
	            var _offset = Math.round((this.pointY + offset(this.target).top - this.itemHeight / 2) / this.itemHeight);
	            this.target = this.items[index + _offset];
	          }
	          this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
	        } else {
	          if (this.options.tap) {
	            tap(e, this.options.tap);
	          }
	
	          if (this.options.click) {
	            click(e);
	          }
	        }
	        this.trigger('scrollCancel');
	        return;
	      }
	
	      this.scrollTo(newX, newY);
	
	      var deltaX = newX - this.absStartX;
	      var deltaY = newY - this.absStartY;
	      this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
	      this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
	
	      this.endTime = getNow();
	
	      var duration = this.endTime - this.startTime;
	      var absDistX = Math.abs(newX - this.startX);
	      var absDistY = Math.abs(newY - this.startY);
	
	      // flick
	      if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
	        this.trigger('flick');
	        return;
	      }
	
	      var time = 0;
	      // start momentum animation if needed
	      if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
	        var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options) : { destination: newX, duration: 0 };
	        var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options) : { destination: newY, duration: 0 };
	        newX = momentumX.destination;
	        newY = momentumY.destination;
	        time = Math.max(momentumX.duration, momentumY.duration);
	        this.isInTransition = 1;
	      } else {
	        if (this.options.wheel) {
	          newY = Math.round(newY / this.itemHeight) * this.itemHeight;
	          time = this.options.wheel.adjustTime || 400;
	        }
	      }
	
	      var easing = ease.swipe;
	      if (this.options.snap) {
	        var snap = this._nearestSnap(newX, newY);
	        this.currentPage = snap;
	        time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
	        newX = snap.x;
	        newY = snap.y;
	
	        this.directionX = 0;
	        this.directionY = 0;
	        easing = ease.bounce;
	      }
	
	      if (newX !== this.x || newY !== this.y) {
	        // change easing function when scroller goes out of the boundaries
	        if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
	          easing = ease.swipeBounce;
	        }
	        this.scrollTo(newX, newY, time, easing);
	        return;
	      }
	
	      if (this.options.wheel) {
	        this.selectedIndex = Math.abs(this.y / this.itemHeight) | 0;
	      }
	      this.trigger('scrollEnd', {
	        x: this.x,
	        y: this.y
	      });
	    };
	
	    BScroll.prototype._resize = function () {
	      var _this = this;
	
	      if (!this.enabled) {
	        return;
	      }
	
	      clearTimeout(this.resizeTimeout);
	      this.resizeTimeout = setTimeout(function () {
	        _this.refresh();
	      }, this.options.resizePolling);
	    };
	
	    BScroll.prototype._startProbe = function () {
	      cancelAnimationFrame(this.probeTimer);
	      this.probeTimer = requestAnimationFrame(probe);
	
	      var me = this;
	
	      function probe() {
	        var pos = me.getComputedPosition();
	        me.trigger('scroll', pos);
	        if (me.isInTransition) {
	          me.probeTimer = requestAnimationFrame(probe);
	        }
	      }
	    };
	
	    BScroll.prototype._transitionTime = function () {
	      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      this.scrollerStyle[style.transitionDuration] = time + 'ms';
	
	      if (this.options.wheel) {
	        for (var i = 0; i < this.items.length; i++) {
	          this.items[i].style[style.transitionDuration] = time + 'ms';
	        }
	      }
	
	      if (this.indicators) {
	        for (var _i = 0; _i < this.indicators.length; _i++) {
	          this.indicators[_i].transitionTime(time);
	        }
	      }
	    };
	
	    BScroll.prototype._transitionTimingFunction = function (easing) {
	      this.scrollerStyle[style.transitionTimingFunction] = easing;
	
	      if (this.options.wheel) {
	        for (var i = 0; i < this.items.length; i++) {
	          this.items[i].style[style.transitionTimingFunction] = easing;
	        }
	      }
	
	      if (this.indicators) {
	        for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
	          this.indicators[_i2].transitionTimingFunction(easing);
	        }
	      }
	    };
	
	    BScroll.prototype._transitionEnd = function (e) {
	      if (e.target !== this.scroller || !this.isInTransition) {
	        return;
	      }
	
	      this._transitionTime();
	      if (!this.pulling && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
	        this.isInTransition = false;
	        this.trigger('scrollEnd', {
	          x: this.x,
	          y: this.y
	        });
	      }
	    };
	
	    BScroll.prototype._translate = function (x, y) {
	      if (this.options.useTransform) {
	        this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
	      } else {
	        x = Math.round(x);
	        y = Math.round(y);
	        this.scrollerStyle.left = x + 'px';
	        this.scrollerStyle.top = y + 'px';
	      }
	
	      if (this.options.wheel) {
	        var _options$wheel$rotate = this.options.wheel.rotate,
	            rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;
	
	        for (var i = 0; i < this.items.length; i++) {
	          var deg = rotate * (y / this.itemHeight + i);
	          this.items[i].style[style.transform] = 'rotateX(' + deg + 'deg)';
	        }
	      }
	
	      this.x = x;
	      this.y = y;
	
	      if (this.indicators) {
	        for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
	          this.indicators[_i3].updatePosition();
	        }
	      }
	    };
	
	    BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
	      var me = this;
	      var startX = this.x;
	      var startY = this.y;
	      var startTime = getNow();
	      var destTime = startTime + duration;
	
	      function step() {
	        var now = getNow();
	
	        if (now >= destTime) {
	          me.isAnimating = false;
	          me._translate(destX, destY);
	
	          if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
	            me.trigger('scrollEnd', {
	              x: me.x,
	              y: me.y
	            });
	          }
	          return;
	        }
	        now = (now - startTime) / duration;
	        var easing = easingFn(now);
	        var newX = (destX - startX) * easing + startX;
	        var newY = (destY - startY) * easing + startY;
	
	        me._translate(newX, newY);
	
	        if (me.isAnimating) {
	          requestAnimationFrame(step);
	        }
	
	        if (me.options.probeType === 3) {
	          me.trigger('scroll', {
	            x: this.x,
	            y: this.y
	          });
	        }
	      }
	
	      this.isAnimating = true;
	      step();
	    };
	
	    BScroll.prototype.scrollBy = function (x, y) {
	      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;
	
	      x = this.x + x;
	      y = this.y + y;
	
	      this.scrollTo(x, y, time, easing);
	    };
	
	    BScroll.prototype.scrollTo = function (x, y) {
	      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;
	
	      this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);
	
	      if (!time || this.options.useTransition) {
	        this._transitionTimingFunction(easing.style);
	        this._transitionTime(time);
	        this._translate(x, y);
	
	        if (time && this.options.probeType === 3) {
	          this._startProbe();
	        }
	
	        if (this.options.wheel) {
	          if (y > 0) {
	            this.selectedIndex = 0;
	          } else if (y < this.maxScrollY) {
	            this.selectedIndex = this.items.length - 1;
	          } else {
	            this.selectedIndex = Math.abs(y / this.itemHeight) | 0;
	          }
	        }
	      } else {
	        this._animate(x, y, time, easing.fn);
	      }
	    };
	
	    BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
	      if (!el) {
	        return;
	      }
	      el = el.nodeType ? el : this.scroller.querySelector(el);
	
	      if (this.options.wheel && el.className !== 'wheel-item') {
	        return;
	      }
	
	      var pos = offset(el);
	      pos.left -= this.wrapperOffset.left;
	      pos.top -= this.wrapperOffset.top;
	
	      // if offsetX/Y are true we center the element to the screen
	      if (offsetX === true) {
	        offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
	      }
	      if (offsetY === true) {
	        offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
	      }
	
	      pos.left -= offsetX || 0;
	      pos.top -= offsetY || 0;
	      pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
	      pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
	
	      if (this.options.wheel) {
	        pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
	      }
	
	      this.scrollTo(pos.left, pos.top, time, easing);
	    };
	
	    BScroll.prototype.resetPosition = function () {
	      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;
	
	      var x = this.x;
	      if (!this.hasHorizontalScroll || x > 0) {
	        x = 0;
	      } else if (x < this.maxScrollX) {
	        x = this.maxScrollX;
	      }
	
	      var y = this.y;
	      if (!this.hasVerticalScroll || y > 0) {
	        y = 0;
	      } else if (y < this.maxScrollY) {
	        y = this.maxScrollY;
	      }
	
	      if (x === this.x && y === this.y) {
	        return false;
	      }
	
	      this.scrollTo(x, y, time, easeing);
	
	      return true;
	    };
	
	    BScroll.prototype.getComputedPosition = function () {
	      var matrix = window.getComputedStyle(this.scroller, null);
	      var x = void 0;
	      var y = void 0;
	
	      if (this.options.useTransform) {
	        matrix = matrix[style.transform].split(')')[0].split(', ');
	        x = +(matrix[12] || matrix[4]);
	        y = +(matrix[13] || matrix[5]);
	      } else {
	        x = +matrix.left.replace(/[^-\d.]/g, '');
	        y = +matrix.top.replace(/[^-\d.]/g, '');
	      }
	
	      return {
	        x: x,
	        y: y
	      };
	    };
	
	    BScroll.prototype.stop = function () {
	      if (this.options.useTransition && this.isInTransition) {
	        this.isInTransition = false;
	        var pos = this.getComputedPosition();
	        this._translate(pos.x, pos.y);
	        if (this.options.wheel) {
	          this.target = this.items[Math.round(-pos.y / this.itemHeight)];
	        } else {
	          this.trigger('scrollEnd', {
	            x: this.x,
	            y: this.y
	          });
	        }
	      } else if (!this.options.useTransition && this.isAnimating) {
	        this.isAnimating = false;
	        this.trigger('scrollEnd', {
	          x: this.x,
	          y: this.y
	        });
	      }
	    };
	
	    BScroll.prototype.destroy = function () {
	      this._removeDOMEvents();
	
	      this.destroyed = true;
	      this.trigger('destroy');
	    };
	  }
	
	  function snapMixin(BScroll) {
	    BScroll.prototype._initSnap = function () {
	      var _this = this;
	
	      this.currentPage = {};
	      var snap = this.options.snap;
	
	      if (snap.loop) {
	        var children = this.scroller.children;
	        if (children.length > 0) {
	          prepend(children[children.length - 1].cloneNode(true), this.scroller);
	          this.scroller.appendChild(children[1].cloneNode(true));
	        }
	      }
	
	      var el = snap.el;
	      if (typeof el === 'string') {
	        el = this.scroller.querySelectorAll(el);
	      }
	
	      this.on('refresh', function () {
	        _this.pages = [];
	
	        if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
	          return;
	        }
	
	        var stepX = snap.stepX || _this.wrapperWidth;
	        var stepY = snap.stepY || _this.wrapperHeight;
	
	        var x = 0;
	        var y = void 0;
	        var cx = void 0;
	        var cy = void 0;
	        var i = 0;
	        var l = void 0;
	        var m = 0;
	        var n = void 0;
	        var rect = void 0;
	        if (!el) {
	          cx = Math.round(stepX / 2);
	          cy = Math.round(stepY / 2);
	
	          while (x > -_this.scrollerWidth) {
	            _this.pages[i] = [];
	            l = 0;
	            y = 0;
	
	            while (y > -_this.scrollerHeight) {
	              _this.pages[i][l] = {
	                x: Math.max(x, _this.maxScrollX),
	                y: Math.max(y, _this.maxScrollY),
	                width: stepX,
	                height: stepY,
	                cx: x - cx,
	                cy: y - cy
	              };
	
	              y -= stepY;
	              l++;
	            }
	
	            x -= stepX;
	            i++;
	          }
	        } else {
	          l = el.length;
	          n = -1;
	
	          for (; i < l; i++) {
	            rect = getRect(el[i]);
	            if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
	              m = 0;
	              n++;
	            }
	
	            if (!_this.pages[m]) {
	              _this.pages[m] = [];
	            }
	
	            x = Math.max(-rect.left, _this.maxScrollX);
	            y = Math.max(-rect.top, _this.maxScrollY);
	            cx = x - Math.round(rect.width / 2);
	            cy = y - Math.round(rect.height / 2);
	
	            _this.pages[m][n] = {
	              x: x,
	              y: y,
	              width: rect.width,
	              height: rect.height,
	              cx: cx,
	              cy: cy
	            };
	
	            if (x > _this.maxScrollX) {
	              m++;
	            }
	          }
	        }
	
	        var initPage = snap.loop ? 1 : 0;
	        _this.goToPage(_this.currentPage.pageX || initPage, _this.currentPage.pageY || 0, 0);
	
	        // Update snap threshold if needed
	        var snapThreshold = snap.threshold;
	        if (snapThreshold % 1 === 0) {
	          _this.snapThresholdX = snapThreshold;
	          _this.snapThresholdY = snapThreshold;
	        } else {
	          _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
	          _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
	        }
	      });
	
	      this.on('scrollEnd', function () {
	        if (snap.loop) {
	          if (_this.currentPage.pageX === 0) {
	            _this.goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
	          }
	          if (_this.currentPage.pageX === _this.pages.length - 1) {
	            _this.goToPage(1, _this.currentPage.pageY, 0);
	          }
	        }
	      });
	
	      this.on('flick', function () {
	        var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);
	
	        _this.goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
	      });
	    };
	
	    BScroll.prototype._nearestSnap = function (x, y) {
	      if (!this.pages.length) {
	        return { x: 0, y: 0, pageX: 0, pageY: 0 };
	      }
	
	      var i = 0;
	      // Check if we exceeded the snap threshold
	      if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
	        return this.currentPage;
	      }
	
	      if (x > 0) {
	        x = 0;
	      } else if (x < this.maxScrollX) {
	        x = this.maxScrollX;
	      }
	
	      if (y > 0) {
	        y = 0;
	      } else if (y < this.maxScrollY) {
	        y = this.maxScrollY;
	      }
	
	      var l = this.pages.length;
	      for (; i < l; i++) {
	        if (x >= this.pages[i][0].cx) {
	          x = this.pages[i][0].x;
	          break;
	        }
	      }
	
	      l = this.pages[i].length;
	
	      var m = 0;
	      for (; m < l; m++) {
	        if (y >= this.pages[0][m].cy) {
	          y = this.pages[0][m].y;
	          break;
	        }
	      }
	
	      if (i === this.currentPage.pageX) {
	        i += this.directionX;
	
	        if (i < 0) {
	          i = 0;
	        } else if (i >= this.pages.length) {
	          i = this.pages.length - 1;
	        }
	
	        x = this.pages[i][0].x;
	      }
	
	      if (m === this.currentPage.pageY) {
	        m += this.directionY;
	
	        if (m < 0) {
	          m = 0;
	        } else if (m >= this.pages[0].length) {
	          m = this.pages[0].length - 1;
	        }
	
	        y = this.pages[0][m].y;
	      }
	
	      return {
	        x: x,
	        y: y,
	        pageX: i,
	        pageY: m
	      };
	    };
	
	    BScroll.prototype.goToPage = function (x, y, time) {
	      var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;
	
	      var snap = this.options.snap;
	      if (x >= this.pages.length) {
	        x = this.pages.length - 1;
	      } else if (x < 0) {
	        x = 0;
	      }
	
	      if (y >= this.pages[x].length) {
	        y = this.pages[x].length - 1;
	      } else if (y < 0) {
	        y = 0;
	      }
	
	      var posX = this.pages[x][y].x;
	      var posY = this.pages[x][y].y;
	
	      time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;
	
	      this.currentPage = {
	        x: posX,
	        y: posY,
	        pageX: x,
	        pageY: y
	      };
	      this.scrollTo(posX, posY, time, easing);
	    };
	
	    BScroll.prototype.next = function (time, easing) {
	      var x = this.currentPage.pageX;
	      var y = this.currentPage.pageY;
	
	      x++;
	      if (x >= this.pages.length && this.hasVerticalScroll) {
	        x = 0;
	        y++;
	      }
	
	      this.goToPage(x, y, time, easing);
	    };
	
	    BScroll.prototype.prev = function (time, easing) {
	      var x = this.currentPage.pageX;
	      var y = this.currentPage.pageY;
	
	      x--;
	      if (x < 0 && this.hasVerticalScroll) {
	        x = 0;
	        y--;
	      }
	
	      this.goToPage(x, y, time, easing);
	    };
	
	    BScroll.prototype.getCurrentPage = function () {
	      return this.options.snap && this.currentPage;
	    };
	  }
	
	  function wheelMixin(BScroll) {
	    BScroll.prototype.wheelTo = function (index) {
	      if (this.options.wheel) {
	        this.y = -index * this.itemHeight;
	        this.scrollTo(0, this.y);
	      }
	    };
	
	    BScroll.prototype.getSelectedIndex = function () {
	      return this.options.wheel && this.selectedIndex;
	    };
	  }
	
	  var INDICATOR_MIN_LEN = 8;
	
	  function scrollbarMixin(BScroll) {
	    BScroll.prototype._initScrollbar = function () {
	      var _this = this;
	
	      var _options$scrollbar$fa = this.options.scrollbar.fade,
	          fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa;
	
	      this.indicators = [];
	      var indicator = void 0;
	
	      if (this.options.scrollX) {
	        indicator = {
	          el: createScrollbar('horizontal'),
	          direction: 'horizontal',
	          fade: fade
	        };
	        this._insertScrollBar(indicator.el);
	
	        this.indicators.push(new Indicator(this, indicator));
	      }
	
	      if (this.options.scrollY) {
	        indicator = {
	          el: createScrollbar('vertical'),
	          direction: 'vertical',
	          fade: fade
	        };
	        this._insertScrollBar(indicator.el);
	        this.indicators.push(new Indicator(this, indicator));
	      }
	
	      this.on('refresh', function () {
	        for (var i = 0; i < _this.indicators.length; i++) {
	          _this.indicators[i].refresh();
	        }
	      });
	
	      if (fade) {
	        this.on('scrollEnd', function () {
	          for (var i = 0; i < _this.indicators.length; i++) {
	            _this.indicators[i].fade();
	          }
	        });
	
	        this.on('scrollCancel', function () {
	          for (var i = 0; i < _this.indicators.length; i++) {
	            _this.indicators[i].fade();
	          }
	        });
	
	        this.on('scrollStart', function () {
	          for (var i = 0; i < _this.indicators.length; i++) {
	            _this.indicators[i].fade(true);
	          }
	        });
	
	        this.on('beforeScrollStart', function () {
	          for (var i = 0; i < _this.indicators.length; i++) {
	            _this.indicators[i].fade(true, true);
	          }
	        });
	      }
	    };
	
	    BScroll.prototype._insertScrollBar = function (scrollbar) {
	      this.wrapper.appendChild(scrollbar);
	    };
	  }
	
	  function createScrollbar(direction) {
	    var scrollbar = document.createElement('div');
	    var indicator = document.createElement('div');
	
	    scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
	    indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';
	
	    indicator.className = 'bscroll-indicator';
	
	    if (direction === 'horizontal') {
	      scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
	      indicator.style.height = '100%';
	      scrollbar.className = 'bscroll-horizontal-scrollbar';
	    } else {
	      scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
	      indicator.style.width = '100%';
	      scrollbar.className = 'bscroll-vertical-scrollbar';
	    }
	
	    scrollbar.style.cssText += ';overflow:hidden';
	    scrollbar.appendChild(indicator);
	
	    return scrollbar;
	  }
	
	  function Indicator(scroller, options) {
	    this.wrapper = options.el;
	    this.wrapperStyle = this.wrapper.style;
	    this.indicator = this.wrapper.children[0];
	    this.indicatorStyle = this.indicator.style;
	    this.scroller = scroller;
	    this.direction = options.direction;
	    if (options.fade) {
	      this.visible = 0;
	      this.wrapperStyle.opacity = '0';
	    } else {
	      this.visible = 1;
	    }
	  }
	
	  Indicator.prototype.refresh = function () {
	    this.transitionTime();
	    this._calculate();
	    this.updatePosition();
	  };
	
	  Indicator.prototype.fade = function (visible, hold) {
	    var _this2 = this;
	
	    if (hold && !this.visible) {
	      return;
	    }
	
	    var time = visible ? 250 : 500;
	
	    visible = visible ? '1' : '0';
	
	    this.wrapperStyle[style.transitionDuration] = time + 'ms';
	
	    clearTimeout(this.fadeTimeout);
	    this.fadeTimeout = setTimeout(function () {
	      _this2.wrapperStyle.opacity = visible;
	      _this2.visible = +visible;
	    }, 0);
	  };
	
	  Indicator.prototype.updatePosition = function () {
	    if (this.direction === 'vertical') {
	      var y = Math.round(this.sizeRatioY * this.scroller.y);
	
	      if (y < 0) {
	        this.transitionTime(500);
	        var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
	        this.indicatorStyle.height = height + 'px';
	        y = 0;
	      } else if (y > this.maxPosY) {
	        this.transitionTime(500);
	        var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
	        this.indicatorStyle.height = _height + 'px';
	        y = this.maxPosY + this.indicatorHeight - _height;
	      } else {
	        this.indicatorStyle.height = this.indicatorHeight + 'px';
	      }
	      this.y = y;
	
	      if (this.scroller.options.useTransform) {
	        this.indicatorStyle[style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
	      } else {
	        this.indicatorStyle.top = y + 'px';
	      }
	    } else {
	      var x = Math.round(this.sizeRatioX * this.scroller.x);
	
	      if (x < 0) {
	        this.transitionTime(500);
	        var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
	        this.indicatorStyle.width = width + 'px';
	        x = 0;
	      } else if (x > this.maxPosX) {
	        this.transitionTime(500);
	        var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
	        this.indicatorStyle.width = _width + 'px';
	        x = this.maxPosX + this.indicatorWidth - _width;
	      } else {
	        this.indicatorStyle.width = this.indicatorWidth + 'px';
	      }
	
	      this.x = x;
	
	      if (this.scroller.options.useTransform) {
	        this.indicatorStyle[style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
	      } else {
	        this.indicatorStyle.left = x + 'px';
	      }
	    }
	  };
	
	  Indicator.prototype.transitionTime = function () {
	    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	    this.indicatorStyle[style.transitionDuration] = time + 'ms';
	  };
	
	  Indicator.prototype.transitionTimingFunction = function (easing) {
	    this.indicatorStyle[style.transitionTimingFunction] = easing;
	  };
	
	  Indicator.prototype._calculate = function () {
	    if (this.direction === 'vertical') {
	      var wrapperHeight = this.wrapper.clientHeight;
	      this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
	      this.indicatorStyle.height = this.indicatorHeight + 'px';
	
	      this.maxPosY = wrapperHeight - this.indicatorHeight;
	
	      this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
	    } else {
	      var wrapperWidth = this.wrapper.clientWidth;
	      this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerHeight || wrapperWidth || 1)), INDICATOR_MIN_LEN);
	      this.indicatorStyle.width = this.indicatorWidth + 'px';
	
	      this.maxPosX = wrapperWidth - this.indicatorWidth;
	
	      this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
	    }
	  };
	
	  function pullDownMixin(BScroll) {
	    BScroll.prototype._checkPullDown = function () {
	      this.pulling = false;
	      var _options$pullDownRefr = this.options.pullDownRefresh,
	          _options$pullDownRefr2 = _options$pullDownRefr.threshold,
	          threshold = _options$pullDownRefr2 === undefined ? 50 : _options$pullDownRefr2,
	          _options$pullDownRefr3 = _options$pullDownRefr.stop,
	          stop = _options$pullDownRefr3 === undefined ? 20 : _options$pullDownRefr3;
	
	      if (this.y > threshold) {
	        this.pulling = true;
	        this.trigger('pullingDown');
	        this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);
	      }
	
	      return this.pulling;
	    };
	
	    BScroll.prototype.finishPullDown = function () {
	      this.pulling = false;
	      this.resetPosition(this.options.bounceTime, ease.bounce);
	    };
	  }
	
	  function pullUpMixin(BScroll) {
	    BScroll.prototype._initPullUp = function () {
	      // must watch scroll in real time
	      this.options.probeType = 3;
	
	      this._watchPullUp();
	    };
	
	    BScroll.prototype._watchPullUp = function () {
	      var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
	          threshold = _options$pullUpLoad$t === undefined ? 50 : _options$pullUpLoad$t;
	
	      this.on('scroll', checkToEnd);
	
	      function checkToEnd() {
	        if (this.y <= this.maxScrollY + threshold) {
	          this.trigger('pullingUp');
	          this.off('scroll', checkToEnd);
	        }
	      }
	    };
	
	    BScroll.prototype.finishPullUp = function () {
	      this._watchPullUp();
	    };
	  }
	
	  function warn(msg) {
	    console.error("[BScroll warn]: " + msg);
	  }
	
	  function BScroll(el, options) {
	    this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
	    if (!this.wrapper) {
	      warn('can not resolve the wrapper dom');
	    }
	    this.scroller = this.wrapper.children[0];
	    if (!this.scroller) {
	      warn('the wrapper need at least one child element to be scroller');
	    }
	    // cache style for better performance
	    this.scrollerStyle = this.scroller.style;
	
	    this._init(el, options);
	  }
	
	  initMixin(BScroll);
	  coreMixin(BScroll);
	  eventMixin(BScroll);
	  snapMixin(BScroll);
	  wheelMixin(BScroll);
	  scrollbarMixin(BScroll);
	  pullDownMixin(BScroll);
	  pullUpMixin(BScroll);
	
	  BScroll.Version = '1.2.0';
	
	  return BScroll;
	});

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var changeIndex = exports.changeIndex = function changeIndex(_ref, tabIndex) {
	  var dispatch = _ref.dispatch,
	      state = _ref.state;
	
	  dispatch('CHANGEINDEX', tabIndex);
	};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = "\n  <div class=\"homeback homebackTop\" @click=\"homeback\"></div>\n  <ul class=\"listTop\" v-show=\"listTop\">\n    <li class=\"parentLi\" v-on:click=\"showChildUl(0)\" id=\"newReruit\">{{dflushData}}<div><ul v-show=\"newReruit\" class=\"childUl\"><li class=\"childLi\" v-on:click=\"flushData(0)\">最新发布</li><li class=\"childLi\" v-on:click=\"flushData(1)\">最高工资</li><li class=\"childLi\" v-on:click=\"flushData(2)\">企业招聘专区</li></ul></div></li>\n    <li class=\"parentLi\" v-on:click=\"showChildUl(1)\" id=\"city\">{{city}}<div class=\"cityIscroll\"><ul v-show=\"cityUlShow\" class=\"childUl\"><li class=\"childLi\" v-for=\"item in cityArr_list\" v-on:click=\"flushNewData(item, 1)\">{{item.name}}</li></ul></div></li>\n    <li class=\"parentLi\" v-on:click=\"showChildUl(2)\">{{leibie}}<div><ul v-show=\"jobKindsShow\" class=\"childUl\"><li class=\"childLi\" v-for=\"item in jobKindsArr_list\" v-on:click=\"flushNewData(item, 2)\">{{item.code}}</li></ul></div></li>\n    <li class=\"parentLi\" v-on:click=\"showChildUl(3)\">{{quanzhi}}<div><ul v-show=\"quanZhiUlShow\" class=\"childUl\"><li class=\"childLi\" v-for=\"item in quanZhiArr_list\" v-on:click=\"flushNewData(item, 3)\">{{item.code}}</li></ul></div></li>\n  </ul>\n<section id=\"index-scroll\" v-el:indexscroll>\n  <ul>\n    <div class=\"search\">\n      <div class=\"select_box\">\n        <span id=\"select_country\">{{selectedCountry}}</span>\n      </div>\n      <span v-on:click=\"tabClick('search', 1)\" class=\"serch_span\">搜索好工作 / 公司</span>\n      <div class=\"_zhan\"></div>\n    </div>\n    <div id=\"jobListSwiper\" class=\"swiper-container\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\"><img src=\"/images/icons/banner.jpg\" alt=\"\"></div>\n        <!-- <div class=\"swiper-slide\"></div>\n        <div class=\"swiper-slide\"></div> -->\n      </div>\n    </div>\n\n    <section class=\"searchCountry\">\n       <div class=\"fourTab\" v-for=\"(index,item) in tabsList\" >\n         <img :src=\"item.img\" />\n         <text>{{item.text}}</text>\n       </div>\n    </section>\n    <div v-show=\"isShow\" class=\"jumpBox\">\n      <div class=\"leftBox\">\n        <span class=\"leftBox_top\" v-on:click=\"flushData(0)\">\n          最新发布\n        </span>\n        <span class=\"leftBox_bottom\" v-on:click=\"flushData(1)\">\n          最高工资\n        </span>\n      </div>\n      <div class=\"rightBox\" v-on:click=\"flushData(2)\">\n      </div>\n    </div>\n    <span class=\"downPull\">\n\n    </span>\n    <li class=\"content\" v-for=\"(index, item) in details\" v-on:click=\"showDetails(index, $event)\">\n      <div class=\"sussecc\" v-show=\"item.dataSource.status != 0\"></div>\n      <div class=\"contentBox1\">\n        <div class=\"titleBox\">\n          <div class=\"companyName\">{{item.title}}</div>\n          <div class=\"money\" v-if=\"!item.dataSource.someoneTypeName\">{{item.money}}</div>\n          <div class=\"money\" v-if=\"item.dataSource.someoneTypeName\">找活挣钱</div>\n        </div>\n        <div class=\"requireBox\">\n          <div class=\"spanArr\">\n            <span v-for=\"i in item.spanArr\">{{i}}</span>\n          </div>\n          <div class=\"timeBox\">\n            {{item.createDate}}\n          </div>\n        </div>\n        <div class=\"details\" v-show=\"item.isShowDetails\">\n          {{item.dataSource.details}}\n        </div>\n        <div class=\"suoxie\" v-if=\"item.companyName\">\n          <img :src=\"item.dataSource.companyLogo\" alt=\"\">\n          <div class=\"suoxie_text\">\n            <p class='suoxieName'>{{item.companyName}}</p>\n           <p class='suo_Info'>{{item.companyInfo}}</p>\n          </div>\n        </div>\n        <div v-show=\"item.isShowDetails\" class=\"hideBox\">\n          <img class=\"picBox\" v-bind:src=\"item.companyPic\">\n\n          </img>\n          <a :href=\"changePhone(item.dataSource.tel)\" class=\"callPhone\">\n            一 键 拨 打\n          </a>\n          <div class=\"shareBox\">\n            <div v-show=\"item.dataSource.cId != null\" v-if=\"!dingState\" class=\"like\" @click=\"unlike($event,item)\"></div>\n            <div v-show=\"item.dataSource.cId == null\" v-if=\"!dingState\" class=\"unlike\" @click=\"like($event,item)\"></div>\n            <div v-show=\"dingState\" class=\"ding\" @click=\"ding($event,item)\">顶</div>\n            <div v-show=\"dingState\" class=\"ding\" @click=\"zhaodao($event,item)\"><div v-show=\"item.dataSource.status == 0\">关闭</div><div v-show=\"item.dataSource.status != 0\">开启</div></div>\n            <div v-show=\"dingState\" class=\"ding\" @click=\"edit(item)\">编辑</div>\n            <div class=\"shareWx\" v-on:click='jumpDetails(item)'>\n              分享给朋友\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n</section>\n";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(40)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\scripts\\components\\search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(41)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2de8fa5c/search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _axios = __webpack_require__(9);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="searchBgBox">
	// 		<div class="serchBoxBg" style="height:28px;">
	// 		    <div class="searchBox">
	// 		      <div class="select_box">
	// 		        <span id="select_country">{{selectedCountry}}</span>
	// 		      </div>
	// 		      <input id="inputBox" type="search" class="weui-search-bar__input searchVue_input" disabled placeholder="搜索好工作 / 公司" v-model="message"/>
	// 		      <span v-on:click='backToLast' class="backBtn">返回</span>
	// 		    </div>
	// 		</div>
	// 	    <div class="contentBox">
	// 			<div v-show="searchTwoState" class="cityBox" style="margin-top: 33px">
	// 		    	<span class="cityTitle">发布信息</span>
	// 		    	<div class="freeBox" >
	// 		    		<div v-on:click="jumpPublish"></div>
	// 		    	</div>
	// 		    </div>
	// 		    <div v-show="!searchTwoState" class="cityBox">
	// 		    	<span class="cityTitle">城市</span>
	// 		    	<div class="cityList">
	// 		    		<span  v-for="(index,item) in cityArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="choseSpan(index, item)" val="city" v-bind:id='item.dataSource.id'>{{item.content}}</span>
	// 		    	</div>
	// 		    </div>
	// 		    <div v-show="!searchTwoState" class="cityBox" style="margin-top: 30px;">
	// 		    	<span class="cityTitle">工作种类</span>
	// 		    	<div class="cityList">
	// 		    		<span v-for="(index,item) in jobType" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="choseSpan(index, item)" val="jobType">{{item.content}}</span>
	// 		    	</div>
	// 		    </div>
	// 		     <div v-show="!searchTwoState" class="cityBox" style="margin-top: 30px;">
	// 		    	<span class="cityTitle">工作性质</span>
	// 		    	<div class="cityList">
	// 		    		<span v-for="(index,item) in jobNatureArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="choseSpan(index, item)" val="jobNature">{{item.content}}</span>
	// 		    	</div>
	// 		    </div>
	//         <div v-show="searchTwoState" class="cityBox" style="margin-top: 30px;">
	//           <span class="cityTitle">找人办事</span>
	//           <div class="cityList">
	//             <span v-for="(index,item) in someoneType" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="choseSpan(index, item)" val="someoneType">{{item.content}}</span>
	//           </div>
	//         </div>
	// 		    <div class="submitBox" style="border:0">
	// 		    	<span id="submitBtn" @click='submitBtn'>
	// 		    		确 认 搜 索
	// 		    	</span>
	// 		    </div>
	// 	    </div>
	// 	</div>
	//
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				curIndex: 0,
				userStatus: 0,
				countriesId: this.$store.state.countriesId,
				url: '',
				message: '',
				showState: false, //ul展示标志（国家选择列表）
				searchTwoState: false, //search2页面中特有的盒子显示标志
				detail: [],
				link: '',
				title: '招聘列表',
				countryList: [{
					value: '西班牙',
					id: '1'
				}, {
					value: '葡萄牙',
					id: '2'
				}, {
					value: '法国',
					id: '3'
				}, {
					value: '意大利',
					id: '4'
				}, {
					value: '英国',
					id: '5'
				}], //可选择国家列表
				selectedCountry: this.$store.state.country,
				cityArr: [], //城市列表数组
				jobNatureArr: [],
				jobType: [],
				someoneType: []
			};
		},
	
		methods: {
			getData: function getData() {
				//获取参数
				var _this = this;
				_axios2.default.get(_this.url, {
					params: {
						'countriesId': _this.countriesId
					}
				}).then(function (res) {
					if (res.status == 200) {
						_this.initData(res.data.data);
					}
				});
			},
			initData: function initData(data) {
				var _this = this;
				var dataObj = function dataObj(content, isSelected, type, dataSource) {
					this.content = content;
					this.isSelected = isSelected;
					this.type = type;
					this.dataSource = dataSource;
				};
				var spanArr = $('.contentBox').find('span');
				for (var x = 0; x < spanArr.length; x++) {
					if ($(spanArr[x]).attr('class') != 'cityTitle') {
						$(spanArr[x]).attr('class', '');
					}
				}
				_this.cityArr = [];
				_this.workKindsArr = [];
				_this.workStateArr = [];
				_this.someoneType = [];
				_this.jobNatureArr = [];
				_this.jobType = [];
				if (data.cityList) {
					data.cityList.forEach(function (item) {
						_this.cityArr.push(new dataObj(item.name, 0, 1, item));
					});
				}
				if (data.jobNature) {
					data.jobNature.forEach(function (item) {
						_this.jobNatureArr.push(new dataObj(item.code, 0, 2, item));
					});
				}
				if (data.jobType) {
					data.jobType.forEach(function (item) {
						_this.jobType.push(new dataObj(item.code, 0, 3, item));
					});
				}
				if (data.someoneType) {
					data.someoneType.forEach(function (item) {
						_this.someoneType.push(new dataObj(item.code, 0, 4, item));
					});
				}
			},
			//改变标签选中样式的方法
			chargeSelected: function chargeSelected(num) {
				if (num == 1) {
					return true;
				} else {
					return false;
				}
			},
			//返回首页的方法
			backToLast: function backToLast() {
				// this.$router.go(-1)
				// window.location.back();
				this.$router.go({ name: '/' });
			},
			//跳转到发布页面的方法
			jumpPublish: function jumpPublish() {
				this.$router.go({ name: 'publish' });
			},
			showUl: function showUl() {
				if (this.showState) {
					this.showState = false;
					$('.select_box').find('span').css({ 'background': "#6E3FFF url('/images/icons/sanjiao_bottom.png') no-repeat 54px center", 'background-size': '12px 7px' });
				} else {
					this.showState = true;
					$('.select_box').find('span').css({ 'background': "#6E3FFF url('/images/icons/sanjiao_top.png') no-repeat 54px center", 'background-size': '12px 7px' });
				}
			},
			/**
	  *选择标签的方法
	  *@param（isOne）		当前标签是多选还是单选
	  *@param（spanType）	当前标签的类型（1:城市，2:工作种类，3:工作性质）
	  *@param（index）		标签的标志位置
	  **/
			choseSpan: function choseSpan(index, item) {
				var target; //一个临时变量；
				if (item.type == 1) {
					target = this.cityArr[index].isSelected == 1 ? 0 : 1;
					this.cityArr[index].isSelected = target;
				} else if (item.type == 2) {
					target = this.jobNatureArr[index].isSelected == 1 ? 0 : 1;
					this.jobNatureArr[index].isSelected = target;
				} else if (item.type == 3) {
					target = this.jobType[index].isSelected == 1 ? 0 : 1;
					this.jobType[index].isSelected = target;
				} else {
					target = this.someoneType[index].isSelected == 1 ? 0 : 1;
					this.someoneType[index].isSelected = target;
				}
			},
			clearSpanStyle: function clearSpanStyle(arr, type) {
				var x,
				    arrLength = arr.length;
				arr.forEach(function (item) {
					item.isSelected = 0;
				});
				if (type == 1) {
					this.cityArr = arr;
				} else if (type == 2) {
					this.workKindsArr = arr;
				} else if (type == 3) {
					this.workStateArr = arr;
				} else {
					this.someoneType = arr;
				}
			},
			choiceCountry: function choiceCountry() {
				var that = this;
				var Spain = new MobileSelect({
					trigger: '#select_country',
					title: that.$store.state.country,
					wheels: [{
						data: that.countryList
					}],
					transitionEnd: function transitionEnd(indexArr, data) {
						that.countriesId = data[0].id;
					},
					callback: function callback(indexArr, data) {
						that.countriesId = data[0].id;
						that.$store.state.countriesId = data[0].id, that.selectedCountry = data[0].value;
						that.$store.state.country = data[0].value;
						that.getData();
					}
				});
			},
			submitBtn: function submitBtn() {
				_commonUtils2.default.waitLoading();
				var spanArr = $('.contentBox').find('span[class="spanSelected"]'),
				    name = 'jobNature',
				    charegeFirst = true,
				    charegeFirst_city = true,
				    chargeFirst_jobtype = true,
				    chargeFirst_someoneType = true,
				    someoneTypeData = '',
				    cityName = '',
				    jobNature = '',
				    jobType = '',
				    someoneType = '',
				    submitUrl = '',
				    title = $('#inputBox').val(),
				    _this = this;
				for (var x = 0; x < spanArr.length; x++) {
					var myVal = $(spanArr[x]).attr('val'),
					    myHtml = $(spanArr[x]).html();
					if (myVal == 'city') {
						if (charegeFirst_city) {
							cityName = myHtml;
							charegeFirst_city = false;
						} else {
							cityName += ',' + myHtml;
						}
					} else if (myVal == 'jobType') {
						if (chargeFirst_jobtype) {
							jobType = myHtml;
							chargeFirst_jobtype = false;
						} else {
							jobType += ',' + myHtml;
						}
					} else if (myVal == 'someoneType') {
						if (chargeFirst_someoneType) {
							someoneType = myHtml;
							chargeFirst_someoneType = false;
						} else {
							someoneType += ',' + myHtml;
						}
					} else {
						if (charegeFirst) {
							jobNature = myHtml;
							charegeFirst = false;
						} else {
							jobNature += ',' + myHtml;
						}
					}
				}
				if (_this.$route.params.type == 2) {
					submitUrl = 'job/someone/searchSomeone';
					var param = {
						'userId': _this.$store.state.userId,
						'countriesId': _this.countriesId,
						'someoneType': someoneType,
						'title': title,
						'pageNumber': 1
					};
				} else {
					submitUrl = 'job/info/searchJobInfo';
					var param = {
						'userId': _this.$store.state.userId,
						'countriesId': _this.countriesId,
						'cityName': cityName,
						'jobType': jobType,
						'title': title,
						'jobNature': jobNature,
						'type': '',
						'pageNumber': 1,
						'pageSize': 9999
					};
				}
				_axios2.default.get(submitUrl, { params: param }).then(function (res) {
					if (res.status == 200) {
						window.listData = res.data.data;
						_commonUtils2.default.endLoading();
						_this.$router.go({ name: 'jobList' });
					}
				});
			}
		},
		ready: function ready() {
			this.choiceCountry();
			_axios2.default.defaults.baseURL = this.$store.state.url;
			if (localStorage._hbossUserId != undefined) {
				this.$store.state.userId = localStorage._hbossUserId;
			}
			this.selectedCountry = this.$store.state.country;
			this.countriesId = this.$store.state.countriesId;
			var _this = this;
			if (this.$route.params.type == 1) {
				this.searchTwoState = false;
				this.url = 'job/index/searchJobConfig';
			} else {
				this.searchTwoState = true;
				this.url = 'job/someone/someoneConfig';
			}
			this.getData();
			$(document).on('click', function () {
				_this.showState = false;
				$('.select_box').find('span').css({ 'background': "#6E3FFF url('/images/icons/sanjiao_bottom.png') no-repeat 54px center", 'background-size': '12px 7px' });
			});
		}
		// </script>
	
		/* generated by vue-loader */
	
	};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = "\n\t<div class=\"searchBgBox\">\n\t\t<div class=\"serchBoxBg\" style=\"height:28px;\">\n\t\t    <div class=\"searchBox\">\n\t\t      <div class=\"select_box\">\n\t\t        <span id=\"select_country\">{{selectedCountry}}</span>\n\t\t      </div>\n\t\t      <input id=\"inputBox\" type=\"search\" class=\"weui-search-bar__input searchVue_input\" disabled placeholder=\"搜索好工作 / 公司\" v-model=\"message\"/>\n\t\t      <span v-on:click='backToLast' class=\"backBtn\">返回</span>\n\t\t    </div>\n\t\t</div>\n\t    <div class=\"contentBox\">\n\t\t\t<div v-show=\"searchTwoState\" class=\"cityBox\" style=\"margin-top: 33px\">\n\t\t    \t<span class=\"cityTitle\">发布信息</span>\n\t\t    \t<div class=\"freeBox\" >\n\t\t    \t\t<div v-on:click=\"jumpPublish\"></div>\n\t\t    \t</div>\n\t\t    </div>\n\t\t    <div v-show=\"!searchTwoState\" class=\"cityBox\">\n\t\t    \t<span class=\"cityTitle\">城市</span>\n\t\t    \t<div class=\"cityList\">\n\t\t    \t\t<span  v-for=\"(index,item) in cityArr\" v-bind:class=\"{'spanSelected': chargeSelected(item.isSelected)} \" v-on:click=\"choseSpan(index, item)\" val=\"city\" v-bind:id='item.dataSource.id'>{{item.content}}</span>\n\t\t    \t</div>\n\t\t    </div>\n\t\t    <div v-show=\"!searchTwoState\" class=\"cityBox\" style=\"margin-top: 30px;\">\n\t\t    \t<span class=\"cityTitle\">工作种类</span>\n\t\t    \t<div class=\"cityList\">\n\t\t    \t\t<span v-for=\"(index,item) in jobType\" v-bind:class=\"{'spanSelected': chargeSelected(item.isSelected)} \" v-on:click=\"choseSpan(index, item)\" val=\"jobType\">{{item.content}}</span>\n\t\t    \t</div>\n\t\t    </div>\n\t\t     <div v-show=\"!searchTwoState\" class=\"cityBox\" style=\"margin-top: 30px;\">\n\t\t    \t<span class=\"cityTitle\">工作性质</span>\n\t\t    \t<div class=\"cityList\">\n\t\t    \t\t<span v-for=\"(index,item) in jobNatureArr\" v-bind:class=\"{'spanSelected': chargeSelected(item.isSelected)} \" v-on:click=\"choseSpan(index, item)\" val=\"jobNature\">{{item.content}}</span>\n\t\t    \t</div>\n\t\t    </div>\n        <div v-show=\"searchTwoState\" class=\"cityBox\" style=\"margin-top: 30px;\">\n          <span class=\"cityTitle\">找人办事</span>\n          <div class=\"cityList\">\n            <span v-for=\"(index,item) in someoneType\" v-bind:class=\"{'spanSelected': chargeSelected(item.isSelected)} \" v-on:click=\"choseSpan(index, item)\" val=\"someoneType\">{{item.content}}</span>\n          </div>\n        </div>\n\t\t    <div class=\"submitBox\" style=\"border:0\">\n\t\t    \t<span id=\"submitBtn\" @click='submitBtn'>\n\t\t    \t\t确 认 搜 索\n\t\t    \t</span>\n\t\t    </div>\n\t    </div>\n\t</div>\n\n";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(43)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\scripts\\components\\publish.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(44)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-368683d5/publish.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _axios = __webpack_require__(9);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _betterScroll = __webpack_require__(36);
	
	var _betterScroll2 = _interopRequireDefault(_betterScroll);
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				selectedCountry: this.$store.state.country,
				showState: false,
				url: '',
				countriesId: this.$store.state.countriesId,
				userId: '',
				countryList: [{
					value: '西班牙',
					id: '1'
				}, {
					value: '葡萄牙',
					id: '2'
				}, {
					value: '法国',
					id: '3'
				}, {
					value: '意大利',
					id: '4'
				}, {
					value: '英国',
					id: '5'
				}], //可选择国家列表
				pullData: [{
					id: 'companyName',
					text: '公司或名牌名字',
					inputType: 'text',
					placeHolder: '请输入',
					inputClass: ''
				}, {
					id: 'componyPic',
					text: '上传宣传图片',
					inputType: 'file',
					placeHolder: '请输入 .jpg',
					inputClass: 'bgAlpha'
				}, {
					id: 'componyEr',
					text: '上传宣传二维码',
					inputType: 'file',
					placeHolder: '请输入 .jpg',
					inputClass: 'bgAlpha'
				}],
				cityArr: [], //城市列表数组
				jobNatureArr: [],
				jobRequirementsArr: [],
				jobSalaryArr: [],
				jobTypeArr: [],
				jobWelfareArr: [],
				someoneTypeArr: [],
				ulState: false, //ul显示状态
				isTypeOne: false, //当当前页面为发布时该值为true， 为找活赚钱该值为false
				//请求需要的参数
				cityId: '',
				companyName: '',
				companyLogo: '',
				companyPublicity: '',
				companyQRCode: '',
				jobType: '',
				jobNature: '',
				jobWelfare: '',
				jobSalary: '',
				jobRequirements: '',
				companyInfo: '',
				title: '',
				tel: '',
				details: '',
				someoneType: ''
			};
		},
	
		methods: {
			black: function black() {
				var _this = this;
				_axios2.default.get('job/user/getUserInfoByUserId', {
					params: {
						'userId': this.$store.state.userId
					}
				}).then(function (res) {
					console.log(res);
					if (res.data.user.blacklist == 1) {
						alert('系统判定您为恶意操作者，请联系管理员申请恢复发布功能');
						_this.$router.go({
							name: '/'
						});
					}
				});
			},
			//获取公司信息
			getCompany: function getCompany() {
				var that = this;
				_commonUtils2.default.waitLoading();
				_axios2.default.get('job/user/findCompanyByUserId', {
					params: {
						'userId': this.$store.state.userId
					}
				}).then(function (res) {
					if (res.status == 200) {
						console.log(res);
						var data = res.data.data;
						if (data != null) {
							that.userName = data.userName;
							that.companyName = data.name;
							that.companyLogo = data.logo;
							that.companyPublicity = data.publicity;
							that.companyQRCode = data.QRCode;
							that.companyInfo = data.info;
							_commonUtils2.default.endLoading();
						} else {
							_commonUtils2.default.endLoading();
						}
					}
				});
			},
			//更换图片
			changeImg: function changeImg(data) {
				if (data == 'companyLogo') {
					this.companyLogo = '';
				} else if (data == 'companyPublicity') {
					this.companyPublicity = '';
				} else if (data == 'companyQRCode') {
					this.companyQRCode = '';
				}
			},
			//选中算法
			selected: function selected(data, arr) {
				var target = void 0;
				var index = void 0;
				for (var i = 0; i < arr.length; i++) {
					if (data == arr[i].content) {
						index = i;
					}
				}
				target = arr[index].isSelected == 1 ? 0 : 1;
				arr[index].isSelected = target;
			},
			//回填公司信息
			editCompany: function editCompany(data) {
				this.companyName = data.companyName;
				this.companyLogo = data.companyLogo;
				this.companyPublicity = data.companyPublicity;
				this.companyQRCode = data.companyQRCode;
				this.companyInfo = data.companyInfo;
			},
			edit: function edit() {
				var _this = this;
				if (_this.$route.params.id != ":id") {
					_this.userId = _this.$route.params.id;
					if (_this.$route.params.type == 1) {
						_commonUtils2.default.waitLoading();
						_axios2.default.get('job/info/jobInfoDetails', {
							params: {
								'jobId': _this.userId
							}
						}).then(function (res) {
							if (res.status == 200) {
								var data = res.data.data;
								var jobWelfareNameArr = data.jobWelfareName.split('&amp;');
								_this.editCompany(data);
								_this.title = data.title;
								_this.tel = data.tel;
								_this.details = data.details;
								//修改
								_this.selected(data.cityName, _this.cityArr);
								_this.selected(data.jobNatureName, _this.jobNatureArr);
								_this.selected(data.jobTypeName, _this.jobTypeArr);
								_this.selected(data.jobSalaryName, _this.jobSalaryArr);
								_this.selected(data.jobRequirementsName, _this.jobRequirementsArr);
								for (var i = 0; i < jobWelfareNameArr.length; i++) {
									_this.selected(jobWelfareNameArr[i], _this.jobWelfareArr);
								}
								_commonUtils2.default.endLoading();
							}
						});
					} else {
						_axios2.default.get('job/someone/someoneInfo', {
							params: {
								'someoneId': _this.userId
							}
						}).then(function (res) {
							if (res.status == 200) {
								var data = res.data.data;
								console.log(data);
								_this.editCompany(data);
								_this.title = data.title;
								_this.tel = data.tel;
								_this.details = data.details;
								_this.selected(data.cityName, _this.cityArr);
								_this.selected(data.someoneTypeName, _this.someoneTypeArr);
								_commonUtils2.default.endLoading();
							}
						});
					}
				}
			},
			//薪资按照顺序排列
			orderArr: function orderArr(oldArr) {
				var orderNumArr = [],
				    firstNum = '';
				//将orderNo存入一个临时数组
				oldArr.forEach(function (item) {
					orderNumArr.push(parseInt(item.orderNo));
				});
				return orderNumArr.sort(function (a, b) {
					return a - b;
				});
			},
			spanClick: function spanClick(index, item) {
				console.log(item);
				var _this = this;
				var target;
				if (item.type == 1) {
					target = _this.cityArr[index].isSelected == 1 ? 0 : 1;
					_this.clearSpanStyle(_this.cityArr, item.type);
					_this.cityArr[index].isSelected = target;
				} else if (item.type == 2) {
					target = _this.jobNatureArr[index].isSelected == 1 ? 0 : 1;
					_this.clearSpanStyle(_this.jobNatureArr, item.type);
					_this.jobNatureArr[index].isSelected = target;
				} else if (item.type == 3) {
					target = _this.jobRequirementsArr[index].isSelected == 1 ? 0 : 1;
					_this.clearSpanStyle(_this.jobRequirementsArr, item.type);
					_this.jobRequirementsArr[index].isSelected = target;
				} else if (item.type == 4) {
					target = _this.jobSalaryArr[index].isSelected == 1 ? 0 : 1;
					_this.clearSpanStyle(_this.jobSalaryArr, item.type);
					_this.jobSalaryArr[index].isSelected = target;
				} else if (item.type == 5) {
					target = _this.jobTypeArr[index].isSelected == 1 ? 0 : 1;
					_this.clearSpanStyle(_this.jobTypeArr, item.type);
					_this.jobTypeArr[index].isSelected = target;
				} else if (item.type == 6) {
					target = _this.jobWelfareArr[index].isSelected == 1 ? 0 : 1;
					_this.jobWelfareArr[index].isSelected = target;
				} else {
					target = _this.someoneTypeArr[index].isSelected == 1 ? 0 : 1;
					_this.clearSpanStyle(_this.someoneTypeArr, item.type);
					_this.someoneTypeArr[index].isSelected = target;
				}
			},
			clearSpanStyle: function clearSpanStyle(arr, type) {
				var x,
				    arrLength = arr.length;
				arr.forEach(function (item) {
					item.isSelected = 0;
				});
				if (type == 1) {
					this.cityArr = arr;
				} else if (type == 2) {
					this.jobNatureArr = arr;
				} else if (type == 3) {
					this.jobRequirementsArr = arr;
				} else if (type == 4) {
					this.jobSalaryArr = arr;
				} else if (type == 5) {
					this.jobTypeArr = arr;
				} else if (type == 6) {
					this.jobWelfareArr = arr;
				} else {
					this.someoneTypeArr = arr;
				}
			},
			//改变标签选中样式的方法
			chargeSelected: function chargeSelected(num) {
				if (num == 1) {
					return true;
				} else {
					return false;
				}
			},
			//获取数据
			getData: function getData() {
				var _this = this;
				_axios2.default.get(this.url, {
					params: {
						'countriesId': this.countriesId
					}
				}).then(function (res) {
					if (res.status == 200) {
						console.log(res);
						_this.initData(res.data.data);
					}
				});
			},
	
			//处理数据
			initData: function initData(data) {
				var _this = this;
				var dataObj = function dataObj(content, type, isSelected, dataSource) {
					this.content = content;
					this.type = type;
					this.isSelected = isSelected;
					this.dataSource = dataSource;
				};
				var spanArr = $('.contentBox').find('span');
				for (var x = 0; x < spanArr.length; x++) {
					if ($(spanArr[x]).attr('class') != 'cityTitle') {
						$(spanArr[x]).attr('class', '');
					}
				}
				_this.cityArr = [];
				_this.jobNatureArr = [];
				_this.jobRequirementsArr = [];
				_this.jobSalaryArr = [];
				_this.jobTypeArr = [];
				_this.jobWelfareArr = [];
				_this.someoneTypeArr = [];
				if (typeof data.cityList != 'undefined') {
					data.cityList.forEach(function (item) {
						_this.cityArr.push(new dataObj(item.name, 1, 0, item));
					});
				};
				if (typeof data.jobNature != 'undefined') {
					data.jobNature.forEach(function (item) {
						_this.jobNatureArr.push(new dataObj(item.code, 2, 0, item));
					});
				};
				if (typeof data.jobRequirements != 'undefined') {
					data.jobRequirements.forEach(function (item) {
						_this.jobRequirementsArr.push(new dataObj(item.code, 3, 0, item));
					});
				};
				if (typeof data.jobSalary != 'undefined') {
					// data.jobSalary.forEach(function(item) {
					// 	_this.jobSalaryArr.push(new dataObj(item.code, 4, 0, item));
					// });
					//声明排序后的数组
					var orderAfter = _this.orderArr(data.jobSalary);
					console.log(orderAfter);
					for (var x = 0; x < orderAfter.length; x++) {
						data.jobSalary.forEach(function (item) {
							if (parseInt(item.orderNo) == orderAfter[x]) {
								_this.jobSalaryArr.push(new dataObj(item.code, 4, 0, item));
							}
						});
					};
					console.log(_this.jobSalaryArr);
				};
				if (typeof data.jobType != 'undefined') {
					data.jobType.forEach(function (item) {
						_this.jobTypeArr.push(new dataObj(item.code, 5, 0, item));
					});
				};
				if (typeof data.jobWelfare != 'undefined') {
					data.jobWelfare.forEach(function (item) {
						_this.jobWelfareArr.push(new dataObj(item.code, 6, 0, item));
					});
				};
				if (typeof data.someoneType != 'undefined') {
					data.someoneType.forEach(function (item) {
						_this.someoneTypeArr.push(new dataObj(item.code, 7, 0, item));
					});
				};
				_this.edit();
				Vue.nextTick(function () {
					_this.indexscroll = new _betterScroll2.default(_this.$els.indexscroll, {
						click: true
					});
				});
			},
	
			//input焦点事件
			inputFocus: function inputFocus(num) {
				if (num == 0) {
					$('.inputBox').eq(index).find('span').hide();
					$('.inputBox').eq(index).find('input').css({
						'padding-left': '10px'
					});
				} else {
					this.clickInput(num);
				}
			},
			//input失去焦点事件
			inputBlur: function inputBlur(num) {
				if (num == 0) {
					$('.inputBox').eq(index).find('span').show();
					$('.inputBox').eq(index).find('input').css({
						'padding-left': '0px'
					});
				}
			},
			// 点击展示列表
			showInput: function showInput() {
				var that = this;
				if (this.ulState) {
					this.ulState = false;
					$('.pullDownBox').css({
						'background': 'url("/images/icons/downDoubleTick.png") no-repeat 12px center',
						'background-size': '28px 27px'
					});
				} else {
					this.ulState = true;
					$('.pullDownBox').css({
						'background': 'url("/images/icons/upDoubleTick.png") no-repeat 12px center',
						'background-size': '28px 27px'
					});
				}
				Vue.nextTick(function () {
					that.indexscroll.refresh();
				});
			},
			//点击input触发的事件
			clickInput: function clickInput(index) {
				if (index == 0) {
					$('.inputBox').eq(index).find('span').hide();
					$('.inputBox').eq(index).find('input').css({
						'padding-left': '10px'
					});
					$('.inputBox').eq(index).find('input').focus();
				} else {
					$('.inputBox').eq(index).find('input').click();
				}
			},
			//返回首页
			backToHome: function backToHome() {
				this.$router.go({
					name: '/'
				});
			},
			//展示国家列表
			showUl: function showUl() {
				if (this.showState) {
					this.showState = false;
					$('.select_box').find('span').css({
						'background': "#6E3FFF url('/images/icons/sanjiao_bottom.png') no-repeat 66% center",
						'background-size': '12px 7px'
					});
				} else {
					this.showState = true;
					$('.select_box').find('span').css({
						'background': "#6E3FFF url('/images/icons/sanjiao_top.png') no-repeat 66% center",
						'background-size': '12px 7px'
					});
				}
			},
			submitData: function submitData() {
				var _this = this,
				    phone = _this.tel,
				    title = _this.title,
				    require = _this.details,
				    spanArr = $('.contentBox').find('span[class="spanSelected"]'),
				    charegeFirst = true,
				    companyName = _this.companyName,
				    companyQRCode = _this.companyQRCode,
				    companyLogo = _this.companyLogo,
				    companyPublicity = _this.companyPublicity,
				    companyInfo = _this.companyInfo,
				    someoneTypeData = '',
				    canSubmit = true,
				    id;
				if (_this.$route.params.id == ':id') {
					id = null;
				} else {
					id = _this.$route.params.id;
				}
				if (phone.length != 9) {
					alert('请输入9位数字');
					$('#phone').focus();
					canSubmit = false;
				}
				for (var x = 0; x < spanArr.length; x++) {
					var myVal = $(spanArr[x]).attr('val'),
					    myHtml = $(spanArr[x]).html();
					if (myVal == 'city') {
						_this.cityId = $(spanArr[x]).attr('id');
					} else if (myVal == 'jobNature') {
						_this.jobNature = myHtml;
					} else if (myVal == 'jobType') {
						_this.jobType = myHtml;
					} else if (myVal == 'jobWelfare') {
						if (charegeFirst) {
							_this.jobWelfare = myHtml;
							charegeFirst = false;
						} else {
							_this.jobWelfare += '&' + myHtml;
						}
					} else if (myVal == 'jobSalary') {
						_this.jobSalary = myHtml;
					} else if (myVal == 'jobRequirements') {
						_this.jobRequirements = myHtml;
					} else if (myVal == 'someoneType') {
						_this.someoneType = myHtml;
					}
				}
				if (canSubmit) {
					if (_this.isTypeOne) {
						if (_this.cityId == '') {
							alert("请选择城市");
						} else if (_this.jobType == '') {
							alert("请选择工作种类");
						} else if (_this.jobNature == '') {
							alert("请选择工作性质");
						} else if (_this.jobWelfare == '') {
							alert("请选择福利待遇");
						} else if (_this.jobSalary == '') {
							alert("请选择薪资区间");
						} else if (_this.jobRequirements == '') {
							alert("请选择居住要求");
						} else if (title == '') {
							alert("请输入招聘标题");
						} else {
							_axios2.default.get('job/info/publishJob', {
								params: {
									"id": id,
									"userId": _this.$store.state.userId,
									"cityId": _this.cityId,
									"companyName": companyName,
									"companyLogo": companyLogo,
									"companyPublicity": companyPublicity,
									"companyQRCode": companyQRCode,
									"companyInfo": companyInfo,
									"jobType": _this.jobType,
									"jobNature": _this.jobNature,
									"jobWelfare": _this.jobWelfare,
									"jobSalary": _this.jobSalary,
									"jobRequirements": _this.jobRequirements,
									"title": title,
									"tel": phone,
									"details": require
								}
							}).then(function (res) {
								if (res.status == 200) {
									_this.$store.state.like = false;
									console.log(res);
									_this.$router.go({
										name: 'details',
										params: {
											jobId: res.data.jobId,
											type: 1,
											isShow: 1
										}
									});
								}
							});
						}
					} else {
						if (_this.cityId == '') {
							alert("请选择城市");
						} else if (_this.someoneType == '') {
							alert("请选择分类");
						} else if (title == '') {
							alert("请输入招聘标题");
						} else {
							_axios2.default.get('job/someone/publishSom', {
								params: {
									"id": id,
									"userId": _this.$store.state.userId,
									"cityId": _this.cityId,
									"companyName": companyName,
									"companyLogo": companyLogo,
									"companyPublicity": companyPublicity,
									"companyQRCode": companyQRCode,
									"companyInfo": companyInfo,
									"someoneType": _this.someoneType,
									"title": title,
									"tel": phone,
									"details": require
								}
							}).then(function (res) {
								console.log(res);
								if (res.status == 200) {
									_this.$store.state.like = false;
									window.listData = undefined;
									// jumpPage();
									_this.$router.go({
										name: 'details',
										params: {
											jobId: res.data.someoneId,
											type: 2,
											isShow: 1
										}
									});
								}
							});
						}
					}
				}
			},
			choiceCountry: function choiceCountry() {
				var that = this;
				var Spain = new MobileSelect({
					trigger: '#select_country',
					title: that.$store.state.country,
					wheels: [{
						data: that.countryList
					}],
					transitionEnd: function transitionEnd(indexArr, data) {
						that.countriesId = data[0].id;
					},
					callback: function callback(indexArr, data) {
						console.log(data);
						that.countriesId = data[0].id;
						that.$store.state.countriesId = data[0].id;
						that.selectedCountry = data[0].value;
						that.$store.state.country = data[0].value;
						that.getData();
					}
				});
			}
		},
		ready: function ready() {
			_axios2.default.defaults.baseURL = this.$store.state.url;
			if (localStorage._hbossUserId != undefined) {
				this.$store.state.userId = localStorage._hbossUserId;
			}
			this.selectedCountry = this.$store.state.country;
			this.countriesId = this.$store.state.countriesId;
			var _this = this;
			if (this.$route.params.type == 1) {
				this.isTypeOne = true;
				this.url = 'job/info/jobInfoConfig';
			} else {
				this.searchTwoState = false;
				this.url = 'job/someone/someoneConfig';
			}
			if (_this.$store.state.userId == '') {
				if (window.location.href.split('?userId=')[1] == undefined) {
					_axios2.default.get('weixin/config/oauth', {
						params: {
							"state": window.location.href + "?userId=okid"
						}
					}).then(function (res) {
						window.location.href = res.data.data;
					}).catch(function (err) {
						console.log(err);
					});
				} else {
					_this.$store.state.userId = window.location.href.split('?userId=')[1];
					localStorage._hbossUserId = window.location.href.split('?userId=')[1];
				}
			}
			this.black();
			this.getCompany();
			this.choiceCountry();
			this.getData();
			$('#LOGO input').change(function () {
				$('#LOGO').submit();
			});
			$('#myArticleForm input').change(function () {
				$('#myArticleForm').submit();
			});
			$('#formBox1 input').change(function () {
				$('#formBox1').submit();
			});
			$('#LOGO').ajaxForm({
				dataType: 'json',
				success: function success(data) {
					_this.companyLogo = data.urlPath;
					console.log(_this.companyLogo);
				}
			});
			$('#myArticleForm').ajaxForm({
				dataType: 'json',
				success: function success(data) {
					_this.companyPublicity = data.urlPath;
				}
			});
			$('#formBox1').ajaxForm({
				dataType: 'json',
				success: function success(data) {
					_this.companyQRCode = data.urlPath;
				}
			});
			$(document).on('click', function () {
				_this.showState = false;
				$('.select_box').find('span').css({
					'background': "#6E3FFF url('/images/icons/sanjiao_bottom.png') no-repeat 66% center",
					'background-size': '12px 7px'
				});
			});
			$('.inputBox').on('focus', 'input', function () {
				var inputIndex = $(this).index() - 1;
				if (inputIndex == 0) {
					$('.inputBox').eq(0).find('span').hide();
					$('.inputBox').eq(0).find('input').css({
						'padding-left': '10px'
					});
				}
			});
			$('.inputBox').on('blur', 'input', function () {
				var inputIndex = $(this).index() - 1;
				if (inputIndex == 0) {
					$('.inputBox').eq(0).find('span').show();
					$('.inputBox').eq(0).find('input').css({
						'padding-left': '0px'
					});
				}
			});
			//点击发布电话号码的input
			$('#phone').on('input propertychange', function () {
				var content = $('#phone').val();
				console.log(content.length);
				var reg = /^[0-9]+$/;
				if (content != '') {
					if (!reg.test(content) || content.length > 9) {
						alert('请输入9位数字');
						$('#phone').focus();
					}
				}
			});
			$('#phone').on('focus', function () {
				$('#phone').val('');
			});
		}
		// </script>
	
		/* generated by vue-loader */
	
	}; // <template>
	// 	<div id="index-scroll" v-el:indexscroll>
	// 		<div class="publish">
	// 			<div class="titleBox">
	// 				<div class="select_box">
	// 					<i>国家</i>
	// 			        <span id="select_country">{{selectedCountry}}</span>
	// 			     </div>
	// 				<span v-on:click="backToHome" class="backBtn">返回</span>
	// 			</div>
	// 			<div class="whyBox">
	// 				<div class="pullDownBox">
	// 					<span v-on:click="showInput">制作您的品牌展示广告，请点击！</span>
	// 				</div>
	// 				<ul v-show="ulState">
	// 						<li>
	// 							<span class="pullDownText">
	// 								公司或名牌名字
	// 							</span>
	// 							<div class="inputBox">
	// 								<input id="companyName" type="text" name="companyName" v-model="companyName" placeholder="请输入"/>
	// 								<i>选填</i>
	// 							</div>
	// 						</li>
	// 						<form id="LOGO" action="https://pc.hboss.com/job/index/uploadImage" method="post" enctype="multipart/form-data">
	// 							<li>
	// 								<span  class="pullDownText">
	// 									上传LOGO
	// 								</span>
	// 								<div class="inputBox" v-show="companyLogo == ''">
	// 									<input id="imageFile" type="file" name="imageFile">
	// 								</div>
	// 								<div class="companyImg" v-show="companyLogo != ''">
	// 									<img :src="companyLogo" alt="">
	// 								</div>
	// 								<span class="changeImg" v-show="companyLogo != ''" @click="changeImg('companyLogo')">
	// 									更换图片
	// 								</span>
	// 							</li>
	// 						</form>
	// 						<form id="myArticleForm" action="https://pc.hboss.com/job/index/uploadImage" method="post" enctype="multipart/form-data">
	// 							<li>
	// 								<span  class="pullDownText">
	// 									上传宣传图片
	// 								</span>
	// 								<div class="inputBox" v-show="companyPublicity == ''">
	// 									<input id="imageFile" type="file" name="imageFile">
	// 								</div>
	// 								<div class="companyImg" v-show="companyPublicity != ''">
	// 									<img :src="companyPublicity" alt="">
	// 								</div>
	// 								<span class="changeImg" v-show="companyPublicity != ''" @click="changeImg('companyPublicity')">
	// 									更换图片
	// 								</span>
	// 							</li>
	// 						</form>
	// 					<form id="formBox1" action="https://pc.hboss.com/job/index/uploadImage" method="post" enctype="multipart/form-data">
	// 						<li>
	// 							<span  class="pullDownText">
	// 								上传宣传二维码
	// 							</span>
	// 							<div class="inputBox" v-show="companyQRCode == ''">
	// 								<input id="componyEr" type="file" name="componyEr" />
	// 							</div>
	// 							<div class="companyImg" v-show="companyQRCode != ''">
	// 								<img :src="companyQRCode" alt="">
	// 							</div>
	// 							<span class="changeImg" v-show="companyQRCode != ''" @click="changeImg('companyQRCode')">
	// 								更换图片
	// 							</span>
	// 						</li>
	// 					</form>
	// 					<div class="textArea">
	// 						<span>广告语<i>(最多可写100字)</i></span>
	// 						<textarea name="inputtextarge" id="textArea" placeholder="选填" v-model="companyInfo" maxlength="100"></textarea>
	// 							<!-- <input v-bind:class="item.inputClass" v-bind:id="item.id" v-bind:type="item.inputType"  /> -->
	// 					</div>
	// 				</ul>
	// 				<span class="whyText">
	// 					什么是品牌展示广告？
	// 				</span>
	// 			</div>
	//
	// 			<div id="title" class="submitBox">
	// 				<ul>
	// 					<li>
	// 						<i>*</i>
	// 						<span class="submitTip">
	// 							<div v-if="isTypeOne">招聘标题</div>
	// 							<div v-else>找人办事</div>
	// 						</span>
	// 						<div class="inputBox_sub">
	// 							<input v-model="title" type="text" placeholder="请输入标题" maxlength="20"/>
	// 							<span class="inputTip">必填</span>
	// 						</div>
	// 					</li>
	// 				</ul>
	// 			</div>
	//
	// 			<div class="contentBox">
	// 				<div class="cityBox" style="margin-top: 14px">
	// 					<div class="cityTitle">
	// 						城市
	// 					</div>
	// 					<div class="cityList">
	// 						<span  v-for="(index,item) in cityArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="spanClick(index, item)" val="city" v-bind:id="item.dataSource.id">{{item.content}} </span>
	// 					</div>
	// 				</div>
	// 				<div v-if="!isTypeOne" class="cityBox" style="margin-top: 14px">
	// 					<div class="cityTitle">
	// 						分类
	// 					</div>
	// 					<div class="cityList">
	// 						<span  v-for="(index,item) in someoneTypeArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="spanClick(index, item)" val="someoneType">{{item.content}} </span>
	// 					</div>
	// 				</div>
	// 				<div v-if="isTypeOne" class="cityBox" style="margin-top: 14px">
	// 					<div class="cityTitle">
	// 						工作种类
	// 					</div>
	// 					<div class="cityList">
	// 						<span  v-for="(index,item) in jobTypeArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} "v-on:click="spanClick(index, item)" val="jobType">{{item.content}}</span>
	// 					</div>
	// 				</div>
	// 				<div v-if="isTypeOne" class="cityBox" style="margin-top: 14px">
	// 					<div class="cityTitle">
	//
	// 						工作性质
	// 					</div>
	// 					<div class="cityList">
	// 						<span  v-for="(index,item) in jobNatureArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} "v-on:click="spanClick(index, item)" val="jobNature">{{item.content}}</span>
	// 					</div>
	// 				</div>
	// 				<div v-if="isTypeOne" class="cityBox" style="margin-top: 14px">
	// 					<div class="cityTitle">
	// 						福利待遇
	// 					</div>
	// 					<div class="cityList">
	// 						<span  v-for="(index,item) in jobWelfareArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} "v-on:click="spanClick(index, item)" val="jobWelfare">{{item.content}}</span>
	// 					</div>
	// 				</div>
	// 				<div v-if="isTypeOne" class="cityBox" style="margin-top: 14px">
	// 					<div class="cityTitle">
	// 						薪资区间
	// 					</div>
	// 					<div class="cityList">
	// 						<span  v-for="(index,item) in jobSalaryArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} "v-on:click="spanClick(index, item)" val="jobSalary">{{item.content}}</span>
	// 					</div>
	// 				</div>
	// 				<div v-if="isTypeOne" class="cityBox" style="margin-top: 14px">
	// 					<div class="cityTitle">
	// 						居留要求
	// 					</div>
	// 					<div class="cityList">
	// 						<span  v-for="(index,item) in jobRequirementsArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} "v-on:click="spanClick(index, item)" val="jobRequirements">{{item.content}}</span>
	// 					</div>
	// 				</div>
	// 			</div>
	//
	// 			<div class="submitBox">
	// 				<ul>
	// 					<li>
	// 						<i>*</i>
	// 						<span class="submitTip">
	// 							联系电话
	// 						</span>
	// 						<div class="inputBox_sub">
	// 							<input id="phone" v-model="tel" type="text" placeholder="请输入9位电话" />
	// 							<span class="inputTip">必填</span>
	// 						</div>
	// 					</li>
	// 					<li>
	// 						<span class="submitTip">
	// 							<div v-if="isTypeOne">详细工作要求和说明</div>
	// 							<div v-else>详细说明</div>
	// 						</span>
	// 					</li>
	// 					<li>
	// 						<textarea id="require" name="name" v-model="details" placeholder="请输入要求和说明"  maxlength="200"></textarea>
	// 					</li>
	// 				</ul>
	// 				<div id="submitBtn" class="submitBtn" v-on:click="submitData">
	// 					发&nbsp;&nbsp;布
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = "\n<div id=\"index-scroll\" v-el:indexscroll>\n\t<div class=\"publish\">\n\t\t<div class=\"titleBox\">\n\t\t\t<div class=\"select_box\">\n\t\t\t\t<i>国家</i>\n\t\t        <span id=\"select_country\">{{selectedCountry}}</span>\n\t\t     </div>\n\t\t\t<span v-on:click=\"backToHome\" class=\"backBtn\">返回</span>\n\t\t</div>\n\t\t<div class=\"whyBox\">\n\t\t\t<div class=\"pullDownBox\">\n\t\t\t\t<span v-on:click=\"showInput\">制作您的品牌展示广告，请点击！</span>\n\t\t\t</div>\n\t\t\t<ul v-show=\"ulState\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span class=\"pullDownText\">\n\t\t\t\t\t\t\t公司或名牌名字\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<div class=\"inputBox\">\n\t\t\t\t\t\t\t<input id=\"companyName\" type=\"text\" name=\"companyName\" v-model=\"companyName\" placeholder=\"请输入\"/>\n\t\t\t\t\t\t\t<i>选填</i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<form id=\"LOGO\" action=\"https://pc.hboss.com/job/index/uploadImage\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span  class=\"pullDownText\">\n\t\t\t\t\t\t\t\t上传LOGO\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<div class=\"inputBox\" v-show=\"companyLogo == ''\">\n\t\t\t\t\t\t\t\t<input id=\"imageFile\" type=\"file\" name=\"imageFile\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"companyImg\" v-show=\"companyLogo != ''\">\n\t\t\t\t\t\t\t\t<img :src=\"companyLogo\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class=\"changeImg\" v-show=\"companyLogo != ''\" @click=\"changeImg('companyLogo')\">\n\t\t\t\t\t\t\t\t更换图片\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</form>\n\t\t\t\t\t<form id=\"myArticleForm\" action=\"https://pc.hboss.com/job/index/uploadImage\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span  class=\"pullDownText\">\n\t\t\t\t\t\t\t\t上传宣传图片\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<div class=\"inputBox\" v-show=\"companyPublicity == ''\">\n\t\t\t\t\t\t\t\t<input id=\"imageFile\" type=\"file\" name=\"imageFile\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"companyImg\" v-show=\"companyPublicity != ''\">\n\t\t\t\t\t\t\t\t<img :src=\"companyPublicity\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class=\"changeImg\" v-show=\"companyPublicity != ''\" @click=\"changeImg('companyPublicity')\">\n\t\t\t\t\t\t\t\t更换图片\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</form>\n\t\t\t\t<form id=\"formBox1\" action=\"https://pc.hboss.com/job/index/uploadImage\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span  class=\"pullDownText\">\n\t\t\t\t\t\t\t上传宣传二维码\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<div class=\"inputBox\" v-show=\"companyQRCode == ''\">\n\t\t\t\t\t\t\t<input id=\"componyEr\" type=\"file\" name=\"componyEr\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"companyImg\" v-show=\"companyQRCode != ''\">\n\t\t\t\t\t\t\t<img :src=\"companyQRCode\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"changeImg\" v-show=\"companyQRCode != ''\" @click=\"changeImg('companyQRCode')\">\n\t\t\t\t\t\t\t更换图片\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</li>\n\t\t\t\t</form>\n\t\t\t\t<div class=\"textArea\">\n\t\t\t\t\t<span>广告语<i>(最多可写100字)</i></span>\n\t\t\t\t\t<textarea name=\"inputtextarge\" id=\"textArea\" placeholder=\"选填\" v-model=\"companyInfo\" maxlength=\"100\"></textarea>\n\t\t\t\t\t\t<!-- <input v-bind:class=\"item.inputClass\" v-bind:id=\"item.id\" v-bind:type=\"item.inputType\"  /> -->\n\t\t\t\t</div>\n\t\t\t</ul>\n\t\t\t<span class=\"whyText\">\n\t\t\t\t什么是品牌展示广告？\n\t\t\t</span>\n\t\t</div>\n\n\t\t<div id=\"title\" class=\"submitBox\">\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t<i>*</i>\n\t\t\t\t\t<span class=\"submitTip\">\n\t\t\t\t\t\t<div v-if=\"isTypeOne\">招聘标题</div>\n\t\t\t\t\t\t<div v-else>找人办事</div>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"inputBox_sub\">\n\t\t\t\t\t\t<input v-model=\"title\" type=\"text\" placeholder=\"请输入标题\" maxlength=\"20\"/>\n\t\t\t\t\t\t<span class=\"inputTip\">必填</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"contentBox\">\n\t\t\t<div class=\"cityBox\" style=\"margin-top: 14px\">\n\t\t\t\t<div class=\"cityTitle\">\n\t\t\t\t\t城市\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cityList\">\n\t\t\t\t\t<span  v-for=\"(index,item) in cityArr\" v-bind:class=\"{'spanSelected': chargeSelected(item.isSelected)} \" v-on:click=\"spanClick(index, item)\" val=\"city\" v-bind:id=\"item.dataSource.id\">{{item.content}} </span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div v-if=\"!isTypeOne\" class=\"cityBox\" style=\"margin-top: 14px\">\n\t\t\t\t<div class=\"cityTitle\">\n\t\t\t\t\t分类\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cityList\">\n\t\t\t\t\t<span  v-for=\"(index,item) in someoneTypeArr\" v-bind:class=\"{'spanSelected': chargeSelected(item.isSelected)} \" v-on:click=\"spanClick(index, item)\" val=\"someoneType\">{{item.content}} </span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div v-if=\"isTypeOne\" class=\"cityBox\" style=\"margin-top: 14px\">\n\t\t\t\t<div class=\"cityTitle\">\n\t\t\t\t\t工作种类\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cityList\">\n\t\t\t\t\t<span  v-for=\"(index,item) in jobTypeArr\" v-bind:class=\"{'spanSelected': chargeSelected(item.isSelected)} \"v-on:click=\"spanClick(index, item)\" val=\"jobType\">{{item.content}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div v-if=\"isTypeOne\" class=\"cityBox\" style=\"margin-top: 14px\">\n\t\t\t\t<div class=\"cityTitle\">\n\n\t\t\t\t\t工作性质\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cityList\">\n\t\t\t\t\t<span  v-for=\"(index,item) in jobNatureArr\" v-bind:class=\"{'spanSelected': chargeSelected(item.isSelected)} \"v-on:click=\"spanClick(index, item)\" val=\"jobNature\">{{item.content}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div v-if=\"isTypeOne\" class=\"cityBox\" style=\"margin-top: 14px\">\n\t\t\t\t<div class=\"cityTitle\">\n\t\t\t\t\t福利待遇\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cityList\">\n\t\t\t\t\t<span  v-for=\"(index,item) in jobWelfareArr\" v-bind:class=\"{'spanSelected': chargeSelected(item.isSelected)} \"v-on:click=\"spanClick(index, item)\" val=\"jobWelfare\">{{item.content}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div v-if=\"isTypeOne\" class=\"cityBox\" style=\"margin-top: 14px\">\n\t\t\t\t<div class=\"cityTitle\">\n\t\t\t\t\t薪资区间\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cityList\">\n\t\t\t\t\t<span  v-for=\"(index,item) in jobSalaryArr\" v-bind:class=\"{'spanSelected': chargeSelected(item.isSelected)} \"v-on:click=\"spanClick(index, item)\" val=\"jobSalary\">{{item.content}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div v-if=\"isTypeOne\" class=\"cityBox\" style=\"margin-top: 14px\">\n\t\t\t\t<div class=\"cityTitle\">\n\t\t\t\t\t居留要求\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cityList\">\n\t\t\t\t\t<span  v-for=\"(index,item) in jobRequirementsArr\" v-bind:class=\"{'spanSelected': chargeSelected(item.isSelected)} \"v-on:click=\"spanClick(index, item)\" val=\"jobRequirements\">{{item.content}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"submitBox\">\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t<i>*</i>\n\t\t\t\t\t<span class=\"submitTip\">\n\t\t\t\t\t\t联系电话\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"inputBox_sub\">\n\t\t\t\t\t\t<input id=\"phone\" v-model=\"tel\" type=\"text\" placeholder=\"请输入9位电话\" />\n\t\t\t\t\t\t<span class=\"inputTip\">必填</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<span class=\"submitTip\">\n\t\t\t\t\t\t<div v-if=\"isTypeOne\">详细工作要求和说明</div>\n\t\t\t\t\t\t<div v-else>详细说明</div>\n\t\t\t\t\t</span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<textarea id=\"require\" name=\"name\" v-model=\"details\" placeholder=\"请输入要求和说明\"  maxlength=\"200\"></textarea>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div id=\"submitBtn\" class=\"submitBtn\" v-on:click=\"submitData\">\n\t\t\t\t发&nbsp;&nbsp;布\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(46)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\scripts\\components\\details.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(47)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3bf9f0f0/details.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _axios = __webpack_require__(9);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _betterScroll = __webpack_require__(36);
	
	var _betterScroll2 = _interopRequireDefault(_betterScroll);
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // <template>
	// 	<div class="sussecc" v-show="status != 0"></div>
	// 	<div id="index-scroll" v-el:indexscroll>
	// 		<div class="detailsBox">
	// 			<div v-show="isShare" class="share">
	// 				<div class="shareBg"></div>
	// 			</div>
	// 			<div v-show="companyName" class="companyBox">
	// 				<div class="companyName">
	// 					<img v-show = "companyLogoState" id="companyIcon" v-bind:src="companyLogoPic"></img>
	// 					<div v-show = "companyNameState" class="companyNameText">{{companyName}}</div>
	// 				</div>
	// 				<div v-show = "companyInfoState" class="companyContent">
	// 					{{companyInfo}}
	// 				</div>
	// 				<img v-show = "companyPublictityState" class="companyPic" v-bind:src='componyImg'>
	//
	// 				</img>
	// 			</div>
	// 			<span v-show="companyName" class="line"></span>
	// 			<div class="jobBox">
	// 				<div class="jobName">{{jobName}}</div>
	// 				<div class="salary" v-if="money">月薪 : <span>{{money}}</span></div>
	// 				<div class="requireBox">
	// 					<span v-for="item in requireArr">{{item}}</span>
	// 				</div>
	// 				<div class="beizhu">
	// 					{{details}}
	// 				</div>
	// 				<div class="erWeiMa">
	// 					<img class="erWeiPic" v-bind:src="erWeiMaPic"  v-show="erWeiMaPic"/>
	//
	// 					<div class="erWeiText"  v-if="erWeiMaPic">
	// 						扫描二维码 , 直接联络
	// 					</div>
	// 					<a :href="phoneNum" class="callPhone">
	// 						直 接 拨 打
	// 					</a>
	// 					<div class="backBox">
	// 						<div class="back" v-on:click = 'backHome'>
	// 							看更多工作
	// 						</div>
	// 						<div class="dateBox">
	// 							发布日期: {{createDate}}
	// 							<div v-show="like" class="like" @click="mylike(item)"></div>
	// 							<div v-show="!like" class="unlike" @click="unlike()"></div>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>
	
	
	exports.default = {
		data: function data() {
			var _ref;
	
			return _ref = {
				count: 0,
				jobName: '',
				isShare: false,
				money: '',
				requireArr: [],
				url: '',
				companyLogoState: false,
				companyNameState: false,
				companyInfoState: false,
				companyPublictityState: false,
				details: '',
				jobId: '',
				someoneId: '',
				companyInfo: '',
				companyName: '',
				companyPublictity: ''
			}, _defineProperty(_ref, 'details', ''), _defineProperty(_ref, 'phoneNum', ''), _defineProperty(_ref, 'erWeiMaPic', ''), _defineProperty(_ref, 'componyImg', ''), _defineProperty(_ref, 'companyLogoPic', ''), _defineProperty(_ref, 'createDate', ''), _defineProperty(_ref, 'status', ''), _defineProperty(_ref, 'like', true), _ref;
		},
	
		watch: {
			count: function count(val) {
				var _this = this;
				var imgs = document.querySelectorAll('img');
				if (val == imgs.length) {
					Vue.nextTick(function () {
						_this.indexscroll = new _betterScroll2.default(_this.$els.indexscroll, {
							click: true
						});
					});
				}
			}
		},
		compiled: function compiled() {
			if (localStorage._hbossUserId != undefined) {
				this.$store.state.userId = localStorage._hbossUserId;
			}
			var _this = this;
			_axios2.default.defaults.baseURL = this.$store.state.url;
			if (this.$store.state.isShow == 1) {
				_this.isShare = true;
			} else {
				_this.isShare = false;
			}
			//正常发布
			if (this.$route.params.type == 1) {
				this.url = 'job/info/jobInfoDetails';
				this.jobId = this.$route.params.jobId;
			} else {
				this.url = 'job/someone/someoneInfo';
				this.someoneId = this.$route.params.jobId;
			}
			this.jobId = this.$route.params.jobId;
			_commonUtils2.default.waitLoading();
			this.getData();
		},
		ready: function ready() {
			var _this = this;
			$('.share').on('click', function (event) {
				if ($(event.target).attr('class') != 'shareBg') {
					// $(this).hide();
					_this.isShare = false;
				}
			});
		},
		methods: {
			unlike: function unlike() {
				var _this = this;
				var that = this;
				if (_this.$store.state.userId == '') {
					if (window.location.href.split('?userId=')[1] == undefined) {
						_axios2.default.get('weixin/config/oauth', {
							params: {
								"state": window.location.href + "?userId=okid"
							}
						}).then(function (res) {
							window.location.href = res.data.data;
						}).catch(function (err) {
							console.log(err);
						});
					} else {
						_this.$store.state.userId = window.location.href.split('?userId=')[1];
						localStorage._hbossUserId = window.location.href.split('?userId=')[1];
						_axios2.default.get("job/user/saveCollection", {
							params: {
								"userId": that.$store.state.userId,
								"status": 0,
								"title": that.jobName,
								"type": that.$route.params.type,
								"jobId": that.$route.params.jobId
							}
						}).then(function (res) {
							that.like = true;
						});
					}
				} else {
					_axios2.default.get("job/user/saveCollection", {
						params: {
							"userId": that.$store.state.userId,
							"status": 0,
							"title": that.jobName,
							"type": that.$route.params.type,
							"jobId": that.$route.params.jobId
						}
					}).then(function (res) {
						that.like = true;
					});
				}
			},
			//收藏
			mylike: function mylike() {
				var _this = this;
				var that = this;
				if (_this.$store.state.userId == '') {
					if (window.location.href.split('?userId=')[1] == undefined) {
						_axios2.default.get('weixin/config/oauth', {
							params: {
								"state": window.location.href + "?userId=okid"
							}
						}).then(function (res) {
							window.location.href = res.data.data;
						}).catch(function (err) {
							console.log(err);
						});
					} else {
						_this.$store.state.userId = window.location.href.split('?userId=')[1];
						localStorage._hbossUserId = window.location.href.split('?userId=')[1];
						_axios2.default.get("job/user/saveCollection", {
							params: {
								"userId": that.$store.state.userId,
								"status": 1,
								"title": that.jobName,
								"type": that.$route.params.type,
								"jobId": that.$route.params.jobId
							}
						}).then(function (res) {
							that.like = false;
						});
					}
				} else {
					_axios2.default.get("job/user/saveCollection", {
						params: {
							"userId": that.$store.state.userId,
							"status": 1,
							"title": that.jobName,
							"type": that.$route.params.type,
							"jobId": that.$route.params.jobId
						}
					}).then(function (res) {
						that.like = false;
					});
				}
			},
			backHome: function backHome() {
				this.$router.go({
					name: '/'
				});
			},
			getData: function getData() {
				var _this = this,
				    param;
				if (_this.$route.params.type == 1) {
					if (_this.$store.state.userId == '') {
						param = {
							'jobId': _this.jobId
						};
					} else {
						param = {
							'jobId': _this.jobId,
							'userId': _this.$store.state.userId
						};
					}
				} else {
					if (_this.$store.state.userId == '') {
						param = {
							'someoneId': _this.someoneId
						};
					} else {
						param = {
							'someoneId': _this.someoneId,
							'userId': _this.$store.state.userId
						};
					}
				}
				_axios2.default.get(this.url, {
					params: param
				}).then(function (res) {
					if (res.status == 200) {
						var data = res.data.data;
						wx.ready(function () {
							wx.onMenuShareTimeline({
								title: '【招聘】' + data.title, // 分享标题
								link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: data.companyLogo || 'http://ofot6413t.bkt.clouddn.com/3f04c2bf513091dc34ee46f01e8eee43.jpg', // 分享图标
								success: function success() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function cancel() {
									// 用户取消分享后执行的回调函数
								}
							});
							wx.onMenuShareAppMessage({
								title: '【招聘】' + data.title, // 分享标题
								desc: '', // 分享描述
								link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: data.companyLogo || 'http://ofot6413t.bkt.clouddn.com/3f04c2bf513091dc34ee46f01e8eee43.jpg', // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function success() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function cancel() {
									// 用户取消分享后执行的回调函数
								}
							});
						});
						_this.initData(data);
						Vue.nextTick(function () {
							_commonUtils2.default.endLoading();
						});
					}
				});
			},
			initData: function initData(data) {
				var _this2 = this;
	
				console.log(data);
				var _this = this;
				var arrA = [];
				_this.status = data.status;
				if (typeof data.companyName != 'undefined') {
					this.companyNameState = true;
					this.companyName = data.companyName;
				}
				if (typeof data.companyLogo != 'undefined') {
					this.companyLogoState = true;
					this.companyLogoPic = data.companyLogo;
				}
				if (_typeof(data.cId) == undefined || data.cId != null) {
					this.like = false;
				}
				if (typeof data.companyInfo != 'undefined') {
					this.companyInfoState = true;
					this.companyInfo = data.companyInfo;
				}
				if (typeof data.companyPublicity != 'undefined') {
					this.companyPublictityState = true;
					this.componyImg = data.companyPublicity;
				}
				if (typeof data.companyQRCode != 'undefined') {
					this.erWeiMaPic = data.companyQRCode;
				}
				if (typeof data.details != 'undefined') {
					this.details = data.details;
				} else {
					this.details = '暂无具体介绍';
				}
				if (typeof data.tel != 'undefined') {
					this.phoneNum = 'tel:' + data.tel;
				}
				this.createDate = data.createDate.split(' ')[0];
				this.jobName = data.title;
				this.money = data.jobSalaryName;
				for (var x in data) {
					if (x == 'cityName' && typeof data[x] != 'undefined') {
						arrA[0] = data[x];
					} else if (x == 'jobTypeName' || x == "someoneTypeName" && typeof data[x] != 'undefined') {
						arrA[1] = data[x];
					} else if (x == 'jobWelfareName' && data[x] != null) {
						var arr = data[x].split('&amp;');
						arr.forEach(function (item) {
							arrA.push(item);
						});
					}
				}
				this.requireArr = arrA;
				var imgs = document.querySelectorAll('img');
				Array.from(imgs).forEach(function (item) {
					console.log(item);
					item.onload = function () {
						_this2.count++;
					};
				});
			}
		}
		// </script>
	
		/* generated by vue-loader */
	
	};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"sussecc\" v-show=\"status != 0\"></div>\n<div id=\"index-scroll\" v-el:indexscroll>\n\t<div class=\"detailsBox\">\n\t\t<div v-show=\"isShare\" class=\"share\">\n\t\t\t<div class=\"shareBg\"></div>\n\t\t</div>\n\t\t<div v-show=\"companyName\" class=\"companyBox\">\n\t\t\t<div class=\"companyName\">\n\t\t\t\t<img v-show = \"companyLogoState\" id=\"companyIcon\" v-bind:src=\"companyLogoPic\"></img>\n\t\t\t\t<div v-show = \"companyNameState\" class=\"companyNameText\">{{companyName}}</div>\n\t\t\t</div>\n\t\t\t<div v-show = \"companyInfoState\" class=\"companyContent\">\n\t\t\t\t{{companyInfo}}\n\t\t\t</div>\n\t\t\t<img v-show = \"companyPublictityState\" class=\"companyPic\" v-bind:src='componyImg'>\n\n\t\t\t</img>\n\t\t</div>\n\t\t<span v-show=\"companyName\" class=\"line\"></span>\n\t\t<div class=\"jobBox\">\n\t\t\t<div class=\"jobName\">{{jobName}}</div>\n\t\t\t<div class=\"salary\" v-if=\"money\">月薪 : <span>{{money}}</span></div>\n\t\t\t<div class=\"requireBox\">\n\t\t\t\t<span v-for=\"item in requireArr\">{{item}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"beizhu\">\n\t\t\t\t{{details}}\n\t\t\t</div>\n\t\t\t<div class=\"erWeiMa\">\n\t\t\t\t<img class=\"erWeiPic\" v-bind:src=\"erWeiMaPic\"  v-show=\"erWeiMaPic\"/>\n\n\t\t\t\t<div class=\"erWeiText\"  v-if=\"erWeiMaPic\">\n\t\t\t\t\t扫描二维码 , 直接联络\n\t\t\t\t</div>\n\t\t\t\t<a :href=\"phoneNum\" class=\"callPhone\">\n\t\t\t\t\t直 接 拨 打\n\t\t\t\t</a>\n\t\t\t\t<div class=\"backBox\">\n\t\t\t\t\t<div class=\"back\" v-on:click = 'backHome'>\n\t\t\t\t\t\t看更多工作\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"dateBox\">\n\t\t\t\t\t\t发布日期: {{createDate}}\n\t\t\t\t\t\t<div v-show=\"like\" class=\"like\" @click=\"mylike(item)\"></div>\n\t\t\t\t\t\t<div v-show=\"!like\" class=\"unlike\" @click=\"unlike()\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(49)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\scripts\\components\\wode.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3f521e83/wode.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _axios = __webpack_require__(9);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div id='wode'>
	// 		<div class="homeback" @click="home">
	//
	// 		</div>
	// 		<div class="my_top">
	// 			<img class="user_pic" v-bind:src="user_pic">
	//
	// 			</img>
	// 		</div>
	// 		<ul class="user_ul">
	// 			<li @click="jumpToList(2)">
	// 				<text>我的信息</text>
	// 				<span>不 完 善</span>
	// 			</li>
	// 			<li v-on:click="jumpToList(0)">
	// 				我的发布
	// 			</li>
	// 			<li v-on:click="jumpToList(1)">
	// 				我的收藏
	// 			</li>
	// 			<li v-on:click="showTextArea">
	// 				意见反馈
	// 			</li>
	// 			<div v-show="textAreaState" class="textAreaBox">
	// 				<textarea name="" id="wode_textarea" placeholder="填写反馈意见"></textarea>
	// 				<span class="submitBtn_wode" v-on:click="createSubmit">提交</span>
	// 			</div>
	// 		</ul>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {
				user_pic: '/images/icons/user_pic.png',
				textAreaState: false,
				userName: '', //保存用户名
				url: '' //请求地址
			};
		},
	
		methods: {
			home: function home() {
				this.$router.go({
					name: '/'
				});
			},
			showTextArea: function showTextArea() {
				if (this.textAreaState == false) {
					this.textAreaState = true;
				} else {
					this.textAreaState = false;
				}
			},
			//提交意见反馈
			createSubmit: function createSubmit() {
				var _this = this,
				    content = $('#wode_textarea').val();
				this.url = '/job/user/saveProposal';
				if (content != '') {
					_axios2.default.get(_this.url, {
						params: {
							'userId': _this.$store.state.userId,
							'userName': _this.userName,
							'details': content
						}
					}).then(function (res) {
						if (res.status == 200) {
							$('#wode_textarea').val('');
							_this.textAreaState = false;
							alert('提交成功');
						}
					});
				} else {
					alert('必须填写内容！');
				}
			},
			//跳入列表,0表示发布，1表示收藏
			jumpToList: function jumpToList(num) {
				var _this = this;
				_commonUtils2.default.waitLoading();
				if (num == 2) {
					_this.$router.go({
						name: 'company'
					});
				} else {
					if (num == 0) {
						this.url = '/job/user/myPublish';
						window.myPublish = 1;
					} else if (num == 1) {
						this.url = '/job/user/myCollection';
					}
					_axios2.default.get(this.url, {
						params: {
							'userId': _this.$store.state.userId
						}
					}).then(function (res) {
						if (res.status == 200) {
							if (num == 1) {
								window.listData = res.data.data;
								_commonUtils2.default.endLoading();
							} else {
								console.log(res.data.data);
								window.listData = res.data.data.jobList.concat(res.data.data.someoneList);
								_commonUtils2.default.endLoading();
							}
							_this.$router.go({
								name: 'jobList'
							});
						}
					});
				}
			}
		},
		ready: function ready() {
			_axios2.default.defaults.baseURL = this.$store.state.url;
			var _this = this;
			if (localStorage._hbossUserId != undefined) {
				this.$store.state.userId = localStorage._hbossUserId;
			}
			if (_this.$store.state.userId == '') {
				if (window.location.href.split('?userId=')[1] == undefined) {
					_axios2.default.get('weixin/config/oauth', {
						params: {
							"state": window.location.href + "?userId=okid"
						}
					}).then(function (res) {
						window.location.href = res.data.data;
					}).catch(function (err) {
						console.log(err);
					});
				} else {
					_this.$store.state.userId = window.location.href.split('?userId=')[1];
					localStorage._hbossUserId = window.location.href.split('?userId=')[1];
				}
			};
			//获取用户名字
			if (_this.$store.state.userHead != '') {
				_this.user_pic = _this.$store.state.userHead;
			} else {
				this.url = '/job/user/getUserInfoByUserId';
				_axios2.default.get(this.url, {
					params: {
						userId: _this.$store.state.userId
					}
				}).then(function (res) {
					console.log(res);
					if (res.status == 200) {
						_this.userName = res.data.user.name;
						_this.$store.state.userHead = res.data.user.head;
						_this.user_pic = res.data.user.head;
					}
				});
			}
		}
		// </script>
	
		/* generated by vue-loader */
	
	};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = "\n<div id='wode'>\n\t<div class=\"homeback\" @click=\"home\">\n\n\t</div>\n\t<div class=\"my_top\">\n\t\t<img class=\"user_pic\" v-bind:src=\"user_pic\">\n\n\t\t</img>\n\t</div>\n\t<ul class=\"user_ul\">\n\t\t<li @click=\"jumpToList(2)\">\n\t\t\t<text>我的信息</text>\n\t\t\t<span>不 完 善</span>\n\t\t</li>\n\t\t<li v-on:click=\"jumpToList(0)\">\n\t\t\t我的发布\n\t\t</li>\n\t\t<li v-on:click=\"jumpToList(1)\">\n\t\t\t我的收藏\n\t\t</li>\n\t\t<li v-on:click=\"showTextArea\">\n\t\t\t意见反馈\n\t\t</li>\n\t\t<div v-show=\"textAreaState\" class=\"textAreaBox\">\n\t\t\t<textarea name=\"\" id=\"wode_textarea\" placeholder=\"填写反馈意见\"></textarea>\n\t\t\t<span class=\"submitBtn_wode\" v-on:click=\"createSubmit\">提交</span>\n\t\t</div>\n\t</ul>\n</div>\n";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(52)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\scripts\\components\\company.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(53)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3cdbbc43/company.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(9);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _commonUtils = __webpack_require__(5);
	
	var _commonUtils2 = _interopRequireDefault(_commonUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div id="company">
	//     <div class="whyBox">
	//       <ul>
	//           <li>
	//             <span class="pullDownText">
	//               公司或名牌名字
	//             </span>
	//             <div class="inputBox">
	//               <input id="companyName" type="text" name="companyName" v-model="companyName" placeholder="请输入"/>
	//               <i>选填</i>
	//             </div>
	//           </li>
	//           <form id="LOGO" action="https://pc.hboss.com/job/index/uploadImage" method="post" enctype="multipart/form-data">
	//             <li>
	//               <span  class="pullDownText">
	//                 上传LOGO
	//               </span>
	//               <div class="inputBox" v-show="companyLogo == ''">
	//                 <input id="imageFile" type="file" name="imageFile">
	//               </div>
	//               <div class="companyImg" v-show="companyLogo != ''">
	//                 <img :src="companyLogo" alt="">
	//               </div>
	//               <span class="changeImg" v-show="companyLogo != ''" @click="changeImg('companyLogo')">
	//                 更换图片
	//               </span>
	//             </li>
	//           </form>
	//           <form id="myArticleForm" action="https://pc.hboss.com/job/index/uploadImage" method="post" enctype="multipart/form-data">
	//             <li>
	//               <span  class="pullDownText">
	//                 上传宣传图片
	//               </span>
	//               <div class="inputBox" v-show="companyPublicity == ''">
	//                 <input id="imageFile" type="file" name="imageFile">
	//               </div>
	//               <div class="companyImg" v-show="companyPublicity != ''">
	//                 <img :src="companyPublicity" alt="">
	//               </div>
	//               <span class="changeImg" v-show="companyPublicity != ''" @click="changeImg('companyPublicity')">
	//                 更换图片
	//               </span>
	//             </li>
	//           </form>
	//         <form id="formBox1" action="https://pc.hboss.com/job/index/uploadImage" method="post" enctype="multipart/form-data">
	//           <li>
	//             <span  class="pullDownText">
	//               上传宣传二维码
	//             </span>
	//             <div class="inputBox" v-show="companyQRCode == ''">
	//               <input id="componyEr" type="file" name="componyEr" />
	//             </div>
	//             <div class="companyImg" v-show="companyQRCode != ''">
	//               <img :src="companyQRCode" alt="">
	//             </div>
	//             <span class="changeImg" v-show="companyQRCode != ''" @click="changeImg('companyQRCode')">
	//               更换图片
	//             </span>
	//           </li>
	//         </form>
	//         <div class="textArea">
	//           <span>广告语<i>(最多可写100字)</i></span>
	//           <textarea name="inputtextarge" id="textArea" placeholder="选填" v-model="companyInfo" maxlength="100"></textarea>
	//             <!-- <input v-bind:class="item.inputClass" v-bind:id="item.id" v-bind:type="item.inputType"  /> -->
	//         </div>
	//       </ul>
	//       <div id="submitBtn" class="submitBtn" v-on:click="submitData">
	//         保&nbsp;&nbsp;存
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      url: '',
	      id: null,
	      pullData: [{
	        id: 'companyName',
	        text: '公司或名牌名字',
	        inputType: 'text',
	        placeHolder: '请输入',
	        inputClass: ''
	      }, {
	        id: 'componyPic',
	        text: '上传宣传图片',
	        inputType: 'file',
	        placeHolder: '请输入 .jpg',
	        inputClass: 'bgAlpha'
	      }, {
	        id: 'componyEr',
	        text: '上传宣传二维码',
	        inputType: 'file',
	        placeHolder: '请输入 .jpg',
	        inputClass: 'bgAlpha'
	      }],
	      userName: '',
	      companyName: '',
	      companyLogo: '',
	      companyPublicity: '',
	      companyQRCode: '',
	      companyInfo: ''
	    };
	  },
	
	  methods: {
	    //获取公司信息
	    getCompany: function getCompany() {
	      var that = this;
	      _axios2.default.get('job/user/findCompanyByUserId', {
	        params: {
	          'userId': this.$store.state.userId
	        }
	      }).then(function (res) {
	        if (res.status == 200) {
	          console.log(res);
	          var data = res.data.data;
	          if (data != null) {
	            that.userName = data.userName;
	            that.companyName = data.name;
	            that.companyLogo = data.logo;
	            that.companyPublicity = data.publicity;
	            that.companyQRCode = data.QRCode;
	            that.companyInfo = data.info;
	            that.id = data.id;
	            _commonUtils2.default.endLoading();
	          } else {
	            _commonUtils2.default.endLoading();
	          }
	        }
	      });
	    },
	    //更换图片
	    changeImg: function changeImg(data) {
	      if (data == 'companyLogo') {
	        this.companyLogo = '';
	      } else if (data == 'companyPublicity') {
	        this.companyPublicity = '';
	      } else if (data == 'companyQRCode') {
	        this.companyQRCode = '';
	      }
	    },
	    submitData: function submitData() {
	      var that = this;
	      _axios2.default.get('job/user/saveCompany', {
	        params: {
	          'userId': that.$store.state.userId,
	          "userName": that.userName,
	          'id': that.id,
	          "name": that.companyName,
	          "publicity": that.companyPublicity,
	          "QRCode": that.companyQRCode,
	          "info": that.companyInfo,
	          "logo": that.companyLogo
	        }
	      }).then(function (res) {
	        if (res.status == 200) {
	          that.$router.go({
	            name: 'wode'
	          });
	        }
	      });
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	    _axios2.default.defaults.baseURL = this.$store.state.url;
	    this.getCompany();
	    $('#LOGO input').change(function () {
	      $('#LOGO').submit();
	    });
	    $('#myArticleForm input').change(function () {
	      $('#myArticleForm').submit();
	    });
	    $('#formBox1 input').change(function () {
	      $('#formBox1').submit();
	    });
	    $('#LOGO').ajaxForm({
	      dataType: 'json',
	      success: function success(data) {
	        _this.companyLogo = data.urlPath;
	        console.log(_this.companyLogo);
	      }
	    });
	    $('#myArticleForm').ajaxForm({
	      dataType: 'json',
	      success: function success(data) {
	        _this.companyPublicity = data.urlPath;
	      }
	    });
	    $('#formBox1').ajaxForm({
	      dataType: 'json',
	      success: function success(data) {
	        _this.companyQRCode = data.urlPath;
	      }
	    });
	  }
	
	  /* generated by vue-loader */
	
	};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = "\n<div id=\"company\">\n  <div class=\"whyBox\">\n    <ul>\n        <li>\n          <span class=\"pullDownText\">\n            公司或名牌名字\n          </span>\n          <div class=\"inputBox\">\n            <input id=\"companyName\" type=\"text\" name=\"companyName\" v-model=\"companyName\" placeholder=\"请输入\"/>\n            <i>选填</i>\n          </div>\n        </li>\n        <form id=\"LOGO\" action=\"https://pc.hboss.com/job/index/uploadImage\" method=\"post\" enctype=\"multipart/form-data\">\n          <li>\n            <span  class=\"pullDownText\">\n              上传LOGO\n            </span>\n            <div class=\"inputBox\" v-show=\"companyLogo == ''\">\n              <input id=\"imageFile\" type=\"file\" name=\"imageFile\">\n            </div>\n            <div class=\"companyImg\" v-show=\"companyLogo != ''\">\n              <img :src=\"companyLogo\" alt=\"\">\n            </div>\n            <span class=\"changeImg\" v-show=\"companyLogo != ''\" @click=\"changeImg('companyLogo')\">\n              更换图片\n            </span>\n          </li>\n        </form>\n        <form id=\"myArticleForm\" action=\"https://pc.hboss.com/job/index/uploadImage\" method=\"post\" enctype=\"multipart/form-data\">\n          <li>\n            <span  class=\"pullDownText\">\n              上传宣传图片\n            </span>\n            <div class=\"inputBox\" v-show=\"companyPublicity == ''\">\n              <input id=\"imageFile\" type=\"file\" name=\"imageFile\">\n            </div>\n            <div class=\"companyImg\" v-show=\"companyPublicity != ''\">\n              <img :src=\"companyPublicity\" alt=\"\">\n            </div>\n            <span class=\"changeImg\" v-show=\"companyPublicity != ''\" @click=\"changeImg('companyPublicity')\">\n              更换图片\n            </span>\n          </li>\n        </form>\n      <form id=\"formBox1\" action=\"https://pc.hboss.com/job/index/uploadImage\" method=\"post\" enctype=\"multipart/form-data\">\n        <li>\n          <span  class=\"pullDownText\">\n            上传宣传二维码\n          </span>\n          <div class=\"inputBox\" v-show=\"companyQRCode == ''\">\n            <input id=\"componyEr\" type=\"file\" name=\"componyEr\" />\n          </div>\n          <div class=\"companyImg\" v-show=\"companyQRCode != ''\">\n            <img :src=\"companyQRCode\" alt=\"\">\n          </div>\n          <span class=\"changeImg\" v-show=\"companyQRCode != ''\" @click=\"changeImg('companyQRCode')\">\n            更换图片\n          </span>\n        </li>\n      </form>\n      <div class=\"textArea\">\n        <span>广告语<i>(最多可写100字)</i></span>\n        <textarea name=\"inputtextarge\" id=\"textArea\" placeholder=\"选填\" v-model=\"companyInfo\" maxlength=\"100\"></textarea>\n          <!-- <input v-bind:class=\"item.inputClass\" v-bind:id=\"item.id\" v-bind:type=\"item.inputType\"  /> -->\n      </div>\n    </ul>\n    <div id=\"submitBtn\" class=\"submitBtn\" v-on:click=\"submitData\">\n      保&nbsp;&nbsp;存\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var state = {
	    tabIndex: 0,
	    userStatus: 0,
	    isShow: '',
	    userHead: '',
	    userId: '',
	    country: '西班牙',
	    countriesId: 1,
	    url: 'https://pc.hboss.com/'
	    // url: 'http://test.13701918.com/'
	    //记得改publish.vue,company.vue和commonUtils
	};
	
	var mutations = {
	    CHANGEINDEX: function CHANGEINDEX(state, curIndex) {
	        state.tabIndex = curIndex;
	    }
	};
	
	exports.default = new Vuex.Store({
	    state: state,
	    mutations: mutations
	});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map