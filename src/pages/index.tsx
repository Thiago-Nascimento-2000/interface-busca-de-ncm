import { Header } from "@/components/Header";
import { ContainerInputs } from "@/components/Container-Inputs-e-button";

export default function Home() {
  return (
    <div className="w-max flex bg-gray-300 rounded-2xl border-0 shadow-2xl">
        <Header />
        <ContainerInputs />
    </div>
  );
}
