import Scommessa from './business/scommessa';


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

$('.puntata').on('input', function () {
    $('.puntata').not($(this)).val('');

    $('#btnCalcola').removeClass('btn-success');
    $('#btnCalcola').removeClass('btn-danger');
    $('#btnCalcola').addClass('btn-primary');

    $('#result').text('');
});

$('#bettyForm').submit(function (event) {
    event.preventDefault();

    var quota1 = parseFloat($('#txt1').val());
    var quota2 = parseFloat($('#txtX').val());
    var quota3 = parseFloat($('#txt2').val());

    var puntata1 = parseFloat($('#txtPuntata1').val());
    var puntata2 = parseFloat($('#txtPuntataX').val());
    var puntata3 = parseFloat($('#txtPuntata2').val());

    if (isNaN(quota3)) {
        quota3 = 0;
    }

    var scommessa = new Scommessa({
        quota: quota1,
        puntata: puntata1,
    }, {
        quota: quota2,
        puntata: puntata2,

    }, {
        quota: quota3,
        puntata: puntata3,
    });

    const probabilità = scommessa.calcolaProbabilta();

    $('#txtProbabilita1').val(`${probabilità[0]} %`);
    $('#txtProbabilitaX').val(`${probabilità[1]} %`);
    $('#txtProbabilita2').val(`${probabilità[2]} %`);

    const puntate = scommessa.calcolaPuntate();

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
        `Somma puntate: ${scommessa.sommaPuntate} €; Percentuale guadagno: ${percGuadagno}%`
    );
});