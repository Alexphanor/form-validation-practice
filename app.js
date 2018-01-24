// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("postal").addEventListener("blur", validatePostal);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName(){
  const name = document.getElementById("name");
  const re = /^\w{1,15}\s\w{1,15}$/;

  if(!re.test(name.value)){
    name.classList.add("is-invalid");
  }else{
    name.classList.remove("is-invalid");
  }
}

function validatePostal(){
  const name = document.getElementById("postal");
  const re = /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/;

  if(!re.test(postal.value)){
    postal.classList.add("is-invalid");
  }else{
    postal.classList.remove("is-invalid");
  }  
}

function validateEmail(){
  const name = document.getElementById("email");
  const re = /^([A-Za-z0-9_\.\-]+)@([A-Za-z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add("is-invalid");
  }else{
    email.classList.remove("is-invalid");
  }  
}

function validatePhone(){
  const name = document.getElementById("phone");
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add("is-invalid");
  }else{
    phone.classList.remove("is-invalid");
  }
}