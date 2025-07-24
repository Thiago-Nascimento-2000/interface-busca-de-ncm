import { Header } from "@/components/Header";
import { ContainerInputs } from "@/components/BuscarNCM";

export default function Home() {
  return (
    <section className="flex bg-gray-300 rounded-2xl border-0 shadow-2xl">
        <Header />
        <ContainerInputs />
    </section>
  );
}
