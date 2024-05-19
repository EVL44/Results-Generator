function saveData() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let gender = document.getElementById('gender').value;
    let dateOfBirth = document.getElementById('db').value;
    let tel = document.getElementById('Tel').value;
    let email = document.getElementById('email').value;

    localStorage.setItem('userName',username);
    localStorage.setItem('userPassword',password);
    localStorage.setItem('userGender',gender);
    localStorage.setItem('userDob',dateOfBirth);
    localStorage.setItem('userTel',tel);
    localStorage.setItem('userEmail',email);
}