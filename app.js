App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  format2detailTimeZH(timestamp = +new Date()) {
    const fix = (num) => {
      return ('' + num).length < 2 ? ((new Array(3)).join('0') + num).slice(-2) : '' + num;
    }
    const time = new Date(timestamp);
    return time.getFullYear() + "年" + (time.getMonth() + 1) + "月" + (time.getDate()) + "日 " + fix(time.getHours()) + ":" + fix(time.getMinutes()) + ":" + fix(time.getSeconds());
  },
});
