const menu = ["About", "공기업사이트", "Swiper사이트", "Isotope사이트"];

const swiper = new Swiper("#wrap", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    mousewheel: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        renderBullet: function(index, className){
            return `<span class="${className}">${menu[index]}</span>`
        }

    },
});

const bgs = document.querySelectorAll(".bg li");
const navi = document.querySelectorAll(".swiper-pagination span");
const intro = document.querySelectorAll(".main_intro");

window.addEventListener("mousewheel", activation);
swiper.on("slideChangeTransitionEnd", activation);

for(let el of navi){
    el.addEventListener("click", e=>{
        const isOn = e.currentTarget.classList.contains("swiper-pagination-bullet-active");
        if(isOn) return;
        swiper.on("slideChangeTransitionEnd", activation);
    })
}


function activation(){
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-swiper-slide-index");

    for(let el of bgs){
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");
}