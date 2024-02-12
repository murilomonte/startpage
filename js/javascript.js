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
    'img/backgrounds/dark/dark-img1.jpg',
    'img/backgrounds/dark/dark-img2.mp4'
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

let currentCount = 1;
let lastRun = false;
let devMessages = [
    '// -- Iniciando auto destruição da página -- //',
    'There are no easter eggs up here. Go away.',
    'Eu já disse, não precisa mais clicar.',
    'Você é insistente, gosto disso.',
    'Posso fazer isso o dia todo.',
    'Never gonna give you up',
    'Você ainda tá aqui?',
    'Você é teimoso.',
    '🐱',
    ':3'
];

function devMsgCounter() {
    if (currentCount > 12 && !lastRun) {
        document.getElementById('spotify-iframe').src = 'https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=generator';
        lastRun = true;

    } else if (currentCount > 12) {
        document.getElementById('popup').innerHTML = devMessages[(Math.floor(Math.random() * devMessages.length))];

    } else if (currentCount > 7) {
        document.getElementById('popup').innerHTML = 'Não é necessário. Você já é um desenvolvedor.';
        currentCount++;

    } else if (currentCount == 7) {
        document.getElementById('popup').innerHTML = 'Você agora é um desenvolvedor!';
        currentCount++;

    } else if (currentCount >= 3) {
        document.getElementById('popup').innerHTML = `Faltam ${7 - currentCount} etapas para você se tornar um desenvovedor`;
        document.getElementById('popup').style.display = 'block';
        currentCount++;

    } else {
        currentCount++;
    };
}