let janela = document.getElementById("Document");
let sobre = document.getElementById("linksobre");
let carrinho = document.getElementById("cart");
let spancart = document.getElementById("spancart");
let Carteiralink = document.getElementById("Carteiralink");
let myproduct = document.getElementById("myproduct");
let homelink = document.getElementById("homelink");
let nomeprod = document.getElementById("nomeprod");
  


sobre.addEventListener("click", () => {
    janela.innerHTML = "<h1>sobre</h1>";
  });



  homelink.addEventListener("click", () => {
    janela.innerHTML = `<div id="foundpage"><div id="fdfd"><div id="coletar1"><span id="cardnome">oo</span><br></div><div id="coletar">fgf</div><br><br></div><br><br><div><div id="ooo">bnb</div></div>     </div>`;
  });





 




  Carteiralink.addEventListener("click", () => {
    janela.innerHTML = "<h1>carteira</h1>";
  });



  carrinho.addEventListener("click", () => {
  
    if (spancart.innerHTML == ``) {
      
  spancart.innerHTML =`<br><li style="    display: flex; align-items: center; gap: 8px;"  class="hoverli"><img src="icone/cronograma.png" width="30px" height="30px" draggable="false">   pendentes</li><br><li style="    display: flex; align-items: center; gap: 8px;" class="hoverli"> <img src="icone/calendario.png" width="30px" height="30px" draggable="false"> pagos</li>`
    } else {
      
  spancart.innerHTML =``
    }

    janela.innerHTML = "<h1>carrinho</h1>";
  
  })
  


sessionStorage.setItem("exemplo", "pezy")






function openpage(a){
  let localPag = document.getElementById("Document");
  let pag = new XMLHttpRequest()

  pag.onreadystatechange = () => {
    if (pag.readyState = 4 && pag.status == 200) {
      localPag.innerHTML = pag.response
    }
  }
  pag.open(`GET`, `../${a}.html`);
  pag.send()
}

