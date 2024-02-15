function crushHeart() {
  const sad_heart = document.getElementById("sad-heart");
  const container = document.querySelector(".container");

  // Resize the sad heart
  let sadWidth = parseInt(getComputedStyle(sad_heart).width);
  let sadHeight = parseInt(getComputedStyle(sad_heart).height);

  let newSadWidth = sadWidth - 10;
  let newSadHeight = sadHeight - 10;

  sad_heart.style.width = newSadWidth + "px";
  sad_heart.style.height = newSadHeight + "px";

  // Generate random values for position relative to the container
  let containerWidth = container.offsetWidth;
  let containerHeight = container.offsetHeight;

  // Define the radius of the circular area
  let radius =
    10 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Convert 10rem to pixels

  // Generate random angles (in radians) and calculate corresponding positions within the circular area
  let angle = Math.random() * 2 * Math.PI; // Random angle between 0 and 2pi
  let distance = Math.random() * radius; // Random distance from center within the circular area

  let randomLeft = Math.cos(angle) * distance; // Calculate x-coordinate
  let randomTop = Math.sin(angle) * distance; // Calculate y-coordinate

  // Calculate new position within the container
  let currentLeft = parseInt(getComputedStyle(sad_heart).left);
  let currentTop = parseInt(getComputedStyle(sad_heart).top);

  let newLeft = Math.min(
    Math.max(currentLeft + randomLeft, 0),
    containerWidth - newSadWidth
  );
  let newTop = Math.min(
    Math.max(currentTop + randomTop, 0),
    containerHeight - newSadHeight
  );

  // Set the sad heart position to the new values
  sad_heart.style.left = newLeft + "px";
  sad_heart.style.top = newTop + "px";
}

document.getElementById("sad-heart").addEventListener("click", crushHeart);

let heartsCounter = 0;
const maxDuration = 10000; // 10 seconds
const maxHearts = 100; // Maximum number of hearts

function hearts() {
  startTime = Date.now();

  while (Date.now() - startTime < maxDuration && heartsCounter < maxHearts) {
    createHeart();
  }
}

function createHeart() {
  const container = document.querySelector(".container");
  const create_heart = document.createElement("div");
  create_heart.classList.add("hearts");
  create_heart.style.backgroundImage = "url('images/plain-heart.png')";
  create_heart.style.left = Math.random() * 100 + "vw";
  create_heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  container.appendChild(create_heart);

  create_heart.addEventListener("click", removeHeartListener);
  heartsCounter++;
}

function removeHeartListener(event) {
  event.target.removeEventListener("click", removeHeartListener);
}

document.getElementById("happy-heart").addEventListener("click", hearts);

function createBalloons() {
  const container = document.querySelector(".container");
  const balloon_div = document.createElement("div");
  balloon_div.classList.add("balloons");
  balloon_div.style.backgroundImage = "url('images/balloon-heart-2.png')";
  balloon_div.style.animationDuration = "10s";
  container.appendChild(balloon_div);
}
createBalloons();
