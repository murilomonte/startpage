function updateTime() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    document.getElementById('section-header-title').innerHTML = `${hour}:${minute}:${second}`;

    setTimeout(function() { updateTime() }, 1000);
};

updateTime();

let darkImageList = [
    'img/backgrounds/dark/dark-img1.jpg'
]

let lightImageList = [
    'img/backgrounds/light/light-img1.png'
]

function imageSelector (list) {
    window.document.getElementById('imagem').style.backgroundImage = `url("${list[(Math.random() * list.length) | 0] }")`
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("modo escuro")
    imageSelector(darkImageList)
} else {
    console.log("modo claro")
    imageSelector(lightImageList)
}

let musicList = [
    '2A1w51R7uVAi3l75UT1HTw',
    '0rnGYYBw32ALUIiuEgwv2c',
    '3BmGfswCrv2p1It4oCdtU6'
]

document.addEventListener('DOMContentLoaded', musicChooser());

function musicChooser() {
    document.getElementById('spotify-iframe').src = `https://open.spotify.com/embed/track/${musicList[(Math.random() * musicList.length) | 0]}`
}