//confirm 확인(true) / 취소(false)를 선택 할 수 있는 질문창
var id = "a";
var ps = "a";

var user_id = prompt("아이디를 입력 해주세요", "");
var user_ps = prompt("비밀번호를 입력 해주세요", "");

if(id == user_id) {
  if(ps == user_ps) {
    document.write(user_id + "님 반갑습니다!" + "<br>");
  } else {
    alert("비밀번호가 일치하지 않습니다." + "<br>");
  }
} else {
  alert("ID가 일치하지 않습니다." + "<br>");
}