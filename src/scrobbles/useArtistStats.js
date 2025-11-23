import { ref } from 'vue'

const apiKey = "21d2c7e21d63f7f0ae64f7e50497503f"
const username = "victormth"

export function useArtistStats() {
  const stats = ref({
    scrobbles: 0,
    topAlbum: '-',
    topTrack: '-',
    loading: true
  })

  async function getArtistStats(artistName) {
    try {
      stats.value.loading = true
      
      // 1) Scrobbles do artista
      const artistsRes = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${apiKey}&format=json&limit=500`
      )
      const artistsData = await artistsRes.json()
      const artistEntry = artistsData.topartists.artist.find(
        a => a.name.toLowerCase() === artistName.toLowerCase()
      )
      const scrobbles = artistEntry ? artistEntry.playcount : 0

      // 2) Álbum mais ouvido
      const albumsRes = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&api_key=${apiKey}&format=json&limit=500`
      )
      const albumsData = await albumsRes.json()
      const albumsByArtist = albumsData.topalbums.album.filter(
        a => a.artist.name.toLowerCase() === artistName.toLowerCase()
      )
      const topAlbum = albumsByArtist.length
        ? albumsByArtist.reduce((a, b) => (Number(a.playcount) > Number(b.playcount) ? a : b)).name
        : "-"

      // 3) Música mais ouvida
      const tracksRes = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=${apiKey}&format=json&limit=500`
      )
      const tracksData = await tracksRes.json()
      const tracksByArtist = tracksData.toptracks.track.filter(
        t => t.artist.name.toLowerCase() === artistName.toLowerCase()
      )
      const topTrack = tracksByArtist.length
        ? tracksByArtist.reduce((a, b) => (Number(a.playcount) > Number(b.playcount) ? a : b)).name
        : "-"

      stats.value = {
        scrobbles,
        topAlbum,
        topTrack,
        loading: false
      }
    } catch (err) {
      console.error("Erro ao buscar artista:", err)
      stats.value = {
        scrobbles: 0,
        topAlbum: "-",
        topTrack: "-",
        loading: false
      }
    }
  }

  return {
    stats,
    getArtistStats
  }
}

