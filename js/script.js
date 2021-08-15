/* check if the DOM is fully loaded and ready to be fiddled with*/
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp(initCarousel);
  }
});

const initApp = () => {
  fetch("./content.json")
    .then((response) => response.json())
    .then((json) => {
      addCards(json, initCarousel);
    });
};

const createCard = (question, answer, tabindex) => {
  // create li for carousel
  const card = document.createElement("li");
  card.classList.add("carousel__slide");

  // create first flashcard div
  const div1 = document.createElement("div");
  div1.classList.add("flip-card");
  div1.tabIndex = tabindex;

  // create second flashcard div
  const div2 = document.createElement("div");
  div2.classList.add("flip-card-inner");

  // create front of the flashcard
  const front = document.createElement("div");
  front.classList.add("flip-card-front");
  const frontContent = document.createElement("h3");
  frontContent.innerText = question;
  front.appendChild(frontContent);

  // create back of the flashcard
  const back = document.createElement("div");
  back.classList.add("flip-card-back");
  const backContent = document.createElement("h3");
  backContent.innerText = answer;
  back.appendChild(backContent);

  // put everything together
  div2.appendChild(front);
  div2.appendChild(back);
  div1.appendChild(div2);
  card.appendChild(div1);
  // card.style.backgroundColor =
  //   "#" + Math.floor(Math.random() * 16777215).toString(16);
  // let main = document.getElementById("main");
  main.appendChild(card);
};

const createDot = () => {
  const dotList = document.querySelector(".carousel__nav");
  const dot = document.createElement("button");
  dot.classList.add("carousel__indicator");
  dotList.appendChild(dot);
};

const addCards = (json, callback) => {
  for (let index = 0; index < Object.keys(json).length; index++) {
    createCard(json[index].name, json[index].age, index);
    createDot();
  }
  callback();
};

// CAROUSEL LOGIC

const initCarousel = () => {
  const track = document.getElementById("main");
  const slides = Array.from(track.children);
  console.log(track.children);
  const prevButton = document.getElementById("left");
  const nextButton = document.getElementById("right");
  const dotsNav = document.querySelector(".carousel__nav");
  const dots = Array.from(dotsNav.children);
  // init first dot
  dots[0].classList.add("current-slide");
  slides[0].classList.add("current-slide");

  const slideWidth = slides[0].getBoundingClientRect().width;

  // arrange slides next to one another
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.left = `${slideWidth * index}px`;
  }

  // Move slides right
  nextButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    console.log(currentSlide.nextSibling);
    const nextSlide = currentSlide.nextSibling;
  });
  // Move slides left

  // When I click the nav indicator then move to that slide
};
