// Function to increase the size of the heart
function enlargeHeart() {
  const sad_heart = document.getElementById("sad-heart");
  

  // Get the current width and height of the hearts
  let sadWidth = parseInt(getComputedStyle(sad_heart).width);
  let sadHeight = parseInt(getComputedStyle(sad_heart).height);
 

  // Increase the width and height by a certain amount (e.g., 10 pixels)
  let newSadWidth = sadWidth - 10;
  let newSadHeight = sadHeight - 10;


  // Set the new width and height for the "sad-heart" and "happy-heart"
  sad_heart.style.width = newSadWidth + "px";
  sad_heart.style.height = newSadHeight + "px";
  // Corrected
}

// Event listeners to call the function when the hearts are clicked
document.getElementById("sad-heart").addEventListener("click", enlargeHeart);




function hearts() {
  // Reset hearts counter
  heartsCounter = 0;

  // Start time of the heart creation process
  startTime = Date.now();

  // Loop to continuously create hearts until max duration or max hearts is reached
  while (Date.now() - startTime < maxDuration && heartsCounter < maxHearts) {
    // Create and append a heart
    createHeart();
  }
}

function createHeart() {
  const container = document.querySelector(".container");
  const create_heart = document.createElement("div");
  create_heart.classList.add("hearts");
  create_heart.innerHTML = "❤️";
  create_heart.style.left = Math.random() * 100 + "vw";
  create_heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  container.appendChild(create_heart);

  // Increment hearts counter
  heartsCounter++;
}

// Maximum duration for heart creation (in milliseconds)
const maxDuration = 10000; // 10 seconds

// Maximum number of hearts to be created
const maxHearts = 100; // Limit to 100 hearts

// Variable to track the number of hearts added
let heartsCounter = 0;

// Start time of the heart creation process
let startTime;

// Start heart creation when the button is clicked
document.getElementById("happy-heart").addEventListener("click", hearts);
