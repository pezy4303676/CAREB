let Email = document.getElementById("Email");
let EmailValid = document.getElementById("EmailValid");
let PsswordValid = document.getElementById("PsswordValid");
let password = document.getElementById("password");
let Name = document.getElementById("Name");
let NameValid = document.getElementById("NameValid");
let BTNeye = document.getElementById("BTNeye");
let namespan = document.getElementById("namespan");
let emailspan = document.getElementById("emailspan");

let btnclosemodal = document.getElementById("btnclosemodal");
let MODALoccunt = document.getElementById("MODALoccunt");
let abrirmodal = document.getElementById("openmodal");


emailspan.innerHTML = localStorage.getItem("valoremail");
namespan.innerHTML = localStorage.getItem("valor");


Email.addEventListener("keyup", ()=>{
    localStorage.setItem('valoremail', Email.value)
    emailspan.innerHTML = localStorage.getItem("valoremail");
})

Name.addEventListener("keyup", () => {
  const nameString = Name.value.toString();
  if (nameString.length <= 3) {
    NameValid.innerHTML =`Invalid Name`;
  } else {
    NameValid.innerHTML =``;
  }

  localStorage.setItem('valor', nameString)
  namespan.innerHTML = localStorage.getItem("valor");
  localStorage.setItem('NOMEvalue', Name.value)
nomeprod.innerHTML = localStorage.getItem("NOMEvalue");
});

//Name.addEventListener("keyup", () => {
 // if (Name.value.length <= 3) {
 //   NameValid.innerHTML =`Invalid Name`;
 // } else {
 //   NameValid.innerHTML =``;
 // }

 // localStorage.setItem('valor', Name.value)
 // namespan.innerHTML = localStorage.getItem("valor");
 // localStorage.setItem('NOMEvalue', Name.value)
//nomeprod.innerHTML = localStorage.getItem("NOMEvalue");
//});

password.addEventListener("keyup", () => {
  if (password.value.length <= 8) {
    PsswordValid.innerHTML =`Password must be at least 8 characters`;
  } else {
    PsswordValid.innerHTML =``;
  }
})

BTNeye.addEventListener("click", (e) => {
  e.preventDefault();

                        if (password.type == "password") {
                          password.type = "text";
                          BTNeye.innerHTML =`<svg style="width: 20px; height: 20px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" style="color: white;"  /><circle cx="12" cy="12" r="3" style=" color: white;" /></svg>`;
                          alert("tem a serteza que quer por no modo visivel   "+Name.value+"")
                        } else {
                          password.type ="password";
                           BTNeye.innerHTML =` <svg style="width: 20px; height: 20px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" style="color: white;"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" style="color: white;"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" style="color: white;"/><line x1="2" x2="22" y1="2" y2="22" style="color: white;" /></svg>`;
                        }
});


function emailvald() {
    if (!Email.value.match(/^[A-Za-z\._\-0-9]*[@][CAREB]*[\.][a-z]{2,4}$/)) {
      EmailValid.innerHTML =`Invalid Email`;
      return false;
    } else {
      EmailValid.innerHTML =``;
      return true;
    }
  }



btnclosemodal.addEventListener("click", ()=>{
    MODALoccunt.style = "display: none;"
})
abrirmodal.addEventListener("click", ()=>{
    MODALoccunt.style = "display: flex;"
})

