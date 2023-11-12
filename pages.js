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
    janela.innerHTML = `<div id="foundpage"><div id="fdfd"><div id="coletar">colotar<br></div><div id="coletar">fgf</div><br><br></div><br><br><div><div id="ooo">bnb</div></div>     </div>`;
  });



  myproduct.addEventListener("click", () => {
 janela.innerHTML = `<div style="background-color: white; display: flex; align-items: center; gap: 10px; overflow-x: scroll; width: 90%; height: 85%; margin: 0 auto;"> <div id="product1found"><img src="icone/capa1.jpg" height="400px" width="250px"><br><br><a href="icone/careb.vercel.app.pdf" download>baxe</a></div><div id="product1found"><img src="icone/capa1.jpg" height="400px" width="250px"><br><br><a href="icone/careb.vercel.app.pdf" download>baxe</a></div><div id="product1found"><img src="icone/capa1.jpg" height="400px" width="250px"><br><br><a href="icone/careb.vercel.app.pdf" download>baxe</a></div><div id="product1found"><img src="icone/capa1.jpg" height="400px" width="250px"><br><br><a href="icone/careb.vercel.app.pdf" download>baxe</a></div> </div>`;
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
  
