import axios from 'axios'

const videosApi = axios.create({
  baseURL: 'https://pachatube-json-server.vercel.app/videos'
})

export default videosApi