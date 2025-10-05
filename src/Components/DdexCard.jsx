import styles from './Intro.module.css';
import image from '../images/image.png';

export default function DdexCard() {
    return (
        <div className={styles["ddex-container"]}>
            <div  >
                <h2>
                    DDEX Gateway
                </h2>
                <p>
                    Leverage efficient business transactions, reduced cost, and increased profit, by adhering to Digital Data Exchange Standards.
                </p>
                <ul>
                    <li>
                        Improved data quality
                    </li>
                    <li>
                        Cost reduction between partners.
                    </li>
                    <li>
                        Prevents duplication of work.
                    </li>
                    <li>
                        Reduced data feeds.
                    </li>
                    <li>
                        Better operational quality.
                    </li>
                    <li>
                        Faster time to market.
                    </li>
                </ul>
            </div>
            <div className={styles["ddex-image"]}>
                <img src={image} alt="person carrying laptop" />
            </div>
        </div>
    )
}