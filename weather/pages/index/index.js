var QQMapWX = require('../../qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js') // 引入SDK核心类
var qqmapsdk;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 省 市 区，用市来调天气
    region: ['北京市', '北京市', '东城区'],
    now: ''
  },
  changeRegion: function(e) {
    this.setData({
      region: e.detail.value
    })
    this.getWeather(); //更新天气
  },
  // 实例化地址API的核心类
  //参考https://lbs.qq.com/qqmap_wx_jssdk/method-getcitylist.html
  //询问获取用户地址权限：https://blog.csdn.net/shanshan_1117/article/details/88994160
  getAPI: function() {
    qqmapsdk = new QQMapWX({
      key: '7VJBZ-X26KU-WE6VH-BPU45-ZCWMH-WNBCD'
    })
  },
  // 调用获取地址接口
  getLocation: function(callback) {
    var that = this;
    qqmapsdk.search({
      keyword: '酒店',
      success: function(res) {
        console.log(res.data[0].ad_info)
        that.setData({
          region: [res.data[0].ad_info.province, res.data[0].ad_info.city, res.data[0].ad_info.district]//设置省市区
        }, () => that.getWeather())//获取地址后，再获取天气，异步操作用回调
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        // console.log(res);
      }
    })
  },
  //获取天气
  getWeather: function() {
    //和风天气api：https://free-api.heweather.net/s6/weather/now?location=beijing&key=859f85df51bd4d80aa8ff62e250dfc68
    var that = this; //this不可以直接在wxAPI函数内部使用
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data: {
        location: that.data.region[1],
        key: '859f85df51bd4d80aa8ff62e250dfc68'
      },
      success: function(res) {
        // console.log(res.data)
        that.setData({
          now: res.data.HeWeather6[0].now
        })
      }
    })
  },
  //获取自己的位置
  getSelfLocation: function() {
    this.getLocation();
    // this.getWeather();
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.getWeather();
    this.getAPI();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getLocation();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})