const app = getApp();
Page({
  data: {
    tradeNO: ""
  },
  inputChange(e) {
    this.setData({
      tradeNO: e.detail.value,
    });
  },
  doPay() {
    my.tradePay({
      tradeNO: this.data.tradeNO,
      success: function(res) {
        console.log("res", res)
      },
      fail: function(err) {
        console.log("err", err)
      },
    });
  },
  getCoupon() {
    my.call('addCoupon', {
      userId: "2088112181986885",
      templateId: '2020042417205564058152266',
      bizType: 'svDlg',
    }, function(result) {
      console.log('小程序 call addCoupon' + JSON.stringify(result));
    });
  },
  gotoMP() {
    my.navigateToMiniProgram({
      appId: "2021001155656774",
      path: "pages/equityCard/equityCard?channel=392&cardPackagePartnerId=123",
      extInfo:{
        a:"123"
      },
      fail: (res) => {
        console.log("跳转小程序异常！", res);
      },
    });
  },
  openCard(){
    let url = "https%3A%2F%2Fmemberprod.alipay.com%2Faccount%2Fopenform%2Factivecard.htm%3Fapp_id%3D2021001157670250%26template_id%3D20200528000000002305871000300493%26__webview_options__%3DcanPullDown%253dNO%2526transparentTitle%253dauto"
    my.addCardAuth({
      url: decodeURIComponent(url),
      success: (res) => {
        console.log(res)
        my.alert({content: '授权成功'});
      },
      fail: (res) => {
        console.log(res)
        my.alert({content: '授权失败'});
      },
    });
  }
});
