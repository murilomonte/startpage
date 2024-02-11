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