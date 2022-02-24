function verificar() {
    //window.alert('Funcionou!')
    var data = new Date() //pegar a data atual
    var ano = data.getFullYear() //pegar o ano atual
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //calcular idade
        var genero = ''
        var img = document.createElement('img') //criar img no html
        img.setAttribute('id', 'foto') //colocar id no img
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <5){
                //bebe
                img.setAttribute('src', '01m.png')
            } else if (idade < 14) {
                //criança
                img.setAttribute('src', '02m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '03m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '04m.png')
            } else {
                //idoso
                img.setAttribute('src', '05m.png')
            }
            
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade <5){
                //bebe
                img.setAttribute('src', '01f.png')
            } else if (idade < 14) {
                //criança
                img.setAttribute('src', '02f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '03f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '04f.png')
            } else {
                //idoso
                img.setAttribute('src', '05f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //adicionar elemento
    }

}