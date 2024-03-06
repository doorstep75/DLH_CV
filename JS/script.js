// Wait for the DOM content to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Select the button element using querySelector
  var button = document.querySelector("button");

  // Add a click event listener to the button
  button.addEventListener("click", function () {
    // Call the toggleImage function when the button is clicked
    toggleImage();
  });
});

// Function to toggle the image visibility
function toggleImage() {
  var img = document.getElementById("familyPic");
  if (img.style.opacity === "1") {
    // If the image is fully visible, fade it out
    img.style.opacity = "0";
    img.style.visibility = "hidden"; // Hide the image while maintaining its space
  } else {
    // If the image is not visible, fade it in
    img.style.opacity = "1";
    img.style.visibility = "visible"; // Show the image
  }
}
