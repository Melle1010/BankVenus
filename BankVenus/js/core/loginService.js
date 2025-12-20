function logIn(bank, username, password){
    for(let i = 0; i < bank.users.length; i++){
        if(username == bank.users[i].username || password == bank.users[i].password){
            return bank.users[i].id;
        }
    }
    return 0;
}
