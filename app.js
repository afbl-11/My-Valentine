function enlargeHeart() {
  const sad_heart = document.getElementById("sad-heart");
  
  let sadWidth = parseInt(getComputedStyle(sad_heart).width);
  let sadHeight = parseInt(getComputedStyle(sad_heart).height);
 
  let newSadWidth = sadWidth - 10;
  let newSadHeight = sadHeight - 10;

  sad_heart.style.width = newSadWidth + "px";
  sad_heart.style.height = newSadHeight + "px";
  
}

document.getElementById("sad-heart").addEventListener("click", enlargeHeart);


function hearts() {
  
  heartsCounter = 0;

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

 
  heartsCounter++;
}

const maxDuration = 10000; 
const maxHearts = 100; 
let heartsCounter = 0;
let startTime;
document.getElementById("happy-heart").addEventListener("click", hearts);

function createBalloons() {
  const container = document.querySelector('.container');
  const balloon_div = document.createElement('div');
  balloon_div.classList.add('balloons');
  balloon_div.style.backgroundImage = "url('images/balloon-heart-2.png')";
  balloon_div.style.animationDuration = "10s";
  container.appendChild(balloon_div);
}
createBalloons()

/* Fails to create a balloon div */


/* suggestions
  happy heart button should only be clicked once
  happy heart should i think make an animation going up
*/