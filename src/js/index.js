let swiper = new Swiper(".main__swiper--dots", {
    spaceBetween: 0,
    slidesPerView: 0,
    freeMode: true,
    watchSlidesProgress: true,
});

let swiper2 = new Swiper(".main__swiper", {
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    }
});

let background = document.querySelector('.bg');
let mainBtn = document.querySelector('.main__btn');
let shadowText = document.querySelector('.text');

function changeSlide(color, name) {
  background.style.background = `#${color}`;
  mainBtn.style.color = `#${color}`;
}

let burgerBtn = document.querySelector(".header__burger");
burgerBtn.addEventListener('click', function() {
  console.log(burgerBtn.className);
  if(burgerBtn.className !== "header__burger") {
    burgerBtn.classList.remove("active");
  } else {
    burgerBtn.classList.add("active");
  }
});