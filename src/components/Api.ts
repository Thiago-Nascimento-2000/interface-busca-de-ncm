

export async function Api(ncm: any) {
  const URL = 'http://192.168.51.252:5000/ncm';
  try {
    console.log('retornooo ncm', ncm)
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ncm: ncm })
    });
    if (!res.ok) {
      console.log('error');
      return null;
    }
    const data = await res.json();
    console.log('Resposta da API:', data);

    return data;
  } catch (e: any) {
    console.error('Erro na requisição:', e.message);
    return null;
    
  }
}