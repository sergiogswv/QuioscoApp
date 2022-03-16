import Layout from "../layout/Layout";
import { useEffect, useCallback } from "react";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

  const comprobarFormulario = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarFormulario();
  }, [pedido, comprobarFormulario]);

  return (
    <Layout pagina={"Resumen"}>
      <h1 className="text-4xl font-black">Total y Confimar Pedido</h1>
      <p className="text-2xl my-10">Confirmar tu Pedido a Continuación</p>
      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-gray-200 w-ful lg:w-1/3  mt-3 p-2 rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a Pagar: {""}{" "}
            <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            value="Confirmar Pedido"
            className={`${
              comprobarFormulario()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800"
            }
            w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white  text-center`}
            disabled={comprobarFormulario()}
          />
        </div>
      </form>
    </Layout>
  );
}
