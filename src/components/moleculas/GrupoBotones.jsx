import Boton from '../atomos/Boton';
import styles from '../moleculas/GrupoBotones.module.css';

const GrupoBotones = () => (
	<div className={styles.grupoBotones}>
		<Boton texto={'Alimentar'}></Boton>
		<Boton texto={'Jugar'}></Boton>
		<Boton texto={'Dormir'}></Boton>
	</div>
);

export default GrupoBotones;
