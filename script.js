const output = document.getElementById('output');
const password = document.getElementById('password');
const progress = document.querySelector('.progress');

password.addEventListener('input', () => {
    if (password.value.length < 6){
        output.innerText = 'Password must be at least 6 characters long';
        output.style.color = 'red';
        progress.style.width = "10%";
        progress.style.backgroundColor = "red";
    } else {
        if(password.value.search(/[a-z]/) == -1){
            output.innerText = 'Password must contain at least one lowercase letter';
            output.style.color = 'red';
            progress.style.width = "20%";
            progress.style.backgroundColor = "red";
        } else if(password.value.search(/[A-Z]/) == -1){
            output.innerText = 'Password must contain at least one uppercase letter';
            output.style.color = 'red';
            progress.style.width = "30%";
            progress.style.backgroundColor = "red";
        } else if(password.value.search(/[0-9]/) == -1){
            output.innerText = 'Password must contain at least one number';
            output.style.color = 'red';
            progress.style.width = "50%";
            progress.style.backgroundColor = "orange";
        } else if(password.value.search(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=]/) == -1){
            output.innerText = 'Password must contain at least one special character';
            output.style.color = 'red';
            progress.style.width = "80%";
            progress.style.backgroundColor = "yellow";
        } else {
            output.innerText = 'Password is valid';
            output.style.color = 'green';
            progress.style.width = "95%";
            progress.style.backgroundColor = "green";
        }
    }
});