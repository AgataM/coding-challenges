let login = prompt('What\'s your login?');



//  WHY IS IT SHOWING PASSWORD EVEN THOUGH THE LOGIN WASN'T ADMIN??
if(login === 'Admin'){
    function passwordQuestion(password){
        if(password===""){
            alert('Canceled');
        }else if(password === "TheMaster"){
            alert('Welcome!');
        }else{
            alert('Wrong password!');
        }
        }
        passwordQuestion(prompt('What\'s your password?'));
}else if(login === ""){
    alert('Canceled');
    //how to get this if they press cancel??
}else{
    alert('I don\'t know you');
   
}



