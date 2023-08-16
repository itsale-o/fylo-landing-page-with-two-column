const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError1(){
input1.style.border = '1px solid red';
span1.style.display = 'block';     
}

function removeError1(){
input1.style.border = '';
span1.style.display = 'none';
}

function setError2(){
input2.style.border = '1px solid red';
span2.style.display = 'block';   
}

function removeError2(){
input2.style.border = '';
span2.style.display = 'none';
}

function emailValidate(){
if(!emailRegex.test(input1.value)){
    console.log('Não validado')
    setError1();       
}else{
    console.log('validado')
    removeError1();        
}
}

function emailValidate2(){
if(!emailRegex.test(input1.value)){
    console.log('Não validado')
    setError2();       
}else{
    console.log('validado')
    removeError2();        
}
}