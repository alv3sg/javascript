function gerar() {
    let num = document.getElementById('num')
    let tab = document.getElementById('selTab')
    if (num.value == 0) {
        alert('Coloque um valor diferente de 0')
    }else {
        let n = Number(num.value)       
        let c = 1 //contador 
        tab.innerHTML = '' //limpar tabuada para imprimir uma nova
        while (c <= 10) {
            let item = document.createElement('option') //criar o option no select no html
            item.text = `${n} x ${c} = ${n*c}` //realização da operacao dentro da let item
            item.value = `tab${c}` //value para outras lingagens 
            tab.appendChild(item) //adicionar a variavel item dentro da variavel tab
            c++
        }
       
    }
}

/*
let m = 1
resul = i * m
res.innerHTML = `${resul}`
*/