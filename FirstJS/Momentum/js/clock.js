const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart("2", 0);
    //padStart("n", m) : 표기하려는 글자수가 "n" 보다 작다면 앞에 m을 붙이는 함수
    const minutes = String(date.getMinutes()).padStart("2", 0);
    const seconds = String(date.getSeconds()).padStart("2", 0);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //페이지 로딩 1초 후 getClock();가 뜨는걸 방지하기위해 문구 삽입
setInterval(getClock, 1000);    //1초에 1번씩 갱신