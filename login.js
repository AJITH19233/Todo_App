var id=document.getElementById("user");
var pass=document.getElementById("password");
var btn=document.getElementById("btn1");
btn.addEventListener('click',(e)=>{
    verify(id,pass,(message)=>{
        alert(message);
    })
})
let verify=(id,pass,callback)=>{
    if(id.value==""||pass.value==""){
        callback("Kindly fill the form");
    }else if(id.value=="admin"&&pass.value=="12345"){
        window.location.href="home.html";
        callback("credential is correct!!");

    }
    else{
        alert("invalid Credential");
    }
}