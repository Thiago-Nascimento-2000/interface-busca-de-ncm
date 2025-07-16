import { AiFillCodeSandboxCircle } from "react-icons/ai";

export function Header() {
    return (
        <header className="bg-green-700/40 backdrop-blur-lg rounded-l-2xl p-10 text-4xl text-white flex flex-col justify-start w-100 gap-3 bg-gradient-to-l from-green-700/40 to-green-500/30 font-bold">
                <span className="w-full flex justify-center"><AiFillCodeSandboxCircle className="size-30" /></span>
                <h1>Consulta de NCM</h1>
                <h3 className="text-2xl text-gray-200 font-light text-center">Pesquisa e Analise. <br /> Informações de NCM.</h3>
              </header>
    )
}