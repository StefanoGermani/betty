class Scommesse {
    constructor(...quote) {
        this.quote = quote || [];
        this.quoteInvertite = quote.map(x => this.invertiQuota(x));
    }

    get sommaQuoteInvertite() {
        return this.quoteInvertite.reduce((previous, current) => previous + current, 0);
    }

    get quotaMinore() {
        return Math.min(...this.quote);
    }
    
    calcolaProbabilta(){
        return this.quoteInvertite.map((quotaInvertita) => quotaInvertita / this.sommaQuoteInvertite * 100)
    }

    calcolaPuntate(){
        return this.quote.map((quota) => quota / this.quotaMinore)
    }
    
    invertiQuota(quota) {
        return 1 / quota;
    }
}

export default Scommesse;