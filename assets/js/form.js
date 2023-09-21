
    var nameError=document.getElementById('name-error');
    var emailError=document.getElementById('email-error');
    var messageError=document.getElementById('message-error');
    var submitError=document.getElementById('submit-error');

    function validateName(){
        var name=document.getElementById('contact-name').value;
        if(name.length==0){
            nameError.innerHTML='Name is Required';
            return false;
        }
        nameError.innerHTML='valid';
        return true;
    }
    function validateEmail(){
        var email=document.getElementById('contact-email').value;
        if(email.length==0){
            emailError.innerHTML='E-mail is Required';
            return false;
        }
        if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            emailError.innerHTML='Invalid Email';
            return false;
        }
        nameError.innerHTML='Valid';
        return true;
    }
    function validateMessage(){
        var message=document.getElementById('contact-message').value;
        var Required=30;
        var left=Required-message.length;

        if(left>0){
            messageError.innerHTML=left+'more character required';
            return false;
        }
        messageError.innerHTML='valid';
        return true;
    }
    function validateForm(){
        if(!validateName() || !validateEmail() || !validateMessage()){
            submitError.innerHTML='Please follow the requirements';
            return false;
        }
    }
    
