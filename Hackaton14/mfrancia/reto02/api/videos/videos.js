// videos.js

const express = require('express');
const router = express.Router();

// Datos de ejemplo para los videos
let videos = [
  { id: 1, title: 'Video 1', url: 'https://example.com/video1', description: 'Descripción del video 1' },
  { id: 2, title: 'Video 2', url: 'https://example.com/video2', description: 'Descripción del video 2' },
];

// Ruta para obtener todos los videos
router.get('/', (req, res) => {
  res.json(videos);
});

// Ruta para obtener un video por su ID
router.get('/:id', (req, res) => {
  const video = videos.find(v => v.id === parseInt(req.params.id));
  if (!video) {
    return res.status(404).json({ error: 'Video no encontrado' });
  }
  res.json(video);
});

// Ruta para agregar un nuevo video
router.post('/', (req, res) => {
  const { title, url, description } = req.body;
  const newVideo = { id: videos.length + 1, title, url, description };
  videos.push(newVideo);
  res.status(201).json(newVideo);
});

// Ruta para actualizar un video existente
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
  const videoIndex = videos.findIndex(v => v.id === parseInt(req.params.id));
  if (videoIndex === -1) {
    return res.status(404).json({ error: 'Video no encontrado' });
  }
  const deletedVideo = videos.splice(videoIndex, 1);
  res.json(deletedVideo[0]);
});

module.exports = router;
