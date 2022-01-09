import type { NextPage} from 'next'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.scss';

interface Props { 
    className: string;
}

const Hero = (props: Props) => {

    const scrollDown = () => {
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
    }
    
    return (
        <div className={`${props.className} ${styles.hero}`}>
            <img className={`${styles.logo} ${styles.light}`} src="/logo/logo_blue.svg" />
            <img className={`${styles.logo} ${styles.dark}`} src="/logo/logo_white.svg" />
            <div className={`${styles.action}`} onClick={scrollDown}>
                <div className={styles.more}>Erfahre mehr</div>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrow} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
        </div>
    )
}

export default Hero
