import { IoSearchOutline } from "react-icons/io5";

type BotaoDePesquisaProps = {
    valorRetorno: (valor: string) => void;
};

export function BotaoDePesquisa({ valorRetorno }: BotaoDePesquisaProps) {

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