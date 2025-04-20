// pages/about.js
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <section className={styles['about-hero']}>
        <div className={styles.container}>
          <div className={styles['about-hero-content']}>
            <h1 className={styles['about-title']}>Our Story</h1>
            <p className={styles['about-subtitle']}>Discover who we are and what we stand for</p>
          </div>
        </div>
      </section>
      
      <section className={styles['about-content']}>
        <div className={styles.container}>
          <div className={styles['about-grid']}>
            <div className={styles['about-image']}>
              <div className={styles['placeholder-image']}>Our Store Image</div>
            </div>
            <div className={styles['about-text']}>
              <h2 className={styles['section-title']}>Who We Are</h2>
              <p>Founded in 2020, StyleHub is a modern fashion retailer dedicated to bringing you the latest trends and timeless classics. We believe that style is a form of self-expression, and our mission is to help you express yourself through fashion.</p>
              <p>What started as a small boutique in downtown has now grown into a global brand, but our commitment to quality and customer satisfaction remains unchanged.</p>
              <p>At StyleHub, we carefully curate each collection to ensure that we offer something for everyone, regardless of age, size, or personal style preferences.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles['about-cta']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h2 className={styles['cta-title']}>Join the StyleHub Community</h2>
            <p className={styles['cta-description']}>Discover our exclusive collections and be the first to know about our latest arrivals and special offers.</p>
            <a href="/catalog" className={styles['cta-btn']}>Shop Now</a>
          </div>
        </div>
      </section>
      
      <section className={styles['mission-values']}>
        <div className={styles.container}>
          <h2 className={`${styles['section-title']} ${styles['text-center']}`}>Our Mission & Values</h2>
          <div className={styles['values-grid']}>
            <div className={styles['value-card']}>
              <div className={styles['value-icon']}>🌿</div>
              <h3>Sustainability</h3>
              <p>We're committed to reducing our environmental footprint through responsible sourcing and ethical manufacturing practices.</p>
            </div>
            <div className={styles['value-card']}>
              <div className={styles['value-icon']}>👥</div>
              <h3>Inclusivity</h3>
              <p>Fashion is for everyone. We design and select products that cater to diverse body types, styles, and preferences.</p>
            </div>
            <div className={styles['value-card']}>
              <div className={styles['value-icon']}>💎</div>
              <h3>Quality</h3>
              <p>We never compromise on quality. Each item is carefully inspected to ensure it meets our high standards.</p>
            </div>
            <div className={styles['value-card']}>
              <div className={styles['value-icon']}>🔄</div>
              <h3>Innovation</h3>
              <p>We constantly evolve and adapt to bring you the latest trends and innovations in the fashion industry.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}