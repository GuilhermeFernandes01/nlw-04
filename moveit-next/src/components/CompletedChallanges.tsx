import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/pages/CompletedChallanges.module.css';

export default function CompletedChallanges() {
    const { challangesCompleted } = useContext(ChallangesContext);

    return (
        <div className={styles.completedChallangesContainer}>
            <span>Desafios completos</span>
            <span>{challangesCompleted}</span>
        </div>
    );
}