// context is globally shared

const ctx = {
    "accounts": [
        {
            "name": "sami",
            "email": "sami@mit.edu",
            "password": "secret",
            "balance": 0
        }   
    ]
}

function create(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const status = document.getElementById('createStatus');
    ctx.accounts.push({
        name: name.value,
        email: email.value,
        password: password.value,
        balance: 0,
    });
    // update status & clear form
    name.value = '';
    email.value = '';
    password.value = '';
    status.innerHTML = 'Account Created!';
}

function allData(){
    const status = document.getElementById('allDataStatus');
    status.innerHTML = JSON.stringify(ctx.accounts);
}