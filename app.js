var startDate;
var death;

const age_curr = document.getElementById("age_curr");
const expected = document.getElementById("expected");
const percent_curr = document.getElementById("percent_curr");
const progress = document.getElementById("progress");

const settings_pane = document.getElementById("settings_pane");
const first_time_pane = document.getElementById("first_time_pane");

const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const life_expectancy = document.getElementById("life_expectancy");

setInterval(() => {
    const currDate = new Date();
    const diffInMs = currDate.getTime() - startDate.getTime();
    age_curr.textContent = (diffInMs / (365 * 24 * 60 * 60 * 1000)).toFixed(10);
    percent_curr.textContent = ((diffInMs / (death * 365 * 24 * 60 * 60 * 1000)) * 100).toFixed(13);
    progress.max = (death * 365 * 24 * 60 * 60 * 1000);
    progress.value = diffInMs;
}, 1);

function toggleSettings() {
    settings_pane.classList.toggle("visible");
    setAll();
}

function saveSettings() {
    first_time_pane.classList.remove("visible");
    setCookie("year", year.value, 365);
    setCookie("month", month.value, 365);
    setCookie("day", day.value, 365);
    setCookie("hour", hour.value, 365);
    setCookie("minute", minute.value, 365);
    setCookie("second", second.value, 365);
    setCookie("life_expectancy", life_expectancy.value, 365);
    toggleSettings();
    setAll();
}

function setAll() {
    var test = getCookie("year");
    if (test == null) {
        first_time_pane.classList.add("visible");
    }
    year.value = test || 2000
    month.value = getCookie("month") || 1
    day.value = getCookie("day") || 1
    hour.value = getCookie("hour") || 0
    minute.value = getCookie("minute") || 0
    second.value = getCookie("second") || 0
    life_expectancy.value = getCookie("life_expectancy") || 80

    startDate = new Date(
        year.value,
        month.value,
        day.value,
        hour.value,
        minute.value,
        second.value
    );
    death = life_expectancy.value;
    expected.textContent = death;
}

setAll();

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}