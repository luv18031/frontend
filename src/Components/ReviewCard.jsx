import { IoMdStar } from "react-icons/io";
import styles from "./ReviewCard.module.css";

export default function ReviewCard({ review  }) {
    return (
        <div className={styles["review-card"]}>
            <IoMdStar size={30}/><IoMdStar size={30}/><IoMdStar size={30}/><IoMdStar size={30}/><IoMdStar size={30}/>
            <div className={styles["review-content"]}>
                <p>{review.content}</p>
            </div>
            <div className={styles["review-author"]}>
                <img src={review.image} alt={review.alt} />
                <p>{review.author}</p>
                <span>{review.position}</span>
            </div>
        </div>
    );
}