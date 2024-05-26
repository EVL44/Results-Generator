function saveData() {
    const userDetails = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        gender: document.getElementById('gender').value,
        dateOfBirth: document.getElementById('db').value,
        tel: document.getElementById('tel').value,
        email: document.getElementById('email').value
    };

    localStorage.setItem("user", JSON.stringify(userDetails));
    alert('Data saved successfully!');
}
