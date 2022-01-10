const clockTitle = document.querySelector(".js-clock");

function say() {
    const xMas = new Date('2021-12-25 00:00:00');
    const toDay = new Date(); //let
    const diff = xMas.getTime() - toDay.getTime();
    const haru = 60 * 60 * 1000;

    const day = String(Math.floor(diff / (haru*24) )).padStart(2, "0");
    const hour = String(Math.floor( (diff % (haru*24)) / (haru) )).padStart(2, "0");
    const min = String(Math.floor( (diff % (haru)) / (haru/60) )).padStart(2, "0");
    const sec = String(Math.floor(diff % (haru/60) / (haru/60/60) )).padStart(2, "0");;

    clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

say(); //웹이 실행되자마자 실행하게 해줌, 없으면 1초기다려야함
setInterval(say, 1000);
