let nickname = prompt('Qual o seu nome?')
console.log(nickname)
window.onload = function() {
    if(nickname === ''){
        document.getElementById('name').innerText = 'seja muito bem-vindo!'
    } else {
        document.getElementById('name').innerText = nickname
    }
  }
