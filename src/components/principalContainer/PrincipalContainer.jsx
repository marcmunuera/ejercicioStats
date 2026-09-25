import ContainerLeft from '../containerLeft/ContainerLeft';
import ContainerRight from '../containerRight/ContainerRight';
import styles from './PrincipalContainer.module.css';

const PrincipalContainer = () => {
	return (
		<>
			<div className={`${styles.backgroundColor} ${styles.containerOrder}`}>
				<ContainerLeft />
				<ContainerRight />
			</div>
		</>
	);
};
export default PrincipalContainer;
