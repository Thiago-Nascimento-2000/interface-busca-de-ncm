export async function teste(ncmNumber: string) {
  const URL = 'http://192.168.51.228:5000/ncm'
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ncm: ncmNumber })
  })
    .then(res => {
      if (!res.ok) console.log('error',)
      return res.json();
    })
    .then(data => console.log('Resposta da API:', data))
    .catch(e => console.error('Erro na requisição:', e.message));
    console.log('valor', ncmNumber)
}

/*comentario teste */
