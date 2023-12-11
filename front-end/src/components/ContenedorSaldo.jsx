import { useState } from "react";
import './styles/Cuentas.module.css'

function ContenedorSaldo() {
  const [saldo, setSaldo] = useState(400);
  return (
    <div class="contenedor-saldo flex justify-center items-center">
      <div class="saldo">
        <h5 class="text-center text-white">Saldo Disponible</h5>
        <h2 class="text-center text-white" id="saldo-valor">
          $ {saldo}
        </h2>
      </div>
      <button
        id="ver-cvu"
        type="button"
        class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-white"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Ver CVU
      </button>
      <div
        class="modal opacity-0"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">
                CVU
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-white">0000003100045391071666</div>
            <div class="modal-footer">
              <button
                type="button"
                class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-white"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContenedorSaldo;
