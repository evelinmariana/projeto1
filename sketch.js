function setup() {
    createCanvas(500, 500);
  }
  
  function inicializaCores(){
    background("gray");
    fill("black");
    textSize(64);
    textAlign(CENTER,CENTER);
  }
  
  function draw() {
    inicializaCores();
    
    let maximo = width;
    let minimo = 1;
    //mouseX, 0, width ==> 0, palavra.length
    let palavra = "helena";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    //console.log(quantidade);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,200,200);
  }
  