import express from 'express'
import fs from 'fs/promises'
import path from 'path'
import cors from 'cors'

const app = express()
const port = process.env.LYRICS_SERVER_PORT || 4000
const dataFile = path.resolve('./data/lyrics.json')

app.use(express.json())
// Allow requests from your front-end dev server
app.use(cors({ origin: true }))

async function readData() {
  try {
    const raw = await fs.readFile(dataFile, 'utf-8')
    return JSON.parse(raw)
  } catch (e) {
    return {}
  }
}

async function writeData(obj) {
  await fs.mkdir(path.dirname(dataFile), { recursive: true })
  await fs.writeFile(dataFile, JSON.stringify(obj, null, 2), 'utf-8')
}

function normalize(a) {
  return a.trim().toLowerCase()
}

function makeKey(artist, track) {
  return `${normalize(artist)}::${normalize(track)}`
}

// GET lyrics by params
app.get('/api/lyrics/:artist/:track', async (req, res) => {
  const { artist, track } = req.params
  const data = await readData()
  const key = makeKey(artist, track)
  if (data[key]) {
    return res.json({ lyrics: data[key] })
  }
  return res.status(404).json({ error: 'Letra não encontrada localmente' })
})

// GET all (list)
app.get('/api/lyrics', async (req, res) => {
  const data = await readData()
  const list = Object.keys(data).map(k => {
    const [artist, track] = k.split('::')
    return { artist, track }
  })
  res.json(list)
})

// POST add/update a lyric
app.post('/api/lyrics', async (req, res) => {
  const { artist, track, lyrics } = req.body
  if (!artist || !track || !lyrics) return res.status(400).json({ error: 'artist, track e lyrics são obrigatórios' })
  const data = await readData()
  const key = makeKey(artist, track)
  data[key] = lyrics
  await writeData(data)
  res.json({ ok: true })
})

app.listen(port, () => {
  console.log(`Lyrics local API running on http://localhost:${port}`)
})
