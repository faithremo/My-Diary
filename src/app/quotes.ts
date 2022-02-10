export class Quotes {
    
    showQuotes!:boolean;
    constructor (public id:number, public quotes:string, public name:string, public publisher: string, public postdate: Date, public like:number,public dislike:number ) {
        this.showQuotes=false 
    } 
}