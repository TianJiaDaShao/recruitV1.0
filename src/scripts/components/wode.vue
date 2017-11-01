<template>
	<div id='wode'>
		<div class="homeback" @click="home">

		</div>
		<div class="my_top">
			<img class="user_pic" v-bind:src="user_pic">

			</img>
		</div>
		<ul class="user_ul">
			<li @click="jumpToList(2)">
				<text>我的信息</text>
				<span>不 完 善</span>
			</li>
			<li v-on:click="jumpToList(0)">
				我的发布
			</li>
			<li v-on:click="jumpToList(1)">
				我的收藏
			</li>
			<li v-on:click="showTextArea">
				意见反馈
			</li>
			<div v-show="textAreaState" class="textAreaBox">
				<textarea name="" id="wode_textarea" placeholder="填写反馈意见"></textarea>
				<span class="submitBtn_wode" v-on:click="createSubmit">提交</span>
			</div>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	import utils from '../utils/commonUtils.js';
	export default {
		data() {
			return {
				user_pic: '/images/icons/user_pic.png',
				textAreaState: false,
				userName: '', //保存用户名
				url: '', //请求地址
			}
		},
		methods: {
			home: function () {
				this.$router.go({
					name: '/'
				});
			},
			showTextArea: function() {
				if (this.textAreaState == false) {
					this.textAreaState = true;
				} else {
					this.textAreaState = false;
				}
			},
			//提交意见反馈
			createSubmit: function() {
				var _this = this,
					content = $('#wode_textarea').val();
				this.url = '/job/user/saveProposal';
				if (content != '') {
					axios.get(_this.url, {
						params: {
							'userId': _this.$store.state.userId,
							'userName': _this.userName,
							'details': content
						}
					}).then(function(res) {
						if (res.status == 200) {
							$('#wode_textarea').val('');
							_this.textAreaState = false;
							alert('提交成功');
						}
					})
				} else {
					alert('必须填写内容！');
				}

			},
			//跳入列表,0表示发布，1表示收藏
			jumpToList: function(num) {
				var _this = this;
				utils.waitLoading();
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
					axios.get(this.url, {
						params: {
							'userId': _this.$store.state.userId,
						}
					}).then(function(res) {
						if (res.status == 200) {
							if (num == 1) {
								window.listData = res.data.data;
								utils.endLoading();
							} else {
								console.log(res.data.data);
								window.listData = res.data.data.jobList.concat(res.data.data.someoneList);
								utils.endLoading();
							}
							_this.$router.go({
								name: 'jobList'
							});
						}
					})
				}
			}
		},
		ready: function() {
			axios.defaults.baseURL = this.$store.state.url;
			var _this = this;
			if (localStorage._hbossUserId != undefined) {
				this.$store.state.userId = localStorage._hbossUserId;
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
			};
			//获取用户名字
			if(_this.$store.state.userHead != ''){
				_this.user_pic = _this.$store.state.userHead;
			}else {
				this.url = '/job/user/getUserInfoByUserId';
				axios.get(this.url, {
					params: {
						userId: _this.$store.state.userId,
					}
				}).then(function(res) {
					console.log(res);
					if (res.status == 200) {
						_this.userName = res.data.user.name;
						_this.$store.state.userHead = res.data.user.head;
						_this.user_pic = res.data.user.head;
					}
				})
			}
		}
	}
</script>
