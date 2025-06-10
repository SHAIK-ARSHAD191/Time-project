function updateClock() {
    const now = new Date();
    
    // Get time components
    let hours = now.getHours();
    let period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
    
    // Get minutes and seconds
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Update time elements with leading zeros
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('period').textContent = period;
    
    // Update date elements
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    document.getElementById('day').textContent = days[now.getDay()];
    document.getElementById('month').textContent = months[now.getMonth()];
    document.getElementById('date').textContent = now.getDate();
}

// Initialize clock
updateClock();

// Update clock every second
setInterval(updateClock, 1000);  