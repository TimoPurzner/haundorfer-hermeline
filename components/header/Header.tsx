import type { NextPage} from 'next'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.scss';

const Header = () => {
    const router = useRouter()
    console.log(router.pathname);
    console.log(router.pathname == '/' ? styles.active:'');
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <Link href="/">
                    <span className={`${styles.item} ${router.pathname == '/' ? styles.active:''}`}>
                        Home
                    </span>
                </Link>
                <Link href="/current">
                    <span className={`${styles.item} ${router.pathname == '/current' ? styles.active:''}`}>
                        Aktuelles
                    </span>
                </Link>
                <Link href="/successes">
                    <span className={`${styles.item} ${router.pathname == '/successes' ? styles.active:''}`}>
                        Erfolge
                    </span>
                </Link>
                <a target="_blank" rel="noreferrer" href="https://sprd.co/b0bDIib">
                    <span className={`${styles.item} ${router.pathname == '/shop' ? styles.active:''}`}>
                        Shop
                    </span>
                </a>
            </div>
        </header>
    )
}

export default Header
