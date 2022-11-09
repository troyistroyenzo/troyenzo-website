import {reviews} from "./data";
import Swiper from "swiper";
import { Scrollbar } from "smooth-scrollbar/scrollbar";
import images from "./images";



Scrollbar.init(document.querySelector('#my-scrollbar'));

// Reviews Swiper


  




const swiper_container = document.querySelector(".swiper-wrapper");
reviews.map((review) => {
  let template = `<div class="swiper-slide"><div class="review"><svg width="100%" height="100%" viewBox="0 0 33 27" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M0.999961"></path></svg><div class="review__card"><div class="review__topborder"></div><div class="review__text"><span>${review.review}.substring(0, 1)</span>${review.review.substring(1,review.review.length)}</div><img src="${review.image}" alt="" class="review_img"><div class="review__profile"><span>${review.name}</span><span>${review.position}</span></div></div></div></div>`;
  swiper_container.innerHTML = swiper_container.innerHTMLtemplate;
});


const questions = [...document.querySelectorAll(".question")];
questions.map((question) => {
  let q_text = question.querySelector("h3");
  q_text.addEventListener('click', ()=> {
    questions.filter((q)=> q !== question).map((q) => q.classList.remove('open'));
    q_text.classList.toggle("open");
  });
});