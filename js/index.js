let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll(".slide");

const hideAllSlide = () => {
  slides.forEach((e) => {
    e.classList.remove("active");
  });
};

const showSlide = () => {
  hideAllSlide();
  slides[slide_index].classList.add("active");
};

const nextSlide = () => {
  slide_index = (slide_index + 1) % slides.length;
  showSlide();
};

const prevSlide = () => {
  slide_index = (slide_index - 1 + slides.length) % slides.length;
  showSlide();
};

// Pause slide when hover slider
document.querySelector(".slider").addEventListener("mouseover", () => {
  slide_play = false;
});

// Enable slide when mouse leave out slider
document.querySelector(".slider").addEventListener("mouseleave", () => {
  slide_play = true;
});

// Slider control
document.querySelector(".slide-next").addEventListener("click", () => {
  nextSlide();
  showSlide();
});

document.querySelector(".slide-prev").addEventListener("click", () => {
  prevSlide();
  showSlide();
});

// Auto slide
const autoSlide = () => {
  if (slide_play) {
    nextSlide();
    showSlide();
  }
};

// Initialize the first slide
showSlide();

// Set interval for auto slide
setInterval(autoSlide, 3000); // Change slide every 3 seconds

let products = [
  {
    name: "JBL E55BT KEY BLACK",
    image1: "./images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png",
    image2: "./images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL JR 310BT",
    image1: "./images/JBL_JR 310BT_Product Image_Hero_Skyblue.png",
    image2: "./images/JBL_JR 310BT_Product Image_Detail_Skyblue.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL TUNE 750BTNC",
    image1:
      "./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png",
    image2: "./images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp",
    old_price: "400",
    curr_price: "300",
  },
];
