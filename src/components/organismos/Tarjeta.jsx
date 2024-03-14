import { useState } from 'react';
import Pantalla from '../atomos/Pantalla';
import GrupoBotones from '../moleculas/GrupoBotones';
import GrupoCaracteristicas from '../moleculas/GrupoCaracteristicas';
import styles from './Tarjeta.module.css';
const Tarjeta = () => {
	// Lifting state up
	const [estado, setEstado] = useState('Aburrido');
	
	const handleClick = (nuevoEstado) => {
		setEstado(nuevoEstado)
	}
	return <div className={styles.columnContainer}>
		<GrupoCaracteristicas nombre={'Pepe'} estado={estado}></GrupoCaracteristicas>
		<div className={styles.rowContainer}>
        <Pantalla></Pantalla>
        <GrupoBotones onClick={handleClick}></GrupoBotones>
			
		</div>
	</div>
};

export default Tarjeta;
