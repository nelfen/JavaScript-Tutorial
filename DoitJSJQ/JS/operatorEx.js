//문자형 + 숫자형 데이터 = 하나의 문자형 데이터
//ex) "100" + 200 = "100200";
var a = 10;
var b = 3;
a+=b; //13
a-=b; //10
a*=b; //30
a%=b; //0

var str="<table border='1'>";
str+="<tr>";
str+="<td>1</td><td>2</td><td>3</td>";
str+="</tr>";
str+="</table>";
document.write(str);

/*
b++, ++b의 차이
var a=b++;
먼저 실행: b의 값을 a에 대입 
나중 실행: b의 값을 1만큼 증가
var a=++b;
먼저 실행: b의 값을 1만큼 증가
나중 실행: 증가된 값을 a에 대입
*/

var o = 10;
var result;

result = o++;
console.log(result);
result = ++o;
console.log(result);

/*
비교연산자 ==, !=과 ===, !==의 차이
==, !=: 값이 같은지 확인하고 true반환
===, !==: 자료형이 같은지까지 확인하고 true반환
*/

var h = 10;
var g = "10";
var res;
res = h==g; //true
console.log(res);
res = h===g;  //false
console.log(res);

/* 
논리 연산자
||: or연산자, 둘중 하나라도 true면 true반환
&&: and연산자, 둘중 하나라도 false가 존재하면 false반환
!: not연산자, 결과값이 true이면 false반환 ex) res = !(a>b);
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