function checkData() {
    let enterUsername = document.getElementById('username').value;
    let enterPassword = document.getElementById('password').value;

    let getUsername = localStorage.getItem('userName');
    let getPassword = localStorage.getItem('userPassword');

    if ( enterUsername == getUsername ) {
        if ( enterPassword == getPassword ) {          
            window.location.assign('Bulletin.html');
            alert('Login Succesfully !');
        } else {
            alert('wrong password !');
            return;
        }
    } else {
        alert('innvalid details !');
        return;
    }
}
