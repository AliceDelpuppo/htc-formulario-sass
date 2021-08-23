const $name = document.querySelector('input[data-type="name"]')
const $email = document.querySelector('input[data-type="email"]')

const REGEX_DICTIONARY = {
    name: /^[a-zzáàâãéèêíóôõúç][a-zzáàâãéèêíóôõúç ]*$/i,
    email: /^[a-z][^@ ]*[@][a-z]+([.][a-z]+)+$/i
}

$name.addEventListener('input', validateInput)

$email.addEventListener('input', validateInput)

function validateInput() {
    const value = this.value
    const dataType = this.dataset.type

    const regex = REGEX_DICTIONARY[dataType]

    const match = value.match(regex)
    console.log(match)

    if (match || value == "") {
        this.classList.remove('error')
    } else {
        this.classList.add('error')
    }
}