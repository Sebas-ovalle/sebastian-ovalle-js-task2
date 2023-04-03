const contenedor = document.getElementById (`contenedor-data`); //aca recupere el contenedor de las cards

const contenidos = data.eventos // aca le asigne un valor a todas las cards

const contenido = contenidos[0] // aca saco 1 elemento en particular

let template = `` //declaro la plantilla para la card

function nuevoArcontent ( contenido ){ // div creado y modificado
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
for(let contenido of contenidos){ // aca se hace un recorrido de todo los objetos del array
  template += nuevoArcontent(contenido) // aca trae 1 a 1 con el += a nuevoArcontent 
}


contenedor.innerHTML = template
