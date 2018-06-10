import Scommessa from './scommessa';


$(document).ready(function () {

    var calcolaPuntata = function (quota, quotaMinore) {
        if (quota === 0) {
            return 0;
        }

        return formatMoney(quotaMinore / quota);
    }

    var invertiQuota = function (quota) {
        return 1 / quota;
    } 

    var calcolaProbabilta = function (quota1, quotaX, quota2) {
        var scommessa = new Scommessa(quota1, quotaX, quota2);
        const probabilità = scommessa.calcolaProbabilta();

        var probabilita1 = formatMoney(probabilità[0]);
        var probabilitaX = formatMoney(probabilità[1]);
        var probabilita2 = formatMoney(probabilità[2]);

        console.log(`Probabilità 1: ${probabilita1}`);
        console.log(`Probabilità X: ${probabilitaX}`);
        console.log(`Probabilità 2: ${probabilita2}`);

        $('#txtProbabilita1').val(`${probabilita1} %`);
        $('#txtProbabilitaX').val(`${probabilitaX} %`);
        $('#txtProbabilita2').val(`${probabilita2} %`);
    }

    var formatMoney = function (number) {
        return Math.round(number * 100) / 100;
    }

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

        console.log(`quota1: ${quota1}`);
        console.log(`quotaX: ${quotaX}`);
        console.log(`quota2: ${quota2}`);

        var margine = parseFloat($('#txtMargine').val());

        if (isNaN(margine)) {
            margine = 0;
        }

        calcolaProbabilta(quota1, quotaX, quota2);

        var quote = [quota1, quotaX, quota2].reduce((previous, current) => {
            if (current > 0) {
                previous.push(current);
            }
            return previous;
        }, []);

        console.log(quote);
        var quotaMinore = Math.min(...quote);
        console.log(`quota minore: ${quotaMinore}`);

        var puntata1 = calcolaPuntata(quota1, quotaMinore);
        var puntataX = calcolaPuntata(quotaX, quotaMinore);
        var puntata2 = calcolaPuntata(quota2, quotaMinore);

        console.log(`puntata1: ${puntata1}`);
        console.log(`puntataX: ${puntataX}`);
        console.log(`puntata2: ${puntata2}`);

        $('#txtPuntata1').val(puntata1);
        $('#txtPuntataX').val(puntataX);
        $('#txtPuntata2').val(puntata2);

        const sommaPuntate = puntata1 + puntataX + puntata2;
        console.log(`somma puntate: ${sommaPuntate}`);
        console.log(`margine: ${margine}`)
        console.log(`quota con margine: ${quotaMinore + (quotaMinore * margine / 100)}`);

        if ((sommaPuntate) <= (quotaMinore + (quotaMinore * margine / 100))) {
            $('#btnCalcola').removeClass('btn-primary');
            $('#btnCalcola').addClass('btn-success');
        } else {
            $('#btnCalcola').removeClass('btn-primary');
            $('#btnCalcola').addClass('btn-danger');
        }

        var guadagno = (quotaMinore - (sommaPuntate));
        var percGuadagno = guadagno * 100 / (puntata1 + puntataX + puntata2);
        $('#result').text(
            `Somma puntate: ${formatMoney(sommaPuntate)}; Guadagno: ${formatMoney(guadagno)}; Percentuale guadagno: ${Math.floor(percGuadagno)}%`
        );
    });
});