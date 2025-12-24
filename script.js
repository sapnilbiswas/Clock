const clock = document.querySelector('.clock');
const body = document.querySelector('body');
const themeButton = document.querySelector('.button');

function updateTime() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    clock.innerText = `${h}:${m}:${s}`;

    setTimeout(updateTime, 1000);
}

updateTime();

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});