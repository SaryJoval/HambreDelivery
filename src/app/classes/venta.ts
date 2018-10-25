export class Venta {
    constructor(
        public venId:number,
        public venPrcTot:number,
        public venFch:Date,
        public usuVenId:number,
        public cliVenId
    ){}
}
