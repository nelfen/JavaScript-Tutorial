var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function() {
  document.write("tv색상: " + this.color + "<br>");
  document.write("tv가격: " + this.price + "<br>");
}

var car = {
  color: "black",
  price: 50000000,
  info: function() {
    document.write("car색상: " + this.color + "<br>");
    document.write("car가격: " + this.price + "<br>");
  }

}
tv.info();
car.info();

var today = new Date();
var nowMonth = today.getMonth() + 1,
nowDate = today.getDate(),
nowDay = today.getDay();

document.write("<h1>오늘의 날짜 정보</h1>");
document.write("오늘은 " + nowMonth + "월 " + nowDate + "일 " + nowDay + "요일 입니다.<br>");

var worldcup = new Date(2002,4,31);
var theMonth = worldcup.getMonth() + 1,
theDate = worldcup.getDate(),
theDay = worldcup.getDay();

document.write("<h1>월드컵 날짜 정보</h1>");
document.write("월드컵은 " + theMonth + "월 " + theDate + "일 " + theDay + "요일 입니다.");