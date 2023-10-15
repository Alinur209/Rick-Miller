const questionsSection = document.querySelector(".section.faq")
const questions = document.querySelectorAll(".faq__item")

questions.forEach((question, index) => {
    question.addEventListener("click", e => {
        deactivateOtherFaqTabs(index)

        if (question.classList.contains("active")) {
            question.classList.remove("active")
        } else {
            question.classList.add("active")
        }
    })
})

window.addEventListener("click", e => {
    if (!questionsSection.contains(e.target)) {
        deactivateAllFaqTabs()
    }
})

function deactivateOtherFaqTabs(activeIndex) {
    questions.forEach((question, index) => {
        if (index !== activeIndex) {
            question.classList.remove("active")
        }
    })
}

function deactivateAllFaqTabs() {
    questions.forEach(question => {
        if (question.classList.contains("active")) {
            question.classList.remove("active")
        }
    })
}