setInterval(function() {
    let novaHora = new Date();
    let hora = novaHora.getUTCHours();
    let minuto = novaHora.getUTCMinutes();
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