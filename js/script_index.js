const $email = document.querySelector('#login input[data-type="email"]')
const $password = document.querySelector('#login input[data-type="password"]')

const $buttomSubmit = document.querySelector('#login .button-submit')
const $inputs = document.querySelectorAll('#login input')
// console.log($inputs)

const TIME_OFF = 1500

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

function validatePassword() {
    const value = this.value
    console.log(value)
    
    if(value || value == "") {
        this.classList.remove('error')
    } else {
        this.classList.add('error')
    }
}

$email.addEventListener('input', validateInput)
$password.addEventListener('input', validatePassword)

$buttomSubmit.addEventListener('click', function(){
    $inputs.forEach(function($input) {

        if (!$input.value){
            $input.classList.add('error-submit')
            setTimeout(() => {
                $input.classList.remove('error-submit')                
            }, TIME_OFF);
        }
    });
})

