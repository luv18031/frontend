import styles from './Intro.module.css';
import { FaApple, FaSpotify, FaYoutube, FaDeezer, FaFacebook, FaTiktok } from "react-icons/fa";
import { SiAmazonmusic } from "react-icons/si";

export default function Icons() {
    return (
        <div className={styles["icon-container"]}> 
            <div className={styles["icon"]}>
                <FaApple size={50}/>
                <span>Music</span>
            </div>
            <div className={styles["icon"]}>
                <FaSpotify size={50}/>
                <span>Spotify</span>
            </div>
            <div className={styles["icon"]}>
                <span>Pandora</span>
            </div>
            <div className={styles["icon"]}>
                <FaYoutube size={50}/>
                <span>You Tube</span>
            </div>
            <div className={styles["icon"]}>
                <FaDeezer size={50}/>
                <span>Deezer</span>
            </div>
            <div className={styles["icon"]}>
                <FaFacebook size={50}/>
                <span>Facebook</span>
            </div>
            <div className={styles["icon"]}>
                <FaTiktok size={50}/>
                <span>Tiktok</span>
            </div>
            <div className={styles["icon"]}>
                <SiAmazonmusic size={50}/>
            </div>
        </div>
    )

}