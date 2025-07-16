type RetornoApiProps = {
    Ano_Ato_Ini: string,
    Codigo: string,
    Data_Fim: string,
    Data_Inicio: string,
    Descricao: string,
    Numero_Ato_Ini: string,
    Tipo_Ato_Ini: string
}

export function Boxinformativo(RetornoApi: RetornoApiProps) {
    console.log('props', RetornoApi.Codigo);

function respostaFormatada(): string {
  return `
    Resposta da API:
    - Código NCM: ${RetornoApi.Codigo}
    - Descrição: ${RetornoApi.Descricao}
    - Ato Inicial: ${RetornoApi.Tipo_Ato_Ini} nº ${RetornoApi.Numero_Ato_Ini}/${RetornoApi.Ano_Ato_Ini}
    - Vigência: de ${RetornoApi.Data_Inicio} até ${RetornoApi.Data_Fim}
`.trim();
}

    return (
        <>
            <hr className="text-gray-100 w-full flex"></hr>
            <div
                id="box-info"
                className=" text-gray-400 text-2xl w-auto m-5 h-50 bg-gray-200 rounded-2xl p-10">
                <pre>{respostaFormatada()}</pre>
                {RetornoApi.Codigo}
            </div>
        </>
    )
}