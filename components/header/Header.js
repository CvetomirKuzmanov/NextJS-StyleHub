import useAuth from "@/hooks/useAuth";
import styles from "./Header.module.css";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    return (
        <header className={styles.header}>
            <div className={`${styles.container} ${styles.headerContainer}`}>
                <a href="/" className={styles.logo}>
                    Style<span>Hub</span>
                </a>

                <nav className={styles.nav}>
                    <a href="/" className={styles.navLink}>
                        Home
                    </a>
                    <a href="/catalog" className={styles.navLink}>
                        Products
                    </a>
                    <a href="/about" className={styles.navLink}>
                        About
                    </a>
                </nav>

                <div className={styles.navIcons}>
                    {isAuthenticated ? (
                        <div>
                            <button
                                onClick={() => router.push("/create")}
                                className={styles.navIcon}
                            >
                                <span className={styles.iconText}>Create</span>
                            </button>
                            <button
                                onClick={() => router.push("/checkout")}
                                className={styles.navIcon}
                            >
                                <span className={styles.iconText}>
                                    Favourites
                                </span>
                            </button>
                            <button
                                onClick={() => router.push("/logout")}
                                className={styles.navIcon}
                            >
                                <span className={styles.iconText}>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button
                                onClick={() => router.push("/login")}
                                className={styles.navIcon}
                            >
                                <span className={styles.iconText}>Login</span>
                            </button>
                            <button
                                onClick={() => router.push("/register")}
                                className={styles.navIcon}
                            >
                                <span className={styles.iconText}>
                                    Register
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
