console.log('client side javascript file is loaded')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('error')
const messageTwo = document.querySelector('temprature')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    this.messageOne.textContent = "Loading..."
    this.messageTwo.textContent = ""


    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageTwo.textContent = data
            }

        })
    })
})