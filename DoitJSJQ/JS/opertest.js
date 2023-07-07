var p1 = 3000;  //교통비
var p2 = 6000;  //식비
var p3 = 3000;  //음료비
var price;
var result;

price = p1 + p2 + p3;
result = price<=10000 ? "돈 관리 잘 했어요!" + "<br>" : price-10000 + "원 초과" + "<br>";
document.write(result)

var b4 = prompt("4분기 판매량을 입력해 주세요", "0");
var b1 = 1200;
var b2 = 1300;
var b3 = 1000;
var pb = (b1 + b2 + b3) / 3;
var res;

res = b4 < pb ? "판매량이 평균 미달입니다." : "판매량이 평균 이상입니다.";
document.write(res);
