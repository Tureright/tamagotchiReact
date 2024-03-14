import Pantalla from '../atomos/Pantalla';
import GrupoBotones from '../moleculas/GrupoBotones';
import GrupoCaracteristicas from '../moleculas/GrupoCaracteristicas';
import styles from './Tarjeta.module.css';
const Tarjeta = () => (
	<div className={styles.columnContainer}>
		<GrupoCaracteristicas></GrupoCaracteristicas>
		<div className={styles.rowContainer}>
        <Pantalla></Pantalla>
            <GrupoBotones></GrupoBotones>
			
		</div>
	</div>
);

export default Tarjeta;
