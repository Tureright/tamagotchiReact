import Boton from '../atomos/Boton';
import styles from '../moleculas/GrupoBotones.module.css';

const GrupoBotones = ({ onClick }) => {
	return (
		<div className={styles.grupoBotones}>
			<Boton texto={'Alimentar'} onClick={() => onClick('Cansado')}></Boton>
			<Boton texto={'Jugar'} onClick={() => onClick('Hambriento')}></Boton>
			<Boton texto={'Dormir'} onClick={() => onClick('Aburrido')}></Boton>
			<Boton texto={'Eliminar'} onClick={() => alert('Esta seguro')}></Boton>
		</div>
	);
};

export default GrupoBotones;
