/* 
삼항 조건 연산자
var res=a>b?c:d;
?앞에 조건문이 true일 경우 c를 false일 경우 d를 반환
*/

var q = 10;
var w = 3;

var re = q > w ? "javascript" : "hello";
console.log(re);

var nam = prompt("당신의 이름은?", "");
var height = prompt("당신의 신장은?", "0");
var weight = prompt("당신의 체중은?", "0");

var normal_W=(height-100)*0.9;
var r = weight>=normal_W-5 && weight <= normal_W + 5;
r = r ? "적정 체중입니다." : "적정 체중이 아닙니다.";
document.write(nam+"님은"+r);