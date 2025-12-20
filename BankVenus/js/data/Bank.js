class Bank{
    #users;
    
    // Get
    getUsers(){
        return this.#users;
    }

    // Set
    setUsers(users){
        this.#users = users;
    }

    // Methods
    addUser(user){
        this.#users.push(user);
    }
    
}