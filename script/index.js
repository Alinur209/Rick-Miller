// Modal general logic

const modals = document.querySelectorAll(".modal")

modals.forEach(modal => {
    const closeBtn = modal.querySelector(".closeBtn")
    closeBtn.addEventListener("click", () => closeModal(modal))
    window.addEventListener("click", e => (modal.classList.contains("active") && e.target === modal) && closeModal(modal))
})

function openModal(modal) {
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
}

function closeModal(modal) {
    modal.classList.remove("active")
    document.body.style.overflow = "scroll"

    resetFields() 
}

function resetFields() {
    const allFields = document.querySelectorAll("input")
    
    allFields.forEach(field => {
        field.value = ""
        field.style.border = "none"
    })
}

// Quote Modal

const quoteModal = document.querySelector(".modal.modal_quote")
const quoteBtns = document.querySelectorAll(".quoteBtn")
quoteBtns.forEach(btn => btn.addEventListener("click", () => openModal(quoteModal)))

// Thank Modal 

function openThankModal() {
    const thankModal = document.querySelector(".modal.modal_thank")
    openModal(thankModal)
}

// Media Modal

function openMediaModal(url) {
    const mediaModal = document.querySelector(".modal.modal_media")
    const modalBody = mediaModal.querySelector(".modal__body")

    modalBody.innerHTML = ''
    const img = document.createElement("img")
    img.src = url
    img.alt = "media"
    modalBody.append(img)
    openModal(mediaModal)
}

// Navbar 

const navItems = document.querySelectorAll(".nav__item")

navItems.forEach(item => {
    item.addEventListener("click", () => {
        const sectionName = item.getAttribute("data-anchor")
        const section = document.querySelector(`.section.${sectionName}`)
        section.scrollIntoView({
            behavior: "smooth"
        })
    })
})

// Burger 

const burgerBtn = document.querySelector(".burger-btn")
const burgerIcon = burgerBtn.querySelector("img")
const headerNav = document.querySelector(".header__nav")

burgerBtn.addEventListener("click", () => {

    headerNav.classList.toggle("active")

    if(headerNav.classList.contains("active")) {
        burgerIcon.src = "media/header/burger-opened.png"
    }else {
        burgerIcon.src = "media/header/burger.png"
    }
})