import styles from './404.module.css'

export default function PageNotFound () {
    return (
        <section className={styles.errorSection}>
        <div className={styles.container}>
            <div className={styles.errorContainer}>
                <div className={styles.errorCode}>404</div>
                <h1 className={styles.errorTitle}>Page Not Found</h1>
                <p className={styles.errorMessage}>Oops! The page you're looking for doesn't exist or has been moved.</p>
                <div className={styles.errorActions}>
                    <a href="/" className={styles.homeBtn}>Back to Home</a>
                </div>
            </div>
        </div>
    </section>
    );
}