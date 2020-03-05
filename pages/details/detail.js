// pages/details/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     detailId:'',
     title:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("detail page options")
   console.log(options)
   const self=this
   wx.getStorage({
     key: 'title',
     success: function(res) {
       console.log('---------')
       self.setData({
         title:res.data
       })
     },
   })
   this.setData({
     detailId:options.id
   })
  },
})