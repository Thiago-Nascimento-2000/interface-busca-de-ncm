import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { InputNcm } from "@/components/input-ncm";

export default function Home() {
  return (
    <div className="w-max flex bg-gray-300 rounded-2xl border-0 shadow-2xl">
      <header className="bg-green-700/40 backdrop-blur-lg rounded-l-2xl p-10 text-4xl text-white flex flex-col justify-start w-100 gap-3 bg-gradient-to-l from-green-700/40 to-green-500/30 font-bold">
        <span className="w-full flex justify-center"><AiFillCodeSandboxCircle className="size-30" /></span>
        <h1>Consulta de NCM</h1>
        <h3 className="text-2xl text-gray-200 font-light text-center">Pesquisa e Analise. <br /> Informações de NCM.</h3>
      </header>
      <section className="border-0 rounded-r-2xl border-gray-700">
        <form className="flex content-center gap-4 w-full h-25 justify-start items-center ml-5 mr-10">
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
            <InputNcm />
          </div>
        </form>
        <hr className="text-gray-100 w-full"></hr>
        <div className="text-gray-400 text-2xl w-auto m-5 h-50 bg-gray-200 rounded-2xl p-10">
        </div>
      </section>
    </div>
  );
}
