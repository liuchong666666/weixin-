Page({
  data: {
  
  },
  show:function(){
    wx.showToast({
      title: 'Hello world',
      duration:5000,
      icon:'success'
    })
  },
  close:function(){
    wx.hideToast()
  },
  onLoad: function () {
  
  }
    
})
