// pages/index/index.js

//生成随机颜色函数
function getRandomColor(){
  let rgb =[]
  for(let i=0;i<3;i++){
    let color = Math.floor(Math.random()*256).toString(16)
    color=(color.length === 1)?'0'+color:color
    rgb.push(color)
  }
  return '#'+rgb.join('')
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: '123',
        title: '第一个视频',
      videoUrl:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      },
      {
        id: '456',
        title: '第二个视频',
        videoUrl:'https://www.runoob.com/try/demo_source/movie.mp4',
      },
      {
        id: '789',
        title: '第三个视频',
        videoUrl:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      },
      {
        id: '147',
        title: '第四个视频',
        videoUrl:'https://www.runoob.com/try/demo_source/movie.mp4',
      }
    ],
    src: '',
    danmuTxt:''
  },

  getDanmu:function(e){
    console.log('getDanmu')
    this.setData({
      danmuTxt:e.detail.value
    })
  },
  sendDanmu: function (e) {
    let text = this.data.danmuTxt
    this.videoCtx.sendDanmu({
      text: text,
      color:getRandomColor()//弹幕颜色
    })
  },
  playVideo: function(e) {
    //停止播放之前正在播放的视频
    this.videoCtx.stop()
    //更新视频地址
    this.setData({
      src: e.currentTarget.dataset.url
    })
    //播放新的视频
    this.videoCtx.play()
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.videoCtx = wx.createVideoContext('myVideo')
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