const $name = document.querySelector('#register input[data-type="name"]')
const $email = document.querySelector('#register input[data-type="email"]')
const $birthDate = document.querySelector('#register input[data-type="birth-date"]')
const $password = document.querySelector('#register input[data-type="password"]')
const $passwordConfirm = document.querySelector('#register input[data-type="password-confirm"]')

const REGEX_DICTIONARY = {
    name: /^[a-zzáàâãéèêíóôõúç][a-zzáàâãéèêíóôõúç ]*$/i,
    email: /^[a-z][^@ ]*[@][a-z]+([.][a-z]+)+$/i,
    birthDate: /[^0-9]/g
}

// ------ Página de cadastro
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

$name.addEventListener('input', validateInput)
$email.addEventListener('input', validateInput)

$birthDate.addEventListener('input', function () {
    const regex = REGEX_DICTIONARY.birthDate
    const value = this.value.replace(regex, '')

    this.value = value.slice(0, 8)


    if (this.value.length == 8 || this.value.length == 0) {
        this.classList.remove('error')
    } else {
        this.classList.add('error')
    }
})

$birthDate.addEventListener('blur', function () {
    const value = this.value

    if (this.value.length == 8) {
        const day = value[0] + value[1]
        const month = value[2] + value[3]
        const year = value.slice(4)

        this.value = `${day}/${month}/${year}`
    }
})

$birthDate.addEventListener('focus', function () {
    const regex = REGEX_DICTIONARY.birthDate
    const value = this.value.replace(regex, '')

    this.value = value
})