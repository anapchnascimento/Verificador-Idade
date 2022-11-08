function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')    
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', 'imagem/menino.jpg')
        } else if (idade < 21){
            // Jovem
            img.setAttribute('src', 'imagem/hjovem.jpg')
        } else if (idade < 60) {
            //Adulto
            img.setAttribute('src', 'imagem/homem.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'imagem/idoso.jpg')
        }
    } else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', 'imagem/menina.jpg')
        } else if (idade < 21){
            // Jovem
            img.setAttribute('src', 'imagem/mjovem.jpg')
        } else if (idade < 60) {
            //Adulto
            img.setAttribute('src', 'imagem/mulher.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'imagem/idosa.jpg')
        }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
}

}