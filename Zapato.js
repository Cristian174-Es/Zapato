class Zapato{
	constructor(M, T, C, al, an, x, y){
		this.Marca = M;
		this.Talla = T;
		this.Color = C;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
	}

	Dibujar(ContextoDeDibujo){

		ContextoDeDibujo.strockStyle = this.Color;

		
		//Rectangulo
	    var radio=this.Ancho/2;
		ContextoDeDibujo.fillStyle = this.Color; 
		ContextoDeDibujo.fillRect(50,10,150,75);
		ContextoDeDibujo.fill();
	


        
	     //Curva

		var radio=this.Ancho/2;

		ContextoDeDibujo.beginPath();
		ContextoDeDibujo.fillStyle = "White";
		ContextoDeDibujo.moveTo(60,10);
		ContextoDeDibujo.bezierCurveTo(70, 35,100, 34, 110, 10);
		ContextoDeDibujo.moveTo(110, 10);
		ContextoDeDibujo.fill();
		



        //Triangulo

        ContextoDeDibujo.beginPath();
		ContextoDeDibujo.fillStyle ="White";
		ContextoDeDibujo.moveTo(113,10);
		ContextoDeDibujo.lineTo(150,10)
		ContextoDeDibujo.lineTo(200,10)
		ContextoDeDibujo.lineTo(200,65)
		ContextoDeDibujo.fill();

      
         //Suela

        var radio=this.Ancho/2;
        ContextoDeDibujo.beginPath();
		ContextoDeDibujo.fillStyle = "gray";
		ContextoDeDibujo.fillRect(50,80,152.4,8);
		ContextoDeDibujo.fill();

        //Curva Suela

		ContextoDeDibujo.beginPath();
		ContextoDeDibujo.fillStyle = this.Color;
		ContextoDeDibujo.moveTo(190,60);
		ContextoDeDibujo.bezierCurveTo(208, 65, 210, 86, 190, 80);
		ContextoDeDibujo.moveTo(110, 10);
		ContextoDeDibujo.fill();
	}
}