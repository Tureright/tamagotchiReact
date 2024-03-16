import { useState } from 'react';
import styles from './NuevoTamagotchi.module.css';
const NuevoTamagotchi = () => {
	const [nombre, setNombre] = useState('');
	return (
		<div className={styles.container}>
			<form
				onSubmit={ev => {
					ev.preventDefault();
				}}
			>
				<input
					type='text'
					name='nombre'
					placeholder='Nombre'
					value={nombre}
					onChange={ev => setNombre(ev.target.value)}
				></input>
				<button type='submit'>Crear</button>
			</form>
		</div>
	);
};

export default NuevoTamagotchi;
