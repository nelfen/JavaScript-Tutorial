var today = new Date(); //today = 오늘 날짜
var nowYear = today.getFullYear();

var theDate = new Date(nowYear, 11, 31);
var diffDate = theDate.getTime() - today.getTime();

var result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
document.write("연말 D-day:" + result + "일 남았습니다.<br>");

var num = 2.1234;

var maxNum = Math.max(10, 5, 8, 30),  //최대값
minNum = Math.min(10, 5, 8, 30),  //최소값
roundNum = Math.round(num), //소수점 첫째 자리 반올림
floorNum = Math.floor(num), //소수점 첫째 자리 내림
ceilNum = Math.ceil(num), //소수점 첫째 자리 올림
rndNum = Math.random(), //0~1사이의 난수(실수) 발생
piNum = Math.PI;  //원주율 상수 반환

Math.random()*10; //0~10까지의 난수(실수) 반환
Math.floor(Math.random()*11); //0부터 11까지의 난수(실수)를 발생시켜 그 값을 내림(10~3)
Math.floor(Math.random()*31)+120; //120~150 난수 발생
//Math.floor(Math.random()*(최댓값-최솟값+1))+최솟값;

var game = prompt("가위, 바위, 보 중 선택하세요", "가위");
var gameNum;
switch(game) {
  case "가위":
    gameNum = 1; break;
  case "바위":
    gameNum = 2; break;
  case "보":
    gameNum = 3; break;
  default: alert("잘못 작성했습니다.");
    location.reload();  
}

var com = Math.ceil(Math.random()*3);
document.write("<img src=\"images/math_img_" + com + ".jpg\"><br>");

if (gameNum == com) {
  document.write("<img src=\"images/game_1.jpg\"><br>");
} else {
  document.write("<img src=\"images/game_2.jpg\"><br>");
}

var d = new Array();
d[0] = "male";
d[1] = 23;
d[2] = true;
var d = new Array("male", 23, true);
var d = ["male", 23, true];

document.write("<h3>배열값 가져오기 -1</h3>");
document.write(d[0], "<br>");
document.write(d[1], "<br>");
document.write(d[2], "<br>");

document.write("<h3>배열값 가져오기 -2</h3>");
for(var i=0; i < d.length; i++) {
  document.write(d[i], "<br>");
} 

document.write("<h3>배열값 가져오기 -3</h3>");
for(i in d) {
  document.write(d[i], "<br>");
}

var arr_1 = ["사당", "교대", "방배", "강남"];
var arr_2 = ["신사", "압구정", "옥수"];

var result = arr_1.join("-"); //-로 연결된 하나의 문자열 반환
console.log(result);

result = arr_1.concat(arr_2); //2개의 배열을 하나로 만들어 반환
console.log(result);

result = arr_1.slice(1, 3); //배열의 1, 3 요소를 잘라내고 반환
console.log(result);

arr_1.sort(); //배열 오름차순 정렬
console.log(arr_1);

arr_2.reverse();  //배열 순서 반대
console.log(arr_2);

var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

greenArr.splice(2, 1, "서초", "역삼");  //splice(n, m, o): n번째 인덱스부터 m개의 데이터를 삭제 그다음 o(+@)를 삽입
console.log(greenArr);

var data1 = yellowArr.pop();
var data2 = yellowArr.shift();

yellowArr.push(data2);
console.log(yellowArr);

yellowArr.unshift(data1);
console.log(yellowArr);