Page({
  data: {},
  onLoad() {},
  gotoYou(){
    my.navigateToMiniProgram({
      appId: "2021001155656774",
      path: "pages/equityCard/equityCard?cardPackagePartnerId=ECPP20200508160001&channel=smcc01",
      fail: (res) => {
        console.log("跳转小程序异常！", res);
      },
    });
  }
});
