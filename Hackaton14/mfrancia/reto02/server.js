// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Configurar middleware para manejar datos en formato JSON
app.use(express.json());

// Datos de ejemplo para los videos
let videos = [
  { id: 1, title: 'Video 1', url: 'https://example.com/video1', description: 'Descripción del video 1' },
  { id: 2, title: 'Video 2', url: 'https://example.com/video2', description: 'Descripción del video 2' },
];

// Ruta para obtener todos los videos
app.get('/api/videos', (req, res) => {
  res.json(videos);
});

// Ruta para obtener un video por su ID
app.get('/api/videos/:id', (req, res) => {
  const video = videos.find(v => v.id === parseInt(req.params.id));
  if (!video) {
    return res.status(404).json({ error: 'Video no encontrado' });
  }
  res.json(video);
});

// Ruta para agregar un nuevo video
app.post('/api/videos', (req, res) => {
  const { title, url, description } = req.body;
  const newVideo = { id: videos.length + 1, title, url, description };
  videos.push(newVideo);
  res.status(201).json(newVideo);
});

// Ruta para actualizar un video existente
app.put('/api/videos/:id', (req, res) => {
  const video = videos.find(v => v.id === parseInt(req.params.id));
  if (!video) {
    return res.status(404).json({ error: 'Video no encontrado' });
  }
  video.title = req.body.title;
  video.url = req.body.url;
  video.description = req.body.description;
  res.json(video);
});

// Ruta para eliminar un video
app.delete('/api/videos/:id', (req, res) => {
  const videoIndex = videos.findIndex(v => v.id === parseInt(req.params.id));
  if (videoIndex === -1) {
    return res.status(404).json({ error: 'Video no encontrado' });
  }
  const deletedVideo = videos.splice(videoIndex, 1);
  res.json(deletedVideo[0]);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
