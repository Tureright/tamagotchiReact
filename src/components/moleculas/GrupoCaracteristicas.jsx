import CaracteristicaPerfil from '../atomos/CaracteristicaPerfil';

import styles from './GrupoCaracteristicas.module.css';

const GrupoCaracteristicas = ({ nombre, estado }) => (
	<div className={styles.container}>
		<CaracteristicaPerfil titulo={'Estado'} descripcion={estado}>
			{nombre}
		</CaracteristicaPerfil>
		<CaracteristicaPerfil titulo={'Tiempo vivo'}>{nombre}</CaracteristicaPerfil>
	</div>
);

export default GrupoCaracteristicas;
