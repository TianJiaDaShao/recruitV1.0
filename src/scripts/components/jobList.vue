<template id="jobList">
  <div class="homeback homebackTop" @click="homeback"></div>
  <ul class="listTop" v-show="listTop">
    <li class="parentLi" v-on:click="showChildUl(0)" id="newReruit">{{dflushData}}<div><ul v-show="newReruit" class="childUl"><li class="childLi" v-on:click="flushData(0)">最新发布</li><li class="childLi" v-on:click="flushData(1)">最高工资</li><li class="childLi" v-on:click="flushData(2)">企业招聘专区</li></ul></div></li>
    <li class="parentLi" v-on:click="showChildUl(1)" id="city">{{city}}<div class="cityIscroll"><ul v-show="cityUlShow" class="childUl"><li class="childLi" v-for="item in cityArr_list" v-on:click="flushNewData(item, 1)">{{item.name}}</li></ul></div></li>
    <li class="parentLi" v-on:click="showChildUl(2)">{{leibie}}<div><ul v-show="jobKindsShow" class="childUl"><li class="childLi" v-for="item in jobKindsArr_list" v-on:click="flushNewData(item, 2)">{{item.code}}</li></ul></div></li>
    <li class="parentLi" v-on:click="showChildUl(3)">{{quanzhi}}<div><ul v-show="quanZhiUlShow" class="childUl"><li class="childLi" v-for="item in quanZhiArr_list" v-on:click="flushNewData(item, 3)">{{item.code}}</li></ul></div></li>
  </ul>
<section id="index-scroll" v-el:indexscroll>
  <ul>
    <div class="search">
      <div class="select_box">
        <span id="select_country">{{selectedCountry}}</span>
      </div>
      <span v-on:click="tabClick('search', 1)" class="serch_span">搜索好工作 / 公司</span>
      <div class="_zhan"></div>
    </div>
    <div id="jobListSwiper" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/images/icons/banner.jpg" alt=""></div>
        <!-- <div class="swiper-slide"></div>
        <div class="swiper-slide"></div> -->
      </div>
    </div>

    <section class="searchCountry">
       <div class="fourTab" v-for="(index,item) in tabsList" >
         <img :src="item.img" />
         <text>{{item.text}}</text>
       </div>
    </section>
    <div v-show="isShow" class="jumpBox">
      <div class="leftBox">
        <span class="leftBox_top" v-on:click="flushData(0)">
          最新发布
        </span>
        <span class="leftBox_bottom" v-on:click="flushData(1)">
          最高工资
        </span>
      </div>
      <div class="rightBox" v-on:click="flushData(2)">
      </div>
    </div>
    <span class="downPull">

    </span>
    <li class="content" v-for="(index, item) in details" v-on:click="showDetails(index, $event)">
      <div class="sussecc" v-show="item.dataSource.status != 0"></div>
      <div class="contentBox1">
        <div class="titleBox">
          <div class="companyName">{{item.title}}</div>
          <div class="money" v-if="!item.dataSource.someoneTypeName">{{item.money}}</div>
          <div class="money" v-if="item.dataSource.someoneTypeName">找活挣钱</div>
        </div>
        <div class="requireBox">
          <div class="spanArr">
            <span v-for="i in item.spanArr">{{i}}</span>
          </div>
          <div class="timeBox">
            {{item.createDate}}
          </div>
        </div>
        <div class="details" v-show="item.isShowDetails">
          {{item.dataSource.details}}
        </div>
        <div class="suoxie" v-if="item.companyName">
          <img :src="item.dataSource.companyLogo" alt="">
          <div class="suoxie_text">
            <p class='suoxieName'>{{item.companyName}}</p>
           <p class='suo_Info'>{{item.companyInfo}}</p>
          </div>
        </div>
        <div v-show="item.isShowDetails" class="hideBox">
          <img class="picBox" v-bind:src="item.companyPic">

          </img>
          <a :href="changePhone(item.dataSource.tel)" class="callPhone">
            一 键 拨 打
          </a>
          <div class="shareBox">
            <div v-show="item.dataSource.cId != null" v-if="!dingState" class="like" @click="unlike($event,item)"></div>
            <div v-show="item.dataSource.cId == null" v-if="!dingState" class="unlike" @click="like($event,item)"></div>
            <div v-show="dingState" class="ding" @click="ding($event,item)">顶</div>
            <div v-show="dingState" class="ding" @click="zhaodao($event,item)"><div v-show="item.dataSource.status == 0">关闭</div><div v-show="item.dataSource.status != 0">开启</div></div>
            <div v-show="dingState" class="ding" @click="edit(item)">编辑</div>
            <div class="shareWx" v-on:click='jumpDetails(item)'>
              分享给朋友
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</section>
</template>
<script>
  import axios from 'axios';
  import swiper from 'swiper';
  import BScroll from 'better-scroll';
  import utils from '../utils/commonUtils.js';
  import {
    changeIndex
  } from "../vuex/actions";

  var mySwiper = null;

  export default {
    vuex: {
      actions: {
        change: changeIndex
      }
    },
    data() {
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
          },
          {
            'img': '/images/tabs/fa_bg.png',
            'text': '发招聘'
          },
          {
            'img': '/images/tabs/thing_bg.png',
            'text': '找人办事'
          },
          {
            'img': '/images/tabs/add_bg.png',
            'text': '我的发布'
          },
        ]
      }
    },
    ready: function() {
      utils.jobListwx();
      axios.defaults.baseURL = this.$store.state.url;
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
          that.indexscroll = new BScroll(that.$els.indexscroll,{
            click: true
          })
        })
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

      $(document).on('click', function() {
        that.showState = false;
        $('.select_box').find('span').css({
          'background': "#6E3FFF url('/images/icons/sanjiao_bottom.png') no-repeat 54px center",
          'background-size': '12px 7px'
        });
      });
      $('.fourTab').on('click', function() {
        if ($(this).index() == 0) {
          that.tabClick('search', 1);
        } else if ($(this).index() == 1) {
          that.tabClick('publish', 1);
        } else if ($(this).index() == 2) {
          that.tabClick('search', 2);
        } else if ($(this).index() == 3) {
          that.$router.go({
            name: 'wode'
          })
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
    destroyed: function() {
      window.myPublish = 0;
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'loading'
    },
    methods: {
      //刷新首页
      homeback: function() {
        this.url = 'job/index/searchJobIndex';
        this.loading();
        this.isShow = true;
        this.dingState = false;
      },
      //编辑
      edit: function(item) {
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
      zhaodao: function(e, item) {
        e.stopPropagation();
        var that = this;
        var type;
        if (!item.dataSource.someoneTypeName) {
          type = "job";
        } else {
          type = "someone";
        }
        if (item.dataSource.status != 1) {
          axios.get("job/user/infoOver", {
            params: {
              "type": type,
              "id": item.id,
              "status": 1
            }
          }).then(function(res) {
            console.log(res);
            item.dataSource.status = 1;
          })
        } else {
          axios.get("job/user/infoOver", {
            params: {
              "type": type,
              "id": item.id,
              "status": 0
            }
          }).then(function(res) {
            console.log(res);
            item.dataSource.status = 0;
          })
        }
      },
      //顶
      ding: function(e, item) {
        e.stopPropagation();
        var that = this;
        var type;
        if (!item.dataSource.someoneTypeName) {
          type = "job";
        } else {
          type = "someone";
        }
        axios.get("job/user/infoRefresh", {
          params: {
            "userId": that.$store.state.userId,
            "userName": item.dataSource.userName,
            "title": item.title,
            "type": type,
            "id": item.id
          }
        }).then(function(res) {
          console.log(res);
          that.homeback();
        })
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
            axios.get('weixin/config/oauth', {
              params: {
                "state": window.location.href + "?userId=okid"
              }
            }).then(function(res) {
              window.location.href = res.data.data;
            }).catch(function(err) {
              console.log(err);
            });
          } else {
            _this.$store.state.userId = window.location.href.split('?userId=')[1];
            localStorage._hbossUserId = window.location.href.split('?userId=')[1];
            axios.get("job/user/saveCollection", {
              params: {
                "userId": that.$store.state.userId,
                "status": 1,
                "title": item.title,
                "type": type,
                "jobId": item.id
              }
            }).then(function(res) {
              item.dataSource.cId = ''
            })
          }
        } else {
          axios.get("job/user/saveCollection", {
            params: {
              "userId": that.$store.state.userId,
              "status": 1,
              "title": item.title,
              "type": type,
              "jobId": item.id
            }
          }).then(function(res) {
            console.log(res);
            item.dataSource.cId = ''
          })
        }
      },
      unlike: function(e, item) {
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
            axios.get('weixin/config/oauth', {
              params: {
                "state": window.location.href + "?userId=okid"
              }
            }).then(function(res) {
              window.location.href = res.data.data;
            }).catch(function(err) {
              console.log(err);
            });
          } else {
            _this.$store.state.userId = window.location.href.split('?userId=')[1];
            localStorage._hbossUserId = window.location.href.split('?userId=')[1];
            axios.get("job/user/saveCollection", {
              params: {
                "userId": that.$store.state.userId,
                "status": 0,
                "title": item.title,
                "type": type,
                "jobId": item.id
              }
            }).then(function(res) {
              console.log(res);
              item.dataSource.cId = null
            })
          }
        } else {
          axios.get("job/user/saveCollection", {
            params: {
              "userId": that.$store.state.userId,
              "status": 0,
              "title": item.title,
              "type": type,
              "jobId": item.id
            }
          }).then(function(res) {
            console.log(res);
            item.dataSource.cId = null
          })
        }
      },
      //获取列表
      getUlContent: function() {
        var that = this;
        axios.get("job/info/jobInfoConfig", {
          params: {
            'countriesId': that.countriesId
          }
        }).then(function(res) {
          if (res.status == 200) {
            var data = res.data.data
            that.cityArr_list = [];
            that.jobKindsArr_list = [];
            that.quanZhiArr_list = [];
            that.cityArr_list = data.cityList;
            that.jobKindsArr_list = data.jobType;
            that.quanZhiArr_list = data.jobNature;
          }
        })
      },
      //增加图片
      addPic: function(src) {
        console.log(src);
        return 'background:' + src;
      },
      //item表示当前数据,type表示类型
      flushNewData: function(item, type) {
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
        }
        utils.waitLoading();
        axios.get('job/info/searchJobInfo', {
          params: param
        }).then(function(res) {
          if (res.status == 200) {
            _this.initData(res.data.data);
            Vue.nextTick(function () {
              _this.indexscroll.refresh();
              utils.endLoading();
            });
          }
        })
      },
      showChildUl: function(type) {
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
        setTimeout(function() {
          if ($('.parentLi:eq(' + type + ') .childUl')[0].clientHeight < $('.parentLi:eq(' + type + ') .childUl')[0].scrollHeight) {
            $('.parentLi:eq(' + type + ')').append('<div class="goDown"><div></div></div>')
          }
        }, 0)
      },
      changePhone(phoneNum) {
        if (typeof phoneNum != 'undefined') {
          return 'tel:' + phoneNum;
        } else {
          return '';
        }
      },
      flushData: function(type) {
        var _this = this;
        var postType = '';
        switch (type) {
          case 0:
            postType = '';
            _this.dflushData = "最新发布"
            break;
          case 1:
            _this.dflushData = "最高工资"
            postType = type;
            break;
          case 2:
            _this.dflushData = "最高工资"
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
        }
        utils.waitLoading();
        axios.get(_this.url, {
          params: param
        }).then(function(res) {
          if (res.status == 200) {
            console.log(res.data.data);
            _this.initData(res.data.data);
            Vue.nextTick(function () {
              _this.indexscroll.refresh();
            });
            utils.endLoading();
          }
        })
      },
      //跳转详情
      jumpDetails: function(item) {
        this.$store.state.isShow = 1;
        if (item.dataSource.someoneTypeName) {
          this.$router.go({
            name: 'details',
            params: {
              jobId: item.id,
              type: 2,
              isShow: 1
            }
          })
        } else {
          this.$router.go({
            name: 'details',
            params: {
              jobId: item.id,
              type: 1,
              isShow: 1
            }
          })
        }
      },
      showDetails: function(num, event) {
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
      initData: function(initdata) {
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
          data.forEach(function(item) {
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
                if (typeof item[x] != "object") {
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
                if (typeof item[x] != "object") {
                  var arrone = item[x].split('&amp;');
                  if (arrone.length > 1) {
                    for (var y = 0; y < arrone.length; y++) {
                      spanArr.push(arrone[y])
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
      tabClick: function(name, num) {
        this.$router.go({
          name: name,
          params: {
            type: num,
            id: null
          }
        });
      },
      //点击展示下拉列表并改变样式
      showUl: function() {
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
      loading: function() {
        var that = this;
        $('.weui_toast_content').text("数据加载中");
        utils.waitLoading();
        var param = {
          'userId': that.$store.state.userId,
          'countriesId': that.countriesId
        };
        axios.get(that.url, {
          params: param
        }).then(function(res) {
          var data = res.data.data;
          that.initData(data);
          Vue.nextTick(function () {
            that.indexscroll = new BScroll(that.$els.indexscroll,{
              click: true
            })
          })
          utils.endLoading();
        })
      },
      choiceCountry: function() {
        var that = this;
        var Spain = new MobileSelect({
          trigger: '#select_country',
          title: that.$store.state.country,
          wheels: [{
            data: that.countryList
          }],
          transitionEnd: function(indexArr, data) {
            that.countriesId = data[0].id;
          },
          callback: function(indexArr, data) {
            that.countriesId = data[0].id;
            that.$store.state.countriesId = data[0].id,
            that.selectedCountry = data[0].value;
            that.$store.state.country = data[0].value;
            that.getUlContent();
            that.loading();
          }
        });
      }
    }
  }
</script>
