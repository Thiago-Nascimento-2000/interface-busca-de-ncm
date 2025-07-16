import { useState } from "react";
import { Boxinformativo } from "./Box-informativo";
import { BotaoDePesquisa } from "./btn-search";
import { Api } from "./Api";



export function ContainerInputs() {
    const [valor, setValor] = useState()
    const [data, setData] = useState()

    function handleValue(novoValor: any) {
        setValor(novoValor);
    }
    async function handleClick(value: any) {
        console.log("value use state", valor)
        const data = await Api(valor);
        setData(data);
        console.log("observar retorno da api", data);
    }

    return (
        <section className="border-0 rounded-r-2xl border-gray-700">
            <form className="flex content-center gap-4 w-fit h-25 justify-start items-center m-5">
                <div className="flex flex-col text-gray-500">

                    <div className="relative">
                        <input
                            type="text"
                            list="clientes"
                            id="floating_outlined"
                            placeholder=""
                            className="bg-gray-200 p-5 rounded-2xl w-80 h-fit text-gray-800 outline-0 focus:outline-1 focus:outline-green-600 peer">
                        </input>
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:bg-green-600 peer-focus:rounded-2xl peer-focus: peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Insira o nome da loja</label>
                    </div>

                    <datalist id="clientes">
                        <option value="Pardinhense" />
                        <option value="Panela Cheia" />
                        <option value="Florentino" />
                        <option value="DuCido" />
                    </datalist>
                </div>





                <div className="flex flex-col text-gray-500">
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
                            className="bg-gray-200 p-5 rounded-2xl w-60 h-fit text-gray-800 outline-0 focus:outline-1 focus:outline-green-600 peer"
                        />
                        <label htmlFor="floating" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:bg-green-600 peer-focus:rounded-2xl peer-focus: peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Insira o ncm a pesquisar
                        </label>
                        <BotaoDePesquisa valorRetorno={handleClick} />
                    </div>
                </div>


            </form>

            <Boxinformativo RetornoApi={data} />
        </section>
    )

}