<template>
	<div class="searchBgBox">
		<div class="serchBoxBg" style="height:28px;">
		    <div class="searchBox">
		      <div class="select_box">
		        <span id="select_country">{{selectedCountry}}</span>
		      </div>
		      <input id="inputBox" type="search" class="weui-search-bar__input searchVue_input" disabled placeholder="搜索好工作 / 公司" v-model="message"/>
		      <span v-on:click='backToLast' class="backBtn">返回</span>
		    </div>
		</div>
	    <div class="contentBox">
			<div v-show="searchTwoState" class="cityBox" style="margin-top: 33px">
		    	<span class="cityTitle">发布信息</span>
		    	<div class="freeBox" >
		    		<div v-on:click="jumpPublish"></div>
		    	</div>
		    </div>
		    <div v-show="!searchTwoState" class="cityBox">
		    	<span class="cityTitle">城市</span>
		    	<div class="cityList">
		    		<span  v-for="(index,item) in cityArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="choseSpan(index, item)" val="city" v-bind:id='item.dataSource.id'>{{item.content}}</span>
		    	</div>
		    </div>
		    <div v-show="!searchTwoState" class="cityBox" style="margin-top: 30px;">
		    	<span class="cityTitle">工作种类</span>
		    	<div class="cityList">
		    		<span v-for="(index,item) in jobType" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="choseSpan(index, item)" val="jobType">{{item.content}}</span>
		    	</div>
		    </div>
		     <div v-show="!searchTwoState" class="cityBox" style="margin-top: 30px;">
		    	<span class="cityTitle">工作性质</span>
		    	<div class="cityList">
		    		<span v-for="(index,item) in jobNatureArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="choseSpan(index, item)" val="jobNature">{{item.content}}</span>
		    	</div>
		    </div>
        <div v-show="searchTwoState" class="cityBox" style="margin-top: 30px;">
          <span class="cityTitle">找人办事</span>
          <div class="cityList">
            <span v-for="(index,item) in someoneType" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="choseSpan(index, item)" val="someoneType">{{item.content}}</span>
          </div>
        </div>
		    <div class="submitBox" style="border:0">
		    	<span id="submitBtn" @click='submitBtn'>
		    		确 认 搜 索
		    	</span>
		    </div>
	    </div>
	</div>

</template>
<script>
import axios from 'axios';
import utils from '../utils/commonUtils.js';

  export default {
    data() {
      return {
        curIndex: 0,
        userStatus: 0,
        countriesId: this.$store.state.countriesId,
        url: '',
        message: '',
        showState: false,		//ul展示标志（国家选择列表）
        searchTwoState: false,	//search2页面中特有的盒子显示标志
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
        cityArr: [],				//城市列表数组
        jobNatureArr:[],
        jobType:[],
        someoneType: [],
      }
    },
    methods: {
    	getData: function() {
				//获取参数
        var _this = this;
    		axios.get(_this.url, {
    			params: {
    				'countriesId': _this.countriesId,
    			}
    		}).then(function(res) {
          if(res.status == 200) {
              _this.initData(res.data.data);
          }
    		})
    	},
      initData: function(data) {
        var _this = this;
        var dataObj = function(content, isSelected, type, dataSource) {
          this.content = content;
          this.isSelected = isSelected;
          this.type = type;
          this.dataSource = dataSource;
        };
        var spanArr = $('.contentBox').find('span');
        for (var x = 0; x < spanArr.length; x++) {
          if($(spanArr[x]).attr('class') != 'cityTitle') {
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
          data.cityList.forEach(function(item) {
            _this.cityArr.push(new dataObj(item.name, 0, 1, item));
          });
        }
        if (data.jobNature) {
          data.jobNature.forEach(function(item) {
            _this.jobNatureArr.push(new dataObj(item.code, 0, 2 ,item));
          });
        }
        if (data.jobType) {
          data.jobType.forEach(function(item) {
            _this.jobType.push(new dataObj(item.code, 0, 3, item));
          });
        }
        if (data.someoneType) {
          data.someoneType.forEach(function(item) {
            _this.someoneType.push(new dataObj(item.code, 0, 4, item));
          });
        }
      },
    	//改变标签选中样式的方法
    	chargeSelected: function(num) {
    		if(num == 1) {
    			return true;
    		} else {
    			return false;
    		}
    	},
    	//返回首页的方法
    	backToLast: function() {
    		// this.$router.go(-1)
    		// window.location.back();
    		this.$router.go({name: '/'});
    	},
    	//跳转到发布页面的方法
    	jumpPublish: function() {
    		this.$router.go({name: 'publish'});
    	},
	    showUl: function() {
	  		if(this.showState) {
	  			this.showState = false;
	  			$('.select_box').find('span').css({'background': "#6E3FFF url('/images/icons/sanjiao_bottom.png') no-repeat 54px center",'background-size': '12px 7px'});
	  		} else {
	  			this.showState = true;
	  			$('.select_box').find('span').css({'background': "#6E3FFF url('/images/icons/sanjiao_top.png') no-repeat 54px center",'background-size': '12px 7px'});
	  		}
	    },
	    /**
	    *选择标签的方法
	    *@param（isOne）		当前标签是多选还是单选
	    *@param（spanType）	当前标签的类型（1:城市，2:工作种类，3:工作性质）
	    *@param（index）		标签的标志位置
	    **/
	    choseSpan: function(index, item) {
	    	var target; 			//一个临时变量；
	    	if(item.type == 1) {
	    		target = (this.cityArr[index].isSelected == 1) ? 0 : 1;
	    		this.cityArr[index].isSelected = target;
	    	} else if(item.type == 2) {
	    		target = (this.jobNatureArr[index].isSelected == 1) ? 0 : 1;
	    		this.jobNatureArr[index].isSelected = target;
	    	} else if(item.type == 3) {
	    		target = (this.jobType[index].isSelected == 1) ? 0 : 1;
	    		this.jobType[index].isSelected = target;
	    	} else {
          target = (this.someoneType[index].isSelected == 1) ? 0 : 1;
          this.someoneType[index].isSelected = target;
        }
	    },
			clearSpanStyle: function(arr, type) {
				var x,
					arrLength = arr.length;
				arr.forEach(function(item) {
					item.isSelected = 0;
				});
				if(type == 1) {
					this.cityArr = arr;
				} else if(type == 2) {
					this.workKindsArr = arr;
				} else if(type == 3) {
					this.workStateArr = arr;
				} else {
	        this.someoneType = arr;
	      }
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
						that.getData();
					}
				})
			},
			submitBtn: function() {
				utils.waitLoading();
				var spanArr = $('.contentBox').find('span[class="spanSelected"]'),
						name = 'jobNature',
						charegeFirst = true,
						charegeFirst_city = true,
						chargeFirst_jobtype = true,
						chargeFirst_someoneType = true,
						someoneTypeData='',
						cityName = '',
						jobNature = '',
						jobType = '',
						someoneType = '',
						submitUrl = '',
						title = $('#inputBox').val(),
						_this = this;
				for(var x = 0; x < spanArr.length; x++) {
					var myVal =  $(spanArr[x]).attr('val'),
						myHtml = $(spanArr[x]).html();
					if(myVal == 'city') {
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
					} else if (myVal == 'someoneType'){
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
				if(_this.$route.params.type == 2) {
					submitUrl = 'job/someone/searchSomeone';
					var param = {
						'userId': _this.$store.state.userId,
						'countriesId': _this.countriesId,
						'someoneType': someoneType,
						'title': title,
						'pageNumber': 1
					}
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
					}
				}
				axios.get(submitUrl, {params:param}).then(function(res) {
					if(res.status == 200) {
						window.listData = res.data.data;
						utils.endLoading();
						_this.$router.go({name: 'jobList'});
					}
				});
			}
    },
    ready: function(){
			this.choiceCountry();
			axios.defaults.baseURL = this.$store.state.url;
			if (localStorage._hbossUserId != undefined) {
        this.$store.state.userId = localStorage._hbossUserId;
      }
			this.selectedCountry = this.$store.state.country;
			this.countriesId = this.$store.state.countriesId;
    	var _this = this;
    	if(this.$route.params.type == 1) {
    		this.searchTwoState = false;
        this.url = 'job/index/searchJobConfig';
    	} else {
    		this.searchTwoState = true;
        this.url = 'job/someone/someoneConfig'
    	}
      this.getData();
    	$(document).on('click', function() {
    		_this.showState = false;
    		$('.select_box').find('span').css({'background': "#6E3FFF url('/images/icons/sanjiao_bottom.png') no-repeat 54px center",'background-size': '12px 7px'});
    	})
    },
  }
</script>
