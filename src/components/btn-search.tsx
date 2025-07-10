import { IoSearchOutline } from "react-icons/io5";
import { teste } from "./teste";

type BotaoDePesquisaProps = {
    valorinput: string;
};

export function BotaoDePesquisa({ valorinput }: BotaoDePesquisaProps) {
    function handlerBtn(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        if(valorinput.length === 8) {
            console.log('valor correto');
            teste(valorinput);
        } else {
            console.log('valor incorreto');
        }
        console.log('valor input:', valorinput);
    }

    return (
        <button
            onClick={handlerBtn}
            className="bg-green-800/40 bg-gradient-to-l from-green-700/40 to-green-500/30 backdrop-blur-lg rounded-2xl p-5 text-white hover:cursor-pointer hover:bg-green-800/50 flex content-center h-fit"
        >
            Consultar &emsp; <IoSearchOutline className="text-2xl"/>
        </button>
    );
}