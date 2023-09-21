
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
    
/*
function validateform()
{
    var name=document.myform.name.value;
    var email=document.myform.email.value;
    var tarea=document.myform.message.value;
    if(name==null || name=="")
    {
        var text=document.querySelector('#name');
        text.style.color='red';
        text.innerText="Enter the name";
       return false;
    }
    if(email==null || email==""){
        var text=document.querySelector('#email');
        text.style.color='red';
        text.innerText="Enter the email";
        return false;
    }
     



       var reg = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
       var result=reg.test(email);
       if(result==false)
       {
        alert("Please enter a valid email")
       }

    if(tarea==null || tarea=="")  
    {
        var text=document.querySelector('#tarea');//span id
        text.style.color='red';
        text.innerText="Enter the message";
        return false;
    }

}
//button click content checking.
function textfield(input1)
{    //var name=document.myform.name.value;
var error=document.querySelector('#name')
    if(input1!==null && isNaN(input1)){
        error.innerText='';
    }


}
function textfield1(input2)
{    
var error=document.querySelector('#email');
if(input2!==null){
    error.innerText='';
}


}

function textfield2(input3)
{
var error=document.querySelector('#tarea');
if(input3!==null){
    error.innerText='';
}
}





function mySubmitForm(event) {
event.preventDefault();
alert("Succefully submitted");
}

*/
