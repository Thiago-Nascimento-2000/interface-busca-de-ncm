import Swal from "sweetalert2";

export function MeuComponente() {
  const mostrarAlerta = () => {
    Swal.fire({
      title: 'Tudo certo!',
      text: 'Seu alerta está funcionando 😄',
      icon: 'success',
      confirmButtonText: 'Fechar'
    });
  }};
