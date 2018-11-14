import SetteEMezzo from "./business/setteemezzo"

$('#formSetteEMezzo').submit(function (event) {
    event.preventDefault();

    var setteEMezzo = new SetteEMezzo();

    var risultato = setteEMezzo.calcola(parseFloat($("#txtCarta").val()));
    alert(risultato * 100);
});