const lengthSlider = document.querySelector(".password__length input");
const length__size = document.querySelector(".length__size");
const generatePassword = document.querySelector(".generate__password");
const options = document.querySelectorAll(".option input");
const passInputBox = document.querySelector(".input__box input");
const copyPass = document.querySelector(".copy");
const charactor = {
    lowercase : "abcdefghijklmnopqrstuvwxyz",
    uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers : "0123456789",
    Symbles : "!@#$%&*"
}

const lengthSlider_fun = () =>{
    const ValueofLengthslider = lengthSlider.value;
    length__size.innerHTML = ValueofLengthslider;
}
const PassGenerateFun = () =>{
    let staticPass = "";
    randpass = "";
    let lengthSlider_value = lengthSlider.value;
    options.forEach(function(option){
        if(option.checked){
            staticPass += charactor[option.id];
        }
    })

    
    for(var i=0; i<lengthSlider_value; i++)
    {
        randpass += staticPass[Math.floor(Math.random() * staticPass.length)];
    }
    console.log(randpass);
    passInputBox.value = randpass;
}
const copyPassword = ()=>{
    navigator.clipboard.writeText(passInputBox.value);
    copyPass.innerText = "check";
}
copyPass.addEventListener("click",copyPassword);
lengthSlider.addEventListener("input", lengthSlider_fun)
generatePassword.addEventListener("click",PassGenerateFun);