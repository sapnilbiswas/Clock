let clock=document.querySelector('.clock');
let body=document.querySelector('body');
function updateTime() {
    let now=new Date();
    let h=now.getHours();
    let min=now.getMinutes();
    let s=now.getSeconds();

    hours=h<10?'0'+h:h;
    min=min<10?'0'+min:min;
    s=s<10?'0'+s:s;

    clock.innerHTML = `${h}:${min}:${s}`;
    setTimeout(updateTime, 1000);
}
updateTime();



let buttton=document.querySelector(".button");
        buttton.addEventListener("click",function(){
            body.classList.toggle("dark")
        })