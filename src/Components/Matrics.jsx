import { FaMusic } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { MdAudiotrack } from "react-icons/md";
import styles from "./Matrics.module.css";

function Matrics(){
    return (
        <div className={styles["main-container"]} >
            <div className={styles["container"]}>
                <FaMusic size={40} />
                <div className={styles["number"]}>
                    772997+
                </div>
                <div className={styles["description"]}>
                    Total Music tracks Distributed Worldwide
                </div>
            </div>
            <div className={styles["container"]}>
                <FaVideo size={40} />
                <div className={styles["number"]}>
                    45455+
                </div>
                <div className={styles["description"]}>
                    Total Music tracks Distributed Worldwide
                </div>
            </div>
            <div className={styles["container"]}>
                <MdAudiotrack size={40} />
                <div className={styles["number"]}>
                    5621+
                </div>
                <div className={styles["description"]}>
                    Total Music tracks Distributed Worldwide
                </div>
            </div>
        </div>
    )
}

export default Matrics;