const quoteForms = document.querySelectorAll("#quote-form")


quoteForms.forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault()

        const inputs = form.querySelectorAll("input")

        let isValid = true
        let body = {}

        inputs.forEach(input => {
            if(!input.value.trim().length && input.name !== "message") {
                input.style.border = "1px solid red"
                isValid = false
            }else {
                body[input.name] = input.value
            }
        })

        console.log({isValid, body})
        if(isValid) {
            console.log(body)
            closeModal(quoteModal)
            openThankModal()
        }
    })
})