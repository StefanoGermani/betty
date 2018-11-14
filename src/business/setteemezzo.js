class SetteEMezzo {
    constructor() {
        this.mazzo = ["matta"]
        for (let i = 1; i <= 11; i++) {
            this.mazzo.push(0.5)
        }
        for (let i = 1; i <= 4; i++) {
            this.mazzo.push(1, 2, 3, 4, 5, 6, 7)
        }
        this.risultato = 0;
    }

    calcola(fine) {
        this.risultato = 0;

        var mazzoDelBanco = this.mazzo.clone()
        mazzoDelBanco.splice(this.mazzo.indexOf(fine), 1);

        for (let index = 0; index < mazzoDelBanco.length; index++) {
            var next = mazzoDelBanco[index];
            var nextMazzo = mazzoDelBanco.clone();
            nextMazzo.splice(index, 1);
            this._calcolaChance(next, nextMazzo, fine, 1);
        }

        return this.risultato;
    }

    _calcolaChance(somma, mazzo, fine, temp) {
        if ((typeof somma == 'string' || somma instanceof String) || // se è uscita la matta allora la somma è una stringa e il banco ha vinto
            (somma >= fine && somma <= 7.5)) return this.risultato = this.risultato + this._vittoria(temp, mazzo);
        if (somma > 7.5) return;
        for (let index = 0; index < mazzo.length; index++) {
            var next = mazzo[index];
            var nextMazzo = mazzo.clone()
            nextMazzo.splice(index, 1);
            this._calcolaChance(somma + next, nextMazzo, fine, this._vittoria(temp, mazzo));
        }
    }

    _vittoria(temp, mazzo) {
        return temp * (1 / mazzo.length);
    }
}

export default SetteEMezzo;