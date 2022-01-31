
function calificacion() {
        const rating = document.getElementsByName('rating');
        let valor;
        for (let i = 0; i < rating.length; i++) {
                if (rating[i].checked){
                        valor = rating[i].value;
                        break;
                }
        }
        document.getElementById('puntuacion').innerHTML = 'Le diste un  ' + valor + '  a la imagen';
}