// common.sjs

// 时间戳 => 2019-06-06 11:01:11
const formatTime = (timestamp = getDate()) => {
  let time;
  let str = timestamp.toString();

  if(str.indexOf("-") > -1){
    const reg = getRegExp("-", 'g');
    time = getDate(str.replace(reg,'/'));
  }else{
    time = getDate(+timestamp);
  }

  const padNumber = function(num) {
    return num < 10 ? '0' + num : num;
  }
  return time.getFullYear() + "-" + padNumber(time.getMonth() + 1) + "-" + padNumber(time.getDate()) + " " + padNumber(time.getHours()) + ":" + padNumber(time.getMinutes()) + ":" + padNumber(time.getSeconds());
};
// 时间戳 => 2019年06月06日 11:01:11
const formatTimeZH = (timestamp = getDate()) => {
  const padNumber = function(num) {
    return num < 10 ? '0' + num : num;
  }
  const time = getDate(+timestamp);
  return time.getFullYear() + "年" + padNumber(time.getMonth() + 1) + "月" + padNumber(time.getDate()) + "日 " + padNumber(time.getHours()) + ":" + padNumber(time.getMinutes()) + ":" + padNumber(time.getSeconds());
};

export default {
  formatTime,
  formatTimeZH,
};