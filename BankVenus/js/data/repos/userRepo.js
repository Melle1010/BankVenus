function initUserRepo(bank){
    let users = [];
    users.push(bank.users)
    users.push(
        new User(1, "Vivienne Bengtsson", null, "BwunLevain", "vivi123"),
        new User(2, "Melvin Danielsson", null, "molfie10", "melvin123")
    )
    bank.users = users; 
}