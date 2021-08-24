const $email = document.querySelector('#login input[data-type="email"]')
const $password = document.querySelector('#login input[data-type="password"]')

const REGEX_DICTIONARY = {
    name: /^[a-zzáàâãéèêíóôõúç][a-zzáàâãéèêíóôõúç ]*$/i,
    email: /^[a-z][^@ ]*[@][a-z]+([.][a-z]+)+$/i,
    birthDate: /[^0-9]/g
}

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

$email.addEventListener('input', validateInput)
