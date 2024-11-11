// Function to send a ping request
function pingHost(url) {
    fetch(url, {
        method: "GET",
        mode: "no-cors" // Optional: Prevents the browser from blocking the request
    })
    .then(response => {
        logMessage("Ping sent to " + url);
    })
    .catch(error => {
        logMessage("Error pinging " + url + ": " + error.message);
    });
}

// Function to log messages to the output log
function logMessage(message) {
    const outputElement = document.getElementById('output');
    outputElement.textContent += message + '\n';
}

// Start continuously pinging the host entered by the user
function startPinging() {
    const hostInput = document.getElementById('host-input').value.trim(); // Get the host from the input field
    const alertElement = document.getElementById('alert');
    const outputElement = document.getElementById('output');

    // Clear any previous alerts
    alertElement.textContent = "";

    // Validate the input URL
    if (!hostInput) {
        alertElement.textContent = "Please enter a valid host URL.";
        return;
    }

    // Simple URL validation (checks if the input starts with "http://", "https://", or "www.")
    const urlRegex = /^(https?:\/\/|www\.)[a-zA-Z0-9.-]+(?:\.[a-zA-Z]{2,})$/;
    if (!urlRegex.test(hostInput)) {
        alertElement.textContent = "Please enter a valid URL (e.g., https://example.com).";
        return;
    }

    // Start pinging continuously
    setInterval(() => pingHost(hostInput), 0); // 0 ms delay, essentially infinite pings
}
