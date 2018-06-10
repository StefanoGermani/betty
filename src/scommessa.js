class Scommesse {
    constructor(...quote) {
        this.quote = quote || [];
        this.quoteInvertite = this.quote.map(x => this._invertiQuota(x));
    }

    get _sommaQuoteInvertite() {
        return this.quoteInvertite.reduce((previous, current) => previous + current, 0);
    }

    get sommaPuntate() {
        return this.calcolaPuntate().reduce((previous, current) => previous + current, 0);
    }

    isGuagagno() {
        const quotaMinore = this._trovaQuotaMinore();
        return this.sommaPuntate <= (quotaMinore + (quotaMinore / 100))
    }

    calcolaProbabilta() {
        return this.quoteInvertite.map((quotaInvertita) => this._arrotonda(quotaInvertita / this._sommaQuoteInvertite * 100))
    }

    calcolaPuntate() {
        const quotaMinore = this._trovaQuotaMinore();
        return this.quote.map((quota) => this._arrotonda(quota / quotaMinore));
    }

    calcolaPercentualeGuadagno() {
        const quotaMinore = this._trovaQuotaMinore();        
        var guadagno = quotaMinore - this.sommaPuntate;
        return this._arrotonda(guadagno * 100 / this.sommaPuntate);
    }

    _trovaQuotaMinore() {
        const quoteTemp = this.quote.reduce((previous, current) => {
            if (current > 0) {
                previous.push(current);
            }
            return previous;
        }, []);
        return Math.min(...quoteTemp);
    }

    _invertiQuota(quota) {
        return 1 / quota;
    }

    _arrotonda(number) {
        return Math.round(number * 100) / 100;
    }
}

export default Scommesse;