<template>
  <div id="company">
    <div class="whyBox">
      <ul>
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
      <div id="submitBtn" class="submitBtn" v-on:click="submitData">
        保&nbsp;&nbsp;存
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
        url: '',
        id: null,
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
        userName: '',
        companyName: '',
        companyLogo: '',
        companyPublicity: '',
        companyQRCode: '',
        companyInfo: '',
      }
    },
    methods: {
      //获取公司信息
      getCompany: function () {
        var that = this;
        axios.get('job/user/findCompanyByUserId', {
          params: {
            'userId': this.$store.state.userId
          }
        }).then(function(res) {
          if (res.status == 200) {
            console.log(res);
            let data = res.data.data;
            if(data != null){
              that.userName = data.userName;
              that.companyName = data.name;
              that.companyLogo = data.logo;
              that.companyPublicity = data.publicity;
              that.companyQRCode = data.QRCode;
              that.companyInfo = data.info;
              that.id = data.id;
              utils.endLoading();
            }else {
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
      submitData: function () {
        var that = this;
        axios.get('job/user/saveCompany', {
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
        }).then(function(res) {
          if (res.status == 200) {
            that.$router.go({
              name: 'wode'
            })
          }
        })
      }
    },
    ready: function () {
      var _this = this;
      axios.defaults.baseURL = this.$store.state.url;
      this.getCompany();
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
    }
  }
