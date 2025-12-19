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

    toString(){
        return `Transaction: Amount ${this.#amount}, Type ${this.#type}, Sender ${this.#sender}, Recipient ${this.#recipient}`;
    }
}