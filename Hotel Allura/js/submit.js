function getUsersList(){
    var userslist = JSON.parse(localStorage.getItem('userslistLs'));

    if(userslist == null){
        userslist =
        [

            ['1','juan','sanchez','juanma567.js@gmail.com','admin','1979-24-05','1'],
            ['2','jose','perez','joseperez@gmail.com','123456','1956-25-03','2']
        ]
    }
    return userslist;
}
function validateCredentials(pEMail,pPassword){
    var userslist = getUsersList(); 
    var bAcces = false;0

    for(var i = 0; i < userslist.length; i++){
        if(pEMail == userslist[i][3] && pPassword == userslist[i][4]){
            bAcces = true;
            sessionStorage.setItem('activUser',userslist[i][1] + '' + userslist[i][2]);
            sessionStorage.setItem('rolActivUser',userslist[i][6]);
        }
    }

    return bAcces;
}