// miniprogram/pages/main/main.js
var util = require('../../utils/util.js');
var util2 = require('../../utils/util2.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTemp: 14,
    nowWeather: "多云",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var bgUrlM = 'https://images.gxuann.cn/weather/morning.png';
    var bgUrlSR = 'https://images.gxuann.cn/weather/sun.png'
    var bgUrlSS = 'https://images.gxuann.cn/weather/sun2.png';
    var bgUrlN = 'https://images.gxuann.cn/weather/night.png';
    var that = this;
    var time = util.formatTime(new Date());
    var time2 = util2.formatTime(new Date());

    wx.request({
      url: 'https://free-api.heweather.com/s6/weather',
      data: {
        location: '北辰区',
        key: '5ddb6ec7a4814816864f58b7afce7110'
      },
      success: res => {
        let result = res.data.HeWeather6[0]
        let temp = result.now.tmp
        let weather = result.now.cond_txt
        let sr = result.daily_forecast[0].sr
        let ss = result.daily_forecast[0].ss
        console.log(result)
        this.setData({
          nowTemp: temp + '°C',
          nowWeather: weather,
        })
        //时间背景缺少日出日落
        if (time < sr) {
          this.setData({
            bgUrl: bgUrlN
          });
          wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#05111d"
          });
        } else {
          if (time > ss) {
            this.setData({
              bgUrl: bgUrlN
            });
            wx.setNavigationBarColor({
              frontColor: "#ffffff",
              backgroundColor: "#05111d"
            });
          } else {
            if (time > sr && time2 > sr && time < ss) {
              this.setData({
                bgUrl: bgUrlM
              });
              wx.setNavigationBarColor({
                frontColor: "#ffffff",
                backgroundColor: "#4bacd9"
              });
            } else {
              if (time < sr && time2 > sr) {
                this.setData({
                  bgUrl: bgUrlSR
                });
                wx.setNavigationBarColor({
                  frontColor: "#ffffff",
                  backgroundColor: "#315950"
                });
              } else {
                this.setData({
                  bgUrl: bgUrlSS
                });
                wx.setNavigationBarColor({
                  frontColor: "#ffffff",
                  backgroundColor: "#c66445"
                });
              }
            }
          }
        }

      }
    })

    
    
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