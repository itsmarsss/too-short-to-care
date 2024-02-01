var startDate = new Date(2000, 1, 1, 0, 0, 0);
var death = getCookie("death") || 80;

const age_curr = document.getElementById("age_curr");
const percent_curr = document.getElementById("percent_curr");
const progress = document.getElementById("progress");
const settings_pane = document.getElementById("settings_pane");

setInterval(() => {
    const currDate = new Date();
    const diffInMs = currDate.getTime() - startDate.getTime();
    age_curr.textContent = (diffInMs / (365 * 24 * 60 * 60 * 1000)).toFixed(10);
    percent_curr.textContent = ((diffInMs / (death * 365 * 24 * 60 * 60 * 1000)) * 100).toFixed(13);
    progress.max = (death * 365 * 24 * 60 * 60 * 1000);
    progress.value = diffInMs;
}, 1);

function toggleSettings() {
    console.log(1);
}

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