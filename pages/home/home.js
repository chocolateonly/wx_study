// pages/home/home.js
import moment from 'moment'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,

    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.globalData.test)
    const self=this
   wx.request({
     url: 'http://localhost:2323/api/project/list',
     method: 'GET',
     success:function(res){
       const result = res.data.data.map(item=>{
         return {...item,time:self.formatTime(item.time)}
       })
        self.setData({
          list: result
        })
     }
   })
  },
  formatTime:function(time){
    return moment(time).format('YYYY-MM-DD')
  },
  toDetail:function(e){
    const index = e.currentTarget.dataset.index
    wx.setStorage({
      key: 'title',
      data: this.data.list[Number(index)].title,
    })
    wx.showLoading({
      title: 'loading',
    })
    setTimeout(() =>{
      wx.hideLoading();
      wx.navigateTo({
        url: '/pages/details/detail?id=' + index,
      })
    },2000)
    

  }
})