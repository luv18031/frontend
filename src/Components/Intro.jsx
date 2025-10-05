import { CiLocationArrow1, CiShare2 } from "react-icons/ci";
import { FaApple, FaDeezer, FaFacebook, FaLongArrowAltLeft, FaLongArrowAltRight, FaMusic, FaTiktok, FaWallet } from "react-icons/fa";
import { FaSpotify, FaYoutube } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { SiAmazonmusic } from "react-icons/si";
import srk from "../images/330px-Shah_Rukh_Khan_2001.jpg";

import { useRef } from "react";

import styles from "./Intro.module.css";
import ReviewCard from "./ReviewCard";
import AipCards from "./AipCards";
import Icons from "./Icons";
import DdexCard from "./DdexCard";
import ReviewContainer from "./ReviewContainer";

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
        <Icons />
        
        <AipCards />
    
        <DdexCard />
        <ReviewContainer />
    </div>
  );
}