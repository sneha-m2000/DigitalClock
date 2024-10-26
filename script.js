const morningColor = '#FFA500'; // Morning color
const afternoonColor = '#000000'; // Afternoon color
const eveningColor = '  #8B0000'; // Evening color
const nightColor = '#0000FF'; // Night color

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Determine AM or PM
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = String(hours % 12 || 12).padStart(2, '0'); // Convert 24-hour format to 12-hour format

    // Update clock display
    document.getElementById('hour').textContent = displayHours;
    document.getElementById('minute').textContent = minutes;
    document.getElementById('second').textContent = seconds;
    document.getElementById('AmPm').textContent = amPm;

    // Update the background image and text color based on the time of day
    const clockContainer = document.querySelector('.clock-container');

    if (hours >= 6 && hours < 12) {
        clockContainer.style.backgroundImage = "url('assets/morning.jpg')"; // Morning image
        clockContainer.style.color = morningColor; // Set morning color
    } else if (hours >= 12 && hours < 18) {
        clockContainer.style.backgroundImage = "url('assets/afternoon.jpg')"; // Afternoon image
        clockContainer.style.color = afternoonColor; // Set afternoon color
    } else if (hours >= 18 && hours < 21) {
        clockContainer.style.backgroundImage = "url('assets/evening3.jpg')"; // Evening image
        clockContainer.style.color = eveningColor; // Set evening color
    } else {
        clockContainer.style.backgroundImage = "url('assets/night.jpg')"; // Night image
        clockContainer.style.color = nightColor; // Set night color
    }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();                            