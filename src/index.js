import Scommessa from './scommessa';


$(document).ready(function () {

    $('.quota').on('input', function () {
        $('#txtPuntata1').val('');
        $('#txtPuntataX').val('');
        $('#txtPuntata2').val('');

        $('#txtProbabilita1').val('');
        $('#txtProbabilitaX').val('');
        $('#txtProbabilita2').val('');

        $('#btnCalcola').removeClass('btn-success');
        $('#btnCalcola').removeClass('btn-danger');
        $('#btnCalcola').addClass('btn-primary');

        $('#result').text('');
    });

    $('#btnCalcola').click(function (event) {
        event.preventDefault();

        var quota1 = parseFloat($('#txt1').val());
        var quotaX = parseFloat($('#txtX').val());
        var quota2 = parseFloat($('#txt2').val());

        if (isNaN(quota2)) {
            quota2 = 0;
        }

        var scommessa = new Scommessa(quota1, quotaX, quota2)

        console.log(`quota1: ${quota1}`);
        console.log(`quotaX: ${quotaX}`);
        console.log(`quota2: ${quota2}`);

        const probabilità = scommessa.calcolaProbabilta();

        console.log(`Probabilità 1: ${probabilità[0]}`);
        console.log(`Probabilità X: ${probabilità[1]}`);
        console.log(`Probabilità 2: ${probabilità[2]}`);

        $('#txtProbabilita1').val(`${probabilità[0]} %`);
        $('#txtProbabilitaX').val(`${probabilità[1]} %`);
        $('#txtProbabilita2').val(`${probabilità[2]} %`);

        const puntate = scommessa.calcolaPuntate();

        console.log(`puntata1: ${puntate[0]}`);
        console.log(`puntataX: ${puntate[1]}`);
        console.log(`puntata2: ${puntate[2]}`);

        $('#txtPuntata1').val(puntate[0]);
        $('#txtPuntataX').val(puntate[1]);
        $('#txtPuntata2').val(puntate[2]);

        if (scommessa.isGuagagno()) {
            $('#btnCalcola').removeClass('btn-primary');
            $('#btnCalcola').addClass('btn-success');
        } else {
            $('#btnCalcola').removeClass('btn-primary');
            $('#btnCalcola').addClass('btn-danger');
        }

        var percGuadagno = scommessa.calcolaPercentualeGuadagno();
        $('#result').text(
            `Somma puntate: ${scommessa.sommaPuntate}; Percentuale guadagno: ${percGuadagno}%`
        );
    });
});