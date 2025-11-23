const apiKey = "21d2c7e21d63f7f0ae64f7e50497503f";
const username = "victormth";

async function getArtistStats(artistName) {
  try {
    // 1) Scrobbles do artista
    const artistsRes = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${apiKey}&format=json&limit=500`
    );
    const artistsData = await artistsRes.json();
    const artistEntry = artistsData.topartists.artist.find(
      a => a.name.toLowerCase() === artistName.toLowerCase()
    );
    const scrobbles = artistEntry ? artistEntry.playcount : 0;

    // 2) Álbum mais ouvido
    const albumsRes = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&api_key=${apiKey}&format=json&limit=500`
    );
    const albumsData = await albumsRes.json();
    const albumsByArtist = albumsData.topalbums.album.filter(
      a => a.artist.name.toLowerCase() === artistName.toLowerCase()
    );
    const topAlbum = albumsByArtist.length
      ? albumsByArtist.reduce((a, b) => (Number(a.playcount) > Number(b.playcount) ? a : b)).name
      : "-";

    // 3) Música mais ouvida
    const tracksRes = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=${apiKey}&format=json&limit=500`
    );
    const tracksData = await tracksRes.json();
    const tracksByArtist = tracksData.toptracks.track.filter(
      t => t.artist.name.toLowerCase() === artistName.toLowerCase()
    );
    const topTrack = tracksByArtist.length
      ? tracksByArtist.reduce((a, b) => (Number(a.playcount) > Number(b.playcount) ? a : b)).name
      : "-";

    return { scrobbles, topAlbum, topTrack };
  } catch (err) {
    console.error("Erro ao buscar artista:", err);
    return { scrobbles: 0, topAlbum: "-", topTrack: "-" };
  }
}

async function carregarEstatisticasDoArtista(artistName) {
  const cards = document.querySelectorAll(".estat-card");
  const [numero1, numero2, numero3] = Array.from(cards).map(c => c.querySelector(".estat-number"));
  const [label1, label2, label3] = Array.from(cards).map(c => c.querySelector(".estat-label"));

  const stats = await getArtistStats(artistName);

  numero1.textContent = `+${stats.scrobbles}`;
  label1.textContent = "Scrobbles do artista";

  numero2.textContent = stats.topAlbum;
  label2.textContent = "Álbum mais ouvido";

  numero3.textContent = stats.topTrack;
  label3.textContent = "Música mais ouvida";
}

// Chama a função com o artista que você quer
carregarEstatisticasDoArtista("Tyler, The Creator");
