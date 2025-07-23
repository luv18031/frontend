import styles from "./Card.module.css";

export default function Card({ title, description, icon: Icon }) {
    return (
        <div className={styles["card"]}>
            <div className="card-icon">
                {Icon && <Icon size={40} />}
            </div>
            <div className={styles["card-content"]}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}