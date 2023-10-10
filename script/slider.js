// Hero

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper_hero', {
        slidesPerView: 3,
        effect: 'slide',
        spaceBetween: 20,
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 1500, 
            disableOnInteraction: false, 
        },
    })

    const prevButton = document.querySelector('.red-arrow.red-arrow_up')
    const nextButton = document.querySelector('.red-arrow.red-arrow_down')

    // Add click event listeners to the buttons
    prevButton.addEventListener('click', function () {
        swiper.slidePrev() // Go to the previous slide
    })

    nextButton.addEventListener('click', function () {
        swiper.slideNext() // Go to the next slide
    })
})

// Reviews

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper_reviews', {
        slidesPerView: 3,
        effect: 'slide',
        spaceBetween: 20,
        direction: "horizontal",
        loop: true,
        autoplay: {
            delay: 1500, 
            disableOnInteraction: false, 
        }
    })

    const prevButton = document.querySelector('.review__arrow.review__arrow_left')
    const nextButton = document.querySelector('.review__arrow.review__arrow_right')

    // Add click event listeners to the buttons
    prevButton.addEventListener('click', function () {
        swiper.slidePrev() // Go to the previous slide
    })

    nextButton.addEventListener('click', function () {
        swiper.slideNext() // Go to the next slide
    })
})
