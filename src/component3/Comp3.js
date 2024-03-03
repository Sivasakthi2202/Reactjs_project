// import React from 'react'
// import './Comp3.css'
// import Slide1 from './slide1.jpg'
// import Slide2 from './slide2.jpg'
// import Slide3 from './slide3.jpg'
// // import Slide4 from './slide4.jpg'


// export default function Comp3() {
//     let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
//   return (
//     <div>
//         {/* <!-- Slideshow container --> */}
// <div class="slideshow-container">

//   {/* <!-- Full-width images with number and caption text --> */}
//   <div class="mySlides fade">
//     <div class="numbertext">1 / 3</div>
//     <img src={Slide1} />
//     <div class="text">Caption Text</div>
//   </div>

//   <div class="mySlides fade">
//     <div class="numbertext">2 / 3</div>
//     <img src={Slide2} />
//     <div class="text">Caption Two</div>
//   </div>

//   <div class="mySlides fade">
//     <div class="numbertext">3 / 3</div>
//     <img src={Slide3} />
//     <div class="text">Caption Three</div>
//   </div>

//   {/* <!-- Next and previous buttons --> */}
//   <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
//   <a class="next" onclick="plusSlides(1)">&#10095;</a>
// </div>

// {/* <!-- The dots/circles --> */}
// <div style="text-align:center">
//   <span class="dot" onclick="currentSlide(1)"></span>
//   <span class="dot" onclick="currentSlide(2)"></span>
//   <span class="dot" onclick="currentSlide(3)"></span>
// </div>
//     </div>
//   )
// }
