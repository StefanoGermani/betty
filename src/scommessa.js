class Scommesse {
    constructor(...dati) {
        this.dati = dati || [];
        this.quote = this.dati.map(d => d.quota).reduce((previous, current) => {
            if (current > 0) {
                previous.push(current);
            }
            return previous;
        }, []);;
        this.quoteInvertite = this.quote.map(x => this._invertiQuota(x));
    }

    get _sommaQuoteInvertite() {
        return this.quoteInvertite.reduce((previous, current) => previous + current, 0);
    }

    get sommaPuntate() {
        return this.calcolaPuntate().reduce((previous, current) => previous + current, 0);
    }

    isGuagagno() {
        const puntate = this.calcolaPuntate();
        return this.sommaPuntate <= this.quote[0] * puntate[0]; 
    }

    calcolaProbabilta() {
        return this.quoteInvertite.map((quotaInvertita) => this._arrotonda(quotaInvertita / this._sommaQuoteInvertite * 100))
    }

    calcolaPuntate() {
        const quotaMinore = this._trovaQuotaMinore();
        const puntataDesiderataIndex = this.dati.map(d => d.puntata).findIndex(x => !isNaN(x) && x !== 0);
        const puntate = this.quote.map((quota) => this._arrotonda(quotaMinore / quota));

        if(puntataDesiderataIndex !== -1) {
            const moltiplicatore = this.dati[puntataDesiderataIndex].puntata / puntate[puntataDesiderataIndex];
            return puntate.map(puntata => this._arrotonda(puntata * moltiplicatore));
        }

        return puntate;
    }

    calcolaPercentualeGuadagno() {
        const quotaMinore = this._trovaQuotaMinore();     
        const sommaPuntate = this.quote.map((quota) => this._arrotonda(quotaMinore/quota)).reduce((previous, current) => previous + current, 0);
        var guadagno = quotaMinore - sommaPuntate;
        return this._arrotonda(guadagno * 100 / sommaPuntate);
    }

    _trovaQuotaMinore() {
        return Math.min(...this.quote);
    }

    _invertiQuota(quota) {
        if(quota === 0) return 0;

        return 1 / quota;
    }

    _arrotonda(number) {
        return Math.round(number * 100) / 100;
    }
}

export default Scommesse;