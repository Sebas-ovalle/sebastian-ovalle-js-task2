const $contenedor = document.getElementById (`contenedor-2`); //aca recupere el contenedor de las cards

const contenidos = [] // aca le asigne un valor a un array vacio

function nuevoArcontent ( contenido ){ // aca edite la card con nuevos objetos sacadas de data eventos
    return `
    <div class="card p-2" style="width: 18rem;">
    <img src="${contenido.image}" class="card-img-top h-50" alt="...">
    <div class="card-body text-center mb-3">
    <h5 class="card-title">${contenido.name}</h5>
    <p class="card-text">${contenido.description}</p>
    </div>
    <footer class="footer-cards text-center">
    <p>Price:${contenido.price}</p>
    <a href="./assets/pages/details.html" class="btn text-center buttons-nav">Details</a>
    </footer>
    </div> 
`
}

const eventos = data.eventos

for (let contenido of eventos){ // aca filtro las fechas correspondientes a evento pasado
    if (contenido.date >= data.fechaActual){ // aca lo mismo que past pero invertido
        contenidos.push(contenido)
       }
        console.log(contenidos)
}
let template = ``

for(let contenido of contenidos){
    template += nuevoArcontent(contenido)
}


$contenedor.innerHTML = template