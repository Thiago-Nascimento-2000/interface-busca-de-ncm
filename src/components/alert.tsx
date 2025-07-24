import { toast } from "react-toastify";

export function ToastProgresso() {
  const toastId = toast.loading('Enviando e-mail..', {
    position: 'top-center',
    isLoading: true,
  });

  let progress = 0;

  const interval = setInterval(() => {
    progress += 10;

    toast.update(toastId, {
      render: `Enviando e-mail... ${progress}%`,
      progress: progress / 100,
      isLoading: true,
      position: 'top-center',
    });

    if (progress >= 100) {
      clearInterval(interval);
      toast.update(toastId, {
        render: 'Uma planilha de NCM Inválidos foi enviada para sua caixa de entrada!',
        type: 'success',
        isLoading: false,
        hideProgressBar: true,
        autoClose: 5000,
        progress: 1,
      });
    }
  }, 100);
}
