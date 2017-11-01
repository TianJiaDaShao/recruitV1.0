<template>
	<div id="index-scroll" v-el:indexscroll>
		<div class="publish">
			<div class="titleBox">
				<div class="select_box">
					<i>国家</i>
			        <span id="select_country">{{selectedCountry}}</span>
			     </div>
				<span v-on:click="backToHome" class="backBtn">返回</span>
			</div>
			<div class="whyBox">
				<div class="pullDownBox">
					<span v-on:click="showInput">制作您的品牌展示广告，请点击！</span>
				</div>
				<ul v-show="ulState">
						<li>
							<span class="pullDownText">
								公司或名牌名字
							</span>
							<div class="inputBox">
								<input id="companyName" type="text" name="companyName" v-model="companyName" placeholder="请输入"/>
								<i>选填</i>
							</div>
						</li>
						<form id="LOGO" action="https://pc.hboss.com/job/index/uploadImage" method="post" enctype="multipart/form-data">
							<li>
								<span  class="pullDownText">
									上传LOGO
								</span>
								<div class="inputBox" v-show="companyLogo == ''">
									<input id="imageFile" type="file" name="imageFile">
								</div>
								<div class="companyImg" v-show="companyLogo != ''">
									<img :src="companyLogo" alt="">
								</div>
								<span class="changeImg" v-show="companyLogo != ''" @click="changeImg('companyLogo')">
									更换图片
								</span>
							</li>
						</form>
						<form id="myArticleForm" action="https://pc.hboss.com/job/index/uploadImage" method="post" enctype="multipart/form-data">
							<li>
								<span  class="pullDownText">
									上传宣传图片
								</span>
								<div class="inputBox" v-show="companyPublicity == ''">
									<input id="imageFile" type="file" name="imageFile">
								</div>
								<div class="companyImg" v-show="companyPublicity != ''">
									<img :src="companyPublicity" alt="">
								</div>
								<span class="changeImg" v-show="companyPublicity != ''" @click="changeImg('companyPublicity')">
									更换图片
								</span>
							</li>
						</form>
					<form id="formBox1" action="https://pc.hboss.com/job/index/uploadImage" method="post" enctype="multipart/form-data">
						<li>
							<span  class="pullDownText">
								上传宣传二维码
							</span>
							<div class="inputBox" v-show="companyQRCode == ''">
								<input id="componyEr" type="file" name="componyEr" />
							</div>
							<div class="companyImg" v-show="companyQRCode != ''">
								<img :src="companyQRCode" alt="">
							</div>
							<span class="changeImg" v-show="companyQRCode != ''" @click="changeImg('companyQRCode')">
								更换图片
							</span>
						</li>
					</form>
					<div class="textArea">
						<span>广告语<i>(最多可写100字)</i></span>
						<textarea name="inputtextarge" id="textArea" placeholder="选填" v-model="companyInfo" maxlength="100"></textarea>
							<!-- <input v-bind:class="item.inputClass" v-bind:id="item.id" v-bind:type="item.inputType"  /> -->
					</div>
				</ul>
				<span class="whyText">
					什么是品牌展示广告？
				</span>
			</div>

			<div id="title" class="submitBox">
				<ul>
					<li>
						<i>*</i>
						<span class="submitTip">
							<div v-if="isTypeOne">招聘标题</div>
							<div v-else>找人办事</div>
						</span>
						<div class="inputBox_sub">
							<input v-model="title" type="text" placeholder="请输入标题" maxlength="20"/>
							<span class="inputTip">必填</span>
						</div>
					</li>
				</ul>
			</div>

			<div class="contentBox">
				<div class="cityBox" style="margin-top: 14px">
					<div class="cityTitle">
						城市
					</div>
					<div class="cityList">
						<span  v-for="(index,item) in cityArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="spanClick(index, item)" val="city" v-bind:id="item.dataSource.id">{{item.content}} </span>
					</div>
				</div>
				<div v-if="!isTypeOne" class="cityBox" style="margin-top: 14px">
					<div class="cityTitle">
						分类
					</div>
					<div class="cityList">
						<span  v-for="(index,item) in someoneTypeArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} " v-on:click="spanClick(index, item)" val="someoneType">{{item.content}} </span>
					</div>
				</div>
				<div v-if="isTypeOne" class="cityBox" style="margin-top: 14px">
					<div class="cityTitle">
						工作种类
					</div>
					<div class="cityList">
						<span  v-for="(index,item) in jobTypeArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} "v-on:click="spanClick(index, item)" val="jobType">{{item.content}}</span>
					</div>
				</div>
				<div v-if="isTypeOne" class="cityBox" style="margin-top: 14px">
					<div class="cityTitle">

						工作性质
					</div>
					<div class="cityList">
						<span  v-for="(index,item) in jobNatureArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} "v-on:click="spanClick(index, item)" val="jobNature">{{item.content}}</span>
					</div>
				</div>
				<div v-if="isTypeOne" class="cityBox" style="margin-top: 14px">
					<div class="cityTitle">
						福利待遇
					</div>
					<div class="cityList">
						<span  v-for="(index,item) in jobWelfareArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} "v-on:click="spanClick(index, item)" val="jobWelfare">{{item.content}}</span>
					</div>
				</div>
				<div v-if="isTypeOne" class="cityBox" style="margin-top: 14px">
					<div class="cityTitle">
						薪资区间
					</div>
					<div class="cityList">
						<span  v-for="(index,item) in jobSalaryArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} "v-on:click="spanClick(index, item)" val="jobSalary">{{item.content}}</span>
					</div>
				</div>
				<div v-if="isTypeOne" class="cityBox" style="margin-top: 14px">
					<div class="cityTitle">
						居留要求
					</div>
					<div class="cityList">
						<span  v-for="(index,item) in jobRequirementsArr" v-bind:class="{'spanSelected': chargeSelected(item.isSelected)} "v-on:click="spanClick(index, item)" val="jobRequirements">{{item.content}}</span>
					</div>
				</div>
			</div>

			<div class="submitBox">
				<ul>
					<li>
						<i>*</i>
						<span class="submitTip">
							联系电话
						</span>
						<div class="inputBox_sub">
							<input id="phone" v-model="tel" type="text" placeholder="请输入9位电话" />
							<span class="inputTip">必填</span>
						</div>
					</li>
					<li>
						<span class="submitTip">
							<div v-if="isTypeOne">详细工作要求和说明</div>
							<div v-else>详细说明</div>
						</span>
					</li>
					<li>
						<textarea id="require" name="name" v-model="details" placeholder="请输入要求和说明"  maxlength="200"></textarea>
					</li>
				</ul>
				<div id="submitBtn" class="submitBtn" v-on:click="submitData">
					发&nbsp;&nbsp;布
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import BScroll from 'better-scroll';
	import utils from '../utils/commonUtils.js';
	export default {
		data() {
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
					},
					{
						id: 'componyPic',
						text: '上传宣传图片',
						inputType: 'file',
						placeHolder: '请输入 .jpg',
						inputClass: 'bgAlpha'
					},
					{
						id: 'componyEr',
						text: '上传宣传二维码',
						inputType: 'file',
						placeHolder: '请输入 .jpg',
						inputClass: 'bgAlpha'
					},
				],
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
				someoneType: '',
			}
		},
		methods: {
			black: function () {
				var _this = this;
				axios.get('job/user/getUserInfoByUserId', {
					params: {
						'userId': this.$store.state.userId
					}
				}).then(function (res) {
					console.log(res);
					if(res.data.user.blacklist == 1){
						alert('系统判定您为恶意操作者，请联系管理员申请恢复发布功能');
						_this.$router.go({
							name: '/'
						})
					}
				})
			},
			//获取公司信息
			getCompany: function() {
				var that = this;
				utils.waitLoading();
				axios.get('job/user/findCompanyByUserId', {
					params: {
						'userId': this.$store.state.userId
					}
				}).then(function(res) {
					if (res.status == 200) {
						console.log(res);
						let data = res.data.data;
						if (data != null) {
							that.userName = data.userName;
							that.companyName = data.name;
							that.companyLogo = data.logo;
							that.companyPublicity = data.publicity;
							that.companyQRCode = data.QRCode;
							that.companyInfo = data.info;
							utils.endLoading();
						} else {
							utils.endLoading();
						}
					}
				})
			},
			//更换图片
			changeImg: function(data) {
				if (data == 'companyLogo') {
					this.companyLogo = '';
				} else if (data == 'companyPublicity') {
					this.companyPublicity = '';
				} else if (data == 'companyQRCode') {
					this.companyQRCode = '';
				}
			},
			//选中算法
			selected: function(data, arr) {
				let target;
				let index;
				for (var i = 0; i < arr.length; i++) {
					if (data == arr[i].content) {
						index = i;
					}
				}
				target = (arr[index].isSelected == 1) ? 0 : 1;
				arr[index].isSelected = target;
			},
			//回填公司信息
			editCompany: function(data) {
				this.companyName = data.companyName;
				this.companyLogo = data.companyLogo;
				this.companyPublicity = data.companyPublicity;
				this.companyQRCode = data.companyQRCode;
				this.companyInfo = data.companyInfo;
			},
			edit: function() {
				var _this = this;
				if (_this.$route.params.id != ":id") {
					_this.userId = _this.$route.params.id;
					if (_this.$route.params.type == 1) {
						utils.waitLoading();
						axios.get('job/info/jobInfoDetails', {
							params: {
								'jobId': _this.userId
							}
						}).then(function(res) {
							if (res.status == 200) {
								let data = res.data.data;
								let jobWelfareNameArr = data.jobWelfareName.split('&amp;');
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
								utils.endLoading();
							}
						});
					} else {
						axios.get('job/someone/someoneInfo', {
							params: {
								'someoneId': _this.userId
							}
						}).then(function(res) {
							if (res.status == 200) {
								let data = res.data.data;
								console.log(data);
								_this.editCompany(data);
								_this.title = data.title;
								_this.tel = data.tel;
								_this.details = data.details;
								_this.selected(data.cityName, _this.cityArr);
								_this.selected(data.someoneTypeName, _this.someoneTypeArr);
								utils.endLoading();
							}
						});
					}
				}
			},
			//薪资按照顺序排列
			orderArr: function(oldArr) {
				var orderNumArr = [],
					firstNum = '';
				//将orderNo存入一个临时数组
				oldArr.forEach(function(item) {
					orderNumArr.push(parseInt(item.orderNo));
				});
				return orderNumArr.sort(function(a, b) {
					return a - b;
				});
			},
			spanClick: function(index, item) {
				console.log(item);
				var _this = this;
				var target;
				if (item.type == 1) {
					target = (_this.cityArr[index].isSelected == 1) ? 0 : 1;
					_this.clearSpanStyle(_this.cityArr, item.type);
					_this.cityArr[index].isSelected = target;
				} else if (item.type == 2) {
					target = (_this.jobNatureArr[index].isSelected == 1) ? 0 : 1;
					_this.clearSpanStyle(_this.jobNatureArr, item.type);
					_this.jobNatureArr[index].isSelected = target;
				} else if (item.type == 3) {
					target = (_this.jobRequirementsArr[index].isSelected == 1) ? 0 : 1;
					_this.clearSpanStyle(_this.jobRequirementsArr, item.type);
					_this.jobRequirementsArr[index].isSelected = target;
				} else if (item.type == 4) {
					target = (_this.jobSalaryArr[index].isSelected == 1) ? 0 : 1;
					_this.clearSpanStyle(_this.jobSalaryArr, item.type);
					_this.jobSalaryArr[index].isSelected = target;
				} else if (item.type == 5) {
					target = (_this.jobTypeArr[index].isSelected == 1) ? 0 : 1;
					_this.clearSpanStyle(_this.jobTypeArr, item.type);
					_this.jobTypeArr[index].isSelected = target;
				} else if (item.type == 6) {
					target = (_this.jobWelfareArr[index].isSelected == 1) ? 0 : 1;
					_this.jobWelfareArr[index].isSelected = target;
				} else {
					target = (_this.someoneTypeArr[index].isSelected == 1) ? 0 : 1;
					_this.clearSpanStyle(_this.someoneTypeArr, item.type);
					_this.someoneTypeArr[index].isSelected = target;
				}
			},
			clearSpanStyle: function(arr, type) {
				var x,
					arrLength = arr.length;
				arr.forEach(function(item) {
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
			chargeSelected: function(num) {
				if (num == 1) {
					return true;
				} else {
					return false;
				}
			},
			//获取数据
			getData() {
				var _this = this;
				axios.get(this.url, {
					params: {
						'countriesId': this.countriesId,
					}
				}).then(function(res) {
					if (res.status == 200) {
						console.log(res);
						_this.initData(res.data.data);
					}
				})
			},
			//处理数据
			initData(data) {
				var _this = this;
				var dataObj = function(content, type, isSelected, dataSource) {
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
					data.cityList.forEach(function(item) {
						_this.cityArr.push(new dataObj(item.name, 1, 0, item));
					});
				};
				if (typeof data.jobNature != 'undefined') {
					data.jobNature.forEach(function(item) {
						_this.jobNatureArr.push(new dataObj(item.code, 2, 0, item));
					});
				};
				if (typeof data.jobRequirements != 'undefined') {
					data.jobRequirements.forEach(function(item) {
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
						data.jobSalary.forEach(function(item) {
							if (parseInt(item.orderNo) == orderAfter[x]) {
								_this.jobSalaryArr.push(new dataObj(item.code, 4, 0, item));
							}
						})
					};
					console.log(_this.jobSalaryArr);
				};
				if (typeof data.jobType != 'undefined') {
					data.jobType.forEach(function(item) {
						_this.jobTypeArr.push(new dataObj(item.code, 5, 0, item));
					});
				};
				if (typeof data.jobWelfare != 'undefined') {
					data.jobWelfare.forEach(function(item) {
						_this.jobWelfareArr.push(new dataObj(item.code, 6, 0, item));
					})
				};
				if (typeof data.someoneType != 'undefined') {
					data.someoneType.forEach(function(item) {
						_this.someoneTypeArr.push(new dataObj(item.code, 7, 0, item));
					})
				};
				_this.edit();
				Vue.nextTick(function() {
					_this.indexscroll = new BScroll(_this.$els.indexscroll, {
						click: true
					})
				})
			},
			//input焦点事件
			inputFocus: function(num) {
				if (num == 0) {
					$('.inputBox').eq(index).find('span').hide();
					$('.inputBox').eq(index).find('input').css({
						'padding-left': '10px'
					})
				} else {
					this.clickInput(num);
				}
			},
			//input失去焦点事件
			inputBlur: function(num) {
				if (num == 0) {
					$('.inputBox').eq(index).find('span').show();
					$('.inputBox').eq(index).find('input').css({
						'padding-left': '0px'
					})
				}
			},
			// 点击展示列表
			showInput: function() {
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
				Vue.nextTick(function() {
					that.indexscroll.refresh();
				});
			},
			//点击input触发的事件
			clickInput: function(index) {
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
			backToHome: function() {
				this.$router.go({
					name: '/'
				})
			},
			//展示国家列表
			showUl: function() {
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
			submitData: function() {
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
					id = null
				} else {
					id = _this.$route.params.id
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
							alert("请选择城市")
						} else if (_this.jobType == '') {
							alert("请选择工作种类")
						} else if (_this.jobNature == '') {
							alert("请选择工作性质")
						} else if (_this.jobWelfare == '') {
							alert("请选择福利待遇")
						} else if (_this.jobSalary == '') {
							alert("请选择薪资区间")
						} else if (_this.jobRequirements == '') {
							alert("请选择居住要求")
						} else if (title == '') {
							alert("请输入招聘标题")
						} else {
							axios.get('job/info/publishJob', {
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
									"details": require,
								}
							}).then(function(res) {
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
									})
								}
							})
						}
					} else {
						if (_this.cityId == '') {
							alert("请选择城市")
						} else if (_this.someoneType == '') {
							alert("请选择分类")
						} else if (title == '') {
							alert("请输入招聘标题")
						} else {
							axios.get('job/someone/publishSom', {
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
									"details": require,
								}
							}).then(function(res) {
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
									})
								}
							})
						}
					}
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
		ready: function() {
			axios.defaults.baseURL = this.$store.state.url;
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
				}
			}
			this.black();
			this.getCompany();
			this.choiceCountry();
			this.getData();
			$('#LOGO input').change(function() {
				$('#LOGO').submit();
			})
			$('#myArticleForm input').change(function() {
				$('#myArticleForm').submit();
			})
			$('#formBox1 input').change(function() {
				$('#formBox1').submit();
			})
			$('#LOGO').ajaxForm({
				dataType: 'json',
				success: function(data) {
					_this.companyLogo = data.urlPath;
					console.log(_this.companyLogo);
				}
			});
			$('#myArticleForm').ajaxForm({
				dataType: 'json',
				success: function(data) {
					_this.companyPublicity = data.urlPath;
				}
			});
			$('#formBox1').ajaxForm({
				dataType: 'json',
				success: function(data) {
					_this.companyQRCode = data.urlPath;
				}
			});
			$(document).on('click', function() {
				_this.showState = false;
				$('.select_box').find('span').css({
					'background': "#6E3FFF url('/images/icons/sanjiao_bottom.png') no-repeat 66% center",
					'background-size': '12px 7px'
				});
			});
			$('.inputBox').on('focus', 'input', function() {
				var inputIndex = $(this).index() - 1;
				if (inputIndex == 0) {
					$('.inputBox').eq(0).find('span').hide();
					$('.inputBox').eq(0).find('input').css({
						'padding-left': '10px'
					});
				}
			});
			$('.inputBox').on('blur', 'input', function() {
				var inputIndex = $(this).index() - 1;
				if (inputIndex == 0) {
					$('.inputBox').eq(0).find('span').show();
					$('.inputBox').eq(0).find('input').css({
						'padding-left': '0px'
					});
				}
			});
			//点击发布电话号码的input
			$('#phone').on('input propertychange', function() {
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
			$('#phone').on('focus', function() {
				$('#phone').val('');
			})

		}
	}
</script>
