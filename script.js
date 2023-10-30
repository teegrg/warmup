// Wrap your JavaScript code in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
    const time = document.getElementById('clock');

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        const timeString = `${hours}:${minutes}:${seconds}`;
        time.textContent = timeString;
    }

    // Call updateTime initially to avoid delay
    updateTime();

    // Set up an interval to update the time every second
    setInterval(updateTime, 1000);
});
