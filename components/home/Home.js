// pages/index.js or components/home/Home.js
import styles from "./Home.module.css";
import { useLatestProducts } from "../../pages/api/productApi";
import Product from "../product/Product.js";


export default function Home() {
    const { latestProducts, loading, error } = useLatestProducts();
    console.log (latestProducts)
    return (
        <div>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Summer Collection 2025
                        </h1>
                        <p className={styles.heroDescription}>
                            Discover the latest trends in fashion and explore
                            our new collection of clothing that defines style
                            and comfort.
                        </p>
                        <a href="/catalog" className={styles.heroBtn}>
                            Shop Now
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.products}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Featured Products</h2>

                    {loading ? (
                        <div className={styles.noProductsMessage}>
                            <p>Loading products...</p>
                            <p>
                                Please wait while we retrieve the latest
                                products.
                            </p>
                        </div>
                    ) : error ? (
                        <div className={styles.error}>
                            Error loading products. Please try again.
                        </div>
                    ) : (
                        <div className={styles.productGrid}>
                            {latestProducts && latestProducts.length > 0 ? (
                                latestProducts.map((product) => (
                                    <Product key={product._id} {...product} />
                                ))
                            ) : (
                                <div className="no-products-message">
                                    <p>No products available at the moment.</p>
                                    <p>
                                        Please check back later for our latest
                                        arrivals.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
