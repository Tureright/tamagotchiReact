import CaracteristicaPerfil from '../atomos/CaracteristicaPerfil';

import styles from './GrupoCaracteristicas.module.css';

const GrupoCaracteristicas = ({nombre, estado}) => (
	<div className={styles.container}>
		<CaracteristicaPerfil
			titulo={'Nombre'}
			descripcion={nombre}
		></CaracteristicaPerfil>
		<CaracteristicaPerfil
			titulo={'Estado'}
			descripcion={estado}
		></CaracteristicaPerfil>
		<CaracteristicaPerfil
			titulo={'Tiempo vivo'}
			descripcion={23}
		></CaracteristicaPerfil>
	</div>
);

export default GrupoCaracteristicas;
