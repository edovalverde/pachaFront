// script.js

const videosContainer = document.getElementById('videos');

// Función para obtener y mostrar todos los videos
async function fetchVideos() {
  try {
    const response = await fetch('/api/videos');
    const videos = await response.json();
    videosContainer.innerHTML = '';

    videos.forEach(video => {
      const videoElement = document.createElement('div');
      videoElement.innerHTML = `
        <h3>${video.title}</h3>
        <p>${video.url}</p>
        <p>${video.description}</p>
        <button onclick="editVideo(${video.id})">Editar</button>
        <button onclick="deleteVideo(${video.id})">Borrar</button>
        <hr>
      `;
      videosContainer.appendChild(videoElement);
    });
  } catch (error) {
    console.log('Error al obtener los videos:', error);
  }
}

// Función para agregar un nuevo video
async function addVideo() {
  const title = prompt('Ingrese el título del video:');
  const url = prompt('Ingrese la URL del video:');
  const description = prompt('Ingrese la descripción del video:');

  try {
    const response = await fetch('/api/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, url, description }),
    });
    const newVideo = await response.json();
    console.log('Nuevo video agregado:', newVideo);
    fetchVideos();
  } catch (error) {
    console.log('Error al agregar el video:', error);
  }
}

// Función para editar un video existente
async function editVideo(id) {
  const title = prompt('Ingrese el nuevo título del video:');
  const url = prompt('Ingrese la nueva URL del video:');
  const description = prompt('Ingrese la nueva descripción del video:');

  try {
    const response = await fetch(`/api/videos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, url, description }),
    });
    const updatedVideo = await response.json();
    console.log('Video actualizado:', updatedVideo);
    fetchVideos();
  } catch (error) {
    console.log('Error al editar el video:', error);
  }
}

// Función para borrar un video existente
async function deleteVideo(id) {
  try {
    const response = await fetch(`/api/videos/${id}`, {
      method: 'DELETE',
    });
    const deletedVideo = await response.json();
    console.log('Video borrado:', deletedVideo);
    fetchVideos();
  } catch (error) {
    console.log('Error al borrar el video:', error);
  }
}

// Obtener y mostrar los videos al cargar la página
fetchVideos();
