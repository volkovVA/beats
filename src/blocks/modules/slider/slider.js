/* eslint-disable no-undef */
import Swipe from "swipejs";

const elem = document.querySelector("#slider"),
    prevBtn = document.querySelector("#prev"),
    nextBtn = document.querySelector("#next");

window.mySwipe = new Swipe(elem, {
    startSlide: 0,
    auto: 3000,
    draggable: true,
    autoRestart: true,
    continuous: true,
    disableScroll: false,
    stopPropagation: true
});

prevBtn.addEventListener("click", mySwipe.prev);
nextBtn.addEventListener("click", mySwipe.next);