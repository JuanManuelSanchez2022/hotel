document.querySelector('#btnAccess').addEventListener('click',logIn);

function logIn(){
    var sEMail = '';
    var sPassword = '';
    var bAcces = false;

    sEMail = document.querySelector('#e-mail-date').value;
    sPassword = document.querySelector('#password-date').value;

    bAcces = validateCredentials(sEMail,sPassword);

    if(bAcces == true){
        ingresar();
    }
}

function ingresar(){
    var rol = sessionStorage.getItem('rolActivUser');
    switch(rol){
        case '1':
            window.location.href = 'admin.html';
        break;   
        case '2':
            window.location.href = 'reservation.html';
        break;  
        default:
            window.location.href = 'index.html';
            break;
    }
}