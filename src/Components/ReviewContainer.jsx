import styles from './Intro.module.css'
import ReviewCard from "./ReviewCard";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useRef } from 'react';
import srk from "../images/330px-Shah_Rukh_Khan_2001.jpg";

export default function ReviewContainer(){

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
    )
}