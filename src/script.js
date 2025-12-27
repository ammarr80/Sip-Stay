const items = document.querySelectorAll(".items");
const track = document.querySelector(".track");
const nextBtn = document.getElementById("next");
const prevBtn  = document.getElementById("prev")

let index = 0;
const margin = 16;


function showSlide(i) {
    const width = items[0].offsetWidth + margin;
    track.style.transform = `translateX(${-i * width}px)`;

}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % items.length;
    showSlide(index);
});

prevBtn.addEventListener(("click"), () => {
    index = (index - 1 + items.length) % items.length;
    showSlide(index);
});

const newNext = document.getElementById("new-next");
const newPrev = document.getElementById("new-prev");
const begginerTrack = document.querySelector(".beginner-track");
const beginnerItems = document.querySelectorAll(".begginer-item");

let newIndex = 0;

function showBegginerSlide(i) {
    const width = beginnerItems[0].offsetWidth;

    begginerTrack.style.transform = `translateX(${-i * width}px)`;
}

newNext.addEventListener("click", () => {
    newIndex = (newIndex + 1) % beginnerItems.length;

    showBegginerSlide(newIndex);
});

newPrev.addEventListener(("click"), () => {
    newIndex = (newIndex - 1 + beginnerItems.length) % beginnerItems.length;

    showBegginerSlide(newIndex);
});