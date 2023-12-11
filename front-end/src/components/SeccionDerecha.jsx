import './styles/cuentas.module.css';

function SeccionDerecha() {
    return (
        <div class="seccion-derecha">
            <div class="titulo pt-3">
            <h2 class="text-white w-full text-center">Análisis de Gastos</h2>
            </div>
            <div class="contenedor-grafico flex justify-center">
            <div class="grafico">
                <canvas id="myChart" width="400" height="300"></canvas>
            </div>
            </div>
      </div>
    );
}

export default SeccionDerecha;