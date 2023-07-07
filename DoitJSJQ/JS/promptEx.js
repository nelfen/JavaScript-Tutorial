//var age=prompt("당신의 나이는?", "0");
var age=21;
/*
prompt(a, b)
a = 윈도우가 시작될때 이용자에게 보여지는 질문창
b = 기본적으로 입력되어 있는값, 공백일 경우 아무것도 나오지 않음
prompt로 받은 변수는 기본적으로 String 값
*/
if(age>=20){
  document.write("당신은 성인입니다.");
}else{
  document.write("당신은 미성년자입니다.")
}
console.log(age)