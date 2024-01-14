// Get the button and popup elements
var readMoreButtons = document.querySelectorAll('.card .btn');
var popup = document.getElementById('popup');

// Function to open the popup
function openPopup() {
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}

// Attach the openPopup function to each "Read More" button
readMoreButtons.forEach(button => {
    button.addEventListener('click', openPopup);
});
