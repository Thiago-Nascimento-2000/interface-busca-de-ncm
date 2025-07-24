import { useEffect, useRef, useState } from "react";
import { Api } from "./Api";
import { Clientes } from "./ApiClientes";
import { IoSearchOutline } from "react-icons/io5";
import Swal from 'sweetalert2';
import { MeuComponente } from "./alert";


export type RetornoApiProps = {
    Ano_Ato_Ini: string;
    Codigo: string;
    Data_Fim: string;
    Data_Inicio: string;
    Descricao: string;
    Numero_Ato_Ini: string;
    Tipo_Ato_Ini: string;
};

/*Input Campo NCM*/
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
            if (/^\d{1,7}$/.test(valor) || /^\d{9,}$/.test(valor)) {
                alert("Campo NCM Deve Conter 8 Digitos, Verifique e Tente Novamente!");
            } else {
                Api(valor).then((data) => setData(data));
                console.log("Inválido!");
            }
        }
    }, [isFetch]);

    return (
        <section>
            <Clientes />
            <form>
                <div className="flex flex-col text-gray-500 m-5">
                    <div className="relative flex gap-2">
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
                            className={`validadorerro bg-gray-200 p-5 rounded-2xl w-60 h-fit text-gray-800 outline-0 focus:outline-1 focus:outline-green-600 flex-1 peer`}

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

    /*Botão de Pesquisa*/
    type BotaoDePesquisaProps = {
        valorRetorno: (valor: string) => void;
    };

    function BotaoDePesquisa({ valorRetorno }: BotaoDePesquisaProps) {
        function handlerBtn(event: any) {
            event.preventDefault();
            valorRetorno(event)
        }

        return (
            <button
                onClick={handlerBtn}
                className="bg-green-800/40 bg-gradient-to-l from-green-700/40 to-green-500/30 backdrop-blur-lg rounded-2xl p-5 text-white hover:cursor-pointer hover:bg-green-800/50 content-center w-40 flex justify-center"
            >
                Consultar &emsp; <IoSearchOutline className="text-2xl" />
            </button>
        );
    }

    /*Caixa do NCM*/
    type BoxInformationsProsp = {
        data: RetornoApiProps | 0 | null | undefined;
    }

    function Boxinformativo({ data }: BoxInformationsProsp) {
        const informacaoNCM = (
            <ul className="overflow-hidden">
                <li className="text-gray-500 font-normal bg-gray-300 p-1 pl-5 m-1 rounded-xl">
                    NCM: <span className="font-normal text-gray-600">{data?.Codigo}</span>
                </li>
                <li className="text-gray-500 font-normal bg-gray-300 p-1 pl-5 m-1 rounded-xl">
                    Descrição: <span className="font-normal text-gray-600">{data?.Descricao}</span>
                </li>
                <li className="text-gray-500 font-normal bg-gray-300 p-1 pl-5 m-1 rounded-xl">
                    Data de Início: <span className="font-normal text-gray-600">{data?.Data_Inicio}</span>
                </li>
            </ul>
        );

        if (data === 0) {

            return (
                <>
                    <div className="relative top-27 left-70 rotate-5">
                        <h2 className="font-extrabold text-red-700 text-5xl w-0 h-0">INVALIDO</h2>
                    </div>
                    <hr className="text-gray-100 w-full flex"></hr>
                    <pre
                        className=" text-gray-400 text-2xl w-auto m-5 bg-gray-200 rounded-2xl p-5 overflow-hidden">
                        <ul className="overflow-hidden">
                            <li className="text-gray-500 font-normal bg-gray-300 p-1 pl-5 m-1 rounded-xl">
                                NCM: <span className="font-normal text-gray-600">{data?.Codigo}</span>
                            </li>
                            <li className="text-gray-500 font-normal bg-gray-300 p-1 pl-5 m-1 rounded-xl">
                                Descrição: <span className="font-normal text-gray-600">{data?.Descricao}</span>
                            </li>
                            <li className="text-gray-500 font-normal bg-gray-300 p-1 pl-5 m-1 rounded-xl">
                                Data de Início: <span className="font-normal text-gray-600">{data?.Data_Inicio}</span>
                            </li>
                        </ul>
                    </pre>
                </>
            )
        };

        return (
            <>
                <hr className="text-gray-100 w-full flex" />
                <div
                    className=" text-gray-400 text-2xl w-auto m-5 bg-gray-200 rounded-2xl p-5 overflow-hidden">
                    <pre>{informacaoNCM}</pre>
                </div>
            </>
        )
    }
}