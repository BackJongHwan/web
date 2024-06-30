const urlSearchParams = new URLSearchParams(window.location.search)

const myName = urlSearchParams.get('my-name')
const myAge = urlSearchParams.get('my-age')

document.getElementById('myName').innerHTML = myName
document.getElementById('myAge').innerHTML = myAge