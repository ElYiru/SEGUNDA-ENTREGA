

document.addEventListener("DOMContentLoaded", function () {
  const divcanciones = document.createElement("div");
  divcanciones.classList.add("row");

  const canciones = [
    {
      nombre: "SHE DONT GIVE A FO",
      duracion: "2:30",
      artista: "Duki ft. khea",
    },
    {
      nombre: "GASOLINA",
      duracion: "2:55",
      artista: "Daddy Yankee",
    },
    {
      nombre: "NO SOY YO",
      duracion: "2:10",
      artista: "Mesita",
    },
    {
      nombre: "DAKITI",
      duracion: "2:24",
      artista: "BAD BUNY",
    }, ];

  const vercanciones = canciones.map(
    (cancion) => `
      <div class="col-md-3 col-sm-12">
        <div class="card" style="width: 18rem;">
          <img src="./assets/${cancion.nombre}.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${cancion.nombre}</h5>
            <p class="card-text">${cancion.artista}<br>${cancion.duracion}</br></p>
            <button type="button" class="btn btn-primary add-to-playlist-btn"
               data-nombre="${cancion.nombre}"
               data-duracion="${cancion.duracion}"
               data-artista="${cancion.artista}">
               AÑADIR A LA PLAYLIST
            </button>
          </div>
        </div>
      </div>
    `
  );

  divcanciones.innerHTML = vercanciones.join("");
  document.body.appendChild(divcanciones);

  const botonesañadiralaplaylist = document.querySelectorAll('.add-to-playlist-btn');
  botonesañadiralaplaylist.forEach(button => {
    button.addEventListener('click', () => {
      const nombre = button.dataset.nombre;
      const duracion = button.dataset.duracion;
      const artista = button.dataset.artista;
      const cartModalBody = document.querySelector('#playlistModal .modal-body');
      cartModalBody.innerHTML += `<p>${nombre} - ${artista} (${duracion})</p>`;

      $('#playlistModal').modal('show');
    });
  });
});