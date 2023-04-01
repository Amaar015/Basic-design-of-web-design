<script>

let email=document.getElementById("textemail");
let password=document.getElementById("textpass");



function validInput(){
 
// email
if(email.value.trim()==""|| email.value.trim()==null){
    onError(email,"Email can not be Empty");
}
else{
if(!validEmail(email.value.trim())){
    onError(email,"Email is not valid");
}else{
    onSucces(email);
}
}



//password
if(password.value.trim()=="" || password.value.trim()==null){
    onError(password,"Password can not be Empty");
       }
   else{
       onSucces(password);
   }
}



function onSucces(input){
    let parent=input.parentElement;
    let MessageEle=parent.querySelector("small");
    MessageEle.style.visibility="hidden";
    MessageEle.innerText="";      
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input,message){
    let parent=input.parentElement;
    let MessageEle=parent.querySelector("small");
    MessageEle.style.visibility="visible";
    MessageEle.innerText=message;      
    parent.classList.add("error");
    parent.classList.remove("success");
}


function validEmail(email){

    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}
</script>