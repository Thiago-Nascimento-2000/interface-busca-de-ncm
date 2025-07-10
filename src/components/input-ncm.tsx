import { useState } from "react";
import { BotaoDePesquisa } from "./btn-search";

export function InputNcm() {
    const [ncm, setNcm] = useState<string>("");
    const maximo8digitos = 8;

    return (
        <div className="relative flex gap-4">
            <input
                type="number"
                value={ncm}
                onChange={(e) => setNcm(e.target.value)}
                id="floating"
                maxLength={maximo8digitos}
                placeholder=""
                className="bg-gray-200 p-5 rounded-2xl w-60 h-fit text-gray-800 outline-0 focus:outline-1 focus:outline-green-600 peer"
            />
            <label htmlFor="floating" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:bg-green-600 peer-focus:rounded-2xl peer-focus: peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Insira o ncm a pesquisar
            </label>
            <BotaoDePesquisa valorinput={ncm} />
        </div>
    );
}