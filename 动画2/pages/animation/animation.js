// pages/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  //旋转
  rotate: function() {
    this.donghua.rotate(45).step()
    this.setData({
      donghua: this.donghua.export()
    })
  },
  //缩放
  scale: function() {
    this.donghua.scale(0.5).step()
    this.setData({
      donghua: this.donghua.export()
    })
  },
  //偏移
  translate: function() {
    this.donghua.translate(100, 50).step()
    this.setData({
      donghua: this.donghua.export()
    })
  },
  //倾斜
  skew: function() {
    this.donghua.skewX(45).step()
    this.setData({
      donghua: this.donghua.export()
    })
  },
  //同时播放
  sync: function() {
    this.donghua.rotate(45).scale(0.5).translate(100, 50).skewX(45).step()
    this.setData({
      donghua: this.donghua.export()
    })
    // this.rotate();this.scale();this.translate();this.skew()
  },
  //依次播放
  queue:function(){
    this.donghua.rotate(45).step().scale(0.5).step().translate(100, 50).step().skewX(45).step()
    this.setData({
      donghua: this.donghua.export()
    })
  },
  //还原
  reset:function(){
    this.donghua.rotate(0).scale(1).translate(0).skewX(0).step()
    this.setData({
      donghua: this.donghua.export()
    })
  },
  //砍价
  kanjia:function(){
    var animation = wx.createAnimation({
      duration:400,
      timingFunction:'ease'
    })
    this.animation=animation
    let next = true;
    setInterval(function(){
      if(next){
        this.animation.scale(0.95).step()
        next =!next
      }else{
        this.animation.scale(1).step()
        next = !next
      }
      this.setData({
        kanjia:animation.export()
      })
    }.bind(this),400)
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.donghua = wx.createAnimation({
      duration: 500
    })
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