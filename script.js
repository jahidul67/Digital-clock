// Function to update the clock every second
function updateClock() {
    const now = new Date(); // Get current date and time

    // Get the current hours, minutes, and seconds, as well as the day of the week
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let dayOfWeek = now.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday

    // Format hours, minutes, and seconds to always have two digits
    hours = hours < 10 ? '0' + hours : hours; // Add leading zero if single digit
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if single digit
    seconds = seconds < 10 ? '0' + seconds : seconds; // Add leading zero if single digit

    // Set the text content of the hour, minute, and second elements
    document.querySelector('.hour').textContent = hours;
    document.querySelector('.min').textContent = minutes;
    document.querySelector('.sec').textContent = seconds;

    // Set the active day of the week
    const weekDays = document.querySelectorAll('.week div');
    weekDays.forEach((day, index) => {
        if (index === dayOfWeek) {
            day.classList.add('active'); // Highlight current day
        } else {
            day.classList.remove('active'); // Remove highlight from other days
        }
    });
}

// Call the updateClock function every second (1000 milliseconds)
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
