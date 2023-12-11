import './styles/Cuentas.module.css';

function Movimientos() {
    return (
        <div class="ultimas-transac">
        <div class="contendor-transac pt-3">
          <h2 class="text-white w-full text-center">
            Últimos Movimientos
          </h2>
          <div class="movimientos">
            <div class="transfer-border flex justify-between ps-3 pe-3 pt-3">
              <div class="flex">
                <span class="material-symbols-outlined fs-2 text-blue-600">
                  call_made
                </span>
                <div class="nombre-transfer ps-3">
                  <h5 class="fw-bold text-white">Lionel Messi</h5>
                  <p class="text-white-50">Transferencia Enviada</p>
                </div>
              </div>
              <h3 class="text-white fw-bold">$10000,00</h3>
            </div>
            <div class="transfer-border flex justify-between ps-3 pe-3 pt-3">
              <div class="flex">
                <span class="material-symbols-outlined fs-2 text-green-500">
                  call_received
                </span>
                <div class="nombre-transfer ps-3">
                  <h5 class="fw-bold text-white">Rodrigo De Paul</h5>
                  <p class="text-white-50">Transferencia Recibida</p>
                </div>
              </div>
              <h3 class="text-white fw-bold">$500,00</h3>
            </div>
            <div class="transfer-border flex justify-between ps-3 pe-3 pt-3">
              <div class="flex">
                <span class="material-symbols-outlined fs-2 text-blue-600">
                  call_made
                </span>
                <div class="nombre-transfer ps-3">
                  <h5 class="fw-bold text-white">Paulo Dybala</h5>
                  <p class="text-white-50">Transferencia Enviada</p>
                </div>
              </div>
              <h3 class="text-white fw-bold">$7000,00</h3>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Movimientos;