const startDate = new Date();

const percent = document.getElementById("percent");
const progress = document.getElementById("progress");

setInterval(() => {
    const currDate = new Date();
    const diffInMs = currDate.getTime() - startDate.getTime();
    percent.textContent = ((diffInMs / (80 * 365 * 24 * 60 * 60 * 1000)) * 100).toFixed(20) + "%";
    progress.max = (80 * 365 * 24 * 60 * 60 * 1000);
    progress.value = diffInMs;
}, 1);