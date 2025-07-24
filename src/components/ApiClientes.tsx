import { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { toast } from "react-toastify";
import { ToastProgresso } from "./alert";

export async function ApiClientes(nome: any, email: any) {
  const URL = 'http://192.168.51.252:5000/cliente';
  try {
    console.log('Retorno da API Clientes, sendo o valor informado:', nome)
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome: nome, email: email })
    });
    if (!res.ok) {
      console.log('error');
      return 0;
    }
    const data = await res.json();
    console.log('Resposta da API:', data);

    return data;
  } catch (e: any) {
    console.error('Erro na requisição:', e.message);
    return null;

  }
}

export function Clientes() {

  const [valorInput, setValorInput] = useState('');
  const [email, setEmail] = useState('');

  const listaClientes = [
    { key: 1, nome: "sao_paulo" },
    { key: 2, nome: "panela_cheia" },
    { key: 3, nome: "palmital" },
    { key: 4, nome: "center_rocha" },
    { key: 5, nome: "teste" }
  ]

  function limparCampo() {
    setValorInput('');
  }

  function enviarAPI() {
    const clienteSelecionado = listaClientes.find(cliente => cliente.nome === valorInput);
    if (!email || email.trim() === "") {
      toast.warn('Preencha o campo de e-mail antes de continuar!', {
        position: 'top-center',
        autoClose: 2000,
      });
      return;
    }
    if (clienteSelecionado) {
      ApiClientes(valorInput, email);
      ToastProgresso();
    } else {
      toast.warn('Selecione a loja antes de continuar e verifique se o nome está digitado corretamente assim como na listagem!', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  }

  function handleClick(event: any) {
    event.preventDefault();
    enviarAPI();
    limparCampo();
  }
  return (
    <>
      <section className="border-0 rounded-r-2xl border-gray-700" >
        <form className="flex content-center gap-2 h-25 justify-start items-center m-5" >
          <div className="flex flex-col text-gray-500" >

            <div className="relative" >
              <input
                type="text"
                required
                list="clientes"
                value={valorInput}
                onChange={(e) => {
                  setValorInput(e.target.value)
                }
                }
                id="floating_outlined"
                placeholder=""
                className="bg-gray-200 p-5 rounded-2xl w-80 text-gray-800 outline-0 focus:outline-1 focus:outline-green-600 peer" >
              </input>
              < label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:bg-green-600 peer-focus:rounded-2xl peer-focus: peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" >
                Selecione a loja </label>
            </div>


            < datalist id="clientes" >

              {listaClientes.map((item) => (
                <option
                  key={item.key}
                  value={item.nome}>
                  {item.nome}
                </option>
              ))}
            </datalist>

          </div>
          <div className="relative">
            <input
              id="floating"
              className="bg-gray-200 p-5 rounded-2xl w-60 text-gray-800 outline-0 focus:outline-1 focus:outline-green-600 peer"
              type="email"
              value={email}
              placeholder=""
              onChange={(e) => { setEmail(e.target.value) }}>
            </input>
            <label htmlFor="floating" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:bg-green-600 peer-focus:rounded-2xl peer-focus: peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Insira o email
            </label>
          </div>
          <button
            onClick={handleClick}
            className="bg-green-800/40 bg-gradient-to-l from-green-700/40 to-green-500/30 backdrop-blur-lg rounded-2xl p-5 text-white hover:cursor-pointer hover:bg-green-800/50 content-center w-40 flex justify-center"
          >
            Enviar &emsp; <BiMailSend className="text-2xl" />
          </button>
        </form>
      </section>
    </>
  )
}

