function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 12){
                //crianca
                img.setAttribute('src', 'crainca.jpg')
            }
            else if(idade >=12 && idade < 18){
                //jovem
                img.setAttribute('src', 'jovem.jpg')
            }
            else if(idade >=18 && idade < 60){
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
           
        }

        else if(fsex[1].checked) {
            genero = 'Mulher'
        
            if(idade >=0 && idade < 12){
                //crianca
                img.setAttribute('src', 'crainca.jpg')
            }
            else if(idade >=12 && idade < 18){
                //jovem
                img.setAttribute('src', 'jovemM.jpg')
            }
            else if(idade >=18 && idade < 60){
                //adulta
                img.setAttribute('src', 'adulto.jpg')
            }
            else {
                //idosa
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}