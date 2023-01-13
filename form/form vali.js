let userName=document.getElementById("textusername");
let email=document.getElementById("textemail");
let password=document.getElementById("textpass");
let cpassword=document.getElementById("textcpass");
let cnic=document.getElementById("textnic");
let form =document.querySelector("form");



function validInput(){
    // user name
    if(userName.value.trim()=="" || userName.value.trim()==null){
 onError(userName,"User Name can not be Empty");
    }
else{
    onSucces(userName);
}
//c-nic
if(cnic.value.trim()=="" || cnic.value.trim()==null){
    onError(cnic,"Enter C-NIC number");
       }
   else{

       onSucces(cnic);
   }
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
   if(cpassword.value.trim()=="" || cpassword.value.trim()==null){
    onError(cpassword,"Password can not be Empty");
       }
   else{
       if(cpassword.value.trim()!=password.value.trim()){
           onError(cpassword,"Password can not match");
       }
       else    
       onSucces(cpassword);
   }
      

}


document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validInput();
});


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




function SendMail(){
    var params={
        from_name:document.getElementById("textusername").value,
        email_id:document.getElementById("textemail").value,
        message:document.getElementById('message').value
    }
    emailjs.send("service_w681vos","template_gmmm1fc",params).then(()=>{
        alert("success"+res.status);
    })
}