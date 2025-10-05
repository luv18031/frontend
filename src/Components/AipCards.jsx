import styles from './Intro.module.css';
import Card from "./Card";
import { FaMusic, FaWallet, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { CiLocationArrow1, CiShare2 } from "react-icons/ci";
import { MdAnalytics } from "react-icons/md";
import { useRef } from 'react';


export default function AipCards() {

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
    )
}