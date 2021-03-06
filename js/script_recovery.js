const $email = document.querySelector('#recovery input[data-type="email"]')
const $buttonSubmit = document.querySelector('#recovery .button-submit')

const REGEX_DICTIONARY = {
    name: /^[a-zzáàâãéèêíóôõúç][a-zzáàâãéèêíóôõúç ]*$/i,
    email: /^[a-z][^@ ]*[@][a-z]+([.][a-z]+)+$/i,
    birthDate: /[^0-9]/g
}

const TIME_OFF = 1500

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

$buttonSubmit.addEventListener('click', function(event){
    event.preventDefault()
    console.log('clicou')
    console.log($email)

    if(!$email.value){
        $email.classList.add('error-submit')
        
        setTimeout(() => {
            $email.classList.remove('error-submit')            
        }, TIME_OFF);
    }
})


