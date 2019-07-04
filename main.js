var arregloZapato;
function crearZapato(){
    var myCanvas = document.getElementById("myCanvas");
    var context = myCanvas.getContext("2d");
    context.clearRect(0,0, myCanvas.whidth, myCanvas.height);

    var objZapato = new Zapato("Pirma",
                              27,
                             "blue",
                             80,
                             50,
                             50, 10);
    objZapato.Dibujar(context);

   var arregloZapato = new Array(
            new Zapato("Adidas", 18, "red", 200, 50, 200, 150),
            new Zapato("Nike", 15, "green", 100, 50, 200, 150),
            new Zapato("Converse", 25, "yellow", 100, 50, 300, 150)
        );
    for (var i = arregloZapato.length - 1; i >= 0; i--) {
        arregloZapato[i].Dibujar(context);
}
}