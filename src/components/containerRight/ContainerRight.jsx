import ButtonContinue from '../buttonContinue/ButtonContinue';
import MenuCapacitys from '../menuCapacitys/MenuCapacitys';
import styles from './ContainerRight.module.css';

const ContainerRight = () => {
	return (
		<div className={styles.background}>
			<h1>Summary</h1>
			<div>
				<MenuCapacitys/>
				<ButtonContinue/>
			</div>
		</div>
	);
};
export default ContainerRight;
