<template>
	<div class="sussecc" v-show="status != 0"></div>
	<div id="index-scroll" v-el:indexscroll>
		<div class="detailsBox">
			<div v-show="isShare" class="share">
				<div class="shareBg"></div>
			</div>
			<div v-show="companyName" class="companyBox">
				<div class="companyName">
					<img v-show = "companyLogoState" id="companyIcon" v-bind:src="companyLogoPic"></img>
					<div v-show = "companyNameState" class="companyNameText">{{companyName}}</div>
				</div>
				<div v-show = "companyInfoState" class="companyContent">
					{{companyInfo}}
				</div>
				<img v-show = "companyPublictityState" class="companyPic" v-bind:src='componyImg'>

				</img>
			</div>
			<span v-show="companyName" class="line"></span>
			<div class="jobBox">
				<div class="jobName">{{jobName}}</div>
				<div class="salary" v-if="money">月薪 : <span>{{money}}</span></div>
				<div class="requireBox">
					<span v-for="item in requireArr">{{item}}</span>
				</div>
				<div class="beizhu">
					{{details}}
				</div>
				<div class="erWeiMa">
					<img class="erWeiPic" v-bind:src="erWeiMaPic"  v-show="erWeiMaPic"/>

					<div class="erWeiText"  v-if="erWeiMaPic">
						扫描二维码 , 直接联络
					</div>
					<a :href="phoneNum" class="callPhone">
						直 接 拨 打
					</a>
					<div class="backBox">
						<div class="back" v-on:click = 'backHome'>
							看更多工作
						</div>
						<div class="dateBox">
							发布日期: {{createDate}}
							<div v-show="like" class="like" @click="mylike(item)"></div>
							<div v-show="!like" class="unlike" @click="unlike()"></div>
						</div>
					</div>
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
				companyPublictity: '',
				details: '',
				phoneNum: '',
				erWeiMaPic: '',
				componyImg: '',
				companyLogoPic: '',
				createDate: '',
				status: '',
				like: true
			}
		},
		watch: {
			count(val) {
				var _this = this;
				let imgs = document.querySelectorAll('img');
				if (val == imgs.length) {
					Vue.nextTick(function() {
						_this.indexscroll = new BScroll(_this.$els.indexscroll, {
							click: true
						})
					})
				}
			}
		},
		compiled: function() {
			if (localStorage._hbossUserId != undefined) {
				this.$store.state.userId = localStorage._hbossUserId;
			}
			var _this = this;
			axios.defaults.baseURL = this.$store.state.url;
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
			utils.waitLoading();
			this.getData();
		},
		ready: function () {
			var _this = this;
			$('.share').on('click', function(event) {
				if ($(event.target).attr('class') != 'shareBg') {
					// $(this).hide();
					_this.isShare = false;
				}
			})
		},
		methods: {
			unlike: function() {
				var _this = this;
				var that = this;
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
								"title": that.jobName,
								"type": that.$route.params.type,
								"jobId": that.$route.params.jobId
							}
						}).then(function(res) {
							that.like = true
						})
					}
				} else {
					axios.get("job/user/saveCollection", {
						params: {
							"userId": that.$store.state.userId,
							"status": 0,
							"title": that.jobName,
							"type": that.$route.params.type,
							"jobId": that.$route.params.jobId
						}
					}).then(function(res) {
						that.like = true
					})
				}
			},
			//收藏
			mylike: function() {
				var _this = this;
				var that = this;
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
								"title": that.jobName,
								"type": that.$route.params.type,
								"jobId": that.$route.params.jobId
							}
						}).then(function(res) {
							that.like = false
						})
					}
				} else {
					axios.get("job/user/saveCollection", {
						params: {
							"userId": that.$store.state.userId,
							"status": 1,
							"title": that.jobName,
							"type": that.$route.params.type,
							"jobId": that.$route.params.jobId
						}
					}).then(function(res) {
						that.like = false;
					})
				}
			},
			backHome: function() {
				this.$router.go({
					name: '/'
				});
			},
			getData: function() {
				var _this = this,
					param;
				if (_this.$route.params.type == 1) {
					if (_this.$store.state.userId == '') {
						param = {
							'jobId': _this.jobId,
						}
					} else {
						param = {
							'jobId': _this.jobId,
							'userId': _this.$store.state.userId
						}
					}
				} else {
					if (_this.$store.state.userId == '') {
						param = {
							'someoneId': _this.someoneId,
						}
					} else {
						param = {
							'someoneId': _this.someoneId,
							'userId': _this.$store.state.userId
						}
					}
				}
				axios.get(this.url, {
					params: param
				}).then(function(res) {
					if (res.status == 200) {
						var data = res.data.data;
						wx.ready(function() {
							wx.onMenuShareTimeline({
								title: '【招聘】' + data.title, // 分享标题
								link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: data.companyLogo || 'http://ofot6413t.bkt.clouddn.com/3f04c2bf513091dc34ee46f01e8eee43.jpg', // 分享图标
								success: function() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function() {
									// 用户取消分享后执行的回调函数
								}
							})
							wx.onMenuShareAppMessage({
								title: '【招聘】' + data.title, // 分享标题
								desc: '', // 分享描述
								link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: data.companyLogo || 'http://ofot6413t.bkt.clouddn.com/3f04c2bf513091dc34ee46f01e8eee43.jpg', // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									// 用户确认分享后执行的回调函数
								},
								cancel: function() {
									// 用户取消分享后执行的回调函数
								}
							})
						})
						_this.initData(data);
						Vue.nextTick(function() {
							utils.endLoading();
						})
					}
				});
			},
			initData: function(data) {
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
				if (typeof data.cId == undefined || data.cId != null) {
					this.like = false
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
						arr.forEach(function(item) {
							arrA.push(item);
						})
					}
				}
				this.requireArr = arrA;
				let imgs = document.querySelectorAll('img');
				Array.from(imgs).forEach((item) => {
					console.log(item);
					item.onload = () => {
						this.count++
					}
				})
			}
		}
	}
</script>
