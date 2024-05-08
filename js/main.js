document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("header").innerHTML = `
<nav class= "menu">
<a href="./index.html">Home</a>
<a href="./informacion.html">Sobre nosotr@s</a>
<a href="./productos.html">Productos</a>
<a href="./registro.html">Registro</a>
</nav>
`;



 

    document.querySelector("footer").innerHTML= `

    <p>Nuestras redes sociales</p>
 <nav>
    <a href="https://inquiet.empretienda.com.ar/">
        <img width="36" src="img/instagram.png" alt="">
    </a>
    <a href="https://www.whatsapp.com">
        <img width="36" src="img/whatsapp.png" alt="">
    </a>
    <a href="https://www.facebook.com">
        <img width="36" src="img/facebook.png" alt="">
    </a>  
</nav>
`;

});

let data = [
    {
        id: 1,
        nombre: "Serum Hialuronico",
        descripcion: "Serum hidratante de acido Hialuronico",
        imagen: "img/serum.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/serum-con-acido-hialuronico-pantenol-dy-vitamina-e"
    },
    {
        id: 2,
        nombre: "Crema",
        descripcion: "Crema hidratante",
        imagen: "img/crema.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/crema-facial-pieles-secas-o-maduras-con-acido-hialuronico"
    },
    {
        id: 3,
        nombre: "Manteca corporal",
        descripcion: "Manteca corporal de Karite",
        imagen: "img/manteca.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/manteca-batida-corporal"
    },
    {
        id: 4,
        nombre: "Mascarilla Facial",
        descripcion: "Mascarilla facial solida de Arcilla",
        imagen: "img/mascarilla.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/pack-de-mascarillas-faciales-solidas-de-arcilla"
    },
    {
        id: 5,
        nombre: "Limpiador facial",
        descripcion: "Limpiador facial solido",
        imagen: "img/limpiador.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/limpiador-facial-solido"

    },
    {
        id: 6,
        nombre: "Scrub",
        descripcion: "Scrub corporal",
        imagen: "img/scrub.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/scrub-corporal"
    },
    {
        id: 7,
        nombre: "Shampoo solido",
        descripcion: "Shampoo solido todo tipo de cabello",
        imagen: "img/shampoo.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/shampoo-solido-de-romero"
    },
]
cad = ``
for (let producto of data) {
    cad = cad + `
    <div class="tarjeta">
        
       <img class= "imgb"
       src=${producto.imagen} alt=${producto.nombre}>
       
      <div class="cuerpo">
        <h2> ${producto.nombre}</h2>
        <h3>${producto.descripcion}</h3>  
        
      </div>  
      <a id ="comprar" href=${producto.enlase}>Comprar</a>
      </div>
    `

}
document.querySelector("#foto").innerHTML = cad
let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
    navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
    navigate(1);
});

function navigate(direction) {
    const galleryContainer = document.querySelector('.gallery-container');
    const totalImages = document.querySelectorAll('.gallery-item').length;

    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;

    galleryContainer.style.transform = `translateX(${offset}%)`;
}