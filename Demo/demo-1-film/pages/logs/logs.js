var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../ongoing/ongoing'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
