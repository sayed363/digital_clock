let date, h, m, s, session, result;
date = new Date();
h = date.getHours() //0-23
m = date.getMinutes() // 0-59
s = date.getSeconds() // 0-59;
result = h + ":" + m + ":" + s
document.getElementById("time").innerHTML = result