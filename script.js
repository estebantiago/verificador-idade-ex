function verificar() {
    var data = new Date() // Cria um objeto de data 
    var ano = data.getFullYear() // Processa o ano atual com 4 dígitos
    var fano = document.getElementById('txtano') // Variável form. ano recebendo o id do HTML 
    var res = document.querySelector('div#res') // Variável resultado recebendo id do HTML 

    if (fano.value.length == 0 || Number(fano.value) > ano) { // Se o ano no formulario digitado for == 0 ou valor digitado for maior que o ano atual.
        window.alert('[ERRO] Verifique os dados e tente novamente!') // Vai dar Erro e aparecer uma mensagem na tela.
    } else { // se não 
        var fsex = document.getElementsByName('radsex') // variavel recebendo o nome do input 
        var idade = ano - Number(fano.value) // variavel para fazer o calculo entre o ano digitado no formulario e o ano atual
        var genero = '' // variavel criada para receber uma string
        var img = document.createElement('img') // Cria uma elemento (img)
        img.setAttribute('id', 'foto') // atribui um id ao elemento img
        if (fsex[0].checked) { // Se o input for marcado como homem 
            genero = 'Homem' // A variavel genero rece ' Homem ' 
            if (idade > 0 && idade <= 13) { // Se idade for maior que 0 e menor igual 13
                img.setAttribute('src', 'crianca-masculino.png') // processa a imagem de uma criança homem
            } else if (idade >= 14 && idade <= 24) { // se não se idade for maior igual 14 e menor igual 34
                img.setAttribute('src', 'jovem-masculino.png')// processa imagem de um Jovem
            } else if (idade >= 25 && idade <= 59) { // se não se idade for maior igual 25 e menor 59 
                img.setAttribute('src', 'adulto-homem.png') // processa a imagem de um Adulto
            } else { // Se não for nenhuma das tentativas acima 
                img.setAttribute('src', 'idoso-masculino.png') // processa a imagem de um Idoso
            }
        } else if( fsex[1].checked){ // Se o input for marcado como Mulher 
            genero = 'Mulher' // A variável genero recebe ' Mulher ' 
            if (idade > 0 && idade <= 13) {
                img.setAttribute('src', 'feminino-crianca.png')  
            } else if (idade >= 14 && idade <= 24) {
                img.setAttribute('src', 'jovem-feminino.png')
            } else if (idade >= 25 && idade <= 59) {
                img.setAttribute('src', 'adulto-mulher.png')
            } else {
                img.setAttribute('src', 'idoso-feminino.png')
            }  
    }
    res.style.textAlign = ' center ' // alinha o texto no centro 
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // Escreve na tela a mensagem 
    res.appendChild(img) // adiciona o elemento img
}
}

/*   >>>>>> EXPLICAÇÕES  <<<<< 

.value captura o que o usuario digitou
.length conta a quantidade de caracteres 

*/
