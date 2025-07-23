import { RetornoApiProps } from "./Container-Inputs-e-button"


type BoxInformationsProsp = {
    data: RetornoApiProps | 0 | null | undefined;
}

export function Boxinformativo({ data }: BoxInformationsProsp) {

    const valor = (
        <ul className="overflow-hidden">
            <li className="text-gray-500 font-normal">
                NCM: <span className="font-normal">{data?.Codigo}</span>
            </li>
            <li className="text-gray-500 font-normal">
                Descrição: <span className="font-normal">{data?.Descricao}</span>
            </li>
            <li className="text-gray-500 font-normal">
                Data de Início: <span className="font-normal">{data?.Data_Inicio}</span>
            </li>
            <li className="text-gray-500 font-normal">
                Data de Fim: <span className="font-normal"></span>
            </li>
        </ul>
    );

    if (data === 0) {
        return (
            <>
                <hr className="text-gray-100 w-full flex"></hr>
                <div
                    id="box-info"
                    className=" text-gray-400 text-2xl w-auto m-5 h-50 bg-gray-200 rounded-2xl p-10">
                    <span className="text-red-500">NCM Invalido</span>
                </div>
            </>
        )
    };
    return (
        <>
            <hr className="text-gray-100 w-full flex"></hr>
            <div
                id="box-info"
                className=" text-gray-400 text-2xl w-auto m-5 h-50 bg-gray-200 rounded-2xl p-10 overflow-hidden">
                {valor}
            </div>
        </>
    )
}