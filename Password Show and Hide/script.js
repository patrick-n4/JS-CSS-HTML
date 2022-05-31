const visibility=document.querySelector('.material-symbols-outlined');
let input=document.querySelector('.password-input-area');
let password=true;
visibility.addEventListener('click',()=>{
    if(password){
        input.setAttribute("type", "text");
        visibility.innerHTML="visibility"
    }else{
        input.setAttribute("type", "password");
        visibility.innerHTML="visibility_off"
    }
    password=!password;
})