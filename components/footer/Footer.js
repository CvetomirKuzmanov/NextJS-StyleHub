import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContainer}>
          <div className={styles.footerCol}>
            <h3>StyleHub</h3>
            <p>Your one-stop destination for all your fashion needs. Discover the latest trends and styles.</p>
            <div className={styles.socialLinks}>
              <div className={styles.socialLink}>f</div>
              <div className={styles.socialLink}>t</div>
              <div className={styles.socialLink}>in</div>
              <div className={styles.socialLink}>ig</div>
            </div>
          </div>
          
          {/* Maps Section */}
          <div className={styles.footerCol}>
            <h3>Visit Our Store</h3>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203591894!2d-118.34088832392762!3d34.0633337266006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8d3b1e0287d%3A0x9cc32be17df028b8!2sThe%20Grove!5e0!3m2!1sen!2sus!4v1711966563456!5m2!1sen!2sus"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className={styles.footerCol}>
            <h3>Company</h3>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLink}><a href="#">About Us</a></li>
              <li className={styles.footerLink}><a href="#">Contact Us</a></li>
              <li className={styles.footerLink}><a href="#">Careers</a></li>
              <li className={styles.footerLink}><a href="#">Our Stores</a></li>
              <li className={styles.footerLink}><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h3>Help</h3>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLink}><a href="#">FAQs</a></li>
              <li className={styles.footerLink}><a href="#">Shipping & Returns</a></li>
              <li className={styles.footerLink}><a href="#">Order Tracking</a></li>
              <li className={styles.footerLink}><a href="#">Size Guide</a></li>
              <li className={styles.footerLink}><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2025 StyleHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}