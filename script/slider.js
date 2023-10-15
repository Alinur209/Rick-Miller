// Hero

document.addEventListener("DOMContentLoaded", () => {
    let swiperParams = {
        slidesPerView: 3,
        effect: 'slide',
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        }
    }

    const swiperVertical = new Swiper('.swiper_hero.vertical', {
        direction: "vertical",
        ...swiperParams
    })

    const swiperHorizontal = new Swiper('.swiper_hero.horizontal', {
        ...swiperParams,
        direction: "horizontal",
        breakpoints: {
            600: {
                slidesPerView: 3
            },

            0: {
                slidesPerView: 2,
                pagination: {
                    el: '.hero-swiper-pagination', // The element you created in step 1
                    clickable: true, // Allows clicking on pagination dots to navigate
                }
            }
        }
    })

    const prevButton = document.querySelector('.red-arrow.red-arrow_up')
    const nextButton = document.querySelector('.red-arrow.red-arrow_down')

    prevButton.addEventListener('click', function () {
        swiperVertical.slidePrev()
        swiperHorizontal.slidePrev()
    })

    nextButton.addEventListener('click', function () {
        swiperVertical.slideNext()
        swiperHorizontal.slideNext()
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
            delay: 2000,
            disableOnInteraction: false,
        },

        pagination: {
            el: '.review-swiper-pagination', 
            clickable: true
        },

        breakpoints: {
            868: {
                slidesPerView: 3
            },

            600: {
                slidesPerView: 2
            },

            0: {
                slidesPerView: 1
            }
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