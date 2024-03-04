import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './HomeContent.module.css';

const HomeContent: FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.header}>
                <h1 className={styles.title}>Nika Posh</h1>
                <p className={styles.caption}>Frontend Developer</p>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a href="!#">Projects</a>
                    </li>
                    <li>
                        <a href="!#">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.socials}>
                <ul>
                    <li>
                        <a href="!#">LinkedIn</a>
                    </li>
                    <li>
                        <a href="!#">Instagram</a>
                    </li>
                    <li>
                        <a href="!#">Github</a>
                    </li>
                    <li>
                        <a href="!#">Telegram</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomeContent;
