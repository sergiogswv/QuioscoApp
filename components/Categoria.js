import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
  const { categoriaActual, handleClickCategoria } = useQuiosco();
  const { nombre, icono, id } = categoria;

  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400" : null
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400 `}
    >
      <Image
        alt="Imagen icono"
        src={`/img/icono_${icono}.svg`}
        width={100}
        height={100}
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
