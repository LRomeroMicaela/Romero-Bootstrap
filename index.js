//construyo una clase creadora de objetos
class Lentes{
    constructor(id, img, nombre, marca, modelo, color, precio, stock){
        this.id = id;
        this.img = img;
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
}

//creacion de objetos de la clase Lentes
const armazon1 = new Lentes(100,"./img/aviadorBless.jpg","Armazón de receta", "Bless", "Aviador", "Negro", 7500, 100);
const armazon2 = new Lentes(101, "./img/davorHSol.jpg", "Lentes de Sol", "Davor", "Envolvente", "Negro", 7500, 100);
const armazon3 = new Lentes(102, "./img/hexagonalBless.jpg", "Armazón de receta", "Bless", "Hexagonal", "Dos colores", 6500, 100);
const armazon4 = new Lentes(103, "./img/pinUp.jpg", "Armazón de receta", "Bless", "Pin Up", "Dorado y Negro", 9000, 100);
const armazon5 = new Lentes(104, "./img/solMildura.jpg", "Lentes de Sol","Mildura", "Pin Up", "Dorado y Rosa", 10500, 100);
const armazon6 = new Lentes(105, "./img/solMuzik.jpg", "Lentes de Sol", "Muzik", "Wayfarer", "Negro", 8500, 100);

let lentesDisponibles = [armazon1, armazon2, armazon3, armazon4, armazon5, armazon6];

function armadoCard(){
    for (let armazon of lentesDisponibles){
        let card = document.createElement("div")
        card.innerHTML += `<div class="card col-10 col-md-3 img-cat main-img">
        
        <img src = ${armazon.img} class="card-img-top" alt = ${armazon.nombre}>
            <div class="card-body">
              <h5 class="card-title txt-login">${armazon.nombre}+","+${armazon.marca}</h5>
              <p class="card-text txt-login">${armazon.precio}</p>
              <a href="#" class="btn btn-primary subm1">Agregar al carrito</a>
            </div>
        </div>`;
        document.body.append(card);    
    }
}

armadoCard();

const addAllToShopButton = document.querySelectorAll(`btn-primary`);

addAllToShopButton.forEach((addToCartButton) => {
    addToCartButton.addEventListener(`click`, () => console.log(`click`));
});

/*
let boton = document.getElementsByClassName("btn-primary")
boton.addEventListener("click",respuestaClick);
//acá debo agregar la eleccion del cliente del artículo a agregar.
function respuestaClick(){

}
*/