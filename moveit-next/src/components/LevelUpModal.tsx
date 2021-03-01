import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export default function LevelUpModal() {
    const { level, closeLeveUpModal } = useContext(ChallangesContext);
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns!</strong>
                <p>Você alcançou um novo nível.</p>
                <button type="button" onClick={closeLeveUpModal}>
                    <img src="icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    );
}