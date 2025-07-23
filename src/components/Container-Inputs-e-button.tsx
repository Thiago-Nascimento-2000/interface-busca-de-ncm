import { useEffect, useRef, useState } from "react";
import { Boxinformativo } from "./Box-informativo";
import { BotaoDePesquisa } from "./btn-search";
import { Api } from "./Api";
import { Clientes } from "./ApiClientes";

export type RetornoApiProps = {
    Ano_Ato_Ini: string;
    Codigo: string;
    Data_Fim: string;
    Data_Inicio: string;
    Descricao: string;
    Numero_Ato_Ini: string;
    Tipo_Ato_Ini: string;
};

export function ContainerInputs() {
    const [valor, setValor] = useState()
    const [data, setData] = useState<RetornoApiProps>();
    const [isFetch, setIsFetch] = useState(false)
    const isFirstRender = useRef(true);

    function handleValue(novoValor: any) {
        setValor(novoValor);
    }
    async function handleClick(value: any) {
        setIsFetch(!isFetch);
    }
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (valor !== undefined && valor !== "") {
            Api(valor).then((data) => setData(data));
        }
    }, [isFetch]);

    return (
        <section>
            <Clientes />
            <form>
                <div className="flex flex-col text-gray-500 m-5">
                    <div className="relative flex gap-4">
                        <input
                            value={valor}
                            onChange={(e) => {
                                e.preventDefault();
                                handleValue(e.target.value)
                            }
                            }
                            type="number"
                            id="floating"
                            maxLength={8}
                            placeholder=""
                            className="bg-gray-200 p-5 rounded-2xl w-60 h-fit text-gray-800 outline-0 focus:outline-1 focus:outline-green-600 flex-1 peer"
                        />
                        <label htmlFor="floating" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:bg-green-600 peer-focus:rounded-2xl peer-focus: peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Insira o ncm a pesquisar
                        </label>
                        <BotaoDePesquisa valorRetorno={handleClick} />
                    </div>
                </div>


            </form>

            <Boxinformativo data={data} />
        </section>
    )

}