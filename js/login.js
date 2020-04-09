const info = document.getElementById('input-userinfo');
const pass = document.getElementById('input-password');

document.addEventListener('keyup', function (e) {
    if (info.vlaue !== "") {
        if (pass.value !== "") {                        
            let color = document.getElementById('loginbtn');
            color.style.backgroundColor = "#0095F6";
        }
    }
});