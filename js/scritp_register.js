const $name = document.querySelector('#register input[data-type="name"]')
const $email = document.querySelector('#register input[data-type="email"]')
const $birthDate = document.querySelector('#register input[data-type="birth-date"]')
const $password = document.querySelector('#register input[data-type="password"]')
const $passwordConfirm = document.querySelector('#register input[data-type="password-confirm"]')
const $countrySelect = document.querySelector('#country')

const $buttonSubmit = document.querySelector('#register .button')
const $inputs = document.querySelectorAll('#register input')

const TIME_OFF = 2000

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
    // console.log(match)

    if (match || value == "") {
        this.classList.remove('error')
    } else {
        this.classList.add('error')
    }
}

function validatePassword() {
    if($password.value == $passwordConfirm.value || $passwordConfirm.value == '') {
        $password.classList.remove('error')
        $passwordConfirm.classList.remove('error')
    } else {
        $password.classList.add('error')
        $passwordConfirm.classList.add('error')
    }
}

function validadeSelect(){
    if($countrySelect.value == 'Selecionar') {
        $countrySelect.classList.add('error-submit')
        setTimeout(() => {
            $countrySelect.classList.remove('error-submit')
        }, TIME_OFF);
    }
}

function validadeCheckTerms(){
    const $termChecked = document.querySelector('.terms #terms:checked')
    // const $termChecked = document.querySelector('.terms input[data-type="terms"]:checked')

    if (!$termChecked) {
        const $textTerms = document.querySelector('.terms span')
        const $textAlertTerms = document.querySelector('.terms .alert-error-terms')

        $textTerms.classList.add('error-terms-text')

        const pCreated = document.createElement('p')
        const textCreated = document.createTextNode('Necessário aceitar os termos')
        pCreated.appendChild(textCreated)
        $textAlertTerms.appendChild(pCreated)

        setTimeout(() => {
            $textTerms.classList.remove('error-terms-text')
            $textAlertTerms.removeChild(pCreated)
        }, TIME_OFF);
    }
}

$name.addEventListener('input', validateInput)

$email.addEventListener('input', validateInput)

$passwordConfirm.addEventListener('input', validatePassword)

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

$buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault()
    validadeSelect()
    validadeCheckTerms()
    
    $inputs.forEach(function ($input) {

        if (!$input.value) {
            $input.classList.add('error-submit')
            setTimeout(() => {
                $input.classList.remove('error-submit')
            }, TIME_OFF);
        }
    });

})

