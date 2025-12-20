class User{
    #name;
    #accounts;
    #password;

    constructor(name, accounts, password){
        this.#name = name;
        this.#accounts = accounts;
        this.#password = password;
    }

    // Get
    get name(){
        return this.#name;
    }
    get accounts(){
        return this.#accounts;
    }
    get password(){
        return this.#password;
    }

    // Set
    set name(name){
        this.#name = name;
    }
    set accounts(accounts){
        this.#accounts = accounts;
    }

    // Methods
    addAccount(account){
        this.#accounts.push(account);
    }
}