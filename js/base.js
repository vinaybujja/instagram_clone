// preloader
const preload = document.querySelector('.preloader');
function preloader() {
  preload.style.display = 'none';
}
// preloader

// search page
const search_page = document.querySelector(".search-page");
const search_button = document.querySelector(".search-button-logo");
search_button.addEventListener("click",()=>{
    search_page.style.display = "block"
})

const search_back_button = document.querySelector(".search-back-button");
search_back_button.addEventListener("click",()=>{
    search_page.style.display = "none"
})

// like and comments
const comment_button = document.querySelector(".comment-button");
const comment_page = document.querySelector(".comment-page");
const commnet_back_button = document.querySelector(".commnet-back-button");

comment_button.addEventListener("click",()=>{
    comment_page.style.display = "block"
})

commnet_back_button.addEventListener("click",()=>{
    comment_page.style.display = "none"
})

const like_button = document.querySelector(".like-button");

like_button.addEventListener("click",()=>{
    // write code to like
})
