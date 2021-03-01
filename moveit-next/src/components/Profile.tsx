import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/pages/Profile.module.css';

export default function Profile() {
    const { level } = useContext(ChallangesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/GuilhermeFernandes01.png" alt="Guilherme Fernandes" />
            <div>
                <strong>Guilherme Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Nível {level}
                </p>
            </div>
        </div>
    );
}