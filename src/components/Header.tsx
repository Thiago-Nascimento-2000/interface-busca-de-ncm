import { FcFinePrint } from "react-icons/fc";

export function Header() {
    return (
        <header className="bg-green-700/40 backdrop-blur-lg rounded-l-2xl p-10 text-4xl text-white flex flex-col justify-center text-center w-100 gap-3 bg-gradient-to-l from-green-700/40 to-green-500/30 font-bold">
                <span className="w-full flex justify-center"><FcFinePrint className="size-30" /></span>
                <h1 className="font-extrabold">NCMFinder</h1>
                <h3 className="text-2xl text-gray-200 font-light text-center">Simplificando o que nunca deveria ser complicado</h3>
                <span className="text-2xl text-gray-700">Versão beta</span>
              </header>
    )
}