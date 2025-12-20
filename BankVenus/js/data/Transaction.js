class Transaction{
    #amount;
    #type;
    #sender;
    #recipient;

    constructor(amount, type, sender, recipient){
        this.#amount = amount;
        this.#type = type;
        this.#sender = sender;
        this.#recipient = recipient;
    }
    
    // Get
    get amount(){
        return this.#amount;
    }
    get type(){
        return this.#type;
    }
    get sender(){
        return this.#sender;
    }
    get recipient(){
        return this.#recipient;
    }

    //To String
    toString(){
        return `Transaction: Amount ${this.#amount}, Type ${this.#type}, Sender ${this.#sender}, Recipient ${this.#recipient}`;
    }
}