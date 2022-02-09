export class Quotes {

    showQuotes!:boolean;
    constructor (public quotes:string, public name:string, public publisher: string, public postdate: Date) {
        this.showQuotes=false 
    } 
}
