// 秒值 => 00:00:00格式
const formatSeconds2Time = (seconds) => {
  const padNumber = function(num) {
    return num < 10 ? '0' + num : num;
  }
  const h = Math.floor(seconds / (60 * 60) % 24);
  const m = Math.floor(seconds / 60 % 60);
  const s = Math.floor(seconds % 60);
  return `${padNumber(h)}:${padNumber(m)}:${padNumber(s)}`
}
export default {
  formatSeconds2Time
};