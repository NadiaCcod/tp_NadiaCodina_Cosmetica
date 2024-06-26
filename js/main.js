document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("header").innerHTML = `
<nav class= "menu">
<a href="./index.html">Home</a>
<a href="./index.html#sobreNosotrosRef">Sobre nosotr@s</a>
<a href="./productos.html">Productos</a>
<a href="./registro.html">Registro</a>
<a href="./articulo.html">Blog</a>
</nav>
`;





    document.querySelector("footer").innerHTML = `

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

let dataSeccionProd = [
    {
        id: 1,
        nombre: "Serum Hialurónico",
        descripcion: "Serum de Acido Hialurónico",
        imagen: "img/serum.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/serum-con-acido-hialuronico-pantenol-dy-vitamina-e",
        tipo: "Facial"
    },
    {
        id: 2,
        nombre: "Crema",
        descripcion: "Crema hidratante",
        imagen: "img/crema.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/crema-facial-pieles-secas-o-maduras-con-acido-hialuronico",
        tipo: "Facial"
    },
    {
        id: 3,
        nombre: "Manteca corporal",
        descripcion: "Manteca corporal de Karite",
        imagen: "img/manteca.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/manteca-batida-corporal",
        tipo: "Corporal"
    },
    {
        id: 4,
        nombre: "Mascarilla Facial",
        descripcion: "Mascarilla facial solida de Arcilla",
        imagen: "img/mascarilla.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/pack-de-mascarillas-faciales-solidas-de-arcilla",
        tipo: "Facial"
    },
    {
        id: 5,
        nombre: "Limpiador facial",
        descripcion: "Limpiador facial solido",
        imagen: "img/limpiador.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/limpiador-facial-solido",
        tipo: "Facial"

    },
    {
        id: 6,
        nombre: "Scrub",
        descripcion: "Scrub corporal",
        imagen: "img/scrub.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/scrub-corporal",
        tipo: "Corporal"
    },
    {
        id: 7,
        nombre: "Shampoo solido",
        descripcion: "Shampoo solido todo tipo de cabello",
        imagen: "img/shampoo.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/shampoo-solido-de-romero"
    },
    {
        id: 8,
        nombre: "Kit Facial Duo",
        descripcion: "Serum y crema con Acido Hialuronico",
        imagen: "img/kitSerumCrema.jpg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/kit-limpieza-y-serum-de-argan-y-acido-hialuronico",
        tipo: "Facial"
    },
    {
        id: 9,
        nombre: "Kit Facial Full",
        descripcion: "Serum, Crema y Limpiador facial",
        imagen: "img/kitCompleto.jpeg",
        enlase: "https://inquiet.empretienda.com.ar/productos-faciales/kit-limpieza-y-serum-de-argan-y-acido-hialuronico",
        tipo: "Facial"
    },
    {
        id: 10,
        nombre: "Kit Corporal",
        descripcion: "Scrub y Manteca",
        imagen: "img/kitCorporal.jpg",
        enlase: "https://inquiet.empretienda.https://inquiet.empretienda.com.ar/productos-faciales/kit-cuidado-corporal",
        tipo: "Corporal"
    },
]
//var elemento = document.getElementById('foto');
if (elemento) {
    cad = ``
    for (let producto of dataSeccionProd) {
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

}

let dataSeccionDest = [
    {
        id: 1,
        nombre: "Serum Hialurónico",
        descripcion: "Serum de Acido Hialurónico",
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
]
var elemento = document.getElementById('fotoDest');
if (elemento) {

    cad2 = ``
    for (let producto of dataSeccionDest) {
        cad2 = cad2 + `
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

    document.querySelector("#fotoDest").innerHTML = cad2


}

var galleryItems = [
  "<img src='img/banner2/1.png' alt='Imagen 1'>",
  "<img src='img/banner2/2.png' alt='Imagen 2'>",
  "<img src='img/banner2/3.png' alt='Imagen 3'>",
  "<img src='img/banner2/4.png' alt='Imagen 3'>"
]
var elemento = document.getElementById('gallery');
if (elemento) {
    let currentIndex = 0;
    document.querySelector(".gallery-container").innerHTML = galleryItems[currentIndex];
    document.querySelector('.prev-button').addEventListener('click', () => {
        navigate(-1);
    });

    document.querySelector('.next-button').addEventListener('click', () => {
        navigate(1);
    });

    function navigate(direccion) {
        currentIndex = currentIndex + direccion;

       

       // for (let galleryItem of galleryItems) {
        //    galleryItem.style.display = "none";
       // }

        if (currentIndex < 0) { currentIndex = galleryItems.length - 1 }
        if (currentIndex > galleryItems.length - 1) { currentIndex = 0 }

       document.querySelector(".gallery-container").innerHTML = galleryItems[currentIndex]

    }
}

var elemento = document.getElementById('tipoProducto');
if (elemento) {
    document.getElementById('tipoProducto').addEventListener('change', (event) => {
        const tipoSeleccionado = event.target.value;
        mostrarProductos(tipoSeleccionado);
    });

    function mostrarProductos(tipo) {
        const contenedor = document.getElementById('contenedorProductos');
        contenedor.innerHTML = ''; // Limpiar el contenedor

        const productosFiltrados = tipo === 'Todos' ? dataSeccionProd : dataSeccionProd.filter(producto => producto.tipo === tipo);

        var cad2 = '';
        for (let producto of productosFiltrados) {
            cad2 = cad2 + `
            <div class="tarjeta">
                <img class="imgb" src="${producto.imagen}" alt="${producto.nombre}">
                <div class="cuerpo">
                    <h2>${producto.nombre}</h2>
                    <h3>${producto.descripcion}</h3>  
                </div>  
                <a id="comprar" href="${producto.enlase}">Comprar</a>
            </div>
            `;
        }

        contenedor.innerHTML = cad2;
    }
    mostrarProductos('Todos');
}

const regExpNombre = /^[a-zA-Z]{0,9}$/;
const regExpApellido = /^[a-zA-Z]{0,9}$/;
const regExpMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regExpContraseña = /^(?=.*[A-Za-z])(?=.*\d).{9,}$/;

function limpiarErrores() {
    const listaError = document.getElementsByClassName("imputForm")
    for (let i = listaError.length - 1; i >= 0; i--) {
      listaError[i].innerHTML=""
  }
}

function validar() {
  limpiarErrores()
  let flagError = false;
    const nombre = document.getElementById('nombres');
    const apellido = document.getElementById('apellidos')
    const mail = document.getElementById('correo');
    const password = document.getElementById('password');

    if (nombre.value == "" || !regExpNombre.test(nombre.value)) {
        const errorNombre = document.getElementById("errorNombre")
        errorNombre.classList.add('imputForm')
        errorNombre.innerHTML = "Ingrese un nombre valido"
        flagError = true;
    }

    if (apellido.value == "" || !regExpApellido.test(apellido.value)) {
        const errorApellido = document.getElementById('errorApellido');
        errorApellido.classList.add('imputForm')
        errorApellido.innerHTML = "Ingrese un apellido valido"
       
        flagError = true;
      
    }
    if (mail.value == "" || !regExpMail.test(mail.value)) {
        const errorCorreo = document.getElementById('errorCorreo');
        errorCorreo.classList.add('imputForm')
        errorCorreo.innerHTML = "Ingrese un mail valido"
        flagError = true;
        
    }

    if (password.value == "" || !regExpContraseña.test(password.value)) {
        const errorPass = document.getElementById('errorPass');
       errorPass.classList.add('imputForm')
       errorPass.innerHTML = "La contraseña debe tener numero y letras y un minimo de 8 caracteres"
    
        flagError = true;
      
    }

    if (flagError == false) {
       

    }
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpiar contenido anterior
    if (!flagError) {
     

        const datos = [
            { label: 'Nombre', value: nombre.value },
            { label: 'Apellido', value: apellido.value },
            { label: 'Correo', value: mail.value },
            { label: 'Contraseña', value: password.value }
        ];

        datos.forEach(dato => {
            const p = document.createElement('p');
            p.textContent = `${dato.label}: ${dato.value}`;
            resultDiv.appendChild(p);
        });
    }
    nombre.value="";
    apellido.value="";
    mail.value="";
    password.value="";
    
   
   
    return false
   
    
}

function goHome() {
    window.location.href = 'index.html'

}

//carrusel automatico comentarios
let slideIndex = 0;
showSlides();

function showSlides() {
    let dots = document.getElementsByClassName("dot");
    let comentarios = document.getElementsByClassName("gallery-item-c");
    let i;
    for (i = 0; i < comentarios.length; i++) {
        comentarios[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > comentarios.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    comentarios[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}


document.getElementById('tipoProducto').addEventListener('change', (event) => {
    
  const tipoSeleccionado = event.target.value;
   mostrarProductos(tipoSeleccionado);
});





