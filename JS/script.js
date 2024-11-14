document.addEventListener('DOMContentLoaded', function() {
    const universalPassword = "keep_it_simple_stupid!";

    function authenticate() {
        const password = prompt("Enter the password:");

        if (password === null) {
            // User clicked "Cancel"
            window.location.href = "index.html"; // Redirect to the main page
        } else if (password === universalPassword) {
            document.querySelector('.main-content').style.display = 'block';
        } else {
            alert("Incorrect password. Please try again.");
            authenticate(); // Prompt again
        }
    }

    authenticate();
});