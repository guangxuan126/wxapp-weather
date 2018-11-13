// miniprogram/pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0
  },
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  stopTouchMove: function () {
    return false;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var bgUrlM = '../../images/morning.png';
    var bgUrlA = '../../images/afternoon.png';
    var bgUrlN = '../../images/night.png';
    var that = this;
    var time = parseInt(new Date().getHours());
    var times = 1;
    if (5 < time && time < 17) {
      times = 1;
      console.log("morning")
    }else if (17 <= time && time < 20){
      times = 2;
      console.log("afternoon")
    }else{
      times = 3;
      console.log("night")
    }
    switch(times){
      case 1:
        that.setData({
          bgUrl: bgUrlM
        });
        wx.setNavigationBarColor({
          frontColor: "#ffffff",
          backgroundColor: "#63c9fe"
        });
        break;
      case 2:
        that.setData({
          bgUrl: bgUrlA
        });
        wx.setNavigationBarColor({
          frontColor: "#ffffff",
          backgroundColor: "#d76883"
        });
        break;
      case 3:
        that.setData({
          bgUrl: bgUrlN
        });
        wx.setNavigationBarColor({
          frontColor: "#ffffff",
          backgroundColor: "#491799"
        });
        break;
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})