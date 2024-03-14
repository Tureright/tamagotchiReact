import styles from './CaracteristicaPerfil.module.css';

const CaracteristicaPerfil = ({ titulo, descripcion }) => (
	<div className={styles.container}>
		<p className={styles.titulo}>{titulo}</p>
		<p className={styles.descripcion}>{descripcion}</p>
	</div>
);

export default CaracteristicaPerfil;
