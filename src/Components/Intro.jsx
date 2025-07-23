import { CiLocationArrow1, CiShare2 } from "react-icons/ci";
import { FaApple, FaDeezer, FaFacebook, FaLongArrowAltLeft, FaLongArrowAltRight, FaMusic, FaTiktok, FaWallet } from "react-icons/fa";
import { FaSpotify, FaYoutube } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { SiAmazonmusic } from "react-icons/si";
import srk from "../images/330px-Shah_Rukh_Khan_2001.jpg";
import image from "../images/image.png";

import { useRef } from "react";
import Card from "./Card";
import styles from "./Intro.module.css";
import ReviewCard from "./ReviewCard";

export default function Intro() {

    const scrollContainerRef = useRef(null);
    const scrollReviewContainerRef = useRef(null);

      const scrollLeft = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft -= 200; // Adjust scroll amount as needed
        }
      };

      const scrollRight = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += 200; // Adjust scroll amount as needed
        }
      };

      const scrollReviewLeft = () => {
        if (scrollReviewContainerRef.current) {
          scrollReviewContainerRef.current.scrollLeft -= 200; // Adjust scroll amount as needed
        }
      };

      const scrollReviewRight = () => {
        if (scrollReviewContainerRef.current) {
          scrollReviewContainerRef.current.scrollLeft += 200; // Adjust scroll amount as needed
        }
      };




  return (
    <div className={styles["intro-container"]}>
        <div className={styles["left-container"]}>
            <h2>We Are ST Digital</h2>
            <p>Amplify Your Business with our Complete Suite of Services</p>
            <p className={styles["highlight-text"]} >WHAT MAKES US DIFFERENT? </p>
            <p>
                ST Digital is World's fastest growing Music Distribution Company and also the first digital distribution company to provide free service in the digital economy.
            </p>
            <p>ST Digital, is a full-service digital music distribution company, was launched in 2012 and has its presence in US, Australia, Bangladesh, India, and Nepal. We have over 150+ stores worldwide, which allows us to provide you a wide range of audiences for your music. We deliver your songs across multiple formats- Singles, EPS, Albums, Pre-order.</p>
        </div>
        <div className={styles["right-container"]}>
            <ul>
                <li>
                    We are the first independent digital music distribution company to provide free service.
                </li>
                <li>
                    We endeavor to help our local and regional artists and make good revenue for them.
                </li>
                <li>
                    We provide a wide range of audiences for your audio/video content.
                </li>
                <li>
                    We have over 100+ stores and distribute songs to all the major players in the music industry.
                </li>
            </ul>
        </div>
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
        <div className={styles["cards-container"]}>
            <h2>All-In-One Platform</h2>
            <h4>Power your business with our robust suite of services.</h4>
            <button onClick={scrollLeft}>Scroll <FaLongArrowAltLeft /></button>
            <div className={styles["cards"]} ref={scrollContainerRef}>
                <Card 
                    title="Audio & Video Chain"
                    description="All-in-One distribution platform to unleash and distribute your creativity to every corner of the world. Hit the right chords on Apple Music, Spotify, YouTube, iTunes, and many more."
                    icon={FaMusic}
                />
                <Card 
                    title="Global Distribution Simplified"
                    description="Turn your passion into a global sensation and elevate your music to new heights, with our distribution network across major platforms."
                    icon={CiLocationArrow1}
                />
                <Card 
                    title="Advanced Rights Management"
                    description="Manage all your ownership rights, Intellectual Property rights, and UGC claims in one place. Ensure you get compensated whenever anyone uses your content with or without permission."
                    icon={CiShare2}
                />
                <Card 
                    title="Royalty Payments"
                    description="Rely on a singular platform to manage and receive your royalty payments with complete partiality. Always have an eye on people using your music and earn a certain amount."
                    icon={FaWallet}
                />
                <Card 
                    title="Data & Analytics"
                    description="Monitor the interactions of your music and videos over several platforms and turn the listeners into fans. Learn from the data to impart continuous improvements in your artistic career."
                    icon={MdAnalytics}
                />
            </div>
            <button onClick={scrollRight}>Scroll <FaLongArrowAltRight /></button>
        </div>
        <div className={styles["ddex-container"]} >
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
        <div className={styles["review-container"]} >
            <h2>What client say for ST Digital</h2>
            <h4>WHAT CLIENT SAYS</h4>
            <button onClick={scrollReviewLeft}>Scroll <FaLongArrowAltLeft /></button>
            <div className={styles["container"]} ref={scrollReviewContainerRef}>
                <ReviewCard review={{
                    content: "ST Digital has been a game-changer for my music career. Their distribution services are top-notch, and the support team is always there to help. I've seen a significant increase in my streams and revenue since partnering with them.",
                    author: "John Doe",
                    position: "Independent Artist",
                    image: srk,
                    alt: "Shah Rukh Khan"
                }} />
                <ReviewCard review={{
                    content: "ST Digital has been a game-changer for my music career. Their distribution services are top-notch, and the support team is always there to help. I've seen a significant increase in my streams and revenue since partnering with them.",
                    author: "John Doe",
                    position: "Independent Artist",
                    image: srk,
                    alt: "Shah Rukh Khan"
                }} />
                <ReviewCard review={{
                    content: "ST Digital has been a game-changer for my music career. Their distribution services are top-notch, and the support team is always there to help. I've seen a significant increase in my streams and revenue since partnering with them.",
                    author: "John Doe",
                    position: "Independent Artist",
                    image: srk,
                    alt: "Shah Rukh Khan"
                }} />
                <ReviewCard review={{
                    content: "ST Digital has been a game-changer for my music career. Their distribution services are top-notch, and the support team is always there to help. I've seen a significant increase in my streams and revenue since partnering with them.",
                    author: "John Doe",
                    position: "Independent Artist",
                    image: srk,
                    alt: "Shah Rukh Khan"
                }} />
                <ReviewCard review={{
                    content: "ST Digital has been a game-changer for my music career. Their distribution services are top-notch, and the support team is always there to help. I've seen a significant increase in my streams and revenue since partnering with them.",
                    author: "John Doe",
                    position: "Independent Artist",
                    image: srk,
                    alt: "Shah Rukh Khan"
                }} />
            </div>
            <button onClick={scrollReviewRight}>Scroll <FaLongArrowAltRight /></button>
        </div>
    </div>
  );
}