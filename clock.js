function clock() {

  let twoDigit = function(num) {
    let digit;
    if (num < 10) {
      digit = '0' + num;
    } else {
      digit = num;
    }
    return digit;
  }
  let weeks = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');

  let time = new Date();
  
  let year = time.getFullYear();
  let month = twoDigit(time.getMonth() + 1);
  let day = twoDigit(time.getDate());
  let week = weeks[time.getDay()];
  let hour = twoDigit(time.getHours());
  let min = twoDigit(time.getMinutes());
  let sec = twoDigit(time.getSeconds());

  document.getElementById('week').textContent = week;
  document.getElementById('date').textContent = year + '/' + month + '/' + day;
  document.getElementById('time').textContent = hour + ':' + min + ':' + sec;
}
setInterval(clock, 1000);
