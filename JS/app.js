document.addEventListener("DOMContentLoaded", async function () {
  try {
    const divcanciones = document.createElement("div");
    divcanciones.classList.add("row");

    const response = await fetch("./JSON/canciones.json");

    if (!response.ok) {
      throw new Error(
        `Error al cargar el archivo JSON. Código: ${response.status}`
      );
    }
    const canciones = await response.json();

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

    const playlistFromStorage =
      JSON.parse(localStorage.getItem("playlist")) || [];
    const cartModalBody = document.querySelector("#playlistModal .modal-body");
    cartModalBody.innerHTML = playlistFromStorage
      .map((item) => `<p>${item}</p>`)
      .join("");

    const botonesañadiralaplaylist = document.querySelectorAll(
      ".add-to-playlist-btn"
    );
    botonesañadiralaplaylist.forEach((button) => {
      button.addEventListener("click", () => {
        const nombre = button.dataset.nombre;
        const duracion = button.dataset.duracion;
        const artista = button.dataset.artista;

        const playlistItem = `${nombre} - ${artista} (${duracion})`;
        cartModalBody.innerHTML += `<p>${playlistItem}</p>`;

        Toastify({
          text: `La canción ${nombre} fue añadida a la playlist`,
          duration: 3000,
          gravity: "bottom",
          position: "right",
        }).showToast();

        const currentPlaylist =
          JSON.parse(localStorage.getItem("playlist")) || [];
        currentPlaylist.push(playlistItem);
        localStorage.setItem("playlist", JSON.stringify(currentPlaylist));

        $("#playlistModal").modal("show");
      });
    });

    const clearPlaylistModalBtn = document.querySelector(
      "#clearPlaylistModalBtn"
    );

    clearPlaylistModalBtn.addEventListener("click", () => {
      localStorage.removeItem("playlist");

      cartModalBody.innerHTML = "";
    });
  } catch (error) {
    console.error("Error en la carga de datos:", error.message);
  }
});
