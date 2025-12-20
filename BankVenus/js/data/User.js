class User{
    #id
    #name;
    #accounts;
    #password;

    constructor(id, name, accounts, password){
        this.#id = id;
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
}