
function checkData() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (enteredUsername === user.username && enteredPassword === user.password) {
        alert('Login Successfully!');
        setTimeout(() => {
            window.location.href = "Bulletin.html";
        }, 5000);

    } else {
        alert('Invalid details!');
        console.log("Invalid details entered");
    }
}
