const swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
    loop:true,
    mousewheel: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});