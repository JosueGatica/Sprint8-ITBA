import './styles/cuentas.module.css';
import ContenedorSaldo from './ContenedorSaldo';
import Movimientos from './Movimientos';

function SeccionIzquierda() {
    return (
      <div class="seccion-izquierda">
          <ContenedorSaldo/>
          <Movimientos/>
      </div>
    );
}

export default SeccionIzquierda;