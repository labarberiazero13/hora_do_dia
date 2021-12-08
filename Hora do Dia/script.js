setInterval(function() {
    let novaHora = new Date();
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    minuto = zero(minuto);
    segundo = zero(segundo);
    document.getElementById('hora').textContent = hora+':'+minuto+':'+segundo;

},1000)

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}
function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
   
    if (hora >= 0 && hora < 12) {
        
        img.src = 'manhã.png'
        document.body.style.background = '#89a6a9'
    } else if (hora >= 12 && hora <= 18) {
        
        document.body.style.background = '#bb6b62'
        img.src = 'tarde.png'
    } else {
        
        img.src = 'noite.png'
        document.body.style.background = '#253242'
    }
}